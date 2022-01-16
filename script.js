let input = document.getElementById("todoInput");
let addBtn = document.getElementById("button-addon2");
let list = document.querySelector(".list-group");
// addBtn.addEventListener("click", function name(params) {
// })

addBtn.onclick = function (e) {
    let inputVal = input.value;
    if(inputVal){
        
        localStorage.setItem(inputVal,inputVal)
        
        showItems(inputVal);         
        input.value = "";
    }
    //console.log(localDB)
}

function showItems(inputVal) {
list.innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            let storageKey = localStorage.key(i);
            const element = localStorage.getItem(storageKey);
            console.log(element) // ==> localstorage'e kaydedilen input value'nun her bir değeri
            
            let listItem = document.createElement("li");
                listItem.classList.add("list-group-item" , "d-flex", "justify-content-between");
                let spanInput = document.createElement("span") ;
                let spanBtn = document.createElement("span") ;
                spanInput.textContent = element;
                spanInput.addEventListener("click", updateItem);
                spanBtn.classList.add("badge", "bg-danger", "delete");
                spanBtn.style.cursor = "pointer";
                spanBtn.innerHTML= "X";
                spanBtn.addEventListener("click", deleteItem);
                listItem.appendChild(spanInput);
                listItem.appendChild(spanBtn);
                list.appendChild(listItem)
        }

    //let storageKeys = localStorage.key(0);
 
 
}
showItems();







let deleteBtn = document.getElementsByClassName("delete");

// for (let i = 0; i < deleteBtn.length; i++) {
//     const element = deleteBtn[i];
//     element.addEventListener("click", deleteItem)
// }

function deleteItem(e) {
    console.log("delete button calıstı")
     let parentListItem = e.target.parentElement
    // let grandParentList = e.target.parentElement.parentNode
    // grandParentList.removeChild(parentListItem);
    parentListItem.remove()
}

function updateItem(e) {
    e.target.classList.add("text-muted")

}

// localStorage.setItem("user", "mustafa")
// let userName = localStorage.getItem("user")
// localStorage.removeItem("user")
// localStorage.clear();

//let localStore = localStorage.getItem("todolist")
//console.log(localStore)

// for (let i = 0; i < localStore.length; i++) {
//     const element = localStore[i];
//     console.log(element)
//     //list.appendChild(element);
// }


