export function Footer4(){
    const rood = document.querySelector("#rood")
    let footer = document.querySelector(".footer")
    
    let footer4 = document.createElement("div")
    footer4.classList.add("footer-contact-us")


    let footer4Obj = {
        title: "Contact Us",
        sityName:" Location: ",
        sity:" 1370 Orvilly Rot APT, New York, USA ",
        emailName: " Email: ",
        email:" growbeinfo@gmail ",
        phoneName: "Phone: ",
        phone: " +324-9332-5018 "

    }
    let footer4Title = document.createElement("h1")
    footer4Title.innerHTML = footer4Obj.title
    footer4.append(footer4Title)
    let footer4Sity = document.createElement("div")
    let footer4Span = document.createElement("strong")
    footer4Span.innerHTML = footer4Obj.sityName
    let footer4Strong = document.createElement("span")
    footer4Strong.innerHTML  =footer4Obj.sity
    footer4Sity.append(footer4Span)
    footer4Sity.append(footer4Strong)
    footer4.append(footer4Sity)
    let footer4Email = document.createElement("div")
    let footer4EmailSpan = document.createElement("strong")
    footer4EmailSpan.innerHTML = footer4Obj.emailName
    let  footer4EmailStrong = document.createElement("span")
    footer4EmailStrong.innerHTML  =footer4Obj.email
    footer4Email.append(footer4EmailSpan)
    footer4Email.append(footer4EmailStrong)
    footer4.append(footer4Email)
    let footer4Phone = document.createElement("div")
    let footer4PhoneSpan = document.createElement("strong")
    footer4PhoneSpan.innerHTML = footer4Obj.phoneName
    let  footer4PhoneStrong = document.createElement("span")
    footer4PhoneStrong.innerHTML = footer4Obj.phone
    footer4Phone.append(footer4PhoneSpan)
    footer4Phone.append(footer4PhoneStrong)
    footer4.append(footer4Phone)
    footer.append(footer4)
    rood.append(footer)


}