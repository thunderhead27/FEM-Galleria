import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { slides } from "../data";
import Masonry from "react-masonry-css";
import "./Gallery.css";

const Container = styled.div`
    padding: 4rem;
`;
const Figure = styled.figure`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
`;

const Picture = styled.img`
    width: 100%;
    vertical-align: bottom;
    grid-column: 1/2;
    grid-row: 1/3;
`;
const Caption = styled.figcaption`
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 3.2rem;
    align-self: flex-end;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(0, 0, 0, 0.841672) 100%
    );
`;

const Painting = styled.h1`
    color: #ffffff;
    font-family: Libre Baskerville;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0rem;
    text-align: left;
`;
const Name = styled.h2`
    color: #ffffff;
    font-family: Libre Baskerville;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
`;

const pictures = slides.map((item, index) => {
    return (
        <div>
            <Link
                to={`/slideshow/${item.name}`}
                key={index}
                style={{ textDecoration: "none" }}
            >
                <Figure>
                    <Picture src={`${item.images.gallery}`} alt={item.name} />
                    <Caption>
                        <Painting>{item.name}</Painting>
                        <Name>{item.artist.name}</Name>
                    </Caption>
                </Figure>
            </Link>
        </div>
    );
});

const breakpointColumnsObj = {
    default: 4,
    1000: 2,
    768: 1,
};

const Gallery = () => {
    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {pictures}
            </Masonry>
        </Container>
    );
};

export default Gallery;
