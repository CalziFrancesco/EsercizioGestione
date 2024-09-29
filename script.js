let people=[]
function aggiungiPersona(){
let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let email = document.getElementById("email").value;
let birthdate = document.getElementById("birthdate").value;
let phone = document.getElementById("phone").value;
let country = document.getElementById("country").value;
let province = document.getElementById("province").value;


if (name ==="" || surname ==="" || email === "" || birthdate ==="" || phone ==="" || country ==="" || province === "") {
    alert("Per favore compila tutti i campi");
    return;
}

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert("Inserisci una email valida");
        return;
    }

for (let i = 0; i < people.length; i++) {
    if (people[i].email === email) {
        alert("Spiacenti, questa email è già registrata.");
        return;
    }
}

for (let i = 0; i < people.length; i++) {
    if (people[i].phone === phone) {
        alert("Spiacenti, questo numero di telefono è già registrato.");
        return;
    }
}

let person = {
    name: name,
    surname: surname,
    email: email,
    birthdate: birthdate,
    phone: phone,
    country: country,
    province: province
};

people.push(person);
aggiornaTabella();
document.getElementById("ListaPersone").reset();

}

function aggiornaTabella() {
    let tableBody = document.querySelector("#tabellaPersone tbody");
    tableBody.innerHTML = "";

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let row = `
            <tr>
                <td>${person.name}</td>
                <td>${person.surname}</td>
                <td>${person.email}</td>
                <td>${person.birthdate}</td>
                <td>${person.phone}</td>
                <td>${person.country}</td>
                <td>${person.province}</td>
                <td><button onclick="rimuoviPersona(${i})">Rimuovi</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

function rimuoviPersona(index) {
    people.splice(index, 1);
    aggiornaTabella();
}

function inviaModulo() {
    if(people.length === 0) {
        alert("Per favore, aggiungi almeno una persona");
        return false;
    }
    return true;
}
