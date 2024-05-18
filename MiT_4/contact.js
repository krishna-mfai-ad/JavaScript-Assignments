var submitBtn = document.getElementById("submitBtn")
var displayData = document.getElementById("displayData")
var outBox = document.getElementById("outBox")
var dataContainer=document.getElementById("dataContainer")

function displayDatas() {
    // Clear the container first
    dataContainer.innerHTML = '';
    let name = document.querySelector("#conName").value
    let mail = document.querySelector('#email').value
    let list = JSON.parse(localStorage.getItem('datas')) || [];

    list.forEach(function(item, index) {
        let div = document.createElement('div');
        div.innerHTML = 
        `
        <div id=outBox class="output-box">
        <div>
        <span>${item.name}</span>
        <p>${item.mail}</p>
        </div>
        <button onclick="deleteData()"> Delete </button>
        </div >
        `;
        dataContainer.appendChild(div);
    });
}

// Push Data in Local Storage
submitBtn.addEventListener('click', function () {
    let name = document.querySelector("#conName").value
    let mail = document.querySelector('#email').value

    let contacts = JSON.parse(localStorage.getItem('datas')) || []

    contacts.push({
        "Name": name, "Email": mail
    })

    localStorage.setItem("datas", JSON.stringify(contacts))
    displayDatas();
})

 function deleteData()
 {
    displayData.innerHTML=''  
 }
 
//  window.deleteData = function(index) {
//     let list = JSON.parse(localStorage.getItem('dataset')) || [];

//     list.splice(index, 1);

//     localStorage.setItem("dataset", JSON.stringify(list));

//     displayData();
// }






