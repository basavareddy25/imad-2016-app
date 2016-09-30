console.log('Loaded!');
var element=document.getElementById('main-text');
var counter=0;
element.onclick=function()
{
element.style.marginLeft="100px";
 var spam=document.getElementById('count');   
 counter=counter+1;
  
};
var c=document.getElementById("xyz");


c= function()
{
   var spam=document.getElementById('count');   
 counter=counter+1;
  spam.innerHTML=counter.toString();  
};
