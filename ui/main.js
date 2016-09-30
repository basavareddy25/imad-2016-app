console.log('Loaded!');
var element=document.getElementById('main-text');
var counter=0;

 

var c=document.getElementById('xyz');
c.onclick= function()
{
   var spam=document.getElementById('count');   
 counter=counter+1;
  var c=document.getElementById("xyz");
  spam.innerHTML=counter.toString();  
};


