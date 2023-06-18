const messagesBar = document.getElementById('messagesbar');
const ding = new Audio("res/ding.mp3");

messagesBar.addEventListener('keypress', event => {
if (event.keyCode == 13 && messagesBar.value.length != 0) {
  console.log(messagesBar)
  const msg = document.createElement("Message");
  <Message messageText={(messagesBar.value)}/>
  messagesBar.value = ""

  
  ding.play();
  
  image.scrollIntoView(false);
  }
})

const text = readFile("convo.txt");
const msgtext = text.split("\n");


