const btn1 = () => {
  document.getElementById('contact').style.backgroundColor = "red";
  
}
let turns = 0;

function btn() {
    if (turns === 0) {
        turns++;
        document.getElementById("contact").style.backgroundColor = 'red';
     } else if (turns === 1) {
        turns--;
        document.getElementById("contact").style.backgroundColor = 'black';
    }
}

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("abbas").onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
         
         return letters[Math.floor(Math.random() * 26)]
      })
      .join("")
    if(iterations >= 9) clearInterval(interval);
    
    iterations += 1;
  }, 50)
         
}