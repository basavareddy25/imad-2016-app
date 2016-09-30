console.log('Loaded!');
var element=document.getElementById('main-text');
var counter=0;
element.onclick=function()
{
element.style.marginLeft="100px";
};
var vvv=document.getElementById('counter');
vvvv.onclick=function(){
 var spam=document.getElementById('count');   
 counter=counter+1;
 spam.innerHTML=counter.toString();
};