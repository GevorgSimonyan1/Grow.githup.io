import {Footer1} from './footer1/footer1.js'
import {Footer2} from './footer2/footer2.js'
import {Footer3} from './footer3/footer3.js'
import {Footer4} from './footer4/footer4.js'

let footer = document.createElement("div")
footer.classList.add("container")
footer.classList.add("footer")
rood.append(footer)

export function Footer(){
    

    

    Footer1()
    Footer2()
    Footer3()
    Footer4()
    let rood = document.querySelector("#rood")
   let footerDIV = document.createElement("div")
   footerDIV.style.width = "100%"
   footerDIV.style.height = "2px"
   footerDIV.style.backgroundColor = "rgba(169, 169, 169, 0.877)"
   footerDIV.style.marginTop = '50px'
   footerDIV.style.marginBottom = '50px'

   let FOOTER = document.createElement("h4")
   FOOTER.style.marginTop = '50px'
   FOOTER.style.textAlign = "center"
   FOOTER.innerHTML = "Copyright © GrowBe 2021. All Rights Reserved."
   footerDIV.append(FOOTER) 

   rood.append(footerDIV)


   
     
     
     




}
