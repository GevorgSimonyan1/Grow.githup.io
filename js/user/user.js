export function User(){
    let userObj = {  
        title: "Our Expert Team Members",
        outherTitle: "This new-found knowledge may then be used by engineers to create new tools and machines.",
        userArr:[
            {
                img:"./images/userImg/image1.png",
                Name: "Nattasha",
                proff:"Web Develper"
            },
            {
                img:"./images/userImg/image2.png",
                Name: "John Doe",
                proff:"Web Develper"
            },
            {
                img:"./images/userImg/image3.png",
                Name: "Haris Milas",
                proff:"Ceo & Co-Funder"
            },
            {
                img:"./images/userImg/image4.png",
                Name: "Nelson Mecoy",
                proff:"Marketing Manager"
            }
        ], 
        linksArr:["./images/links/fb.png","./images/links/twitter.png" ,"./images/links/in.png", "./images/links/google.png"]
       
    }
let rood = document.querySelector("#rood")
let users = document.createElement("div")
users.classList.add("container")
users.classList.add("users") 
let usersTitle = document.createElement("h1")
usersTitle.innerHTML = userObj.title
users.append(usersTitle)
let usersOutherTitle = document.createElement("h3")
usersOutherTitle.innerHTML = userObj.outherTitle
users.append(usersOutherTitle) 
rood.append(users)
let people = document.createElement("div")
people.classList.add("people")
let usArr = userObj.userArr
let linksARR = userObj.linksArr

    
usArr.map(menschen => {
    let person = document.createElement("div")
    person.classList.add("person")
    let personImgBlock = document.createElement("div")
    personImgBlock.classList.add("person-img")
    let personImg = document.createElement("img")
    personImg.setAttribute("src", menschen.img)
    personImgBlock.append(personImg)
    person.append(personImgBlock)
    let personName = document.createElement("h2")
    personName.innerHTML = menschen.Name
    person.append(personName)
    let personProff = document.createElement("p")
    personProff.innerHTML = menschen.proff
    person.append(personProff)
    let personIcons = document.createElement("div")
    personIcons.classList.add("person-links")
    let linksIMg = userObj.linksArr
    for(let j = 0; j < linksIMg.length; j++){
        let linkDiv = document.createElement("div")
        let linkDivImg = document.createElement("img")
        linkDivImg.setAttribute("src",linksIMg[j])
        linkDiv.append(linkDivImg)
        personIcons.append(linkDiv)  
    }
    person.append(personIcons)
    people.append(person)
    users.append(people)
    rood.append(users)

})

  
}