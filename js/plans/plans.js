export function plans(){

    let plansObj = {
        title: "Our PLans",
        outerTitle: "Choose the right SEO for you",
        numberAps:"$",
        arr:[
            {
                title:"Plus",
                number: 30,
                monate:"/mounth",
                p: "50GB Bandwidth Business & Financ Analysing 24 Hour Support Customer Managemet",
                btn: "Get Started"

            },
            {
                title:"Beginer",
                number: 55,
                monate:"/mounth",
                p: "50GB Bandwidth Business & Financ Analysing 24 Hour Support Customer Managemet",
                btn: "Get Started"
            },
            {
                title:"Advanced",
                number: 129,
                monate:"/mounth",
                p: "50GB Bandwidth Business & Financ Analysing 24 Hour Support Customer Managemet",
                btn: "Get Started"
            }
        ]
    }

    const rood = document.querySelector("#rood")
    let Plans = document.createElement("div")
    Plans.classList.add("container")
    Plans.classList.add("plans")
    let title = document.createElement("h1")
    title.innerHTML = plansObj.title
    let outerTitle = document.createElement("h3")
    outerTitle.innerHTML = plansObj.outerTitle
    let lists = document.createElement("div")
    lists.classList.add("lists-big")
    
    for(let i = 0; i < plansObj.arr.length; i++){
        let arrList = plansObj.arr[i]
        let ListDiv = document.createElement("div")
        ListDiv.classList.add("lists")
        let ListsTitle = document.createElement("h1")
        ListsTitle.classList.add(`list` + `${i}`)
        ListsTitle.innerHTML = arrList.title
        let ListTitleNumber = document.createElement("div")
        ListTitleNumber.classList.add("list-monate")
        let ListsNumber = document.createElement("span")
        ListsNumber.innerHTML = arrList.number
        ListsNumber.classList.add("number")
        let aps = document.createElement("p")
        aps.classList.add("aps")
        aps.innerHTML = plansObj.numberAps
        ListsNumber.append(aps)
        let ListMonate = document.createElement("span")
        ListMonate.innerHTML = arrList.monate
        ListTitleNumber.append(ListsNumber)
        ListTitleNumber.append(ListMonate)
        let ListText = document.createElement("p")
        ListText.innerHTML = arrList.p
        let butt = document.createElement("button")
        butt.classList.add(`btn` + `${i}`)
        butt.innerHTML = arrList.btn
        ListDiv.append(ListsTitle)
        ListDiv.append(ListTitleNumber)
        ListDiv.append(ListText)
        ListDiv.append(butt)
        lists.append(ListDiv)
    }

    Plans.append(title)
    Plans.append(outerTitle)
    Plans.append(lists)
    rood.append(Plans)
}