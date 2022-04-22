import * as React from 'react';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Countdown from 'react-countdown';
import IntervalRerenderer from 'react-interval-rerenderer';


const CartBoxContainer = styled.div`
    margin-left: 40%;
    width: 50%;
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
    margin-top: 15px;
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
            <p style={{fontSize : 13, display: "flex", justifyContent: "center", margin: "0"}}>Ships <p style={{fontWeight: "bolder", marginLeft: "5px", marginRight: "5px"}}>today</p> if ordered within the next:</p>
            <p style={{fontSize : 13, display: "flex", justifyContent: "center", marginTop: "-10px"}}><p style={{fontWeight: "bolder", marginLeft: "5px", marginRight: "5px"}}>{h}</p> hours <p style={{fontWeight: "bolder", marginLeft: "5px", marginRight: "5px"}}>{m}</p> minutes <p style={{fontWeight: "bolder", marginLeft: "5px", marginRight: "5px"}}>{s}</p> seconds</p>
            </ShipTimerContainer>
        )
    }
    
   

    return (
        <CartBoxContainer>
            <img style={{width: "80%", marginLeft: "10%", marginBottom: "5px"}} src="https://mbs-signsupply.com/web/images/free_shipping_in_stock.png" alt=""/>
            <form style={{marginBottom: "15px"}}>
                <AddToCart>
                    <NumericInput min={1} max={999} value={1} style={{
                        input: {
                            width: '125px',
                            height: '42px'
                        }
                    }}/>
                    <Button type="primary" style={{width: "125px", height: "42px", background: "#428bca", borderColor: "#428bca"}}>Add to Cart</Button>
                </AddToCart>
            </form>
            <IntervalRerenderer duration={1000} render={ShipTimer} />
        </CartBoxContainer>
    )
}

export default CartBox;