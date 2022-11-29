const sidebar = document.getElementById("sidebar");
const openButton = document.getElementById("svg-menu");
const closeButton = document.getElementById("svg-menu-close");
const darkness = document.getElementById("dark")

const openSidebar = () => {
    sidebar.style.width = "60vw";
    sidebar.style.transition = "500ms"
    openButton.style.visibility ="hidden";
    darkness.style.display= "flex";
    darkness.style.opacity = "1";
    darkness.style.animation ="fadeIn 1s"
};


const closeSidebar = () => {
    sidebar.style.width = "0";
    openButton.style.visibility ="visible";
    darkness.style.display= "none";
};

