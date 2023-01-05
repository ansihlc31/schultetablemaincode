var numbers = [];
for(x=0;x<25;x++){
  
  let nums=Math.floor(Math.random() * 25)+1;
  
  if(numbers.includes(nums)){
    x--;
    
  }else{
    var maintable=document.createElement('button')
    maintable.className = "maintable3";
        document.getElementById('mainpart').appendChild(maintable);
    maintable.innerHTML=nums;
    numbers.push(nums)
}

}
//For score value
var num=numbers.sort(function(a, b){return a-b});


const forscore= document.getElementById('forscore');
forscore.innerHTML="0"
var valu=01;
var mainTable =document.querySelectorAll(".maintable3").forEach(element =>{
  element.addEventListener('focus', ()=>{
if(valu == element.innerText){

  forscore.innerHTML=valu;

  valu++;
  //element.innerText=numbers.length+(valu-1);
}
})
})



