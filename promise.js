// this is for promise functions created new branch
const myPromise = new Promise((resolve,reject)=>{
    resolve('success!!');
}) 

myPromise.then((result)=>{
    console.log(result)
})