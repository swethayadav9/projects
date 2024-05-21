let c=0
function incr()
{
    console.log(document.querySelectorAll('#counter button'))
   if(c<20)
    {
        //if(c%2==0)
       // {
            //console.log(even)
            c++;
            document.getElementsByClassName("para")[0].textContent = c
        // }
         //else{
            console.log(odd)
         //}
    }
    else{
        alert("don't cross 20")
    }
}
/*let c = 0
function incr() {
	console.log(document.querySelectorAll('#counter button'))
	if (c < 25) {
		c++
		document.getElementsByClassName("para")[0].textContent = c
	} else {
		alert("don't cross 25")
	}
}
function decr() {
	c--
	document.getElementById("count").textContent = c
}
function reset() {
	document.getElementById("count").textContent = 0
}*/