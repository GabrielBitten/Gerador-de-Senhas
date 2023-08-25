// seleção dos elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")
const copyButton = document.querySelector("#copy-pass")
//funçoes

const getLetterLowerCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString()
}
const getSymbol = () =>{
    const Symbols = "()[]{}¨¢,.;:@#!?/-+_`=§*%°'<>"
    return Symbols[Math.floor(Math.random()* Symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
    let password = " "

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]
    for(i=0; i< passwordLength; i = i + 4){
        generators.forEach(() =>{
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
        
    }
    password = password.slice(0, passwordLength)

    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector("h4").innerText = password
}
//eventos
generatePasswordButton.addEventListener("click", () =>{
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})

copyButton.addEventListener("click", (e) =>{
    e.preventDefault()

    const password = generatePasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(()=>{
        copyButton.innerText = "Senha copiada"

        setTimeout(()=>{
            copyButton.innerText = "Copiar"
        },1000)
    })
})