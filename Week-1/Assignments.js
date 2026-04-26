// Q1
// create a counter in javascript (count from 30 to 0)
// let cnt=30
// const a=setInterval(()=>{
//     console.log(cnt)
//     cnt--;
//     if(cnt==0)
//     clearInterval(a)
// },1000)


// Q2
//

// setTimeout(()=>{
//     let start = Date.now();
//     let sum=0;
//     for(let i=0; i<10000000; i++){
//         sum+=i;
//     }
//     let end = Date.now();
//     console.log(`Time Taken ${(end-start)/1000}`);
// },1000)


//Q3
//

const givenHour = 12;
const givenMinute = 50;
const givenSecond = 0;
const b = setInterval(()=>{
    console.clear();
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    console.log(hour + ":" + minute + ":" + second);
    if(hour===givenHour&&minute===givenMinute&&second===givenSecond){
        clearInterval(b)
    }
},1000)
