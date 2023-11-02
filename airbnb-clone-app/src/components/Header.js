import React from "react"
import logo from "./images/airbnb-logo.png"

export default function Header() {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}