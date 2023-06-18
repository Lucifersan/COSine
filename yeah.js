const messagesBar = document.getElementById('messagesbar');



messagesBar.addEventListener('keypress', event => {
  if (event.keyCode == 13 && messagesBar.value.length != 0) {
    console.log(messagesBar.value);

    messagesBar.value = "";
  }
})