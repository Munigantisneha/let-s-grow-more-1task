let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string= "";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            input.value=string;

        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
          string=string.substring(0,string.length-1);
          input.value=string;
        }
        else{
            string += e.target.innerHTML;
            input.value=string;
        }
    })
})
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
  if(inputBox.value=== ''){
    alert("you must write something");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value; //whatever we added in text feild that add to the task
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value=""; //after adding task empty the input box
  saveData();
}
listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
      saveData();
  }
  else if(e.target.tagName==="SPAN")
  {
    e.target.parentElement.remove();
      saveData();
  }
},false);
function saveData(){
  localStorage.setItem("data",list.Container.innerHTML);
}
function showTask(){
  listContainer.innerHTML=  localStorage.getItem("data");
}
showTask();