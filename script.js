let boxes=document.querySelectorAll(".box");

let resetbtn =document.querySelector("#reset");

let turn0 = true;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of win){

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos2 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log(boxes[pattern[0]].innerText," is the winner");
            }
        }
    }
}