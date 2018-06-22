import { positionLangs, activateElements, toggleElement, deactivateElements, calculateRadius } from '../src/index.js';
import DoSlide from 'do-slide';
import Clipboard from 'clipboard';
import ga from '../src/analytics.js'
jest.mock('do-slide');
jest.mock('clipboard');
jest.mock('../src/analytics.js');

describe('positioning elements circularly', () => {
	test('all elements gain a css transform', () => {
		let radius = 200;
		let mockElements = [document.createElement('div'), document.createElement('div'),
		document.createElement('div'), document.createElement('div')];

		positionLangs(mockElements, radius, 0);

		mockElements.forEach(element => {
			expect(element.style.transform).toBeTruthy()
		});
	});

	test('all elements are the same radius from (0,0)', () => {
		let radius = 200;
		let mockElements = [document.createElement('div'), document.createElement('div'),
		document.createElement('div'), document.createElement('div')];

		positionLangs(mockElements, radius, 0);

		let elementCoords = mockElements.map(element =>
			element.style.transform.split(',')
				.map((coord) => parseFloat(coord.replace(/[a-zA-Z()]/g, '')))
		);

		elementCoords.forEach(coords => {
			expect(Math.sqrt(coords[0] * coords[0] + coords[1] * coords[1])).toBeCloseTo(radius, 1);
		});
	});

	test('all elements are the same distance from each other', () => {
		let mockElements = [document.createElement('div'), document.createElement('div'),
		document.createElement('div'), document.createElement('div')];

		positionLangs(mockElements);

		let elementCoords = mockElements.map(element =>
			element.style.transform.split(',')
				.map((coord) => parseFloat(coord.replace(/[a-zA-Z()]/g, '')))
		);

		let distFn = (x, y) => Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2));

		let distance = distFn(elementCoords[0], elementCoords[elementCoords.length - 1]);

		for (let i = 1; i < elementCoords.length; i++) {
			expect(distFn(elementCoords[i - 1], elementCoords[i])).toBeCloseTo(distance, -2);
		}
	});

	test('first element is at a predefined angle', () => {
		let radius = 200;
		let offset = 3 * Math.PI / 8;
		let mockElements = [document.createElement('div'), document.createElement('div'),
		document.createElement('div'), document.createElement('div')];

		positionLangs(mockElements, radius, offset);

		let firstCoords = mockElements[0].style.transform.split(',')
			.map((coord) => parseFloat(coord.replace(/[a-zA-Z()]/g, '')))
		expect(-Math.atan2(firstCoords[1], firstCoords[0])).toBeCloseTo(offset, 2);
	});
});

describe('elements activation', () => {
	test('adds class "is-active" to one element', () => {
		let mockElements = document.createElement('div');

		activateElements({}, mockElements);

		expect(mockElements.classList.contains('is-active')).toBeTruthy();
	});

	test('adds class "is-active" to multiple elements', () => {
		let mockElements = [document.createElement('div'), document.createElement('div')];

		activateElements({}, mockElements);

		mockElements.forEach(element => {
			expect(element.classList.contains('is-active')).toBeTruthy();
		})
	});
});

describe('one element\'s "is-active" class toggling', () => {
	test('adds class "is-active" to one element', () => {
		let mockEvent = { stopPropagation: () => { } };
		let mockElement = document.createElement('div');

		toggleElement(mockEvent, mockElement);

		expect(mockElement.classList.contains('is-active')).toBeTruthy();
	});

	test('removes class "is-active" from one element if it has it', () => {
		let mockEvent = { stopPropagation: () => { } };
		let mockElement = document.createElement('div');
		mockElement.classList.add('is-active');

		toggleElement(mockEvent, mockElement);

		expect(mockElement.classList.contains('is-active')).toBeFalsy();
	});

	test('stops event propagation', done => {
		let mockEvent = { stopPropagation: () => done() };
		let mockElement = document.createElement('div');

		toggleElement(mockEvent, mockElement);
	});

	test('stops event propagation even if "is-active" applied', done => {
		let mockEvent = { stopPropagation: () => done() };
		let mockElement = document.createElement('div');
		mockElement.classList.add('is-active');

		toggleElement(mockEvent, mockElement);
	})

});

describe('element deactivation', () => {
	test('adds class "is-active" to one element', () => {
		let mockEvent = { stopPropagation: () => { } };
		let mockElement = document.createElement('div');
		mockElement.classList.add('is-active');

		deactivateElements(mockEvent, mockElement);

		expect(mockElement.classList.contains('is-active')).toBeFalsy();
	});

	test('adds class "is-active" to multiple elements', () => {
		let mockEvent = { stopPropagation: () => { } };
		let mockElements = [document.createElement('div'), document.createElement('div')];
		mockElements.forEach(element => element.classList.add('is-active'));

		deactivateElements(mockEvent, mockElements);

		mockElements.forEach(element => {
			expect(element.classList.contains('is-active')).toBeFalsy();
		})
	});

	test('stops event propagation', done => {
		let mockEvent = { stopPropagation: () => done() };
		let mockElement = document.createElement('div');

		toggleElement(mockEvent, mockElement);
	});
});

describe('radius calculation', () => {

	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn((q) => { return { matches: true } })
		});

		Object.defineProperty(window, 'innerWidth', { value: 600 });
		Object.defineProperty(window, 'innerHeight', { value: 500 });
	});

	test('maxes with 300 if window larger than 800x800', () => {
		//global.window.matchMedia = jest.fn(() => { matches: true });

		expect(calculateRadius()).toBe(300);
	});

	test('returns the 80% of the half of the smaller dimension', () => {
		window.matchMedia.mockReturnValueOnce({ matches: false });

		expect(calculateRadius()).toBeCloseTo(200);
	});
});

describe('DOMContentLoaded event', () => {
	const addEventListener = jest.fn(function (event) { return {className: this.className, event: event} });

	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn((q) => { return { matches: true } })
		});

		Object.defineProperty(document, 'getElementsByClassName', {
			value: (name) => {
				return [{
					className: name,
					style: {},
					addEventListener: addEventListener
				}];
			}
		});

		Object.defineProperty(document, 'querySelectorAll', {
			value: (name) => {
				return [{
					className: name,
					style: {},
					addEventListener: addEventListener
				}];
			}
		});
	});

	beforeEach(() => {
		DoSlide.mockClear();
		Clipboard.mockClear();
	});

	test('creates DoSlide object for slides', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));

		expect(DoSlide).toHaveBeenCalledWith('#slide-container', { activeClass: 'current-slide' });
	});

	test('creates DoSlide object for projects if media is large', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));

		expect(DoSlide).toHaveBeenCalledWith('#slide-projects-list', {
			horizontal: true,
			listenUserMouseWheel: false
		});
	});

	test('does not create DoSlide object for projects if media is small', () => {
		window.matchMedia.mockReturnValueOnce({ matches: false });

		window.document.dispatchEvent(new Event('DOMContentLoaded'));

		expect(DoSlide).not.toHaveBeenCalledWith('#slide-projects-list', {
			horizontal: true,
			listenUserMouseWheel: false
		});
	});

	test('creates Clipboard object', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));
		expect(Clipboard).toHaveBeenCalledWith('a.copy');
	});

	test('adds click event to class project-cards', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));
		expect(addEventListener).toHaveReturnedWith({ className: 'project-card', event: 'click' });
	});

	test('adds click event to class close', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));
		expect(addEventListener).toHaveReturnedWith({ className: 'close', event: 'click' });
	});

	test('adds click event to query input.contact-input', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));
		expect(addEventListener).toHaveReturnedWith({ className: 'input.contact-input', event: 'click' });
	});

	test('adds click event to query a.copy', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));
		expect(addEventListener).toHaveReturnedWith({ className: 'a.copy', event: 'click' });
	});

	test('adds click event to query img.arrow', () => {
		window.document.dispatchEvent(new Event('DOMContentLoaded'));
		expect(addEventListener).toHaveReturnedWith({ className: 'img.arrow', event: 'click' });
	});
});