import React from "react";
import { NavLink } from "react-router-dom";
import { device } from "../breakpoints";
import styled from "styled-components";
import {
    IoPlaySkipBackOutline,
    IoPlaySkipForwardOutline,
} from "react-icons/io5";

const Container = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #ffffff;
    z-index: 10;
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.8rem;
    margin: 2.4rem;

    @media ${device.tablet} {
        margin: 4rem;
    }
`;
const Name = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    & > .painting {
        font-family: Libre Baskerville;
        font-size: 1.4rem;
        line-height: 1.75rem;
        font-style: normal;
        font-weight: 700;
        text-align: left;

        @media ${device.tablet} {
            font-size: 1.8rem;
            line-height: 2.2rem;
        }
    }

    & > .artist {
        font-family: Libre Baskerville;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        text-align: left;

        @media ${device.tablet} {
            font-size: 1.3rem;
            line-height: 1.6rem;
        }
    }
`;

const Border = styled.div`
    background: #e5e5e5;
    height: 0.1rem;

    @media ${device.tablet} {
        margin: 0 4rem;
    }
`;
const BtnContainer = styled.div`
    font-size: 3.5rem;

    & > * {
        margin: 0 1rem;

        &:hover {
            opacity: 0.5;
        }
    }
`;

const Footer = ({ painting, artist, prev, next }) => {
    return (
        <Container>
            <Border />
            <Nav>
                <Name>
                    <h1 className="painting">{painting}</h1>
                    <h2 className="artist">{artist}</h2>
                </Name>
                <BtnContainer>
                    <NavLink to={`${prev}`}>
                        <IoPlaySkipBackOutline />
                    </NavLink>
                    <NavLink to={`${next}`}>
                        <IoPlaySkipForwardOutline />
                    </NavLink>
                </BtnContainer>
            </Nav>
        </Container>
    );
};

export default Footer;
