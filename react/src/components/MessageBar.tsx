import 

function MessageBar() {


  // messagesBar.addEventListener('keypress', event => {
  // if (event.keyCode == 13 && messagesBar.value.length != 0) {

  //   const msg = document.createElement("Message");
  //   <Message messageText={(messagesBar.value)}/>
  //   messagesBar.value = ""

    
  //   ding.play();
    
  //   image.scrollIntoView(false);
  //   }
  // })

  
  return (
    <>
        <div className="messages-bar" id="messages-container2">
          <form>
            <input className="messagesbar" type="text" id="messagesbar" name="messagesinput" placeholder="Message Person 1..." ></input>
            </form>
        </div>  
    </>
  );
}

export default MessageBar;