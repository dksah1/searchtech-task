import React from "react";
import user from "../image/user.png";
function Nav() {

  function toggleMenu(){
     let subMenu = document.getElementById("subMenu")
      subMenu.classList.toggle("open-menu");
  }
  return (
    <div>
     <div className="hero">
      <nav>
        <h1>DK</h1>
        {/* <img src="images/logo.png" class="logo"> */}
        {/* <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>

        </ul> */}
        <img src={user}   onClick={toggleMenu} />
        
        <div className="sub-menu-wrap" id="subMenu">
            <div className="sub-menu">
                <div className="user-info">
                    <img src={user} />
                  <h3>Dk shah </h3>
                  <br/>
               
                </div>
                <hr/>

                <a href="#" className="sub-menu-link">
                    {/* <img src={user} /> */}
                    {/* <p>Edit profile</p> */}
                    <h3>Email: dksah@gmail.com</h3>
                    <span></span>
                </a>
               
            </div>
        </div>
      </nav>
    </div>
    </div>
  );
}
export default Nav;
