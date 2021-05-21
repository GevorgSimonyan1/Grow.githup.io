export function header(){
    let headerObj = {
        headerLeftlogo1: "./images/logo.png",
        headerLeftlogoText1: "./images/GrowBe.png",
        headerBtn: "Get Started"

    }

    let arr = ["Home", "About US","Services","Features","Team", "Blog","Contact"]
           
    let head = document.querySelector("#rood");
    let headerStart = document.createElement("header")
    headerStart.classList.add("container")
    
    let headerLeft = document.createElement("div");
    headerLeft.classList.add("logo")
    let headerRight = document.createElement("div");
    headerRight.classList.add("menu")

    let headerLeftLogo = document.createElement("img");
    let headerLeftlogoText = document.createElement("img")
    headerLeftLogo.setAttribute("src", headerObj.headerLeftlogo1);
    headerLeftlogoText.setAttribute("src", headerObj.headerLeftlogoText1);
    headerLeft.append(headerLeftLogo);
    headerLeft.append(headerLeftlogoText);
    let blockUl = document.createElement("ul");
    
    let blockBurger = document.createElement("div")
    blockBurger.classList.add("header-right")
    let blockBurgerImg = document.createElement("img")
    blockBurgerImg.classList.add("burger-class")
    blockBurgerImg.setAttribute("src", "./images/burgerIcon.png")
    blockBurger.append(blockBurgerImg)


    for(let i = 0 ; i < arr.length ; i++){
        let block = document.createElement("li");
        let blocklink = document.createElement("a");
        blocklink.setAttribute("href", "#");
        blocklink.innerHTML = arr[i];
        block.append(blocklink)
        blockUl.append(block) 
    };
    let headerbtnLI = document.createElement("li")
    headerbtnLI.setAttribute("id","list")
    let headerBtnLInk = document.createElement("a")
    headerBtnLInk.setAttribute("id","list-link")
    headerBtnLInk.setAttribute("href", "#");
     let headerBtn = document.createElement("button")
     headerBtn.innerHTML = "Get Started"
     headerBtnLInk.append(headerBtn)
     headerbtnLI.append(headerBtnLInk)
     blockUl.append(headerbtnLI)


    headerRight.append(blockBurger)
    blockBurger.append(blockUl);

    headerStart.append(headerLeft);
    headerStart.append(headerRight)
    head.append(headerStart)


    blockBurgerImg.addEventListener("click", function(){
        blockUl.classList.toggle("menu-burger")
    })


}