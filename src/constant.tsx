import React from "react";

// Icons
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ListIcon from "@material-ui/icons/List";
import Home from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';

export const menuItems = [
    { name: "Home", route: "/", icon: <Home />, description: "Home Page"},
    { name: "Transactions", route: "/transactions", icon: <ListIcon /> , description: "List of the last 100 000 transaction"},
    { name: "Charts", route: "/charts", icon: <EqualizerIcon />, description: "Graphic representaion of the data" },
    { name: "Top seller", route: "/top-seller", icon: <MonetizationOnIcon />, description: "50 sellers who made the most transactions" },
    { name: "Top buyer", route: "/top-buyer", icon: <MonetizationOnOutlinedIcon />, description: "50 buyers who made the most transactions" },
    { name: "Treemap", route: "/treemap", icon: <DashboardOutlinedIcon />, description: "Concept graph" },
    { name: "Custom chart", route: "/top-buyer-with-custom", icon: <AddToPhotosOutlinedIcon />, description: "Alan's proposal"}
];