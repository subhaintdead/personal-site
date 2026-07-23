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

}
);


  
