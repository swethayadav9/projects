//arrays are used to store th values
let arr=[2,5,"swetha",true]
console.log(arr[0])
//arrays stores values based on index,indexes starts with 0
console.log(arr[0]+arr[1])
console.log(arr.length)
arr.push(2,3,4,5,6)//adds element to last
console.log(arr)
arr.pop()//remove last element
console.log(arr)
arr.shift()//removes first element
console.log(arr)
arr.unshift(8)//adds first element
console.log(arr)
arr.splice(2,1)//delement 1 element from 2nd index
console.log(arr)
arr.splice(2,0,11,12,13)//adds 11,12,13 to 2nd index and 0 delete
//splice(stattingindex,deletecount adny adding elements)
console.log(arr)
arr.reverse()
console.log(arr)
//str="swetha";
//str2="swetha";
//str.toUpperCase();
//console.log(str==str1)


let arr1=[2,3]
let arr2=[2,3]
console.log(arr1==arr2)
/*array print values*/
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}
for(let i of arr1)
{
    console.log(i)
}
["swetha","pravalli","yaswanth"].forEach(function(x)
{
    console.log(x)
})
let newArray=arr3.forEach(function(val)
{
    console.log(val)
    return val * val;
})
let newArray2=arr3.map(function(val)
{
    console.log(val)
    return val * val;
})
console.log(newArray2)
let arrEO=[5,8,9,25,69,74];
let newArray3=arrEO.map(function(val)
{
    return val % 2==0
})
console.log(newArray3)
let newArray4=arrEO.filter(function(val)
{
    return val % 2==0
})
console.log(newArray4)