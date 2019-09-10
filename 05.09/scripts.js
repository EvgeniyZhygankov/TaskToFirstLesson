function GoAnotherPage() {

    window.open("https://google.com");

}

function $(selector) {
    return document.querySelector(selector);
}

function ChangeStyle() {

    var body = $("body");

    if (body.className == "whiteBack")
        body.className = "redBack";
    else
        body.className = "whiteBack";
}

function RmoveAllAndShowFlexboxTask() {

    window.open("FlexboxTask/index.html");
 }

