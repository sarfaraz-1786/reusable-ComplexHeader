import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DropDown.css";
import Dropdown from "react-multilevel-dropdown";
import { Icon } from "@mui/material";

function DropDown({
    config,
    isMobile,
    position,
    className,
    hidenavigationdropDown,
    handleNavigationDropDownHide,
    handleNavigationDropDownShow,
    handleMouseEnter,
    handleMouseLeave,
    handleForRightNavigation,
    hideTooltipRightNavigation,
    hideTooltipRightNavigationFalse,
}) {
    const location = useLocation();
    const getUrlHead = location.pathname.split("/");
    const mainDivOfNavigation = useRef(null);

    //logout
    
  const handleLogout = () => {
    localStorage.clear();
  };

    //dynamic style
    const dynamicStyle = (title) => {
        if (title === "Corporate Social Responsibility") {
            return "coSResStyle";
        }
        if (title === "Role Based") {
            return "ddlRoleBased";
        }
    };
    return (
        <>
            {!isMobile &&
                config &&
                config.map((result, index) => {
                    return (
                        <div
                            className={`responsiveCheck ${
                                result.title.props?.alt === "profile" ? "profileDropDownStyle" : ""
                            } ${hidenavigationdropDown ? "hideMenu" : ""}`}
                            key={index}
                        >
                            <Dropdown
                                title={result.title}
                                className={`dropDownContainer  ${
                                    getUrlHead[1] === result.title.props?.children?.props.alt
                                        ? "activeRectangle"
                                        : ""
                                } ${
                                    getUrlHead[1] === result.title.toString().toLowerCase()
                                        ? "activeNavTab"
                                        : ""
                                } ${className === "fromCenter" && "fromCenter"}`}
                            >
                                {result.subMenu.map((subMenu, i) => {
                                    return (
                                        <div>
                                            <Dropdown.Item
                                                className={`dropDownItem ${
                                                    result.title.props ? "rightSubMenuOption" : ""
                                                }  ${
                                                    subMenu.title === "Facilities"
                                                        ? "specificMenuScroll"
                                                        : dynamicStyle(subMenu.title)
                                                }`}
                                            >
                                                { subMenu.link ? (
                          <a
                            href={subMenu.link ? subMenu.link : "#"}
                            target={subMenu.link && "_blank"}
                            rel={subMenu.link && "noreferrer"}
                            className="DMenuItem"
                          >
                            {subMenu.title}
                          </a>
                        ) : (
                          <Link
                            to={subMenu.linkR}
                            className="DMenuItem"
                            style={{ width: "100%" }}
                          >
                            <div>{subMenu.title}</div>
                          </Link>
                        )}
                                                {subMenu.subOptions && (
                                                    <Dropdown.Submenu position={position}>
                                                        {subMenu.subOptions.map((subOptions, index) => {
                                                            return (
                                                                <div>
                                                                    <Dropdown.Item className="dropDownSubMenuItem">
                                                                        {subOptions.linkName &&
                                                                        !subOptions.linkR ? (
                                                                            <a
                                                                                href={
                                                                                    subOptions.link
                                                                                        ? subOptions.link
                                                                                        : "#"
                                                                                }
                                                                                target={
                                                                                    subOptions.link &&
                                                                                    "_blank"
                                                                                }
                                                                                rel={
                                                                                    subOptions.link &&
                                                                                    "noreferrer"
                                                                                }
                                                                                className="dSumMenuItem"
                                                                            >
                                                                                {subOptions.linkName}
                                                                            </a>
                                                                        ) : (
                                                                            <Link
                                                                                className="dSumMenuItem"
                                                                                to={subOptions.linkR}
                                                                            >
                                                                                {subOptions.linkName}
                                                                            </Link>
                                                                        )}
                                                                    </Dropdown.Item>
                                                                </div>
                                                            );
                                                        })}
                                                    </Dropdown.Submenu>
                                                )}
                                                {subMenu.subOptions && (
                                                    <Icon className="navigateIcon">navigate_next</Icon>
                                                )}
                                            </Dropdown.Item>
                                        </div>
                                    );
                                })}
                            </Dropdown>
                        </div>
                    );
                })}
        </>
    );
}

export default DropDown;
