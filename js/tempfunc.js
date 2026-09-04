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





