const request=true;
// promise defination
const promise= new Promise(function(resolve, reject){
  setTimeout(function(){
    if(request){
    resolve("promise success..")
    }else{
    reject("promise not success..")
    }
  },1000)
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
const enroll =()=>{
  const promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
    if(paymentSuccess){
    resolve("payment Processing successfull....");
    }else{
      reject("payment is not success");
    }
  },2000)
  })
  return promise;
}

const progress =()=>{
  const promise= new Promise(function(resolve,reject){
    setTimeout(()=>{
    if(mark >=80){
      resolve("your result successfull");
    }else{
      reject("Your result fail,try again now")
    }
  },2000)
  })
  return promise;
}
const certificate=()=>{
  const promise= new Promise(function(resolve){
    resolve("successFull Processing certificate...")
  })
  return promise;
}
enroll()
.then(value=>console.log(value))
.then(progress)
.then(value=>console.log(value))
.then(certificate)
.then(value=>console.log(value))
.catch(err=>console.log(err))