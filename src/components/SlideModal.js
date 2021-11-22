import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { device } from "../breakpoints";
import { BiExpand } from "react-icons/bi";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    padding: 1.4rem 1.6rem;
    background: rgba(0, 0, 0, 0.75);
    color: #ffffff;
    border: none;
    text-transform: uppercase;
    font-family: Libre Baskerville;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0.2rem;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.25);
    }

    & > .font {
        font-size: 1.5rem;
    }
`;

const Close = styled.span`
    padding: 2rem;
    align-self: flex-end;
    font-family: Libre Baskerville;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 3px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
`;

const Img = styled.img`
    width: 90%;
    align-self: center;
`;

const customStyles = {
    content: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent",
        border: "none",
        zIndex: 100,
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,.75)",
    },
};

Modal.setAppElement("#root");

const SlideModal = ({ img, alt }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button onClick={openModal}>
                <BiExpand className="font" />
                view image
            </Button>
            <Modal
                className="Modal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={alt}
            >
                <Close onClick={closeModal}>close</Close>
                <Img src={img} alt={alt} />
            </Modal>
        </div>
    );
};

export default SlideModal;
