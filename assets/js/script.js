document.getElementById("textingDiv").style.visibility = "hidden"

function chatBtn(){
    document.getElementById("btnDiv").style.visibility = "hidden"
    document.getElementById("textingDiv").style.visibility = "visible"
    
    var heading = document.createElement("h1")
    var intro = document.createElement("p")
    var line = document.createElement("hr")

    heading.innerText = "Chat with a friend"
    intro.innerText = "Type 'hi' to start a conversation"

    heading.setAttribute("class", "center")
    intro.setAttribute("class", "center")

    var welcome = document.getElementById("welcomeDiv")
    
    welcome.append(heading)
    welcome.append(intro)
    welcome.append(line)
}

document.getElementById("user2Btn").addEventListener("click", chatBtn)
document.getElementById("user1Btn").addEventListener("click", chatBtn)

var responses = [
    "Hey, how are you feeling today?",
    "Good to know, anything I can do for you?",
    "Excuse me, please say that again?",
    "I am sorry I cannot help you with that but pick a number between 1-5.",
    "Great answer! Take a deep breath and when you're ready type 'okay'.",
    "Good. I just wanted to tell you that you're doing great so far.",
    "Thank you for interacting. Have a nice day!"
]
var count = 0

function generateMessages(){
    var message = document.querySelector("#textarea").value
 
    if(message != "")
    {
       var waitingPeriod = document.querySelector("#chatDiv")
       waitingPeriod.append(message)
    }
    
    var typing = document.createElement("p")
    typing.innerText = "Typing..."
    var waitingPeriod = document.querySelector("#chatDiv")
    
    var time = Math.floor(Math.random() * 3) + 1;
    //0.5 * 3 + 1 = 2.5 = 2
    //0.2 * 3 + 1 = 1.6 = 1
    var timer = (1 + time) * 1000

    setTimeout(function(){
        waitingPeriod.append(typing)
    }, timer)

    setTimeout(function(){
        typing.innerText = responses[count]
        count = count + 1
        if(count > 7)
        {
            count = 0
            typing.innerText = responses[count]
            count = count + 1
        }
    }, 5000)
}
document.querySelector("#sendBtn").addEventListener("click", generateMessages)


