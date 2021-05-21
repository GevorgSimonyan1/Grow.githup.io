export function Footer3(){
    const rood = document.querySelector("#rood")
    let footer = document.querySelector(".footer")
    let footer3 = document.createElement("div")
    footer3.classList.add("footer-our-services")

    
    
    
    
    
    let objFooter3 = {
        title:"Our Company",
        footerArr:["Digital Marketing","SEO Optimazation","Web Development","Link Building","Terms & Privacy"]
    }
   let footer3Title = document.createElement("h1")
   footer3Title.innerHTML = objFooter3.title
   let footer3Ul = document.createElement("ul")
   let footer3Arr = objFooter3.footerArr
   for(let j = 0; j < footer3Arr.length; j++){
       let footer3Li = document.createElement("li")
       let footer3Link = document.createElement("a")
       footer3Link.setAttribute("href", "#")
       footer3Link.innerHTML = footer3Arr[j]
       footer3Li.append(footer3Link)
       footer3Ul.append(footer3Li)
   }
   footer3.append(footer3Title)
   footer3.append(footer3Ul)


   footer.append(footer3)
   rood.append(footer)
}