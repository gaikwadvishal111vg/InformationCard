const storedUserInformation = localStorage.getItem('userInformation');

if(storedUserInformation){
    const userInformation = JSON.parse(storedUserInformation);

    document.getElementById("first-name").textContent = userInformation.firstName;
    document.getElementById("last-name").textContent = userInformation.lastName;
    document.getElementById("country").textContent = userInformation.country;
    document.getElementById("phone-number").textContent = userInformation.phone;
    document.getElementById("state").textContent = userInformation.state;
    document.getElementById("city").textContent = userInformation.city;
    document.getElementById("village").textContent = userInformation.village;


}else{
    userInformationToBeStored();
}

function userInformationToBeStored(){
const firstName = prompt("Enter Your First Name");
const lastName = prompt("Enter Your Last Name");
const country = prompt("Enter Your country?");
const phone = prompt("Enter Your Phone Number?");
const state = prompt("Enter Your State?");
const city = prompt("Enter Your City");
const village = prompt("Enter Your Village");
// console.log(firstName,lastName);

const obj = {
    firstName,
    lastName,
    country,
    phone,
    state,
    city,
    village
};

localStorage.setItem('userInformation', JSON.stringify(obj));
document.getElementById('first-name').textContent = firstName;
document.getElementById('last-name').textContent = lastName;
document.getElementById('country').textContent = country;
document.getElementById('phone-number').textContent = phone;
document.getElementById('state').textContent = state;
document.getElementById('city').textContent = city;
document.getElementById('village').textContent = village;
}

//Container Color changed

const container = document.querySelector(".container");
function changeColor(){
    container.style.backgroundColor=
    'rgb('+ Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';

}

// Toggale Button
function colorBlack(){
    document.body.backgroundColor="black";
    document.querySelectorAll("body")[0].style.color="white";
}

let btn = document.querySelector(".btn");
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
btn.onclick=function(){
    body.classList.toggle('on');
    audio.play();
}