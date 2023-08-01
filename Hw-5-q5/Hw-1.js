// const ask=()=>{
//     const  question="Do you agree?";
//     const  yes=()=> alert("You agreed.")
//     const  no=()=>alert("You canceled the execution.");
//     confirm(question) === true ? yes() : no();
// }
// ask();

const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
