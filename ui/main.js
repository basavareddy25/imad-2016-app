console.log('Loaded!');
var element=document.getElementById('main-text');
var counter=0;

var button=document.getElementById('counte');

button.onclick= function()
{
 var spam=document.getElementById('count');   
 counter=counter+1;
 spam.innerHTML=counter.toString();
};