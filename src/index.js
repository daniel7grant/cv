import 'normalize.css'
import './themes/theme.scss'

document.addEventListener('DOMContentLoaded', function () {

	const langRadius = 300;
	let langTitle = document.getElementById('slide-lang-title');
	let langCenterX = langTitle.getBoundingClientRect().x + langTitle.getBoundingClientRect().width / 2;
	let langCenterY = langTitle.getBoundingClientRect().y + langTitle.getBoundingClientRect().height / 2;
	let langBlobs = Array.from(document.getElementsByClassName('lang-blob'));
	langBlobs.forEach((element, index) => {

		element.style.top = langCenterY - langRadius * Math.sin(index * 2 * Math.PI / langBlobs.length) -25;
		element.style.left = langCenterX - langRadius * Math.cos(index * 2 * Math.PI / langBlobs.length) -25;

		element.addEventListener('click', function () {
			langBlobs.forEach((element) => { element.classList.remove('is-active'); });
			this.classList.add('is-active');
		});
	});

});