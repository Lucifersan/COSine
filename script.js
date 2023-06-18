const messagesContainer = document.getElementById("messages-container")
const messagesBar = document.getElementById('messagesbar');
const ding = new Audio("res/ding.mp3");
const darkModeSwitch = document.getElementById("switch-check");


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