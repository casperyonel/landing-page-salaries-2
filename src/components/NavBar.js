import NavBarTitle from "./NavBarTitle"
import logo from "../logo.png"

const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={logo} id="logo" alt="" />
            <div id="logo-title">solidity</div>
            <div className="NavBar-main">
                <NavBarTitle text="Products"/>
                <NavBarTitle text="Use Cases"/>
                <NavBarTitle text="FAQ"/>
                <NavBarTitle text="About us"/>
                <NavBarTitle text="Contact us"/>
            </div>
        </div>
    )
}

export default NavBar
