import { positionLangs, activateElements, toggleElement, deactivateElements } from '../src/index.js'

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

describe('activating elements', () => {
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

describe('toggling one element\'s "is-active" class', () => {
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

describe('deactivating elements', () => {
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