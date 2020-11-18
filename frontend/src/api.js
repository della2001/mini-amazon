import axios from 'axios'

export default axios.create({ baseUrl: 'http://localhost:5000' })
/*const isDev = false;
function getAllItesms() {
    const url = "http://localhost:5000/registration";
    const allitemsurl = "http://localhost:5000/items"; 


    return fetch(allitemsurl).then(response => {
        return response.json(); 
    });
}

function getFakeData(){
    return new Promise((resolve, reject) => {
        resolve({
            quote: "Chase Your Dreams",
            max: 100,
            min: 0,
            count: 50,
        });
    })
}

export default isDev ? getFakeData : getRealData;
*/