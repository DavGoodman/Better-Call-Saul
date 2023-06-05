cardsOpen = [false, false, false, false, false]

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

function openCard(card){
    if (cardsOpen[card] == false) {cardsOpen[card] = true}
    else (cardsOpen[card] = false)
    show(FaqView())
}