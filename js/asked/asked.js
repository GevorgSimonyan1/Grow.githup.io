export function asked (){

    let askObj = {
        askImg: "./images/askimages.png",
        title: "You may ask what SEO & why do you need it?",
        otherTitle:"Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary.",
        askArr: [
            {
                img:"./images/Vactor/Vector (4).png",
                backgroundColor: "#FCD5C8",
                title:"Social Media Marketing",
                text:"Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures."
            },
            {
                img:"./images/Vactor/Vector (5).png",
                backgroundColor: "#BDE0BC",
                title:"Email Marketing",
                text:"Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures."
            },
            {
                img:"./images/Vactor/Vector (6).png",
                backgroundColor: "#FFF3C9",
                title: "SEO Optimization",
                text:"Business applications through revolutionary catalystsc for chang the Seamlessly underwhelm dures."
            }

        ]
        
    }

    let rood = document.querySelector("#rood")
    let ask = document.createElement("div")
    ask.classList.add("container")
    ask.classList.add("asked")
    let askleft = document.createElement("div")
    askleft.classList.add("ask-left")
    let askLeftImg = document.createElement("img")
    askLeftImg.setAttribute("src", askObj.askImg)
    askleft.append(askLeftImg)
    ask.append(askleft)
    rood.append(ask)
    let askRight = document.createElement("div")
    askRight.classList.add("ask-right")
    let askRightTitle = document.createElement("h1")
    askRightTitle.innerHTML = askObj.title
    let askRightOtherTitle = document.createElement("p")
    askRightOtherTitle.innerHTML = askObj.otherTitle
    askRight.append(askRightTitle)
    askRight.append(askRightOtherTitle)


    for(let i = 0; i < askObj.askArr.length; i++){
        let askRIghtDiv = document.createElement("div")
        askRIghtDiv.classList.add("ask-right-divs")
        let askRIghtDivBlock = document.createElement("div")
        askRIghtDivBlock.classList.add("ask-right-divs-left")
        let askRIghtDivTITle = document.createElement("div")
        askRIghtDivTITle.classList.add("ask-right-divs-right")
        let askRIghtDivBlockImg = document.createElement("img")
        askRIghtDivBlockImg.setAttribute("src", askObj.askArr[i].img)
        askRIghtDivBlock.append(askRIghtDivBlockImg)
        askRIghtDivBlockImg.style.backgroundColor = askObj.askArr[i].backgroundColor
        let askRIghtDivTitle = document.createElement("h3")
        askRIghtDivTitle.innerHTML = askObj.askArr[i].title
        askRIghtDivTITle.append(askRIghtDivTitle)
        let askRIghtDivText = document.createElement("p")
        askRIghtDivText.innerHTML = askObj.askArr[i].title
        askRIghtDivTITle.append(askRIghtDivText)
        askRIghtDiv.append(askRIghtDivBlock)
        askRIghtDiv.append(askRIghtDivTITle)
        askRight.append(askRIghtDiv)
    }
    ask.append(askRight)
    rood.append(ask)
}