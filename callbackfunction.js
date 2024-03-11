const paymentSuccess=true;
const mark =80;
const enrole =(callback)=>{
  console.log("prement Processing....")
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
enrole(()=>{
  progress(certificate);
});