const request=true;
// promise defination
const promise= new Promise(function(resolve, reject){
  setTimeout(function(){
    if(request){
    resolve("promise success..")
    }else{
    reject("promise not success..")
    }
  },7000)
})
//promise call
promise
  .then(function(value){
    console.log(value)
  })
.catch(function(err){
  console.log(err);
})
// callbackfunction.js problem solving 
const paymentSuccess=true;
const mark =80;
const enroll =(callback)=>{
  console.log("payment Processing....")
  setTimeout(()=>{
    callback()
  },2000)
}
const progress =(callback)=>{
  console.log("result compare...")
  setTimeout(()=>{
    if(mark >=80){
      callback()
    }else{
      console.log("Your result fail,try again now")
    }
  },2000)
}
const certificate=()=>{
  console.log("successFull Processing certificate...")
}
enroll(()=>{
  progress(certificate);
});