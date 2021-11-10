import axios from "axios";

export default function getData (number) {
    return new Promise(async (resolve, reject) => {

        if (isNaN(number) || number === "")  return reject("Lütfen bir sayı giriniz.")


        try {
           const {data : userId} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
           const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);
        //    if (!userId || !posts)  throw new Error();
           const myData = {userId, posts};
           resolve(myData);
        }
        catch {
            reject("Hiçbir sonuç gelmedi");
        }
    });
};

/* getData(8)
.then(d => console.log(d))
.catch(e => console.log(e)); */