import * as React from 'react';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';
import Countdown from 'react-countdown';
import IntervalRerenderer from 'react-interval-rerenderer';


const CartBoxContainer = styled.div`
    background-color: #f5f5f5;
    padding: 10px;
`

const ShipTimerContainer = styled.div`
    text-align: center;
`


const AddToCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`


const CartBox = ({data}) => {

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
            <p style={{fontSize : 20}}>Ships today if ordered within the next:</p>
            <p>{h} hours {m} minutes {s} seconds</p>
            </ShipTimerContainer>
        )
    }
    
   

    return (
        <CartBoxContainer>
            <img src="https://mbs-signsupply.com/web/images/free_shipping_in_stock.pngg" alt=""/>
            <form >
                <AddToCart className="form-group">
                    <NumericInput min={1} max={999} value={1} style={{
                        input: {
                            width: '100px',
                            height: '50px'
                        }
                    }}/>
                    <button type="submit" className="btn btn-primary">Add to Cart</button>
                </AddToCart>
            </form>
            <IntervalRerenderer duration={1000} render={ShipTimer} />
        </CartBoxContainer>
    )
}

export default CartBox;