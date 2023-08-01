let form=document.querySelector('#form');
let sendBtn=document.querySelector('#sendBtn');
let showBtn=document.querySelector('#showBtn');
let display=document.querySelector('#display');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    userInfo(formData);
   sort()
    form.reset()
    
})
//  ---------------------------------------

// creat userInfo object
let userInfo=function(formData){
    const storageData=JSON.parse(localStorage.getItem('users'))
    const data=storageData ? storageData : [];
    data.push(formData);
    localStorage.setItem('users',JSON.stringify(data))
}
//  ---------------------------------------

// sorting the userInfo

let sort=function(){
    let userInfo=JSON.parse(localStorage.getItem('users'));
    let sortage=userInfo.map((element) => element).sort((a,b)=>a.age-b.age)
    creat(sortage)
    return sortage
}
//  ---------------------------------------

// creat sorting userInfo
const creat=function(sortage){
    display.textContent=''
    sortage.forEach(sortage => {
      
        let newItem=document.createElement('div');
        newItem.textContent=`${sortage.name} is ${sortage.age} years old`
        display.append(newItem)
})
 }
//  ---------------------------------------

// show creat element
let flag=false
showBtn.addEventListener('click',function(){
if(!flag){
    display.style.display='block'
    display.style. transition= 'all 2s';
 
    flag=true;
    return flag
}else{
    display.style.display='none'
    flag=false;
    return flag

}
}
)



