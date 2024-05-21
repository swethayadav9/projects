function swethaprint()
//decleration --function deyword,name,parmeters
{
    console.log("print swetha");
}
swethaprint()//call
/*function to add two numbers*/
function add(a,b)
{
    console.log(`addition is ${a+b}`)
}
add(2,3)
/*write a simple function to add two strings*/
function add(a,b)
{
    console.log(`addition is ${a+b}`)
}
add("hi","bye")
//call back funcctions--one function inside the parameter of another function
function bad()
{
    console.log("I'm bad")
}
function mad()
{
    bad()
    console.log("i;m mad")
}
mad(x,bad)
//bad is called callback function
//mad is called Higher order function