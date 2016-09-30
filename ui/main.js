console.log('Loaded!');
var element=document.getElementById('main-text');
var counter=0;
element.onclick=function()
{
element.style.marginLeft="100px";
 var spam=document.getElementById('count');   
 counter=counter+1;
  spam.innerHTML=counter.toString();
};
var element=document.getElementById('counte');

element.onclick= function()
{
 var spam=document.getElementById('count');   
 counter=counter+1;
 spam.innerHTML=counter.toString();
};