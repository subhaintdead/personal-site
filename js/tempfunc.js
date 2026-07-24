function focus() {
ta.focus();

}

function loopLines(lines, target, delay)  {

printLines(lines);

}

function printLines(lines) {

const list = document.querySelector(".list");
lines.forEach(line => {
 const div = document.createElement("div");
 div.innerHTML = line;
 list.appendChild(div) ;   
});

}

function enterKey(e) {

    if (e.key !== "Enter") return;
    const input = ta.value.trim().toLowerCase();
    ta.value + "";
    cmd.innerHTML = "";

    if (input === "help")
    {
        printLines(help);
    }

    if (input === "about")
    {
        printLines(about);
    }
}

