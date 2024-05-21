
let p1=document.getElementById('para');
let p2=document.getElementById('para2');
let input=document.getElementById('inp');

function update()
{
    //alert(document.getElementById('para'))
    //document.getElementById('para').textContent="Bye everyone"
   //alert (document.getElementById('inp').value)
   //document.getElementById('para').innerHTML='<img src="" alt="jdg"/
     // p1.textContent=swetha;
     // p2.textContent=input.value;
     const str=input.value;
     let rev='';
     for(let i=str.length - 1;i>=0;i++)
     {
        rev=rev+str[i]
     }
     p2.textContent=rev;
     p2.style.backgroundColor="red";
     p2.style.fontSize="48px";
     if(rev===str)
     {

     }
}