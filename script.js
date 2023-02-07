const input = document.getElementById("input-el")
const generatePasswordBtn = document.getElementById("generate-btn")

const pass1 = document.getElementById("password-1")
const pass2 = document.getElementById("password-2")
const pass3 = document.getElementById("password-3") 
const pass4 = document.getElementById("password-4")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
 "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generateRandomChars() {
    let randomChars = Math.floor(Math.random() * characters.length)
    return characters[randomChars]
}

function generatePassword() {
    let password = ' ';
    for (let i = 0; i < input.value; i++){
        password += generateRandomChars()
    }
    return password
}

generatePasswordBtn.addEventListener("click", function() {
    pass1.textContent = generatePassword()
    pass2.textContent = generatePassword()
    pass3.textContent = generatePassword()
    pass4.textContent = generatePassword()
})

console.log(generatePassword())