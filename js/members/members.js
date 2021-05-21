export function members(){

    let rood = document.querySelector("#rood")
    let members = document.createElement("div")
    members.classList.add("container")
    members.classList.add("members1")

    let  memberObj = {
        title: "Our Expert Team Members",
        outherTitle: "This new-found knowledge may then be used by engineers to create new tools and machines."
    }
    let title = document.createElement("h1")
    title.innerHTML = memberObj.title
    let otherTitle = document.createElement("h2")
    otherTitle.innerHTML = memberObj.outherTitle
    members.append(title)
    members.append(otherTitle)
    let DIV = document.createElement("div")
    members.append(DIV)
    rood.append(members)
    
    const xhr = fetch("https://reqres.in/api/users?page=1")
    .then(y => y.json())
    .then(x =>{
        const user = x.data;
        const users = user.slice(0,4)
       
        
        users.map(user =>{
            let member = document.createElement("div")
            member.classList.add("member1")
            let memberImg = document.createElement("div")
            memberImg.classList.add("member1-img")
            let memberIMG = document.createElement("img")
            memberIMG.setAttribute("src", user.avatar)
            memberImg.append(memberIMG)
            let name = document.createElement("div")
            name.classList.add("name")
            let frsName = document.createElement("span")
            frsName.classList.add("frst")
            frsName.innerHTML = user.first_name
            name.append(frsName)
            let lastName = document.createElement("span")
            lastName.classList.add("last")
            lastName.innerHTML = user.last_name
            name.append(lastName)
            let emailName = document.createElement("p")
            emailName.innerHTML = user.email
            member.append(memberImg)
            member.append(name)
            member.append(emailName)
            DIV.append(member)
            
        })
    })
}