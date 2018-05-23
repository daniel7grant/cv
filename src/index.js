import 'normalize.css'
import './themes/theme.scss'
import DoSlide from 'do-slide'
import MainTemplate from './templates/index.hbs'
import content from './content.js'


document.addEventListener('DOMContentLoaded', function () {
	
	//document.body.innerHTML += MainTemplate(content.en);
	
	const langRadius = 300, langOffset = Math.PI / 2;
	let langBlobs = Array.from(document.getElementsByClassName('lang-blob'));
	let langTitleRect = document.getElementById('slide-lang-title').getBoundingClientRect();
	positionLangs(langBlobs, langRadius, langOffset);

	Array.from(document.getElementsByClassName('close')).forEach(element => element.addEventListener('click', deactivateElement));
	document.body.addEventListener('click', deactivateElement);

	var slide = new DoSlide("#slide-container");

});

function positionLangs(blobs, radius = 300, offset = 0) {
	blobs.forEach((element, index) => {

		element.style.transform = `translate(${radius * Math.cos(index * 2 * Math.PI / blobs.length + offset)}px,
								${ -radius * Math.sin(index * 2 * Math.PI / blobs.length + offset)}px)`;

		element.addEventListener('click', function (ev) {
			activateElement(this)
			ev.stopPropagation();
		});
	});
}

function activateElement(element) {
	document.getElementById('slide-lang').classList.add('is-active');
	element.classList.add('is-active');
}

function deactivateElement(ev) {
	document.getElementById('slide-lang').classList.remove('is-active');
	Array.from(document.getElementsByClassName('lang-blob')).forEach(element => element.classList.remove('is-active'));
	ev.stopPropagation();
}
