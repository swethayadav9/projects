//let colors=["red","blue","black","yellow","pink","green"]

function change()
{
   // alert(Math.rabdom()*6)
    //document.body.style.backgroundColor=colors[Math.floor(Math.random()*6)];
   const rc= Math.round(Math.random()*10000000).toString(16)
   document.body.style.backgroundcolor="#"+rc;
}