// callbackfunction2.js problem solving 
const paymentSuccess=true;
const mark =80;
const enroll =()=>{
  console.log('cours enrollment is processing.. ')
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
  console.log('Exam result is cheacking...')
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
const callFunction=async()=>{
  try{
    await enroll()
  await progress()
  const data=await certificate()
  console.log(data);
  }catch(err){
    console.log(err)
  }
}
callFunction();