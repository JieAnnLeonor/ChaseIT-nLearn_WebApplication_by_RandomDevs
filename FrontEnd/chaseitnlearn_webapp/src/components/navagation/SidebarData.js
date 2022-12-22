import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Introduction ",
        path: "/introduction",
        icon: <FaIcons.FaBookMedical/>,
    },
    {
        title: "First Lesson in AppDev ",
        icon: <AiIcons.AiFillBook/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav: [
            {
                title: "Chapter 1",
                path: "/lesson1/chapter1",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Chapter 2",
                path: "/lesson1/chapter2",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Quiz 1",
                path: "/lesson1/quiz1",
                icon: <IoIcons.IoMdBookmarks/>,
            },
        ],
    },
    {
        title: "Second Lesson in AppDev ",
        icon: <AiIcons.AiFillBook/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav: [
            {
                title: "Chapter 1",
                path: "/lesson2/chapter1",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Chapter 2",
                path: "/lesson2/chapter2",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Quiz 1",
                path: "/lesson2/quiz1",
                icon: <IoIcons.IoMdBookmarks/>,
            },
            {
                title: "Quiz 2",
                path: "/lesson2/quiz2",
                icon: <IoIcons.IoMdBookmarks/>,
            },
        ],
    },
    {
        title: "Third Lesson in AppDev ",
        icon: <AiIcons.AiFillBook/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav: [
            {
                title: "Chapter 1",
                path: "/lesson3/chapter1",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Chapter 2",
                path: "/lesson3/chapter2",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Chapter 3",
                path: "/lesson3/chapter3",
                icon: <IoIcons.IoIosBookmarks/>,
            },
            {
                title: "Quiz 1",
                path: "/lesson3/quiz1",
                icon: <IoIcons.IoMdBookmarks/>,
            },
        ],
    },
    {
        title: "Summary ",
        path: "/summary",
        icon: <FaIcons.FaScroll/>,
    },
    {
        title: "Resources",
        path: "/resources",
        icon: <FaIcons.FaFileDownload/>,
    }

]