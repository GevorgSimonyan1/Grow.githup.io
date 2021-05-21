export function Footer2(){

    const rood = document.querySelector("#rood")
    let footer = document.querySelector(".footer")
    let footer2 = document.createElement("div")
    footer2.classList.add("footer-our-company")


    let objFooter2 = {
        title:"Our Company",
        footerArr:["About Us","Our Services","Our Plan","Our Team","Latest News"]
    }
   let footer2Title = document.createElement("h1")
   footer2Title.innerHTML = objFooter2.title
   let footer2Ul = document.createElement("ul")
   let footer2Arr = objFooter2.footerArr
   for(let j = 0; j < footer2Arr.length; j++){
       let footer2Li = document.createElement("li")
       let footer2Link = document.createElement("a")
       footer2Link.setAttribute("href", "#")
       footer2Link.innerHTML = footer2Arr[j]
       footer2Li.append(footer2Link)
       footer2Ul.append(footer2Li)
   }
   footer2.append(footer2Title)
   footer2.append(footer2Ul)

    footer.append(footer2)
    rood.append(footer)

}