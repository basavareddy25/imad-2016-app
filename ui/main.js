console.log('Loaded!');
var element=document.getElementById('main-text');


 

var submit=document.getElementById('submit_bt');
submit.onclick=function()
{
  var nip=document.getElementById('name');
var val=nip.value;
  var request=new XMLHttpRequest();
 
  request.onreadystatechange = function(){
    // process the server response
    if(request.readyState==XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
       var nip=document.getElementById('name');
var val=nip.value;


    var names=request.responseText;
    var list="";
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('yu');
    ul.innerHTML=list;
 
        }
    }
    };
request.open('GET','http://basavareddy25.imad.hasura-app.io/submit?name='+val,true);
request.send('null');
};
