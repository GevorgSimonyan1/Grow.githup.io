export function perfect (){
    let rood = document.querySelector("#rood")
    let perfect = document.createElement("div")
    perfect.classList.add("perfect")
    perfect.classList.add("container")

    let  perfectObj = {
        title: "Perfect Solution For     Your Business",
        about: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for chang the Seamlessly underwhelm optimal testing procedures.",
        btn: "Learn More",
        img: "./images/macbook .png"
    }

    
    let perfectBlockLeft = document.createElement("div")
    perfectBlockLeft.classList.add("perfect-left")
    let perfectBlockRight = document.createElement("div")
    perfectBlockRight.classList.add("perfect-right")
    let perfectLeftTitle = document.createElement("h1")
    let perfectLeftAbout = document.createElement("p")
    let pefectLeftBtn = document.createElement("button")
    perfectLeftTitle.innerHTML = perfectObj.title
    perfectLeftAbout.innerHTML = perfectObj.about
    pefectLeftBtn.innerHTML = perfectObj.btn
    let perfectBlockRightImg = document.createElement("img")
    perfectBlockRightImg.setAttribute("src", perfectObj.img)
    perfectBlockRight.append(perfectBlockRightImg)
    perfectBlockLeft.append(perfectLeftTitle)
    perfectBlockLeft.append(perfectLeftAbout)
    perfectBlockLeft.append(pefectLeftBtn)
    perfect.append(perfectBlockLeft)
    perfect.append(perfectBlockRight)
    rood.append(perfect)
    
    
    
    
    


}