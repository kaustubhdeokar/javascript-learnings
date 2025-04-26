const API = 'https://api.github.com/users/kaustubhdeokar'

async function handlePromise(){

const data = await fetch(API);
const datajson = await data.json();
console.log(datajson);
}

handlePromise();