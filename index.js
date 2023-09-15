const DEBUG = true;


function toggleSidebar() {
    const sidebar = document.getElementById("MainBar").getElementsByClassName("Sidebar")[0];
    let status = sidebar.getAttribute("active");
    status = status==="true"? "false":"true";
    sidebar.setAttribute("active", status);
};


function openLink(link) {
    window.open(link, '_blank');
};