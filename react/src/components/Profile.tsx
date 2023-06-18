function Profile({name}) {
  
  return (
    <>
        <div className="profile">
            <img className="icon-img" src="src/icons/gay.png"></img>
            <div className="name-and-content">
                <p className="profile-name">{name}</p>
            </div>
        </div>   
    </>
  );
}

export default Profile;