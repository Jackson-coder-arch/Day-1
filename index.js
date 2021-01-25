// //Declare a variable
// let challenge ="30 Days of Javascript"
// console.log(challenge)

// //Print Length

// console.log(challenge.length)

// //Change to uppercase

// console.log(challenge.toUpperCase());

// //change to lowercase

// console.log(challenge.toLowerCase())

// //cut or slice

// console.log(challenge.substring(0,14));

// //slice 30 from 30 days of javascript
// console.log(challenge.substring(0,2))
// console.log(challenge.substring(2,22))

// //check if the string has the word script
// console.log(challenge.includes('script'))

// //change to split into an array

// console.log(challenge.split(''))

// //split 30 days of javascript where there is space

// console.log(challenge.split(','))

// //use chartAt
// console.log(challenge.chartAt(15))

// //let app string be

// // let apps =['facebook', 'Google','Microsoft','Apple','IBM','Oracle','Amazon']
// // console.log(apps)
// //split the array at the commas


// console.log(challenge.charCodeAt())



//callback
const doSOmething =(callback) =>{
    setTimeout(function(){
        const skills = ['HTML','CSS','JS']
        callback('It did not go well', skills)
    },2000)
}
const callback =(err,result) => {
    if (err){
        return console.log(err)
    }
    return console.log(result)
}
doSOmething(callback)


const doSomething = callback =>{
    setTimeout(() =>{
        const skills = ['HTML','CSS','JS']
        callback(false, skills)
    },1000)
}

doSomething((err,result) =>{
    if (err){
        console.log(err)
    }
    return console.log(result)
})

// Promise constructor
//syntax
const promise = new Promise((resolve,reject) =>{
    resolve('success')
    reject('failure')
})

//promise
const doPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        const skills = ['HTML','CSS','JS']
        if (skills.length >0){
            resolve(skills)
        } else {
            reject('something wrong has happened')
        }
    
    },2000)
})
// doPromise
//  .then(result=>{
//      console.log(result)
//  })
// .catch(error =>console.log(error))

//the promise has been settled with resolve
const doPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        const skills = ['HTML','CSS','JS']
        if (skills.indexOf('Node') !== -1{
            resolve('fullstack developer')
        }else{
            reject('something wrong has happened')
        }
    },2000)
 })
 
 doPromise
 .then(result =>{
     console.log(result)
 })
 .catch(error =>console.log(error))
