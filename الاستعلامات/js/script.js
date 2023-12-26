let offname = document.getElementById("name");
let id = document.getElementById("id");
let degree = document.getElementById("degree");
let type = document.getElementById("type");
let date = document.getElementById("dt");
let notes = document.getElementById("notes");

let addButton = document.getElementById("addButton");

let officers;
if (localStorage.getItem("MaherkoDb" == null)) {
    officers = [];
}
else {
    officers = JSON.parse(localStorage.getItem("MaherkoDb"));
    displayData();
}

function addNewInquiry() {

    if (checkEmpty() == true) {
        alert("برجاء ادخال البيانات بطريقه صحيحه")
    }
    else {
        let officer =
        {
            name: offname.value,
            id: id.value,
            degree: degree.value,
            type: type.value,
            date: date.value,
            notes: notes.value
        }
        officers.push(officer);
        localStorage.setItem("MaherkoDb", JSON.stringify(officers));
        displayData();
        clr();

    }

}

function displayData() {
    let bx = ``;
    for (let i = 0; i < officers.length; i++) {
        bx += `
    <tr>
                <td>${i + 1}</td>
                <td>${officers[i].name}</td>
                <td>${officers[i].id}</td>
                <td> ${officers[i].degree}</td>
                <td>${officers[i].type}</td>
                <td>${officers[i].date}</td>
                <td>${officers[i].notes}</td>
                <td><button onclick="updateRow(${i})" class="btn btn-outline-success">تعديل</button></td>
                <td><button onclick="deleteRow(${i})" class="btn btn-outline-danger">حذف</button></td>
            </tr>
    `
    }

    document.getElementById("demo").innerHTML = bx;
}

function clr() {
    offname.value = "";
    id.value = "";
    degree.value="";
    type.value="";
    date.value = "";
    notes.value = "";
}


function search(term) {
    let bx = ``;
    for (let i = 0; i < officers.length; i++) {
        if (officers[i].id.includes(term) == true) {
            bx += `
            <tr>
                        <td>${i + 1}</td>
                        <td>${officers[i].name}</td>
                        <td>${officers[i].id}</td>
                        <td> ${officers[i].degree}</td>
                        <td>${officers[i].type}</td>
                        <td>${officers[i].date}</td>
                        <td>${officers[i].notes}</td>
                        <td><button onclick="updateRow(${i})" class="btn btn-outline-success">تعديل</button></td>
                        <td><button onclick="deleteRow(${i})" class="btn btn-outline-danger">حذف</button></td>
                    </tr>
            `
        }

    }

    document.getElementById("demo").innerHTML = bx;
}


function deleteRow(indx) {
    officers.splice(indx, 1);
    localStorage.setItem("MaherkoDb", JSON.stringify(officers));
    displayData();
}
let neededIndx;
function updateRow(indx) {
    neededIndx = indx;
    console.log(neededIndx);
    offname.value = officers[indx].name;
    id.value = officers[indx].id;
    degree.value = officers[indx].degree;
    type.value = officers[indx].type;
    date.value = officers[indx].date;
    notes.value = officers[indx].notes;

    addButton.innerHTML = "تعديل";

    // displayData();
}
function newData() {
    officers[neededIndx].name = offname.value;
    officers[neededIndx].id = id.value;
    officers[neededIndx].degree = degree.value;
    officers[neededIndx].type = type.value;
    officers[neededIndx].date = date.value;
    officers[neededIndx].notes = notes.value;
    localStorage.setItem("MaherkoDb", JSON.stringify(officers));
    addButton.innerHTML = "اضافه";
    clr();
    displayData();
}
addButton.addEventListener("click", function () {
    // addNewInquiry()
    if (addButton.innerHTML == 'تعديل') {
        if(checkEmpty()==true)
        {
            alert("برجاء ادخال البيانات بطريقه صحيحه")
        }
        else 
        {
            newData();
        }
      

    }
    else {
        addNewInquiry();
    }
})


function checkEmpty() {

    if (offname.value == "" || id.value == "" || degree.value == "" || type.value == "" || date.value == "" || notes.value == "") {
        return true;
    }
    else {
        return false;
    }
}


let target =document.getElementById("target"); 
type.addEventListener("input",function(){

if(type.value=='تصديق جراحه')
{
    target.classList.remove("d-none");
    target.classList.add("d-block");
}
else 
{
    target.classList.remove("d-block");
    target.classList.add("d-none");
}
})
