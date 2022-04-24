import { Icon } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DropDown from "../../../common/dropDown/DropDown";
import "./HeaderMenu.css";
import MenuFill from "../../../../Assets/Images/menu-fill.svg";
import DrawerComponent from "../drawerComponent/DrawerComponent";

function HeaderMenu({ headerData, isMobile }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [hidenavigationdropDown, setHidenavigationdropDown] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleNavigationDropDownHide = () => {
        setHidenavigationdropDown(true);
    };

    const handleNavigationDropDownShow = () => {
        setHidenavigationdropDown(false);
    };

    //location
    const location = useLocation();

    return (
        <div className="menuContainer">
            {isMobile && (
                <div className="alignMenuIconCenter">
                    {drawerOpen === true ? (
                        <Icon onClick={handleDrawerClose} className="iconAlign">
                            close
                        </Icon>
                    ) : (
                        <img src={MenuFill} alt="Menu" className="iconAlign" onClick={handleDrawerOpen} />
                    )}
                </div>
            )}

            {isMobile && <DrawerComponent drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose} routesConfig={headerData}/>}

            <span className="navMenuAlign">
                {!isMobile && (
                    <span>
                        <Link
                            className={`fromCenter dropDownContainer linkStyleDecorationNone ${
                                location.pathname === "/" ? "activeNavTab" : ""
                            }`}
                            to="/"
                        >
                            Today
                        </Link>
                    </span>
                )}
                <DropDown
                    config={headerData}
                    isMobile={isMobile}
                    className="fromCenter"
                    position="right"
                    hidenavigationdropDown={hidenavigationdropDown}
                    handleNavigationDropDownHide={handleNavigationDropDownHide}
                    handleNavigationDropDownShow={handleNavigationDropDownShow}
                />
            </span>
        </div>
    );
}

export default HeaderMenu;
