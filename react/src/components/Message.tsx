function Message({messageText}) {
  let name = "Person 1";

  return (
    <>
        <div className="message">
            <img className="icon-img" src="https://cdn.discordapp.com/attachments/1119324000875724924/1119746935096606810/Screen_Shot_2022-10-16_at_10.14.12_AM.png"></img>
            <div className="name-and-content">
                <p className="profile-name">Person 1 <span className="time">Today at 10:34PM</span></p>
                <p className="message-text">{messageText}</p>
            </div>
        </div>   
    </>
  );
}

export default Message;