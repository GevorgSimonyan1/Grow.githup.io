export function Footer1(){

    
    const rood = document.querySelector("#rood")
    let footer = document.querySelector(".footer")
    let footer1 = document.createElement("div")
    footer1.classList.add("footer-logo")
    let objFooter1 = {
        img1:'./images/logo.png',
        img2:'./images/png/GrowBe (2).png',
        about: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate business through revolutionary.",
        linksArr:["./images/links/fb.png","./images/links/twitter.png" ,"./images/links/in.png", "./images/links/google.png"],
    }
    let footer1IMg1Div = document.createElement("div")
    footer1IMg1Div.classList.add("footer-logos")
    let footer1Img1 = document.createElement("img")
    footer1Img1.setAttribute("src",objFooter1.img1)
    let footerImg2 = document.createElement("img")
    footerImg2.setAttribute("src",objFooter1.img2)
    footer1IMg1Div.append(footer1Img1)
    footer1IMg1Div.append(footerImg2) 
    let footerAbout = document.createElement("p")
    footerAbout.innerHTML = objFooter1.about
    footer1.append(footer1IMg1Div)
    footer1.append(footerAbout)
    let linksDiv = document.createElement("div")
    linksDiv.classList.add("header-links")
    let links = objFooter1.linksArr
    for(let i = 0; i< links.length;  i++){
        let linkDiv = document.createElement("div")
        linkDiv.classList.add("link-list")
        let linkImg = document.createElement("img")
        linkImg.setAttribute("src", links[i])
        linkDiv.append(linkImg)
        linksDiv.append(linkDiv)    
    }
    footer1.append(linksDiv)
 
    footer.append(footer1)
    rood.append(footer)
}