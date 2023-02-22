const backgroundElement = document.querySelector('.dotted-parallax');
const logo = document.getElementById("logodiv");
const logoDesc = document.getElementById("logo-desc");
const logoDescHeader = logoDesc.querySelector("#desc");

const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");

const tabs = [homeTab, aboutTab];

logoDescHeader.textContent = strings.siteDescString;

homeTab.querySelector("a").textContent = strings.homeString;
aboutTab.querySelector("a").textContent = strings.aboutString;

document.title = strings.siteLogo;

let activeTab = 0;
tabs[activeTab].classList.add("active");

document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < logo.children.length; i++) {
        logo.children[i].classList.add("swipeIn");
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", () => {
            if (activeTab === i) return;
            tabs[activeTab].classList.remove("active");
            activeTab = i;
            tabs[activeTab].classList.add("active");

        });
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

