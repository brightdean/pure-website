document.getElementById("logo-header").textContent = strings.siteLogo;
const tabs = document.getElementsByClassName("tab");
console.log(tabs);
const homeTabText = tabs[0].querySelector("#home-tab");
const aboutTabText = tabs[1].querySelector("#about-tab");
const contactTabText = tabs[2].querySelector("#contact-tab");

homeTabText.textContent = strings.homeString;
aboutTabText.textContent = strings.aboutString;
contactTabText.textContent = strings.contactString;


//tabs[0].classList.add("active");

let activeTab = 0;
tabs[activeTab].classList.add("active");
const handleTabClick = (i) => {
    activeTab = i;
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        if (activeTab === i) return;
        tabs[activeTab].classList.remove("active");
        activeTab = i;
        tabs[activeTab].classList.add("active");
    })
}