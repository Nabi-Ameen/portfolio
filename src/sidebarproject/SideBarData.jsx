import React from "react";
import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
} from "react-icons/fa";
export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        icon: <FaHome/>
    },
    {
        id: 2,
        url: '/Department',
        text: 'Department',
        icon: <FaUserFriends />
    },
    {
        id: 3,
        url: '/Projects',
        text: 'Projects',
        icon: <FaSketch/>
    },
    {
        id: 4,
        url: '/Contacts',
        text: 'Contacts',
        icon: <FaFolderOpen/>
    },
    {
        id: 5,
        url: '/Pages',
        text: 'Pages',
        icon: <FaCalendarAlt/>
    },
    {
        id: 6,
        url: '/Pages',
        text: 'Branches',
        icon: <FaWpforms/>
    },

];

export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaBehance />
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />
    }
] 