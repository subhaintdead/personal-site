let b4 = document.getElementById("before")
const cmd = document.getElementById("typer")
const ta = document.getElementById("texter")
const tm = document.getElementById("terminal")

let idx = 0;
const cmds = [];
 const cmdMap = {
help: "help",
about: "about",
email: "email",
clear: "clear",
exit: "exit", 
sudo: "sudo",
"capitalist-snake": "capitalist-snake",
};

 const scroll = () => {
    if (cs) cs.scrollTop = cs.scrollHeight;

 };
  setTimeout(() => {
    loopLines(banner, "", 50);
ta.focus();
scroll();

  }, 100);

  window.addEventListener("keyup", (e) => {

    enterKey(e);
    scroll(); // scroll until you reach the hell
  });

  window.addEventListener("keydown", focus);
document.addEventListener("click", focus);
tm.addEventListener("click", focus);
ta.addEventListener("input", scroll);
ta.value = "";

cmd.innerHTML = ta.value;
ta.addEventListener("input", () => {
cmd.innerHTML = ta.value;
});

function enterKey(e) {
  if (e.key === "Enter") {
    const inp = cmd.innerHTML.trim().toLowerCase();
    addLine("[subh@terminal]~$" + cmd.innerHTML, "no-animation", 0);
    cmds.push(cmd.innerHTML)
    idx  = cmds.length
    commander(inp);
    cmd.innerHTML ="";
    ta.value = "";
    scroll();
  }
}
  

if (e.key === "ArrowUp" & idx !== 0){
idx -= 1
ta.value = cmds[idx];
cmd.innerHTML = ta.value;
scroll();
} 

if (e.key === "ArrowDown" & idx !== cmds.length){
  idx += 1 
  ta.value = cmds[idx] || "";
  cmd.innerHTML = ta.value;
  scroll();

}

function commander(c) {
switch (c) {
case "help":
  loopLines(help, 80);
  break;
  case "email":
    addLine('<a href="mailto:subhgotbeans@gmail.com">subhgotbeans@gmail.com</a>');
    break;
    case "clear":
    setTimeout(function() {
      const alltexts = tm.querySelectorAll("p");
      alltexts.forEach(p => p.remove());
      if (!document.getElementById("b4")) {
        const b4element = document.createElement("a");
        b4element.id = "b4";
        tm.insertBefore(b4element, tm.firstChild);
        b4 = b4element;
      }

      if (banner) loopLines(banner, "", "80");
      ta.focus();
      scroll();

    }, 1);
    break;

    case "sudo":
      addLine("so youre not an admin huh?", 0);
      newTab(sudo);
      break;
      case "capitalist-snake":
        runSnakeGame();
        break;
        case "quit":
          case "exit":
            case "logout":
              addLine("Session terminated.", "color2", 0);
              setTimeout(() => {
                window.close();
              }, 500);
              break;
              default:
                addLine("command not found. type 'help' for a list of supported commands",
                "error", 100,
            );

  } scroll();

};

 function newtab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
 }

 function runSnakeGame() {
  const width = 20,
  height = 10;
  let snake = [{ x: 5, y: 5}];
  let dir = "right";
  let score = 0;
  let interval;
  let gameElement;

  function draw() {
    let screen = `score: ${score}\n`;
    for (let y=0; y<height; y++) {
      let row = "";
      for (let x=0; x<width; x++) {
        if (x === food.x && y === food.y) row += "$";
        elif (snake.some((s) => s.x === x && s.y === y)) row += "0";
      else row += ".";      }
    screen += row  + "\n"; 
  }
  
if (!gameElement) {
  

  }