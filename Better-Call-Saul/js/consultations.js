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
