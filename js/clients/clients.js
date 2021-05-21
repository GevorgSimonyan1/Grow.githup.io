export function clients(){
    let obj  = {
        title: "Our Clients Say",
        about: "Our in - house search engine experts deliver profitable Google, Bing, Yahoo Ranking.",
        btn1: "next",
        btn2: "previus",
        arr: [
            {
                about:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident.",
                img:"./images/slider/person-men.png",
                name: "Rabith Halson",
                proff: "Web Design",
                backgraund: "rgba(226, 199, 199, 0.134)"
            },
            {
                about:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident.",
                img:"./images/slider/person-women.png",
                name: "Selena Roy",
                proff: "UI Designer",
                backgraund:"rgba(0, 0, 0, 0.134)"
            },
            {
                about:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident.",
                img:"./images/slider/person-men.png",
                name: "Rabith Halson",
                proff: "Web Design",
                backgraund: "rgba(226, 199, 199, 0.134)"
            },
            {
                about:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident.",
                img:"./images/slider/person-women.png",
                name: "Selena Roy",
                proff: "UI Designer",
                backgraund: "rgba(0, 0, 0, 0.134)"
            },
        ]
    }

    let array = obj.arr
    let rood = document.querySelector("#rood")
    let clients = document.createElement("div")
    clients.classList.add("container")
    clients.classList.add("clients")
    let slider = document.createElement("div")
    slider.classList.add("slider-block")
    let btnNext = document.createElement("button")
    btnNext.innerHTML = obj.btn1
    let sliderMacht = document.createElement("div")
    sliderMacht.classList.add("slider")

    array.map(slid => {
        let block = document.createElement("div")
        block.classList.add("now-block")
        block.style.backgroundColor = slid.backgraund
        let text = document.createElement("p")
        text.innerHTML = slid.about
        let imgBlock = document.createElement("div")
        imgBlock.classList.add("block-img-now")
        let img = document.createElement("img")
        img.setAttribute("src", slid.img)
        imgBlock.append(img)
        let name = document.createElement("h1")
        name.innerHTML = slid.name
        let proff = document.createElement("h5")
        proff.innerHTML = slid.proff
        block.append(text)
        block.append(imgBlock)
        block.append(name)
        block.append(proff)
        sliderMacht.append(block)
    })
    let btnPrevius = document.createElement("button")
    btnPrevius.innerHTML = obj.btn2
    let btnGroup = document.createElement("div")
    btnGroup.classList.add("btn-group")
    btnGroup.append(btnNext)
    slider.append(sliderMacht)
    btnGroup.append(btnPrevius)
    
    clients.append(slider)
    clients.append(btnGroup)
    rood.append(clients)

let offset = 0;

// sliderMacht
btnNext.addEventListener("click",function(){
    offset -= 100 
    if(offset < 0){
        offset = 300
    }
    sliderMacht.style.left = -offset + "%"

})
// sliderMacht
btnPrevius.addEventListener("click",function(){
    offset += 100
    if(offset > 300){
        offset = 0
    }
    sliderMacht.style.left = -offset + "%"

})



}