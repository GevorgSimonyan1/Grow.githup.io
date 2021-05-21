export function number(){
   let  arr = [
       {
           text: "Happy Clients",
           number: "95",
           color: "white"
       },
       {
           text:"Project Done",
           number:"115",
           color: "#F3602D"
       },
       {
           text:"Years Of Experince",
           number: "8+",
           color: "#149211"

       },
       {
           text:"National Awards",
           number:12,
           color: "#FFC700"

       }
   ]

    let rood = document.querySelector("#rood")
    let Number = document.createElement("div")
    Number.classList.add("big-number")
    Number.classList.add("container")
    let numberUl = document.createElement("ul")
    numberUl.classList.add("number")
    Number.append(numberUl)
    

   for(let i = 0; i < arr.length; i++){
       let numberLi = document.createElement("li")
       numberLi.style.color = arr[i].color
       let numberDiv = document.createElement("div")
       numberDiv.classList.add("number-list")
       let numberNum = document.createElement("p")
       numberNum.classList.add("digit")
       numberNum.innerHTML = arr[i].number
       let numberText = document.createElement("p")
       numberText.classList.add("digit-text")
       numberText.innerHTML = arr[i].text
       numberDiv.append(numberNum)
       numberDiv.append(numberText)
       numberLi.append(numberDiv)
       numberUl.append(numberLi)
   }
   rood.append(Number)

}