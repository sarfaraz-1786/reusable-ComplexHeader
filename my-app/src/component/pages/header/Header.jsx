import React from "react";
import "./Header.css";
import HeaderMenu from "./headerMenu/HeaderMenu";
import { routesConfig } from "./data";

//material Import ||
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";

function Header() {
    const isMobile = useMediaQuery("(max-width:812px)");
    return (
        <>
            <AppBar className="appbar">
                <Toolbar className="toolbar">
                <HeaderMenu headerData={routesConfig} isMobile={isMobile} position="right"/>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
