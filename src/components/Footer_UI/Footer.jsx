import React from "react"
import "./Footer.css"

function Footer(){

    const time = new Date();
    const date=time.getFullYear()
    return(
        <>
            <footer>
                <span>
                    <p>Copyright Odunayo Fatunsi &copy; {date}</p>
                </span>
            </footer>
        </>
    )
}
export default Footer;