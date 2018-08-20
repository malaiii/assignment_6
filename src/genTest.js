const axios = require('axios');
console.log("hello");
function asyncRunner(generator){
    console.log("inside generator");
    const getBoards = generator.next().value.then(boards => {
        //console.log(boards);
        generator.next(boards).value.then(lists =>{
            generator.next(lists).value.then(cards => {
                //console.log(lists);
                generator.next(cards);
            });
        });
    });

    
    // const getList = generator.next().value.then(lists => {
    //     //console.log(lists);
    //     generator.next(lists);
    // });
    // const getCards = generator.next().value.then(cards => {
    //     //console.log(cards);
    //     generator.next(cards);
    // });   

}
//generic function
// function asyncRunner(generator, data){

// }

function* getDetails(boardid, listid, cardid){
    console.log("inside getDetails");
    console.log(boardid);
    const board = yield axios.get(`http://localhost:3000/api/boards/${boardid}`).then(result => new Promise((resolve,reject)=>{
        resolve(result.data);
    }));
    const list = yield axios.get(`http://localhost:3000/api/lists/${listid}`).then(result => new Promise((resolve,reject)=>{
        resolve(result.data);
    }));
    const card = yield axios.get(`http://localhost:3000/api/cards/${cardid}`).then(result => new Promise((resolve,reject)=>{
        resolve(result.data);
    }));
    console.log('Board: ', board);
    console.log('List: ', list);
    console.log('Card: ', card);
}
asyncRunner(getDetails(1,12,23));