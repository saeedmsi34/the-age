var input=document.getElementById("input")
var ageElement=document.getElementById("age")
var typeElement=document.getElementById("type")
var asterisksElement=document.getElementById("asterisks")

// ////
var date=new Date()
function calcAge(){
    asterisksElement.innerHTML=``
 var age= date.getFullYear() - input.value
  ageElement.innerHTML=`Your age is : <span>${age}</span>`
    if(age>18){
        typeElement.innerHTML=`Your Are  <span>Young</span>`
        
    }else {
        typeElement.innerHTML=`Your Are  <span>Kid</span>`
    }
    for(i=0;i<=age;i++){
        asterisksElement.innerHTML+=`*`
    }
   

}



















