import * as React from 'react';
import { Link } from "gatsby"
import styled from "styled-components"



const HeaderContainer = styled.div`
  background: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 2px;
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 9997;
`

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`


const Topbar = () => {


    return (
    <HeaderContainer>  
        <HeaderLeft>
            <Link to="/" style={{marginTop: `3px`}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
            </Link>
                <span style={{color: `black`, marginLeft: `15px`,}}>Need Help? +1 (303) 935-8565</span>
        </HeaderLeft>
  
        <HeaderRight>
            <Link to="/login" style={{marginTop: `3px`}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                </svg>
            </Link>
            <Link to="/login">
                <span style={{color: `black`, marginLeft: `10px`}}>Login </span>
            </Link>
                <span style={{color: `black`, fontSize: `1rem`, marginLeft: `10px`, marginRight: `10px`}}> | </span>

            <Link to="/register" style={{marginTop: `5px`}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
            </Link>
            <Link to="/register">
                <span style={{color: `black`, marginLeft: `10px`}}>Register</span>
            </Link>
            <Link to="/cart" style={{marginTop: `5px`, marginLeft: `10px`}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {/*Code for cart quanity will go here*/}
            </Link>
        </HeaderRight>
    </HeaderContainer>
    )
}

export default Topbar;