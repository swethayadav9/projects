/*print number from 1 to 10 usinf while
var a=1;
while (a<=10)
{
    console.log(a);
    a++;
}*/
/*implementing same using do while
var b=1;
do{
   console.log(b) 
   b++;
}while(b<=10)*/
/*implementing 1 to 20 in reverse order
var a=20;
while(a>=1)
{
    console.log(a)
    a-=2;
}
var s="swetha"
var n=s.length
while (s>=0)
{
    console.log(s.charAt(n))
    n--
}*/
//for loop
//standrd for foop
for(var i=25;i>=1;i-25)
{
    console.log(i)
}
//for loops usually used to iterate array. array is a collection of elements
var arr=[2,3,4,5]
for(var a=0;a<arr.length-1;a++)
{
   console.log(arr[a])
}
//for--of
var arr=["welcome","to","JS"]
for (var a of arr)
{
    for(var b of a)
    {
    console.log(a)
}
}
//for in
for (var a in arr)
{
    console.log(arr[a])
}