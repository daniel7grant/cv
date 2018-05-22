import 'normalize.css'
import './themes/theme.scss'
import DoSlide from 'do-slide'

document.addEventListener('DOMContentLoaded', function () {

	var slide = new DoSlide("#slide-container");

	const langRadius = 300, langOffset = Math.PI / 2;
	let langBlobs = Array.from(document.getElementsByClassName('lang-blob'));
	let langTitleRect = document.getElementById('slide-lang-title').getBoundingClientRect();
	positionLangs(langBlobs, langRadius, langOffset);

});

function positionLangs(blobs, radius = 300, offset = 0) {
	blobs.forEach((element, index) => {

		element.style.transform = `translate(${radius * Math.cos(index * 2 * Math.PI / blobs.length + offset)}px,
								${ -radius * Math.sin(index * 2 * Math.PI / blobs.length + offset)}px)`;

		element.addEventListener('click', function () {
			document.getElementById('slide-lang').classList.toggle('is-active');
			this.classList.toggle('is-active');
		});
	});
}