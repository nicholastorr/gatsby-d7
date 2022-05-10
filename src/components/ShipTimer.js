import * as React from 'react';
import styled from 'styled-components';
import { X, Search } from 'react-bootstrap-icons';
import SearchBar from "./Searchbar.js"


const ShipTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const StyledP = styled.p`
    margin: 0;
    font-size: 14px;
`
const StyledA = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: bold;
`

const Megasearch = styled.div`
    margin-top: 10px;
    width: 666x;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 666px) {
        width: 100%;
    }
`

const Glyph = styled.span`
    border: 2px solid black;
    font-weight: bold;
    height: 20px;
    padding: 5px;
    width: 34px;
    align-items: center;
`


const ShipTimer = () => {


    var week = new Date().getDay();
    var now = new Date();
    var now_ts = now.getTime();
    var late = new Date(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + " 18:30:00");
    var late_ts = late.getTime();
    var seconds = (late_ts - now_ts) / 1000;

        var h = Math.floor(seconds / 3600);
        seconds -= h * 3600;
        var m = Math.floor(seconds / 60);
        seconds -= m * 60;
        var s = Math.floor(seconds);

        return(
            <ShipTimerContainer>
                <StyledA style={{fontSize: 16}}>We are now offering <span style={{color: '#FF0000'}}>FREE SHIPPING!</span></StyledA>
                <StyledP>Order in the next: {h} hours {m} minutes {s} seconds and your items will be shipped today!</StyledP>
                <SearchBar />

            </ShipTimerContainer>
        )
      

};

export default ShipTimer;