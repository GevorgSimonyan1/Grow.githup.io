export function choose(){
    let chooseStart = {
        title:"Why You Should Choose Us.",
        other:"Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts."
    }
    
    let rood = document.querySelector("#rood")
    let chooseBlock = document.createElement("div")
    chooseBlock.classList.add("choose")
    chooseBlock.classList.add("container")

    let chooseDivBlock = document.createElement("div")
    chooseDivBlock.classList.add("choose-div-enter")
    let chooseTitleStart = document.createElement("h1")
    chooseTitleStart.innerHTML = chooseStart.title
    let chooseOther = document.createElement("p")
    chooseOther.innerHTML = chooseStart.other
    chooseBlock.append(chooseTitleStart)
    chooseBlock.append(chooseOther)
    chooseBlock.append(chooseDivBlock)
    rood.append(chooseBlock)

    class Choose {
        constructor(option){
            this.imgChoose = option.imgChoose;
            this.title = option.title
            this.afterTitle = option.afterTitle
            this.btn =option.btn
            this.btnIcon = option.btnIcon
        }
    }

    let chooseList1 = new Choose ({
        imgChoose: "./images/foto1.png",
        title: "Keyword Research",
        afterTitle: "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
        btn:"Learn More",
        btnIcon: "./images/Vactor/VectorRight.png"
    })
    let chooseList2 = new Choose ({
        imgChoose: "./images/foto2.png",
        title: "Seo Optimazadion",
        afterTitle: "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
        btn:"Learn More",
        btnIcon: "./images/Vactor/VectorRight.png"
    })
    let chooseList3 = new Choose ({
        imgChoose: "./images/foto2.png",
        title: "Social Marketing",
        afterTitle: "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
        btn:"Learn More",
        btnIcon: "./images/Vactor/VectorRight.png"
    })

    const arrend = [chooseList1, chooseList2, chooseList3]
    

    for(let i = 0; i < arrend.length; i++){
        

        let blockList = document.createElement("div");
        blockList.classList.add("lists-choose");
        let blockListDiv = document.createElement("div")
        blockListDiv.classList.add("block-List-img");
        let blockListImg = document.createElement("img")
        blockListImg.setAttribute("src", arrend[i].imgChoose)
        blockListDiv.append(blockListImg)
        let blockListTitle = document.createElement("h2")
        blockListTitle.innerHTML = arrend[i].title
        let blockListAfterTitle = document.createElement("p")
        blockListAfterTitle.innerHTML = arrend[i].afterTitle
        let blockListBtn = document.createElement("button")
        let blockLIstBtnWrited = document.createElement("span")
        blockLIstBtnWrited.innerHTML = arrend[i].btn
        let blockListBtnDiv = document.createElement("div")
        let BlockListBtnSpan = document.createElement("img")
        BlockListBtnSpan.setAttribute("src",arrend[i].btnIcon)
        blockListBtnDiv.append(BlockListBtnSpan)
        blockListBtn.append(blockLIstBtnWrited)
        blockListBtn.append(blockListBtnDiv)
        blockList.append(blockListDiv)
        blockList.append(blockListTitle)
        blockList.append(blockListAfterTitle)
        blockList.append(blockListBtn)
        chooseDivBlock.append(blockList)
        chooseBlock.append(chooseDivBlock)
    }
    
}