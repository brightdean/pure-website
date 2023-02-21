const backgroundElement = document.querySelector('.dotted-parallax');
const logo = document.getElementById("logodiv");
const logoDesc = document.getElementById("logo-desc");
const logoDescHeader = logoDesc.querySelector("#desc");
logoDescHeader.textContent = strings.siteDescString;


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < logo.children.length; i++) {
        logo.children[i].classList.add("swipeIn");
    }

});

document.addEventListener('mousemove', e => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const percentageX = deltaX / centerX;
    const percentageY = deltaY / centerY;
    const offsetX = percentageX * 50;
    const offsetY = percentageY * 50;
    const clampedOffsetX = Math.min(Math.max(offsetX, -50), 50);
    const clampedOffsetY = Math.min(Math.max(offsetY, -50), 50);
    backgroundElement.style.backgroundPosition = `calc(${clampedOffsetX / 2}px) calc(${clampedOffsetY / 2}px)`;
});

