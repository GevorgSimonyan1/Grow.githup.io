export function icons(){
   let rood = document.querySelector("#rood")
   let block = document.createElement("div")
   block.classList.add("sponsors")
   block.classList.add("container")
    let images = ["./images/png/1.png","./images/png/2.png","./images/png/3.png","./images/png/4.png","./images/png/5.png","./images/png/6.png"]

    for(let i = 0; i < images.length; i++){
      let blockImg = document.createElement("img")
      blockImg.classList.add("spons")
      blockImg.setAttribute("src", images[i])
      block.append(blockImg )
    }
    rood.append(block)
   }

 