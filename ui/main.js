console.log('Loaded!');
var element=document.getElementById('main-text');
counter=0;
element.onclick=function()
{
element.style.marginLeft="100px";
};
var button=document.getElementById('counter');
button.onclick=function()
{
 var spam=document.getElementById('spam');   
 counter=counter+1;
 spam.innerHTML=counter.toString();
};