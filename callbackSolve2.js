const request=true;
// promise defination
const promise= new Promise(function(resolve, reject){
  setTimeout(function(){
    if(request){
    resolve("promise success..")
    }else{
    reject("promise not success..")
    }
  },2000)
})
//promise call
promise
  .then(function(value){
    console.log(value)
  })
.catch(function(err){
  console.log(err);
})
