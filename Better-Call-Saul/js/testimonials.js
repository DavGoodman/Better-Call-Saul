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
