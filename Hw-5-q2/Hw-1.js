let increase=document.querySelector('#increase')
let decrease=document.querySelector('#decrease')
let reset=document.querySelector('#reset')
let show=document.querySelector('#show')
let showDisplay=document.querySelector('.show')
let flag=false
const flagFunc=function(){
    flag ? showDisplay.textContent=walk.steps : showDisplay.textContent=' '
}


let walk={
    steps:0,
    // ----- increase -----

    increase:()=>{
       walk.steps++;
      flagFunc()
    },
    // -----decrease-----
    decrease:()=>{
    walk.steps > 0 ? walk.steps-- : walk.steps=0 ;
    flagFunc()
    },
    // -----reset-----
    reset:()=>{
        walk.steps=0;
        flagFunc()
    },
        // -----read-----

    read:()=>{
        if(!flag){
            showDisplay.textContent=walk.steps
            flag=true
        }else{
            console.log('bye');
            showDisplay.textContent=' '
            flag=false;
        }
    }
}

// walk.increase()
// walk.increase()
// walk.increase()
// walk.read()

// walk.decrease()
// walk.read()
// walk.reset()
// walk.read()


increase.addEventListener('click',walk.increase)
decrease.addEventListener('click',walk.decrease)
reset.addEventListener('click',walk.reset)
show.addEventListener('click',walk.read)



