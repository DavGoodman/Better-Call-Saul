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
