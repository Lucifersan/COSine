const messagesContainer = document.getElementById("messages-container")
const messagesBar = document.getElementById('messagesbar');
const ding = new Audio("res/ding.mp3");
const darkModeSwitch = document.getElementById("switch-check");
let currLineIndex = 0;

messagesBar.addEventListener('keypress', event => {
  if (event.keyCode == 13 && messagesBar.value.length != 0) {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes()
    
    const messages = document.createElement('div');
    messages.classList.add("messages")
    messagesContainer.append(messages)

    const image = document.createElement('img')
    image.src  = 'res/icon.png'
    image.classList.add("icon-img")
    messages.append(image)

    const box = document.createElement("div")
    messages.append(box)
    
    const profileName = document.createElement('p');
    profileName.classList.add("profile-name")
    profileName.textContent = "Person 2 "
    box.append(profileName)
    
    const time = document.createElement("span");
    time.classList.add("time")
    time.textContent = `Today at ${hour}:${minutes}`
    profileName.append(time)
    
    const message = document.createElement('div');
    message.classList.add("message");
    message.textContent = messagesBar.value
    box.append(message)

    messagesBar.value = ""

    
    ding.play();
    
     image.scrollIntoView(false);
  }
})

//im cooking smth up dont look -emily
function playNextMessage() {
    
}

function newMessage(messageText) {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes()
    
    const messages = document.createElement('div');
    messages.classList.add("messages")
    messagesContainer.append(messages)

    const image = document.createElement('img')
    image.src  = 'res/icon.png'
    image.classList.add("icon-img")
    messages.append(image)

    const box = document.createElement("div")
    messages.append(box)
    
    const profileName = document.createElement('p');
    profileName.classList.add("profile-name")
    profileName.textContent = "Person 2 "
    box.append(profileName)
    
    const time = document.createElement("span");
    time.classList.add("time")
    time.textContent = `Today at ${hour}:${minutes}`
    profileName.append(time)
    
    const message = document.createElement('div');
    message.classList.add(messageText);
    message.textContent = messagesBar.value
    box.append(message)
    image.scrollIntoView(false);
}


//so am i - anthony
async function getAIMessage(prompt) {
  var form_content = document.forms.openai_info;
var form_data = new FormData(form_content);
var key = form_data.get('apikey');
var org = form_data.get('orgid');
var prompt = form_data.get('prompt');


      await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
            body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are roleplaying a parent who is uninformed about LGBTQ people but loving of their daughter. Your daughter has just told you she thinks she might be bisexual. What do you say? DO NOT BREAK CHARACTER."}, {"role": "user", "content": prompt}], // need to add chat history here too  
        max_tokens: 256,
    }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + key,
              "OpenAI-Organization": org 
            },
                }
    ).then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                console.log(json.choices[0].message.content);
            });
        }
    });

}

darkModeSwitch.addEventListener('change', function() {
  let r = document.querySelector(':root') 
  if (this.checked) {
    console.log("lightmode");
    r.style.setProperty('--body', '#ffffff');
    r.style.setProperty('--scrolltrack', '#ffffff');
    r.style.setProperty('--scrollthumb', '#ffffff');
    r.style.setProperty('--time', '#f2f3f5');
    r.style.setProperty('--profile-bottom', '#ffffff');
    r.style.setProperty('--profile-name', '#313338');
    
  } else {
    console.log("darkmode");
    r.style.setProperty('--body', '#ffffff');
    r.style.setProperty('--scrolltrack', '#ffffff');
    r.style.setProperty('--scrollthumb', '#ffffff');
    r.style.setProperty('--time', '#f2f3f5');
  }
});