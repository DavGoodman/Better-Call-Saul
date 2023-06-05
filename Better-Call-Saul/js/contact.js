let sent = false
let errMsg = ""
let nameVal = ""
let emailVal = ""
let msgVal = ""



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