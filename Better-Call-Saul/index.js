//Model
const container = document.querySelector(".container")
let skipScroll = true
//HOME----------------------------------------------------|

//VideoPLayer1
let paused = true
let max;
let progress_interval;
let vid_started = false;
let fullscreen = false;

//Home testimonials
let idx = 0
const testimonials = [
    {
        photoUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        text: "Saul's the real deal, almost got my licence suspended for a dui but i got off with a small fine.",
        name: "John N"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Got a bit wild at a party and did some things i dont remember doing, luckily Saul's silver tongue got that judge off my back!",
        name: "Trevor"
    },
    {
        photoUrl: "https://imagez.tmz.com/image/f1/4by3/2019/07/17/f1949f71f6724888a7af493b02be5ee1_xl.jpg",
        text: "Some crooked cop tricked me into saying some stuff but it was alright cause Saul got me off the hook!",
        name: "Badger"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        text: "Got a sweet cash payout from the sky lodge company due to my accident. Wouldnt have gotten it without Saul.",
        name: "Kenny"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Good man, i recommend",
        name: "Trent"
    },
]

//Contact---------------------------------------------------| 
let sent = false
let errMsg = ""
let nameVal = ""
let emailVal = ""
let msgVal = ""


//MainTestimonials---------------------------------------------|
const textTestimonials = [
    {
        photo: "https://imagez.tmz.com/image/f1/4by3/2019/07/17/f1949f71f6724888a7af493b02be5ee1_xl.jpg",
        text: "Some crooked cop tricked me into saying some stuff but it was alright cause Saul got me off the hook!",
        name: "Badger"
    },
    {
        photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        text: "Saul's the real deal, almost got my licence suspended for a dui but i got off with a small fine.",
        name: "John N"
    },
    {
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        text: "Got off completely scot free thanks to Saul, couldnt recommend him more.",
        name: "Simon S"
    },
    {
        photo: "https://images.unsplash.com/photo-1616570993271-d9d56f8933a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
        text: "Community service beats jail, thanks Saul.",
        name: "Janey"
    },
    {
        photo: "https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Got a bit wild at a party and did some things i dont remember doing, luckily Saul's silver tongue got that judge off my back!",
        name: "Trevor"
    },
    {
        photo: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "People get anger issues sometimes. Why should i be punished for mine? Am grateful for what Saul did for me 10/10.",
        name: "Dill"
    },
    {
        photo: "https://images.unsplash.com/photo-1551108168-229956dd31bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "How do i submit?",
        name: "Ben J"
    },
    {
        photo: "https://images.unsplash.com/photo-1609940222653-c8b061ee4615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Wudnt my fault the dang scooter went right in front of me. I still need to do community service but it couldve been worse.",
        name: "Billy"
    },
    {
        photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        text: "I dread to think what would have happened to my nephew had we not seen Saul's commercial. Young men make mistakes sometimes and shouldnt be harshly punished for them, even if those mistakes are indecent exposure.",
        name: "Diane"
    },
    {
        photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Good man, i recommend",
        name: "Trent"
    },
    {
        photo: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        text: "Got a sweet cash payout from the sky lodge company due to my accident. Wouldnt have gotten it without Saul.",
        name: "Kenny"
    },
    {
        photo: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80",
        text: "Best lawyer ever!",
        name: "Tom"
    }
]

let highlitedText = ""
let highlitedImg = ""
let highlitedName = ""

let highlitedVisibility = false
let currentTestimonial;
let textTestis = false
let vidTestis = false
let currentVid = 1

//Consultations
let today = new Date()
let currentYear = new Date().getFullYear()
let monthIndex = new Date().getMonth()
let currentDay = new Date().getDate()
let currentWeekDay = new Date().getDay()
let currentTime = new Date().getHours()
let date2 = new Date()

date2.setDate(today.getDate() - currentWeekDay + 1)
let firstWeekDay = date2.getDate()

date2.setDate(today.getDate() - currentWeekDay + 7)
let lastWeekDay = date2.getDate()
today = new Date()
date2 = new Date()


const months = [
    "January", 
    "Febuary", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November",
    "December"];

let times = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "-",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
]

let selectedTime;
let currentSchedule = 0
let busyTimes = [
    "0-3-0",
    "0-3-1",
    "0-3-2",
    "0-3-4",
    "0-3-5",
    "0-4-0",
    "0-4-2",
    "0-4-4",
    "0-4-0",
    "1-0-0",
    "1-0-1",
    "1-0-4",
    "1-1-1",
    "1-2-2"
]

let CcurrentVid = 1
let confirmMsg = ""
let CNameVal = ""
let CPhoneVal = ""
let confirmed = false


//FAQ
cardsOpen = [false, false, false, false, false]

//View


show(HomeView())
function show(page){
    let html = ""
    let nav_bar = /*HTML*/`
    ${page == HomeView()? '<div class="nav_and_img">' : ''}
    <nav class="navFixed">
    <div class="nav-main">
        <div class="nav-header">
            <img class="logo" src="./images/Better_Call_Saul_logo.svg.png" alt="logo">
            <i onclick="showMenu()" class="fa-solid fa-bars"></i>
        </div>
        <ul class="menu">
            <li>
                <a onclick="show(HomeView())">Home</a>
            </li>
            <li>
                <a onclick="show(ContactView())">Contact</a>
            </li>
            <li>
                <div onmouseover="showDropdown()" onmouseleave="hideDropdown()" class="dropdown">
                    <div class="dropbtn">About
                      <i class="fa fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                      <a onclick="textTestis = false; vidTestis = false; show(TestimonialView());">Testimonials</a>
                      <a onclick="show(ConsultationView())">Consultations</a>
                      <a onclick="show(FaqView())">FAQ</a>
                    </div>
                  </div>
            </li>
        </ul>
    </div>
</nav>
${page == HomeView()? " <img class='topImg' src='./images/Saul.jpg' alt=''> </div>" : ""}`

let footer = `
    <footer style="font-size: larger; ${page == ContactView()? "margin-top: 400px;" : ""}">
        <div>
            <div style="font-weight: bold;">Address:</div>
            <div class="footer-text">9800 Montgomery Blvd NE, Albuquerque, NM, department 3, office 12</div>
        </div>

        <div>
            <div style="font-weight: bold;">Post Address:</div>
            <div class="footer-text">PostBox 99999 <br> 
            99999 Montgomery</div>
        </div>

        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">Phone:</div>
            <div class="footer-text">(505) 164 CALL</div>
            <div style="margin-top: 40px; font-weight: bold;">Email:</div>
            <div class="footer-text">BetterCallSaul@Saulmail.com</div>
        </div>
    </footer>`

    html += nav_bar
    html += page
    html += footer
    container.innerHTML = html
    resetHelpers()
    if(skipScroll == false) {scrollTo(0, 0)}
    skipScroll = false
}


function HomeView(testimonial){
    //VideoPLayer1
    paused = true
    max = 0;
    progress_interval = 0;
    vid_started = false;
    fullscreen = false;
    
    if (testimonial == true){
        idx++
        skipScroll = true}
    if (testimonial == false){
        idx--
        skipScroll = true}
    if (idx == 5) {idx = 0}
    if (idx == -1) {idx = 4}

    let next = idx + 1;
    let prev = idx - 1;
    if(next == 5){next = 0}
    if(prev == -1){prev = 4}

    let content = /*HTML*/`


    <div class="text">
    <div class="title">
        <i>Saul Goodman, attorney at law</i>
    </div>

    <div class="mainText">
        
        <img class="SaulPic1" src="./images/SaulGoodman.jpg" alt="">
        <div class="innerText">
            <div>Hey, have you ever: </div>
            <li>been wrongfully accused of a misconduct, misdemeanor or even a felony?</li>
            <li>been sued because that lousy pedestrian wasnt watching where he was going?</li>
            <li>been tired of those public defender slack offs sleeping on the job?</li>
            <li style="margin-bottom: 90px;">craved for an attorney that will fight for your constitutional rights day and night?</li>
            <div>Well then you Better Call Saul!™</div>
           <!-- <p>Saul Goodman is a reputable and experienced lawyer with over a decade of experience. But what seperates Saul from the rest of the
                herd is his unwavering belief that every man, woman and child in this country is innocent until proven guilty. Where some see public defecation,
                Saul sees a misguided soul that has been led astray by no fault of their own.
            </p> -->
            <p>Saul Goodman offers expert legal consultation and representation at a reasonable price, hire Saul and settle only for the best
                of the best. But hey, you dont have to take it from me, check out the testimonials of some of my highly satisfied clients.
            </p>
        </div>
        <img class="scalesImg" src="./images/scales-of-justice.svg.png" alt="">
    </div>



    <div id="testimonials">
            <div onclick="show(HomeView(true))" class="testi Tcontainer2">
            <div>
                <img class="TestimonialImg img2" src="${testimonials[next].photoUrl}" alt="">
                <p class="Ttext2">
                    ${testimonials[next].text}
                </p>
                <h4>${testimonials[next].name}</h4>
            </div>
        </div>

        <div class="testi Tcontainer1">
        <i onclick="show(HomeView(true))" class="fa-solid fa-arrow-right"></i>
        <i onclick="show(HomeView(false))" class="fa-solid fa-arrow-left"></i>
            <div>
                <img class="TestimonialImg" src="${testimonials[idx].photoUrl}" alt="">
                <p class="Ttext1">
                    ${testimonials[idx].text}
                </p>
                <h4>${testimonials[idx].name}</h4>
            </div>
        </div>

        <div onclick="show(HomeView(false))" class="testi Tcontainer2">
            <div>
                <img class="TestimonialImg img2" src="${testimonials[prev].photoUrl}" alt="">
                <p class="Ttext2">
                    ${testimonials[prev].text}
                </p>
                <h4>${testimonials[prev].name}</h4>
            </div>
        </div>
    </div>   
    
    

    <div class="secondary-text">
        <div>The above is merely a sample. For more testimonials from previous clients. Please check
            out our about section.
        </div>

        <img class="SaulImg3" src="./images/Saul-Suits.jpg" alt="">
        <p class="seller">So what are YOU waiting for?
            Book an appointment now and for a limited time get 50% off your first consultation and finally get the legal representation
            you deserve!</p>
        </div>
    </div>

    <div class="vid-container">
        <video onmouseleave="hideDisplayProgress(false)" onmouseover="hideDisplayProgress(true)" onclick="playPauseVid()" src="SaulCommercial.mp4"></video>
        
        <i id="play_button" onclick="playPauseVid()" class="fa-solid fa-play" aria-hidden="true"></i>
        <div  onmouseleave="hideDisplayProgress(false)" onmouseover="hideDisplayProgress(true)" class="vid-ui" id="vid-ui">
            <div class="vid-ui2">
            
                <input oninput="setProgress()" id="vidProgress" type="range" min="0" value="0">
                
                <div onmouseover="hideDisplayVolume(true)" onmouseleave="hideDisplayVolume(false)" class="volume">
                    <div id="vol-bar-cont" class="vol-bar-cont">
                        <input oninput="setVolume(this)" class="vol-bar" min="0" max="10" type="range">
                    </div>
                    <i id="volume" class="fa-solid fa-volume-high"></i>
                </div>
                <i onclick="openFullscreen()" class="fa-solid fa-expand"></i>
            </div>
        </div>
        
    </div>
    `
    return content
}


function ContactView(){
    let content = ""
    const preSent = `
        <div class="inputs">
            <input oninput="nameVal = this.value" placeholder="Name" type="text">
            <input oninput="emailVal = this.value" placeholder="Email" type="text">
            <textarea oninput="msgVal = this.value" placeholder="Message"></textarea>
        </div>
        <div class="btn_cntr">
            <button onclick="send()">Send</button> <span style="color: red;">${errMsg}</span>
        </div>`

    const afterSent = `
    <div style="color: green; font-size: large;">Your message has been recieved. We will get back to you as soon as we are able.</div>`


    content += /*HTML*/`
    <div class="sideImg">
        <img src="./images/3951411 (2).jpg" alt="saul on phone">
    </div>

    <i class="titleC">Contact Saul Goodman and associates today!</i>
<div class="contentC">
    <div class="options">
        <li>If you have an inquiry, please check out our <b style="cursor: pointer;">FAQ</b> page before proceeding further</li>
        <li>Call us on our land-line: <b>(505) 164 CALL</b></li>
        <li>Send us an email at <b>BetterCallSaul@Saulmail.com</b> or use the box located to the right for convenience</li>
        <li>If you want to speak to Saul directly you can book a consultation through any of the methods above
        or click <b style="cursor: pointer;">here</b> to book a consultation here on our website</li>
    </div>
    <div class="sender">
        ${sent == true? afterSent : preSent}
    </div>
</div>
`
return content
}

function TestimonialView(){
    let html = ""
    html = `

    <div ${highlitedVisibility == true? "" : "style='display: none;'"} class="backgroundfog"></div>
    <div ${highlitedVisibility == true? "" : "style='display: none;'"} class="highlitedTestimonial">
        <div class="textT highlited">
        <i onclick="selectTtestimonial(${currentTestimonial + 1})" class="fa-solid fa-arrow-right arrowT"></i>
        <i onclick="selectTtestimonial(${currentTestimonial - 1})" class="fa-solid fa-arrow-left arrowT"></i>
        <b onclick="highlitedVisibility = false; skipScroll = true; show(TestimonialView())" class="TestimonialX">X</b>
            <img src="${highlitedImg}" alt="tstimg">
            <p>${highlitedText}</p>
            <i>${highlitedName}</i>
        </div>
    </div>

    <div class="contentT">
        

        <div onclick="toggleVidTestimonials()" ${vidTestis == true? "" : "style='width: 20px; overflow: hidden; cursor: pointer;'"} class="videoTestimonials TestimonialVidContainer">
        <i ${vidTestis == true? "" : "style='display: none;'"}>Video Testimonials</i>

            <div ${vidTestis == true? "" : "style='display: none;'"} class="vid-container">
            <video onmouseleave="hideDisplayProgress(false)" onmouseover="hideDisplayProgress(true)" onclick="playPauseVid(event)" src="./vidTestimonials/Testimonial${currentVid}.mp4"></video>
            
            <i id="play_button" onclick="playPauseVid(event)" class="fa-solid fa-play" aria-hidden="true"></i>
            <div onclick="stopBubbling(event)" onmouseleave="hideDisplayProgress(false)" onmouseover="hideDisplayProgress(true)" class="vid-ui" id="vid-ui">
                <div class="vid-ui2">
                
                    <input onclick="stopBubbling(event)" oninput="setProgress(event)" id="vidProgress" type="range" min="0" value="0">
                    
                    <div onmouseover="hideDisplayVolume(true)" onmouseleave="hideDisplayVolume(false)" class="volume">
                        <div id="vol-bar-cont" class="vol-bar-cont">
                            <input onclick="stopBubbling(event)" oninput="setVolume(this, event)" class="vol-bar" min="0" max="10" type="range">
                        </div>
                        <i onclick="stopBubbling(event)" id="volume" class="fa-solid fa-volume-high"></i>
                    </div>
                    <i onclick="openFullscreen(event)" class="fa-solid fa-expand"></i>
                </div>
            </div>
            </div>

        <div ${vidTestis == true? "" : "style='display: none;'"} class="vidThumbnails">
            <div>
                <div onclick="switchVid(1, event); skipScroll = true" class="Tthumbnail">
                    <img src="./vidTestThumbnails/Badger.jpg" alt=""> <div>Watch Badger's testimonial</div>
                </div>
                <div onclick="switchVid(2, event); skipScroll = true" class="Tthumbnail">
                    <img src="./vidTestThumbnails/Wendy.jpg" alt=""> <div>Watch Wendy's testimonial</div>
                </div>
                <div onclick="switchVid(3, event); skipScroll = true" class="Tthumbnail">
                    <img src="./vidTestThumbnails/Carl.jpg" alt=""> <div>Watch Carl's testimonial</div>
                </div>
            </div>
            <img src="./images/SaulAdd.jpg" alt="">
        </div>

        </div>

        <div ${vidTestis == true || textTestis == true ? "style='display: none;'" : ""} class="initialText">
            <i class="titleT">Testimonials</i>
            <p>If you are having doubts about the reliability of our services, here you can take a look at the testimonials of some of our
            previous and ongoing clients.</p>

            <p>You can view some written testimonials by clicking on the white bar to the right.</p>
            <p>Or you can view some video testimonials by clicking on the white bar to the left.</p>

            <img src="./images/Interview.jpg" alt="">
        </div>

        <div onclick="toggleTextTestimonials()" ${textTestis == true? "" : "style='width: 20px; overflow: hidden; cursor: pointer;'"} class="textTestimonials">
        <i ${textTestis == true? "" : "style='display: none;'"}>Text Testimonials</i>
        <div class="innerTextTestimonials">`
            
    for (let i = 0; i < textTestimonials.length; i++){
        let newTest = /*HTML*/`
        <div ${textTestis == true? "" : "style='display: none;'"} onclick="selectTtestimonial(${i}, event)" class="textT">
            <img src="${textTestimonials[i].photo}" alt="tstimg">
            <p>${textTestimonials[i].text}</p>
            <i>${textTestimonials[i].name}</i>
        </div>`
        html+= newTest
    }
    html += `
                </div>
            </div>
        </div>`


    return html
}





function ConsultationView(){
    let html = ""
    html = `
    <div class="Consultations">
            <i class="Ctitle">Consultations</i>
            <div class="c-text">
                <p>Book a consultation session with Saul and get the ball rolling.</p>
            </div>
            
                <div class="confirmC">
                    ${confirmed == true? confirmMsg : `
                    <input oninput="CNameVal = this.value" placeholder="Name" type="text" name="" id="">
                    <input oninput="CPhoneVal = this.value" placeholder="Phone Number" type="number" name="" id="">
                    <span style="color: red;">${confirmMsg}</span>
                    <button onclick="confirmTime()">confirm</button>`}
                    
                </div>

                <div class="schedule">
                    <div class="dates"> ${firstWeekDay}-${lastWeekDay} ${months[monthIndex]} ${currentYear}</div>
                    <div class="weekdays">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>
                    <div class="times">`

                    for (let i = 0; i < 5; i++){
                        html += `<div>`
                        for (let index = 0; index < times.length; index++){
                            let checkTime = currentSchedule + "-" + i + "-" + index

                            html += `<div ${busyTimes.includes(checkTime) || currentSchedule < 0 || (currentSchedule==0 && i < currentWeekDay)?"style='background: red;'": ""} ${selectedTime == checkTime && (times[index] != "-" && !busyTimes.includes(checkTime))? "style='background: green;'":""}
                            onclick="selectTime('${currentSchedule}-${i}-${index}', ${i})">${times[index]}</div>`
                        }
                        html += `</div>`
                    }
                        
                    html +=`
                        <div>
                            -
                        </div>
                        <div>
                            -
                        </div>
                        
                    </div>
                </div>
            
                <div class="next">
                <span onclick="changeSchedule(false)">◀Prev</span>
                <span onclick="changeSchedule(true)">Next▶</span>
                </div>
            

            <p class="c-text2">Not convinced? Check out the <b style="cursor: pointer;">testimonials</b> 
            section and see what dozens of my previous highly satisfied customers have to say.</p>

            <img class="Cimg" src="./images/SaulWithClients.jpg" alt="S">
            
            <p class="c-text">Still not convinced? Alright because we're such good friends ill give you a couple freebies
            in these videos here but don't tell any of my other clients all right?</p>
            </div>
            
            
            
            <div class="vid-container">
                
                <video onmouseleave="hideDisplayProgress(false)" onmouseover="hideDisplayProgress(true)" onclick="playPauseVid()" src="./consVids/cons${CcurrentVid}.mp4"></video>
                
                <i id="play_button" onclick="playPauseVid()" class="fa-solid fa-play" aria-hidden="true"></i>
                <div  onmouseleave="hideDisplayProgress(false)" onmouseover="hideDisplayProgress(true)" class="vid-ui" id="vid-ui">
                    <div class="vid-ui2">
                    
                        <input oninput="setProgress()" id="vidProgress" type="range" min="0" value="0">
                        
                        <div onmouseover="hideDisplayVolume(true)" onmouseleave="hideDisplayVolume(false)" class="volume">
                            <div id="vol-bar-cont" class="vol-bar-cont">
                                <input oninput="setVolume(this)" class="vol-bar" min="0" max="10" type="range">
                            </div>
                            <i id="volume" class="fa-solid fa-volume-high"></i>
                        </div>
                        <i onclick="openFullscreen()" class="fa-solid fa-expand"></i>
                    </div>
                </div>
                <div class="next2">
                <span onclick="changeVid(false)">◀Prev</span> <span onclick="changeVid(true)">Next▶</span>
            </div>
            </div>
            
            
            
            `


        return html
}






function FaqView(){
    let html=`
    <div class="Faq-background"></div>
    <div class="faq">
        <i class="FaqTitle">FAQ</i>
        <div class="card card-1">
            <h1 class="header">Do You Accept All major Credit Cards?
                <i onclick="openCard(0)" class="fa-solid ${cardsOpen[0] == false? "fa-plus" : "fa-minus"}"></i>
            </h1>
            <div class="text-box ${cardsOpen[0] == false? "" : "show-text"}">
                <hr>
                <div>
                    Yes, Except for american express.
                </div>
            </div>
        </div>
        <div class="card card-2">
            <h1 class="header">Where did you get your degree?
                <i onclick="openCard(1)" class="fa-solid ${cardsOpen[1] == false? "fa-plus" : "fa-minus"}"></i>
            </h1>
            <div class="text-box ${cardsOpen[1] == false? "" : "show-text"}">
                <hr>
                <div>
                    I graduated from the fine institution of the University of American Samoa. It is from there where
                    I began my journey to uphold the constitutional rights of every person in this country.
                </div>   
            </div>
        </div>
        <div class="card card-3">
            <h1 class="header">What are your rates?
                <i onclick="openCard(2)" class="fa-solid ${cardsOpen[2] == false? "fa-plus" : "fa-minus"}"></i>
            </h1>
            <div class="text-box ${cardsOpen[2] == false? "" : "show-text"}">
                <hr>
                <div>
                    My consultation sessions go for 400$ an hour at this time. My rates on
                    other services such as legal representation are heavily dependent on the situation and services required and
                    as such is usually determined at consultation.
                </div>
            </div>
        </div>
        <div class="card card-3">
            <h1 class="header">Will you get me off the hook
                <i onclick="openCard(3)" class="fa-solid ${cardsOpen[3] == false? "fa-plus" : "fa-minus"}"></i>
            </h1>
            <div class="text-box ${cardsOpen[3] == false? "" : "show-text"}">
                <hr>
                <div>
                    I make no promises on results. But i can promise you that you will be receiving the best legal representation
                    that money can buy.
                </div>
            </div>
        </div>
        <div class="card card-3">
            <h1 class="header">What else do i write here?
                <i onclick="openCard(4)" class="fa-solid ${cardsOpen[4] == false? "fa-plus" : "fa-minus"}"></i>
            </h1>
            <div class="text-box ${cardsOpen[4] == false? "" : "show-text"}">
                <hr>
                <div>
                    I dont know, make something up.
                </div>
            </div>
        </div>
    </div>`

     return html
}






//controller
function stopBubbling(event){
    event.stopPropagation();
}





//Nav

function showMenu(){
    menu.classList.toggle("show-menu")
}

function showDropdown(){
    dropdown.style.height = "auto"
}

function hideDropdown(){
    dropdown.style.height = "0"
}






// CONTACT------------------------------------------------------|



function send(){
    if(nameVal != "" && emailVal != "" && msgVal != ""){
        sent = true
        errMsg = ""
        show(ContactView())
        sent = false
        nameVal = ""
        emailVal = ""
        msgVal = ""}
    else {errMsg = "Please make sure youve filled out your name, email and entered a message to send."
        show(ContactView())}
}










//Testimonials----------------------------|

function switchVid(vidNum, event){
    currentVid = vidNum
    event.stopPropagation()
    show(TestimonialView())
}

function selectTtestimonial(index, event){
    currentTestimonial = index
    highlitedVisibility = true
    highlitedImg = textTestimonials[index].photo
    highlitedName = textTestimonials[index].name
    highlitedText = textTestimonials[index].text
    skipScroll = true
    
    show(TestimonialView())
    event.stopPropagation();
}

function toggleVidTestimonials(){
    skipScroll = true
    if (vidTestis == false){vidTestis = true}

    else{vidTestis = false}
    
    show(TestimonialView())
}

function toggleTextTestimonials(){
    skipScroll = true
    if (textTestis == false){textTestis = true}

    else{textTestis = false}
    
    show(TestimonialView())
}



//Consultations-------------------------------------------|
function confirmTime(){
    if(selectedTime == undefined){confirmMsg = "Please choose an available time to book your appointment."
    show(ConsultationView())
    return}
    if(CNameVal.length < 3){confirmMsg = "Name must be at least 3 characters long"
    show(ConsultationView())
    return}
    if(CPhoneVal.length < 7 || CPhoneVal.length > 7){confirmMsg = "Invalid phone number"
    show(ConsultationView())
    return}

    confirmed = true
    confirmMsg = "Thank you for choosing Saul Goodman and associates. We'll be seeing you soon."
    busyTimes.push(selectedTime)
    selectedTime = undefined
    show(ConsultationView())
}

function changeVid(val){
    if (val == true){CcurrentVid++}
    else {CcurrentVid--}
    if (CcurrentVid == 0){CcurrentVid = 3}
    if (CcurrentVid == 4){CcurrentVid = 1}
    skipScroll = true
    show(ConsultationView())
}

function changeSchedule(val){
    if (val == true){
        currentSchedule++
        today.setDate(today.getDate() + 7)
    }

    else {
        currentSchedule--
        today.setDate(today.getDate() - 7)
    }

    currentYear = today.getFullYear()
    monthIndex = today.getMonth()
    currentDay = today.getDate()
    currentWeekDay = today.getDay()

    date2.setDate(today.getDate() - currentWeekDay + 1)
    firstWeekDay = date2.getDate()

    date2.setDate(today.getDate() - currentWeekDay + 7)
    lastWeekDay = date2.getDate()
    skipScroll = true
    show(ConsultationView())

}

function selectTime(time1, w){
    if (time1.endsWith("3") || busyTimes.includes(time1) || currentSchedule < 0 || (currentSchedule==0 && w < currentWeekDay)){return}
    selectedTime = time1
    console.log(selectedTime)
    skipScroll = true
    show(ConsultationView())
}




//FAQ

function openCard(card){
    if (cardsOpen[card] == false) {cardsOpen[card] = true}
    else (cardsOpen[card] = false)
    show(FaqView())
}




//Other

//Video player
function playPauseVid(event){
    if((screen.availHeight || screen.height-30) <= window.innerHeight){return}
    hideDisplayProgress(true)
    max = parseInt(video.duration)
    vid_started = true
    progress_bar.max = max
    play_btn.classList = ["fa-solid fa-pause"]

    if(paused){
    play_btn.style.display = "none";
    video.style.opacity = "100%";
    video.play();
    paused = false;}
    else{
    play_btn.style.display = "block";
    video.style.opacity = "50%";
    video.pause();
    paused = true
    }
    progress_interval = setInterval(progressPosition, passive = true)
    event.stopPropagation();
}


function progressPosition(){
    progress_bar.value = video.currentTime
}

function setProgress(event){
    video.currentTime = progress_bar.value
    event.stopPropagation();
}

function hideDisplayProgress(val){
    if(!vid_started){return}
    if (val == true) vid_ui.style.display = "block"
    else vid_ui.style.display = "none"
}


function setVolume(vol_bar, event){
    vol = vol_bar.value / 10
    video.volume = vol
    event.stopPropagation();
}

function hideDisplayVolume(val){
    if (val == true) volume_bar.style.height = "30px"
    else volume_bar.style.height = "0"
    
}


function openFullscreen(event){
    videoContainer.classList.toggle("fullscreen")
    video.classList.toggle("vid-fullscreen")
    vid_ui.classList.toggle("full-ui")
    event.stopPropagation();
   }








//Hjelpevariabler
//Nav
var bar = document.querySelector(".fa-bars")
var menu = document.querySelector(".menu")
var dropdown = document.querySelector(".dropdown-content")

//Video1
var vid_ui = document.getElementById("vid-ui")
var volume = document.getElementById("volume")
var video = document.querySelector("video")
var videoContainer = document.querySelector(".vid-container")
var body = document.querySelector("body")
var play_btn = document.getElementById("play_button")
var progress_bar = document.getElementById("vidProgress")
var volume_bar = document.getElementById("vol-bar-cont")



resetHelpers()
function resetHelpers(){
    //Nav
    bar = document.querySelector(".fa-bars")
    menu = document.querySelector(".menu")
    dropdown = document.querySelector(".dropdown-content")

    //Video1
    vid_ui = document.getElementById("vid-ui")
    volume = document.getElementById("volume")
    video = document.querySelector("video")
    videoContainer = document.querySelector(".vid-container")
    body = document.querySelector("body")
    play_btn = document.getElementById("play_button")
    progress_bar = document.getElementById("vidProgress")
    volume_bar = document.getElementById("vol-bar-cont")
}



