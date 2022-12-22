import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    bacground: #15171c;
    height: 50px;
    display: flex;
    justify-context: flex-start;
    align-items: left;
`;

const NavIcon = styled(Link)`
    margin-left:2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;  
    justify-context: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    bacground: #15171c;
    height: 100vh;
    width: 330px; 
    display: flex;
    justify-context: center;
    position: fixed;  
    top: 0.1;
    left: ${({sidebar}) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10; 
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: 'darkblue'}}>
            <Nav>
                <NavIcon to = "#">
                    <FaIcons.FaBars onClick = {showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>  
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index}/>;
                    })}                      
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
