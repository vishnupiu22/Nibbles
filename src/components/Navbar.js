import React, {useState} from "react";
import Logo from "../assets/mandala.png";
import { Link } from "react-router-dom";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import "./Navbar.css"

function Navbar() {
 
// to make toggle visible while sizing the webpage  and links to only visible at that point
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="logo" width="220" height="80" />
                {/* these are the hidden links that will be visible after resizing  */}
                <div className="hiddenLinks"> 
                   {/*/!*<ul>*!/*/}
                   {/*/!* <li><Link to="/"> Home </Link></li>*!/*/}
                   {/* <li><Link to="/menu"> Menu </Link></li>*/}
                   {/* <li><Link to="/about"> About </Link></li>*/}
                   {/* <li><Link to="/contact"> Contact </Link></li>*/}
                   {/*</ul>*/}
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/menu"> Menu </Link></li>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/contact"> Contact </Link></li>
                </ul>
                {/* this is for toggle button to only open up when the page is mobile size */}
                <button onClick={toggleNavbar}>
                    <FormatAlignRightIcon/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;