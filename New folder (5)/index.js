//ex1
//1
// const arr1 = ["a",[["b"]]]
// const newarr = arr1.flat(2);
// console.log(newarr);
//2
// const arr = [1,[2],[3,[4]]];
// const newarr = arr.flat(2);
// console.log(newarr);
//3
// const arr = [1,{},["b"]];
// const newarr = arr.flat(1);
// console.log(newarr);

//ex2

// const grid = [
//   [1,3,2,5,9,7,8,4,6],
//   [4,6,5,8,7,9,3,2,1],
//   [7,9,8,2,1,3,6,5,4],
//   [9,2,1,4,3,5,8,7,6],
//   [3,5,4,7,6,8,2,1,9],
//   [6,8,7,1,9,2,5,4,3],
//   [5,7,6,9,8,1,4,3,2],
//   [2,4,5,6,5,7,1,9,8],
//   [8,1,9,3,2,4,7,6,5]
// ];
// const grid1 = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

// function cheked(arr){
//     let con = false;
//     for(let x = 0; x < arr.length - 1 ; x++){
//       for(let y = 0 ; y < arr.length ; y++){
//         if (arr[x][y] === arr[x + 1][y]) {
//           // console.log(1 + 1 === 3);
//           con = false;
//         } else {
//           // console.log(1 + 1 === 2);
//           con = true;
//         }
//       }
//     }
//
//     return console.log(con);   
// }
// cheked(grid1);
// cheked(grid);

//ex3


import "./book.js"
let form = document.getElementById('formAdd');
let list = document.getElementById('list');
form.addEventListener("submit",function onSubmitEvent(event){
    event.preventDefault();
    let nameBook = form.book.value;
    let name = form.name.value;
    form.book.value = "";
    form.name.value = "";
    db.collection("test").add({
      name: `${name}`,
      nameBook: `${nameBook}`, 
});
});
db.collection("test")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.data())
      const data = doc.data();
      const myBook = document.createElement("my-book");
      myBook.tacgia= data.name;
      myBook.tensach = data.nameBook;
      console.log(list);
      list.appendChild(myBook);
    });
  });











      








