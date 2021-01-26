



//callback
// const doSOmething =(callback) =>{
//     setTimeout(function(){
//         const skills = ['HTML','CSS','JS']
//         callback('It did not go well', skills)
//     },2000)
// }
// const callback =(err,result) => {
//     if (err){
//         return console.log(err)
//     }
//     return console.log(result)
// }
// doSOmething(callback)


// const doSomething = callback =>{
//     setTimeout(() =>{
//         const skills = ['HTML','CSS','JS']
//         callback(false, skills)
//     },1000)
// }

// doSomething((err,result) =>{
//     if (err){
//         console.log(err)
//     }
//     return console.log(result)
// })

// Promise constructor
//syntax
// const promise = new Promise((resolve,reject) =>{
//     resolve('success')
//     reject('failure')
// })

// //promise
// const doPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         const skills = ['HTML','CSS','JS']
//         if (skills.length >0){
//             resolve(skills)
//         } else {
//             reject('something wrong has happened')
//         }
    
//     },2000)
// })
// doPromise
//  .then(result=>{
//      console.log(result)
//  })
// .catch(error =>console.log(error))

// //the promise has been settled with resolve

// const doPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         const skills = ['HTML','CSS','JS']
//         if (skills.indexOf('Node') !== -1 {
//             resolve('fullstack developer')
//         }else{
//             reject('something wrong has happened')
//         }
//     },2000)
//  })
 
//  doPromise
//  .then(result =>{
//      console.log(result)
//  })
//  .catch(error =>console.log(error))


//Fetch API for contries 



// const fetchAPI =(url, condition) => {
//     return new Promise(function(resolve,reject){
//     if (condition){
//         resolve('countries list')
//     }else{
//         reject('something went wrong')
//     }
// });
// };


// fetchAPI('h1')
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })

//List of countries


const url = 'https://restcountries.eu/rest/v2/all'

fetch(url)
.then(function(response){
    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch(function(err){
    console.log(err)
})

//list of cats


const url1 = 'https://api.thecatapi.com/v1/breeds' 

async function getCats(){
    try{
        const result = await fetch(url).then(function(result){
            return result.json();
        }) ;
        return result;
    } catch (error){
        console.log(error);
    }
}

// fetch (url1)
// .then(function(response){
//     return response.json();
// })
// .then((data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })
