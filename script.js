const holes=[...document.querySelectorAll(".hole")];
// console.log(holes);
const scoreE1 = document.querySelector("#score span")
let score=0;
let gameOver=false;

let timeLeft=60;
const timerE1=document.getElementById("timer");


const isSpike=Math.random()<0.7;
const img=document.createElement('img');
img.classList.add(isSpike?'spike':'totoro');


 
function  run (){
    const i=Math.floor(Math.random()*holes.length);
    // console.log(i)
    const hole=holes[i]
    let timer=null;
     

    const img=document.createElement('img');
    img.classList.add('totoro');
    img.src=isSpike? "Images/newvillain.png":"Images/newtotoro3.png";

    if (score<0){
        gameOver=true;
        function restartGame() {
            
            score = 0;
            gameOver = false;
            scoreE1.textContent = "0";
            run();
        }


    }
   

    img.addEventListener('click',()=>{
        if (isSpike){
            score+=10;
        }
        else{
            score-=5;
        }
        scoreE1.textContent=score;
        hole.removeChild(img);
        // alert(0)
    })
    hole.appendChild(img)
    timer=setTimeout(()=>{
        if (hole.contains(img)){
            hole.removeChild(img)

        }
        
        run()

    },1500)
}
run()







    