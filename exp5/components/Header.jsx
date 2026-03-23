import profile from "../profile.jpg";

function Header() {
  return (
    <header className="header">
      <div className="overlay">
        <img src={profile} alt="profile" className="profile-img" />
        <h1>Reuben Sam</h1>
        <p>Computer Engineering Student | Future Developer 🚀</p>

        <div className="buttons">
          <button className="btn">View Projects</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
