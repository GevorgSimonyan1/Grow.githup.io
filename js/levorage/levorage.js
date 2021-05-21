export function levorage(){
   

    class List {
        constructor(option){
            this.icon = option.icon;
            this.title = option.title;
            this.about = option.about;
            this.more = option.more
        }
    }
    
    const list1 = new List({
        icon: "./images/Vactor/Vector0.png",
        title: "Grow Your Business",
        about: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        more: "Read More...",
    })

    const list2 = new List({ 
        icon: "./images/Vactor/Vector1.png",
        title: "Get Quality Ieads",
        about: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        more: "Read More..."
    })

    const list3 = new List({
        icon: "./images/Vactor/Vector 2.png",
        title: "Drive More Sales",
        about: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        more: "Read More..."
    })

 

    const arrend = [list1, list2, list3]
    let rood = document.querySelector("#rood")
    let levorBlock = document.createElement("div")
    levorBlock.classList.add("levorage")
    levorBlock.classList.add("container")
    for(let i = 0; i < arrend.length; i++){
       

        let blockList = document.createElement("div");
        blockList.classList.add("lists-levorage");
        let blockListDiv = document.createElement("div")
        blockListDiv.classList.add("block-List-img");
        let blockListIcon = document.createElement("img")
        blockListIcon.setAttribute("src", arrend[i].icon)
        blockListDiv.append(blockListIcon)
        let blockListTitle = document.createElement("h2")
        blockListTitle.innerHTML = arrend[i].title
        let blockListAbout1 = document.createElement("h5")
        blockListAbout1.innerHTML = arrend[i].about
        let blockListAbout = document.createElement("p")
        blockListAbout.innerHTML = arrend[i].more
        blockList.append(blockListDiv)
        blockList.append(blockListTitle)
        blockList.append(blockListAbout1)
        blockList.append(blockListAbout)
        levorBlock.append(blockList)
        
    }

rood.append(levorBlock)

}