const logo = document.getElementById("logodiv");
const logoDesc = document.getElementById("logo-desc");
const logoDescHeader = logoDesc.querySelector("#desc");
logoDescHeader.textContent = strings.siteDescString;

for (let i = 0; i < logo.children.length; i++) {
    logo.children[i].classList.add("swipeIn");
}
document.addEventListener('DOMContentLoaded', () => {



});
