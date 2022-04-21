import * as React from 'react';
import { Carousel, Button } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';


const StyledCarousel = styled.div`
    margin-top: 250px; 
    color: black !important; 
    text-shadow: none !important;
    width: 100%;
    margin-left: -100%;
    z-index: 1;
    Button {
        margin-right: 50%;
    }
    @media (max-width: 1350px) {
        Button {
            margin-right: 70%;
        }
    }
`
const Wrapper = styled.div`
        display: flex;
        width: 100%;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        @media (max-width: 930px) {
            .carousel-img {
                display: none;
            }
            div {
                display: none;
            }
        }
`

const MyCarousel = () => {
    return (
            <Wrapper>
                <StaticImage className="carousel-img" src='https://mbs-signsupply.com/web/images/carousel-image-one.png' quality={100} alt=""/>
                    <StyledCarousel>
                        <Button style={{ backgroundColor: "red", borderRadius: "5px", color: "white", fontSize: "1em", border: "none"}} size="large">Download Now!</Button>
                    </StyledCarousel>
            </Wrapper>
    );
}

export default MyCarousel;