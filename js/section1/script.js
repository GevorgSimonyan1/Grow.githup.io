export function seojs() {
    let seo = document.createElement("div")
    seo.classList.add("seo")
    seo.classList.add("container")
    let rood = document.querySelector("#rood")

let seoObj = {
    img1: "./images/pngfind 1.png",
    img2: "./images/Polygon/Polygon 1.png",
    span1:"SEO & Digital",
    span2: " Marketing",
    span3: " For Your Website.",
    p1:"Provide all kind of seo services and help to improve seo ranking. Globally incubate standards.",
    span: "Watch Video",
    button:"Start Now"

}

 
    
    let blockLeft = document.createElement("div")
    blockLeft.classList.add("seo-left")
    let blockLeftH1 = document.createElement("div")
    blockLeftH1.classList.add("seo-title")
    let blockLeftSpan1 = document.createElement("span")
    blockLeftSpan1.innerHTML = seoObj.span1
    blockLeftH1.append(blockLeftSpan1)
    let blockLeftSpan2 = document.createElement("span")
    blockLeftSpan2.innerHTML = seoObj.span2
    blockLeftSpan2.classList.add("seo-title-border")
    blockLeftH1.append(blockLeftSpan2)
    let blockLeftSpan3 = document.createElement("span")
    blockLeftSpan3.innerHTML = seoObj.span3
    blockLeftH1.append(blockLeftSpan3)
    blockLeft.append(blockLeftH1)
    let blockLeftH2 = document.createElement("p")
    blockLeftH2.innerHTML = seoObj.p1
    blockLeft.append(blockLeftH2)
    let blockLeftEnd = document.createElement("div")
    blockLeftEnd.classList.add("headerEndDiv")
    blockLeft.append(blockLeftEnd)
    let blockLeftBtn = document.createElement("button")
    let blockLeftVideo = document.createElement("div")
    blockLeftVideo.classList.add("seo-video")
    blockLeftEnd.append(blockLeftBtn)
    blockLeftEnd.append(blockLeftVideo)
   
    
    let blockLeftVideoSpan = document.createElement("span")
    let blockLeftVideoImg = document.createElement("img")
    blockLeftVideoImg.setAttribute("src", seoObj.img2)
    
    blockLeftBtn.innerText = seoObj.button
  blockLeftVideo.innerText = seoObj.span
    
    blockLeftVideo.append(blockLeftVideoSpan)
    blockLeftVideo.append(blockLeftVideoImg)





    seo.append(blockLeft)

    let blockRight = document.createElement("div")
    blockRight.classList.add("seo-right")
    let blockRightImg = document.createElement("img")
    blockRightImg.setAttribute("src", seoObj.img1)
    blockRight.appendChild(blockRightImg)
    seo.append(blockRight)
    rood.append(seo)


}