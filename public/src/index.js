import 'normalize.css';
import './style/theme.scss';
import DoSlide from 'do-slide';
import 'do-slide/dist/do-slide.min.css';
import ga from './analytics.js';

document.addEventListener('DOMContentLoaded', function () {
	ga('create', 'UA-119869193-1', 'auto');
	ga('send', 'pageview');

	var doSlide = new DoSlide('#slide-container');

	const langRadius = calculateRadius(), langOffset = Math.PI / 2;		//TODO: Responsive design
	let langBlobs = Array.from(document.getElementsByClassName('lang-blob'));
	positionLangs(langBlobs, langRadius, langOffset);

	langBlobs.forEach(element => element.addEventListener('click', ev => {
		activateElements(ev, [element, document.getElementById('slide-lang')]);
		ev.stopPropagation();
	}));

	Array.from(document.getElementsByClassName('project-card'))
		.forEach(element => element.addEventListener('click', ev => toggleElement(ev, element)));

	Array.from(document.getElementsByClassName('close')).concat([document.body])
		.forEach(element => element.addEventListener('click', deactivateElements));

});

export function calculateRadius() {
	if (window.matchMedia('(min-width: 800px) and (min-height: 800px)').matches) {
		return 300;
	} else {
		return Math.min(window.innerWidth, window.innerHeight) * 0.5 * 0.8;
	}
}

export function positionLangs(blobs, radius = 300, offset = 0) {
	blobs.forEach((element, index) => {
		element.style.transform = `translate(${radius * Math.cos(index * 2 * Math.PI / blobs.length + offset)}px,
								${ -radius * Math.sin(index * 2 * Math.PI / blobs.length + offset)}px)`;
	});
}

export function activateElements(ev, elements) {
	if (elements instanceof HTMLElement) elements = [elements];
	elements.forEach(element => element.classList.add('is-active'));
}

export function toggleElement(ev, element) {
	if (!element.classList.contains('is-active')) {
		deactivateElements(ev);
		element.classList.add('is-active');
	}
	else {
		deactivateElements(ev);
		element.classList.remove('is-active');
	}
}

export function deactivateElements(ev, elements = Array.from(document.querySelectorAll('#slide-lang,.lang-blob,.project-card'))) {
	if (elements instanceof HTMLElement) elements = [elements];
	elements.forEach(element => element.classList.remove('is-active'));
	ev.stopPropagation();
}
