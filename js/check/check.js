export function check(){
   
    let  obj = {
        title:"Check Your Website Speed ",
        about: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business through revolutionary.",
        p1:"Web URL",
        p2:"Email Address",
        btn: "Submit",
        img: "./images/image 1.png"
    } 

    let rood = document.querySelector("#rood")
    let check = document.createElement("div")
    check.classList.add("container")
    check.classList.add("check")
    let checkLeft = document.createElement("div")
    checkLeft.classList.add("check-left")
    let checkTitle =document.createElement("h1")
    checkTitle.innerHTML = obj.title
    checkLeft.append(checkTitle)
    let checkAbout = document.createElement("p")
    checkAbout.innerHTML =obj.about
    checkLeft.append(checkAbout)
    let checkLeftEnd = document.createElement("div")
    checkLeftEnd.classList.add("check-left-end")
    let checkLeftEndLeft = document.createElement("div")
    checkLeftEndLeft.classList.add("check-left-end-left")
    let checkLeftEndLeft1 = document.createElement("div")
    checkLeftEndLeft1 .classList.add("check-left-btn")
    let checkLeftEndLeftLInk = document.createElement("a")
    checkLeftEndLeftLInk.setAttribute("href", "")
    checkLeftEndLeftLInk.innerHTML = obj.p1
    checkLeftEndLeft1.append(checkLeftEndLeftLInk)
    checkLeftEndLeft.append(checkLeftEndLeft1)
    let checkLeftEndLeft2 = document.createElement("div")
    checkLeftEndLeft2 .classList.add("check-left-btn")
    let checkLeftEndLeft2tLInk = document.createElement("a")
    checkLeftEndLeft2tLInk.setAttribute("href", "")
    checkLeftEndLeft2tLInk.innerHTML = obj.p2
    checkLeftEndLeft2.append(checkLeftEndLeft2tLInk)
    checkLeftEndLeft.append(checkLeftEndLeft2)
    let checkLeftEndRight = document.createElement("div")
    checkLeftEndRight.classList.add("check-left-end-right")
    let checkLeftEndRightBtn = document.createElement("button")
    checkLeftEndRightBtn.innerHTML = obj.btn
    checkLeftEndRight.append(checkLeftEndRightBtn)
    checkLeftEnd.append(checkLeftEndLeft)
    checkLeftEnd.append(checkLeftEndRight)
    checkLeft.append(checkLeftEnd)
    let checkRight = document.createElement("div")
    checkRight.classList.add("check-right")
    let checkImg = document.createElement("img")
    checkImg.setAttribute("src", obj.img)
    checkRight.append(checkImg)
    check.append(checkLeft)
    check.append(checkRight)
    rood.append(check)
    


}