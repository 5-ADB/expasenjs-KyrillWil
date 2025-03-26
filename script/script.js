/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes

//john doe weg doen met namen en emails
let username = document.querySelector(".username")
let email = document.querySelector(".email")

users.forEach((namen)=>{
  const deNamen = document.createElement("p")
  deNamen.innerHTML = namen.fullname
  username.appendChild(deNamen)
})
users.forEach((namen)=>{
  const deEmails = document.createElement("p")
  deEmails.innerHTML = namen.email
  email.appendChild(deEmails)
})

//variabelen toevoeg knop
const nieuweNaam = document.querySelector("#name")
const nieuweEmail = document.querySelector("#email")
const nieuwePassword = document.querySelector("#password")
const registreer = document.querySelector("#registreer")

//actie bij toevoegen
registreer.addEventListener("click", ()=>{
  const nieuweUser = {
    fullname: nieuweNaam.value,
    email: nieuweEmail.value,
    password: nieuwePassword.value
  }
  users.push(nieuweUser) 
  console.log("gelukt");
  console.log(users);
  if (nieuweNaam || nieuweEmail || nieuwePassword == ''){
    alert("Vul alles in")
    return
  }  
})


//variabelen filter
const filterNaam = document.querySelector("#filterNaam")
const filterKnop = document.querySelector("#filterBtn")

//actie bij filteren
filterKnop.addEventListener("click", ()=>{

})


//kijken of de 4letters matchen
const namenLijst = (fullname, filterBtn) => {
  let gefilterd = [];

  if (filterBtn){
    gefilterd = users.filter((user)=>{
      return user.fullname 
    })
  }
}
 
