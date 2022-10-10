import React from "react";
import "./Header.css"
const Header = ()=>{
    return(
        <div>
            <header>
                <nav>
                    <h1>Name</h1>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>

                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
        </div>
    )
}
export default Header