const messagesContainer = document.getElementById("messages-container")
const messagesBar = document.getElementById('messagesbar');
const ding = new Audio("ding.mp3");
const switch = document.getElementById("switch-check")


messagesBar.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes()
    
    const messages = document.createElement('div');
    messages.classList.add("messages")
    messagesContainer.append(messages)

    const image = document.createElement('img')
    image.src  = '/icon.png'
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
  }
})


switch.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});