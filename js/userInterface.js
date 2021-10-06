onload = function() {
    contentDiv = document.getElementById("content");
    contentDiv.addEventListener('wheel', doScroll);
}

function doScroll(e) {
    if (e.wheelDelta == 120) {
        contentDiv.scrollTop = 0;
    } else {
        contentDiv.scrollTop = contentDiv.scrollHeight;
    }
}

let contentDiv;