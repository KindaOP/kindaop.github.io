const DEBUG = true;
const MAX_BOOKMARK = 3;


function toggleSidebar() {
    const sidebar = document.getElementsByClassName("MainSidebar")[0];
    let status = sidebar.getAttribute("active");
    status = status==="true"? "false":"true";
    sidebar.setAttribute("active", status);
};


function openLink(link) {
    window.open(link, '_blank');
};


const bookmarkArray = [];

function checkBookmark() {
    const bookmark = document.getElementsByClassName("Bookmark")[0];
    const currentPage = document.getElementById("currentPage").innerHTML;
    const indexToRemove = bookmarkArray.indexOf(currentPage);
    if (indexToRemove > -1) {
        bookmarkArray.splice(indexToRemove, 1);
    } 
    else {
        bookmarkArray.push(currentPage)
        if (bookmarkArray.length>MAX_BOOKMARK) {
            bookmarkArray.shift();
        }
    }
    bookmark.setAttribute("bookmarked", bookmarkArray);
    bookmark.innerHTML = "";
    for (const page of bookmarkArray) {
        let pageButton = document.createElement('div');
        pageButton.setAttribute("class", "PageButton")
        pageButton.setAttribute("id", page);
        bookmark.appendChild(pageButton);
    }
};