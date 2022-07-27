import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

// import navbg from "../../Images/navbg.png";
// import { GoSearch } from 'react-icons/go';
import navbg from "../../assets/Home/navbg.svg";

export const Nav = styled.nav`
    background-image: url(${navbg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    font-family: "Futura Hv BT", sans-serif;
    letter-spacing: 1px !important;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px 0 0;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    // color: #0055fe;
    justify-self: flex-start;
    cursor: pointer;
    // font-size: 1.5rem;
    display: flex;
    align-items: center;
    // margin-left: 24px;
    // font-weight: bold;
    // text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #0055fe;
    }
`;

// export const Search = styled(GoSearch)`
//   color: #fff;
// `

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: -30px;
    margin-bottom: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: auto;
    &.active {
        border-bottom: 3px solid #0055fe !important;
        font-weight: bold;
        color: #0055fe !important;
    }
`;

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;

    &.active {
        border-bottom: 3px solid #0055fe !important;
        color: #0055fe !important;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #0055fe;
        text-decoration: none;
    }
`;

// export const NavBtn = styled.nav`
//    display: flex;
//    align-items: center;

//    @media screen and (max-width: 768px){
//        display: none;
//    }
// `

// export const NavBtnLink = styled(LinkR)`
//    border-radius: 2%;
//    background: #0055fe;
//    white-space: nowrap;
//    padding: 10px 22px;
//    color: #fff;
//    font-size: 16px;
//    outline: none;
//    border: none;
//    cursor: pointer;
//    transition: all 0.2s ease-in-out;
//    text-decoration: none;

//    &:hover{
//        transition: all 0.2s ease-in-out;
//        background: #000;
//        color: #0055fe;
//    }
// `

// export const Hr = styled.hr`
//    margin: 0;
//    border: 0;
//    border-top: 1px solid #0055fe;
// `
