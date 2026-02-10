// function sum(a, b){
//     return a+b;
// }
// module.exports=sum;

async function getData(){
    const response=await fetch('https://fakestoreapi.com/products');
    const resData=await response.json();
    //console.log(resData);
    return resData;
}

module.exports=getData;