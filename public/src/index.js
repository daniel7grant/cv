import 'normalize.css';
import './style/theme.scss';
import DoSlide from 'do-slide';
//import MainTemplate from './templates/index.hbs';
//import content from './content.js';


document.addEventListener('DOMContentLoaded', function () {
	
	//document.body.innerHTML += MainTemplate(content.en);
	
	new DoSlide('#slide-container');
	
	const langRadius = 300, langOffset = Math.PI / 2;
	let langBlobs = Array.from(document.getElementsByClassName('lang-blob'));
	positionLangs(langBlobs, langRadius, langOffset);

	Array.from(document.getElementsByClassName('project-card')).forEach(element => element.addEventListener('click', ev => toggleElement(ev, element)));

	Array.from(document.getElementsByClassName('close')).forEach(element => element.addEventListener('click', deactivateAll));
	document.body.addEventListener('click', deactivateAll);
	document.body.addEventListener('mousewheel', deactivateAll);
	document.body.addEventListener('DOMMouseScroll', deactivateAll);

});

function positionLangs(blobs, radius = 300, offset = 0) {
	blobs.forEach((element, index) => {

		element.style.transform = `translate(${radius * Math.cos(index * 2 * Math.PI / blobs.length + offset)}px,
								${ -radius * Math.sin(index * 2 * Math.PI / blobs.length + offset)}px)`;

		element.addEventListener('click', function (ev) {
			activateElement(this);
			ev.stopPropagation();
		});
	});
}

function activateElement(element) {
	document.getElementById('slide-lang').classList.add('is-active');
	element.classList.add('is-active');
}

function toggleElement(ev, element){
	if(!element.classList.contains('is-active')){
		deactivateAll(ev);
		element.classList.add('is-active');
		ev.stopPropagation();
	}
	else{
		deactivateAll(ev);		
	}
}

function deactivateAll(ev) {
	document.getElementById('slide-lang').classList.remove('is-active');
	Array.from(document.getElementsByClassName('lang-blob')).forEach(element => element.classList.remove('is-active'));
	Array.from(document.getElementsByClassName('project-card')).forEach(element => element.classList.remove('is-active'));
	ev.stopPropagation();
}
