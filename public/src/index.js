import 'normalize.css';
import './style/theme.scss';
import 'do-slide/dist/do-slide.min.css';
import DoSlide from 'do-slide';
import Clipboard from 'clipboard';

document.addEventListener('DOMContentLoaded', function () {
    var slider = new DoSlide('#slide-container', { activeClass: 'current-slide' });
    if (window.matchMedia('screen and (max-width: 1200px)').matches) {
        var projectSlider = new DoSlide('#slide-projects-list', {
            horizontal: true,
            listenUserMouseWheel: false,
        });
    }
    new Clipboard('a.copy');

    const langRadius = calculateRadius(),
        langOffset = Math.PI / 2; //TODO: Responsive design
    let langBlobs = Array.from(document.getElementsByClassName('lang-blob'));
    positionLangs(langBlobs, langRadius, langOffset);

    langBlobs.forEach((element) =>
        element.addEventListener('click', (ev) => {
            activateElements(ev, [element, document.getElementById('slide-lang')]);
            ev.stopPropagation();
        }),
    );

    Array.from(document.getElementsByClassName('project-card')).forEach((element) =>
        element.addEventListener('click', (ev) => toggleElement(ev, element)),
    );

    Array.from(document.getElementsByClassName('close'))
        .concat([document.body])
        .forEach((element) => element.addEventListener('click', deactivateElements));

    Array.from(document.querySelectorAll('input.contact-input')).forEach((element) =>
        element.addEventListener('click', (ev) => {
            ev.target.focus();
            ev.target.select();
        }),
    );

    Array.from(document.querySelectorAll('a.copy')).forEach((element) =>
        element.addEventListener('click', (ev) => ev.stopPropagation),
    );

    Array.from(document.querySelectorAll('img.arrow')).forEach((element) =>
        element.addEventListener('click', () => {
            if (element.classList.contains('down')) slider.next();
            else if (element.classList.contains('up')) slider.prev();
            else if (element.classList.contains('right')) projectSlider.next();
            else if (element.classList.contains('left')) projectSlider.prev();
        }),
    );
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
        element.style.transform = `translate(${
            radius * Math.cos((index * 2 * Math.PI) / blobs.length + offset)
        }px,
								${-radius * Math.sin((index * 2 * Math.PI) / blobs.length + offset)}px)`;
    });
}

export function activateElements(ev, elements) {
    if (elements instanceof HTMLElement) elements = [elements];
    elements.forEach((element) => element.classList.add('is-active'));
}

export function toggleElement(ev, element) {
    if (!element.classList.contains('is-active')) {
        deactivateElements(ev);
        element.classList.add('is-active');
    } else {
        deactivateElements(ev);
        element.classList.remove('is-active');
    }
}

export function deactivateElements(
    ev,
    elements = Array.from(document.querySelectorAll('#slide-lang,.lang-blob,.project-card')),
) {
    if (elements instanceof HTMLElement) elements = [elements];
    elements.forEach((element) => element.classList.remove('is-active'));
    ev.stopPropagation();
}
