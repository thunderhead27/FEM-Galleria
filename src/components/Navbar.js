import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { device } from "../breakpoints";
import { getSlideByIndex } from "../data";
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.8rem;
    margin: 2.4rem;

    @media ${device.tablet} {
        margin: 4rem;
    }

    @media ${device.desktop} {
        height: 4.8rem;
    }
`;

const Icon = styled.img`
    height: 3.2rem;

    @media ${device.desktop} {
        height: 4.8rem;
    }
`;

const Border = styled.div`
    background: #e5e5e5;
    height: 0.1rem;

    @media ${device.tablet} {
        margin: 0 4rem;
    }
`;

const SlideLink = styled.p`
    font-family: Libre Baskerville;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    cursor: pointer;
`;

const Navbar = ({ slideshow, setSlideshow, location }) => {
    let pathIsSlide = null;
    if (location) {
        pathIsSlide = location.pathname.startsWith("/slideshow");
    }
    console.log(pathIsSlide);
    const navigate = useNavigate();

    const handleClick = () => {
        setSlideshow(!slideshow);
        if (!pathIsSlide) {
            navigate(`/slideshow/${getSlideByIndex(0)}`, {
                replace: true,
            });
        }
    };

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <Icon src="/assets/shared/logo.svg" alt="logo" />
                </NavLink>

                <SlideLink onClick={handleClick}>
                    {slideshow ? "stop slideshow" : "start slideshow"}
                </SlideLink>
            </Nav>
            <Border />
        </>
    );
};

export default Navbar;
