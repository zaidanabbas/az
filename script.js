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