function Header({name}) {

  return (
    <>
        <div id="header">
            <img className="icon-img" src="https://cdn.discordapp.com/attachments/1119324000875724924/1119746935096606810/Screen_Shot_2022-10-16_at_10.14.12_AM.png"></img>
            <div className="name-and-content">
                <p className="profile-name">{name}</p>
            </div>
        </div>  
    </>
  );
}

export default Header;
