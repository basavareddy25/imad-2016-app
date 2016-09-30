console.log('Loaded!');
var element=document.getElementById('main-text');

element.onclick=function()
{
element.style.marginLeft="100px";
 var spam=document.getElementById('count');   
 counter=counter+1;
  spam.innerHTML=counter.toString();
};
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
 var spam=document.getElementById('count');   
 counter=counter+1;
 spam.innerHTML=counter.toString();
};