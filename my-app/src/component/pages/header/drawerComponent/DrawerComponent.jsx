import React, { useState } from "react";
import "./DrawerComponent.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PropTypes from "prop-types";
import arrowLeft from "../../../../Assets/Images/arrow-left-line.svg";
import {
    Collapse,
    Container,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

function DrawerComponent({ drawerOpen, handleDrawerClose, routesConfig }) {
    const [title, setTitle] = useState(false);
    const [titleText, setTitleText] = useState("");
    const [subMenu, setSubMenu] = useState([]);
    const [subMenuOptions, setSubMenuOptions] = useState([]);
    const [collapse, setCollapse] = useState({
        title: null,
        isCollapsed: true,
    });

    const handleClickTitle = (title, subMenu) => {
        setTitle(true);
        setTitleText(title);
        setSubMenu(subMenu);
    };

    const handleSubDrawerClose = () => {
        setTitle(false);
        setCollapse({ title: null, isCollapsed: true });
    };

    const handleExapandedMenuItem = (subMenu) => {
        setSubMenuOptions(subMenu.subOptions);
        if (collapse.isCollapsed === false && collapse.title === subMenu.title) {
            setCollapse({ title: null, isCollapsed: true });
        } else {
            setCollapse({ isCollapsed: !collapse.isCollapsed, title: subMenu.title });
        }
    };

    return (
        <Drawer
            onClose={handleDrawerClose}
            open={drawerOpen}
            BackdropProps={{ invisible: true }}
            className="DrawerPaper"
        >
            <Drawer onClose={handleSubDrawerClose} open={title} className="subDrawerPaper">
                <span className="alignNavText">{titleText}</span>
                <List>
                    {subMenu.length &&
                        subMenu.map((subMenu, index) => {
                            return (
                                <div key={index}>
                                    <ListItem onClick={() => handleExapandedMenuItem(subMenu)}>
                                        <ListItemText className="subMenuText">
                                            <a
                                                href={subMenu.link}
                                                target={subMenu.link && "_blank"}
                                                rel={subMenu.link && "noreferrer"}
                                                className="anchornavigationstyle"
                                            >
                                                {subMenu.title}
                                            </a>
                                        </ListItemText>
                                        {subMenu.subOptions && (
                                            <ListItemIcon className="subMenuIcon">
                                                {collapse.isCollapsed === false &&
                                                collapse.title === subMenu.title ? (
                                                    <ExpandLessIcon />
                                                ) : (
                                                    <ExpandMoreIcon />
                                                )}
                                            </ListItemIcon>
                                        )}
                                    </ListItem>
                                    {subMenu.subOptions && (
                                        <Collapse
                                            in={
                                                collapse.isCollapsed === false &&
                                                collapse.title === subMenu.title
                                            }
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            <List component="div" disablePadding>
                                                <ListItem button>
                                                    <div>
                                                        {subMenuOptions &&
                                                            subMenuOptions.map((subMenuOptions, i) => (
                                                                <ListItemText
                                                                    key={i}
                                                                    className="subOptionAlign"
                                                                >
                                                                    <a
                                                                        href={subMenuOptions.link}
                                                                        target={
                                                                            subMenuOptions.link && "_blank"
                                                                        }
                                                                        rel={
                                                                            subMenuOptions.link &&
                                                                            "noreferrer"
                                                                        }
                                                                        className="anchornavigationstyle"
                                                                    >
                                                                        {subMenuOptions.linkName}
                                                                    </a>
                                                                    {/* {subMenuOptions.linkName} */}
                                                                </ListItemText>
                                                            ))}
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Collapse>
                                    )}
                                </div>
                            );
                        })}
                </List>
                <div onClick={handleSubDrawerClose} className="flexAlignItem">
                    <img src={arrowLeft} alt="left-arrow icon" />
                    Go back
                </div>
            </Drawer>
            <div className="profileContainer">
                <div className="imageContainer">
                    <img
                        alt="only text"
                        className="imageStyle"
                        src={`data:image/jpeg;base64,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`}
                    />
                </div>
                <div className="profileText">
                    <p className="loginName">Test Name</p>
                    <p className="loginDesignamtionTxt">LOREM</p>
                </div>
            </div>

            <List className="alignResNavTitleText">
                <div className="alignResNavScrollItems">
                    {routesConfig.map((result, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <ListItem
                                        onClick={() => handleClickTitle(result.title, result.subMenu)}
                                        className="alignResNavSubTitleText"
                                    >
                                        <ListItemText className="listItemStyle">{result.title}</ListItemText>
                                        <ListItemIcon className="subMenuIcon">
                                            <NavigateNextIcon className="hoverColorWhite" />
                                        </ListItemIcon>
                                    </ListItem>
                                </div>
                            </div>
                        );
                    })}
                    <Container className="drawerDeviderAlign">
                        <Divider />
                    </Container>
                    <ListItem button className="afterDeviderTitle">
                        <ListItemText className="listItemStyle">LOREM IPSUM</ListItemText>
                    </ListItem>
                    <Container>
                        <Divider />
                    </Container>

                    <ListItem button className="afterDeviderTitle">
                        <ListItemText className="listItemStyle">Hello There</ListItemText>
                    </ListItem>
                </div>
            </List>
        </Drawer>
    );
}

DrawerComponent.propTypes = {
    drawerOpen: PropTypes.bool,
    handleDrawerClose: PropTypes.func,
    routesConfig: PropTypes.any,
};

DrawerComponent.defaultProps = {
    drawerOpen: false,
    handleDrawerClose: () => {},
    routesConfig: [],
};

export default DrawerComponent;
