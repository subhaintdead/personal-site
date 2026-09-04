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

function addLine (text, style, delay) {
    const before = document.getElementById("b4");
    if (!before) return;

    const render = () => {
        const p = document.createElement("p");
        p.innerHTML = text;
        if (style) p.classList.add(style);
        before.parentNode.insertBefore(p, before);
    };
    if (delay) {
        setTimeout(render, delay);
    } else {
        render();  // hopefully now this thing works, im so dead
    }

}




