

let val=document.getElementById("field").innerHTML;








document.querySelector("#Increment").addEventListener("click",function(){
   val++;
   document.querySelector("#field").textContent=val;
})

document.querySelector("#Decrement").addEventListener("click",function(){
    val--;
    document.querySelector("#field").textContent=val;
 })

 document.querySelector("#reset").addEventListener("click",function(){
     val=0;
     document.querySelector("#field").textContent=val;
 })
