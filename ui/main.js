console.log('Loaded!');
var element=document.getElementById('main-text');


 

var c=document.getElementById('xyz');
c.onclick= function()
{
 
  var request=new XMLHttpRequest();
 
  request.onreadystatechange = function(){
    // process the server response
    if(request.readyState==XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
        var counter=request.responseText   ;
         spam.innerHTML= counter.toString();
 
        }
    }
    };
request.open('GET','http://basavareddy25.imad.hasura-app.io/counter',true);
};


