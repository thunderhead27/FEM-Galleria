import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { device } from "../breakpoints";
import { getSlide, getIndex, getSlideByIndex } from "../data";
import SlideModal from "./SlideModal";
import Footer from "../components/Footer";

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    padding: 0 2.4rem;

    @media ${device.tablet} {
        grid-template-columns: 7fr 3fr;
        grid-template-rows: repeat(2, auto);
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: 1fr;
        padding: 2.4rem;
        height: calc(100vh - 22.4rem);
    }
`;

const FirstContainer = styled.figure`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr;
    height: 100%;
    grid-row: 1/2;

    @media ${device.tablet} {
        height: 100%;
    }
`;

const Pic = styled.img`
    grid-row: 1/4;
    grid-column: 1/2;
    max-width: 100%;
    height: 100%;
    object-fit: contain;

    @media ${device.desktop} {
        object-fit: cover;
    }
`;

const FigCap = styled.figcaption`
    grid-row: 1/2;
    grid-column: 1/2;
    margin-left: 1.6rem;
    margin-top: 1.6rem;

    @media ${device.tablet} {
        grid-row: 3/4;
        align-self: flex-end;
        margin-bottom: 2.4rem;
    }
`;

const NameContainer = styled.div`
    position: absolute;
    grid-row: 2/3;
    top: -4rem;
    margin-left: 2.4rem;
    padding: 2.4rem 2.4rem;
    width: 28rem;
    background: #ffffff;

    & > .heading1 {
        font-family: Libre Baskerville;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0px;
        text-align: left;
        color: #000000;

        @media ${device.tablet} {
            font-size: 5.6rem;
            line-height: 6.4rem;
            margin-bottom: 2.4rem;
        }
    }

    & > .heading2 {
        font-family: Libre Baskerville;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.9rem;
        letter-spacing: 0px;
        text-align: left;
        color: #7d7d7d;
    }

    @media ${device.tablet} {
        grid-row: 1/2;
        grid-column: 2/3;
        width: 45rem;
        left: -30rem;
        top: 0;
        padding-left: 6.5rem;
        padding-bottom: 6.5rem;
    }

    @media ${device.desktop} {
        grid-row: 1/2;
        grid-column: 2/3;
        left: -10rem;
    }
`;

const Artist = styled.img`
    width: 6.4rem;
    height: 6.4rem;
    margin-top: 8rem;

    @media ${device.tablet} {
        width: 12.8rem;
        height: 12.8rem;
        margin-left: 3rem;
        align-self: flex-end;
    }

    @media ${device.desktop} {
        align-self: flex-end;
        margin-bottom: 3rem;
    }
`;

const ThirdContainer = styled.div`
    grid-row: 3/4;
    display: grid;
    grid-template-rows: repeat(3, auto);
    padding-bottom: 14rem;

    @media ${device.tablet} {
        grid-column: 1/3;
    }

    @media ${device.desktop} {
        grid-row: 1/2;
        grid-column: 3/4;
        padding-bottom: 0;
    }
`;

const Year = styled.h1`
    position: absolute;
    font-family: Libre Baskerville;
    color: #f3f3f3;
    font-size: 10rem;
    font-style: normal;
    font-weight: 700;
    right: 2rem;
    z-index: -1;

    @media ${device.tablet} {
        left: 2rem;
        right: auto;
        margin-top: 7rem;
        font-size: 20rem;
        line-height: 15rem;
    }

    @media ${device.desktop} {
        left: auto;
        right: 2rem;
        margin-top: 0rem;
    }
`;

const Desc = styled.div`
    grid-row: 2/3;
    justify-self: center;
    margin-top: 5rem;
    margin-bottom: 4rem;
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: #7d7d7d;

    @media ${device.tablet} {
        width: calc(100% - 20rem);
    }

    @media ${device.desktop} {
        margin-right: 12.5rem;
        width: 35rem;
    }
`;

const Source = styled.div`
    grid-row: 3/4;
    justify-self: center;
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: 1.92857px;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #7d7d7d;
    cursor: pointer;

    &:hover {
        color: black;
    }

    @media ${device.tablet} {
        width: calc(100% - 20rem);
    }

    @media ${device.desktop} {
        margin-right: 12.5rem;
        width: 35rem;
    }
`;

const Slide = ({ slideshow }) => {
    const params = useParams();
    const navigate = useNavigate();

    const slide = getSlide(params.slideId);
    const slide2 = getIndex(params.slideId);

    const fixPath = (path) => path.substring(1);

    const prev = getSlideByIndex(slide2 - 1);
    const next = getSlideByIndex(slide2 + 1);

    useEffect(() => {
        let slideInterval = null;

        if (slideshow) {
            slideInterval = setTimeout(() => {
                navigate(`${next}`, { replace: true });
            }, 5000);
            return () => clearTimeout(slideInterval);
        }
    }, [navigate, next, slideshow]);

    return (
        <div>
            <Container>
                <FirstContainer>
                    <Pic
                        src={
                            process.env.PUBLIC_URL +
                            fixPath(`${slide.images.hero.small}`)
                        }
                        alt={slide.name}
                    />
                    <FigCap>
                        <SlideModal
                            img={
                                process.env.PUBLIC_URL +
                                fixPath(`${slide.images.gallery}`)
                            }
                        />
                    </FigCap>
                </FirstContainer>

                <NameContainer>
                    <h1 className="heading1">{slide.name}</h1>
                    <h2 className="heading2">{slide.artist.name}</h2>
                </NameContainer>
                <Artist
                    src={
                        process.env.PUBLIC_URL +
                        fixPath(`${slide.artist.image}`)
                    }
                />

                <ThirdContainer>
                    <Year>{slide.year}</Year>
                    <Desc>{slide.description}</Desc>
                    <Source>go to source</Source>
                </ThirdContainer>
            </Container>
            <Footer
                painting={slide.name}
                artist={slide.artist.name}
                prev={prev}
                next={next}
            />
        </div>
    );
};

export default Slide;
