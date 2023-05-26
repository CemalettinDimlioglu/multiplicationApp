 const num1 = Math.ceil(Math.random() * 10); // 1. aşama
 // console.log(num1);
 const num2 = Math.ceil(Math.random() * 10); // 2. aşama
 const questionEl = document.getElementById("question"); // 3. aşama
 const inputEl = document.getElementById("input"); // 7. aşama
 const formEl = document.getElementById("form"); // 6.aşama
 const scoreEl = document.getElementById("score"); // 14. aşama
 let score = JSON.parse(localStorage.getItem("score")); // 16. aşama
 if (!score) {
   // 17. aşama- yenileme oldugunda null olmamamsı için
   score = 0;
 }
 scoreEl.innerText = `score:${score}`; // 15. aşama
 // let score = 0;  //11. aşama
 questionEl.innerText = `What is ${num1} multiply by ${num2}`; // 4. aşama ve backtick kullan
 const correctAns = num1 * num2; // 5. aşama
 formEl.addEventListener("submit", () => {
   // 6. aşama part 2
   const userAns = +inputEl.value; // 8. aşama
   // console.log(userAns, typeof userAns);   // 9. aşama
   if (userAns === correctAns) {
     // 10. aşama
     score++;
     console.log(score);
     updateLocalStorage(); // 13.aşama part 1
   } else {
     score--;
     console.log(score);
     updateLocalStorage(); // 13. aşama part 2
   }
 });
 function updateLocalStorage() {
   // 12. aşama
   localStorage.setItem("score", JSON.stringify(score));
 }