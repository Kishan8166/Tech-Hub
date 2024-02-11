import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link"

const Header = () => {
    return <nav>
        <h1>Tech Hub</h1>
        <main>
            <HashLink to={"/#home"}> Home </HashLink>
            <Link to={"/Contact"}> Contact </Link>
            <HashLink to={"/#about"}> About </HashLink>
            <HashLink to={"/#brands"}> Brands </HashLink>
            <Link to={"/Services"}> Services </Link>
        </main>
    </nav>
}

export default Header;
