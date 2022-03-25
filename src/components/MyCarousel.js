import * as React from 'react';
import { Carousel, Button } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';


const StyledCarousel = styled.div`
    width: 40%;
    position: absolute;
    z-index: 2;
    text-align: left;
    top: 37%;
    left: 20%;
    @media (max-width: 1700px) {
        left: 15%;
    }

    @media (max-width: 1500px) {
        left: 10%;
    }

    @media (max-width: 1200px) {
        left: 13%;
        h1 {
            font-size: 1em;
        }
        p {
            font-size: .8em;
        }
    }


    @media (max-width: 1000px) {
        left: 15%;
        top: 30%;
    }
    

`
const Wrapper = styled.div`
        width: 100%;

`

const Container = styled.div`
        margin-left: auto;
        margin-right: auto;
        margin-top: 3%;
        width: 100%;

        @media (max-width: 1200px) {
           
        }

        @media (max-width: 1000px) {
            .wrapper {
                display: none;
            }
        }
`

const MyCarousel = () => {

    return (
        <Container>
            <Wrapper className='wrapper'>
                <StaticImage src='../images/Catalog.jpg' quality={100} alt=""/>
                    <StyledCarousel>
                        <h1 style={{fontWeight: "900", color: "red", marginBottom: "0"}}>NEW! 2022 Catalog</h1>
                        <h1 style={{marginTop: "0"}}>Now Available!</h1>

                        <p>Wholesale Vinyl, Medias, Papers, Inks, Signs,<br></br> 
                        Lights, Standoffs, Tools, Hardware and more...</p>
                        <Button style={{ backgroundColor: "red", padding:"20px", borderRadius: "5px", color: "white", fontSize: "1em", border: "none"}} size="large">Download Now!</Button>
                    </StyledCarousel>
            </Wrapper>
        </Container>
    );
}

export default MyCarousel;