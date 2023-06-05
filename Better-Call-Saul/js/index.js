//Model
const container = document.querySelector(".container")
let skipScroll = true
//HOME----------------------------------------------------|

//VideoPLayer
let paused = true
let max;
let progress_interval;
let vid_started = false;
let fullscreen = false;





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



