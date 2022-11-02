// const groceries = document.getElementsByClassName("groceries")[0];
// const pencil  = document.getElementById("pencil");
// const allItems = document.getElementById("allItems");
// const userInput = document.getElementById(userInput);


// pencil.addEventListenser("click", function(){
//     allItems.innerHTML = " ";
// })

// userInput.addEventListener("keydown" , function(event){
//     if(event.key == "Enter"){
//         addItem();
//     }
// })

// function addItem(){
//     var h2 = document.createElement("h2");
//     h2.innerHTML = "- " + userInput.value;

//     h2.addEventListener("click" , function(){
//         h2.style.textDecoration = "line-through";
//     })

//     allItems.insertAdjacentElement("beforeend", h2);

//     userInput.value = "";
// }

document.querySelector("#eraser").addEventListener("click", () => {
    document.querySelector("#groceryItems").textContent = "";
  })
  
  document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem();
  });
  
  addItem = () => {
    const item = document.createElement("h2")
    item.textContent = "- " + document.querySelector("#userInput").value;
  
    item.addEventListener("click", () => {
      if(item.style.textDecoration != "line-through")
        item.style.textDecoration = "line-through";
      else
        item.style.textDecoration = "none";
    })
  
    document.querySelector("#groceryItems").appendChild(item);
    document.querySelector("#userInput").value = "";
  }
