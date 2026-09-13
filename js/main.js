let b4 = document.getElementById("b4")
const cmd = document.getElementById("typer")
const ta = document.getElementById("texter")
const tm = document.getElementById("terminal")
let pendingTrue = null;

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
terminal: "terminal",
};

 const cs = document.getElementById("contentscroll");
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
    addLine("subh@terminal~$ " + cmd.innerHTML, "no-animation", 0);
    cmds.push(cmd.innerHTML)
    idx  = cmds.length
    commander(inp);
    cmd.innerHTML ="";
    ta.value = "";
    scroll();
  }

  

if (e.key === "ArrowUp" && idx !== 0){
idx -= 1
ta.value = cmds[idx];
cmd.innerHTML = ta.value;
scroll();
} 

if (e.key === "ArrowDown" && idx !== cmds.length){
  idx += 1 
  ta.value = cmds[idx] || "";
  cmd.innerHTML = ta.value;
  scroll();

} 
}

function commander(c) {


switch (c) {

case "help":
  loopLines(help, 80);
  break;
  case "about":
    loopLines(about, 80);
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
      newtab(sudo);
      break;

    case "terminal":
      addLine("you'll get redirected to a page, where you can get a free terminal for 15 minutes. in that page, click 'Linux(Terminal)' to spin up a vm. continue? [y/N]", 0);
      window.pendingTrue = true;
      break;

case "y":
  if (window.pendingTrue){
window.pendingTrue = false;
 newtab(terminalLaunch)
  }
  else {
    addLine("invalid prompt value. type 'help' for a list of supported commands", "error", 100);
  }
   break;

case "n":
  if (window.pendingTrue) {
    window.pendingTrue = false;
    addLine("cancelled by user.", "color2", 0)

  }else {
    addLine("invalid prompt value. type 'help' fpr a list of supported commands", "error", 100);

  }
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

