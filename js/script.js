moment.locale('fr')
console.log(moment().format('DD MMMM YYYY'))
let day = moment().format("DD")

const section = document.querySelector("section")
const colors = ["#235E6FCE","#165b33ce","#146B3Ace","#FBB229ce","#EA4630ce","#BB2528ce"]

let numeros = Array.from({length:24}, (key,valeur)=> valeur+1)
//let numeros= [1, 2, 3,...,24]
//console.log(numeros)
let shuffle = numeros.sort(()=>Math.random() -0.5)
//console.log(shuffle)

for(let index = 1; index <= 24; index++){

    let indexColor = Math.floor(Math.random() * colors.length)
    let randomNumber = shuffle[index - 1]

    let window = document.createElement("div")
    window.classList.add("window")
    let content = document.createElement("div")
    content.classList.add("content")
    let front =  document.createElement("div")
    front.classList.add("front")
    let back = document.createElement("div")
    back.classList.add("back")
    let number =document.createElement("span")
    number.classList.add("number")
    let img =document.createElement("div")
    img.classList.add("img")



    window.appendChild(content)
    content.appendChild(front)
    content.appendChild(back)
    front.appendChild(number)
    number.innerHTML = randomNumber
    back.appendChild(img)

    //attribution des images à chaque boite
    img.style.backgroundImage = "url('css/img/image" + randomNumber + ".jpg')"


    //la couleur aléatoire des box
    window.querySelector('.front').style.background = colors[indexColor]


    if(randomNumber<day){
        window.querySelector(".front").style.filter = "grayscale(100%)"
    }

    section.appendChild(window)

    window.addEventListener("click", function(){
    
    window.classList.toggle("flipCard")//permet d'afficher ou masquer l'image au clic
    //console.log(randomNumber , colors[indexColor])

    })
}

const discover = document.querySelector(".discover")
const windows = document.querySelectorAll(".window")



discover.addEventListener("click", function(){
    windows.forEach(w => w.classList.toggle("flipCard"))
    discover.innerHTML = (discover.innerHTML == "Discover All")?"CoverAll":"Discover All"


})
