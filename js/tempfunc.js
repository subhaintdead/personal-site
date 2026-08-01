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

function addLine(text, className, delay) {
    const list = document.querySelector(".list");
    if (!list) return;

    const render = () => {
        const div = document.createElement("div");
        div.innerHTML = text;
        if (className) div.classList.add(className);
        list.appendChild(div);
    };

    if (delay) {
        setTimeout(render, delay);
    } else {
        render();
    }
};




