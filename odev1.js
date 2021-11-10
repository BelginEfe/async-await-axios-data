import getData from "./app.js";

getData(7)
.then(d => console.log(d))
.catch(e => console.log(e));