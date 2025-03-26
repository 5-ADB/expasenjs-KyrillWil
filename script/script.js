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

const nieuweNaam = document.querySelector("#name")
const nieuweEmail = document.querySelector("#email")
const nieuwePassword = document.querySelector("#password")
const registreer = document.querySelector("#registreer")

// hieronder komt jullie code - veel succes

//actie bij toevegen
registreer.addEventListener("click", ()=>{
  const nieuweUser = {
    fullname: nieuweNaam.value,
    email: nieuweEmail.value,
    password: nieuwePassword.value
  }
  users.push(nieuweUser) 
})

//filter variabelen
const filterNaam = document.querySelector("#filterNaam")
const filterKnop = document.querySelector("#filterBtn")

//filter actie
filterKnop.addEventListener("click", ()=>{

})

const namenLijst = (fullname, filterBtn) => {
  let gefilterd = [];

  if (filterBtn){
    gefilterd = users.filter((user)=>{
      
    })
  }
}
 
