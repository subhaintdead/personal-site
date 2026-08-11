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
                              else if (snake.some((s) => s.x === x && s.y === y)) row += "0";
                                 else row += ".";      }
                               screen += row  + "\n"; 
                                }
                                  
                                  if (!gameElement) {
                                      

                                  } function runSnakeGame() {
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
        else if (snake.some((s) => s.x === x && s.y === y)) row += "0";
      else row += ".";      }
    screen += row  + "\n"; 
     }

     if (!gameElement) {
      gameElement = document.createElement("p");
      gameElement.className = "c2"
      gameElement.innerHTML = `<pre>${screen}</pre>`;
      b4.parentNode.insertBefore(gameElement, b4);

     } else {
      gameElement.innerHTML = `<pre>${screen}</pre>`;
     }
     cs.scrollTop = cs.scrollHeight;
    }
     function move () {
      const head = { ...snake[0] };
      switch (dir) {
        case "up":
          head.y--;
        break;
      case "down":
    head.y++;
    break;
    case "left":
      head.x--;
      break;
      case "right":
        head.x++;    //
        break;
        }

         if (
          head.x < 0 ||
          head.x >= width ||
          head.y < 0 ||
          head.y >= height ||
          snake.some((s) => s.x === head.x && s.y === head.y)
         ) {
          clearInterval(interval);
          gameElement.innerHTML += "\ngame over!!"
          window.removeEventListener("keydown", keyhandler);
          return;
        
         } 

         snake.unshift(head);
          if (head.x === food.x && head.y === food.y)
          {score++;
            food = { x: Math.floor(Math.random() * width), 
              y: Math.floor(math.random() * height),
            } 
  } else { snake.pop()}

  draw();
     }

     function keyhandler(e) {
      switch (e.key) {
        case "ArrowUp":
          if (dir !== "down") dir = "up";
          break;
          case "ArrowDown":
            if (dir !== "up") dir = "down"
            break;
            case "ArrowLeft":
              if (dir !== "right") dir = "left";
              break;
              case "ArrowRight":
                if (dir !== "left") dir = "right";
                break;

                case "escape":
                  clearInterval(interval);
                  window.removeEventListener("keydown", keyhandler);
                  gameElement.innerHTML += "\ngame exited."
                  break;
        }
     }

     window.addEventListener("keydown", keyhandler);
     addLine("game started. use arrow keys to move.",
      "color2", 0, 
     );

     draw();
      interval = setInterval(move, 250);

   }
                    }}
                    

