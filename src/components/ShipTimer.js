import * as React from 'react';
import styled from 'styled-components';
import { X, Search } from 'react-bootstrap-icons';


const ShipTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 17px;
`
const StyledP = styled.p`
    margin: 0;
    font-size: 14px;
`
const Megasearch = styled.div`
    margin-top: 10px;
    width: 322.2px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Glyph = styled.span`
    border: 2px solid black;
    font-weight: bold;
    height: 20px;
    padding: 5px;
    width: 34px;
    align-items: center;
`

const SearchBar = styled.input`
    width: 75%;
    height: 28px;
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
                <StyledP style={{fontSize: 16}}>We are now offering <span style={{color: '#FF0000'}}>FREE SHIPPING!</span></StyledP>
                <StyledP style={{fontSize : 14}}>Order in the next: {h} hours {m} minutes {s} seconds</StyledP>
                <StyledP>and your items will be shipped today!</StyledP>
                    <Megasearch>
                        <SearchBar type="text" placeholder="Search for products, brands, categories, etc."/>
                        <Glyph><X size={20} style={{fontWeight: 'boldest'}}/></Glyph>
                        <Glyph><Search /></Glyph>
                    </Megasearch>

            </ShipTimerContainer>
        )
      

};

export default ShipTimer;