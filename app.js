function talk(){
    var know = {
    "hi" : "Hello, Naveen here ",
    "hello":"hello, nice to have you  here",
    "where are you from" : "Nirmal😊..",
    "can you help me" : "yeah sure ,what's your problem",
    "today's weather report" : "today weather is clear and sunny 😎😎",
    "thank you": "its my pleaser",
    "bye" : "Okay! Will meet soon.."
    };
    let user = document.getElementById('userBox').value;
    let chatLog=document.getElementById('chatLog');
    // chatLog.innerHTML = user + "<br>";
    if (user in know) {
    chatLog.innerHTML = know[user] + "<br>";
    }else{
   chatLog.innerHTML = "Sorry,I didn't understand <br>";
    }
    }