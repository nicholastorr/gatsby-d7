import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import './styles/navbar.less';



//get query for all Digital Media Cateogories

const Category = styled.div`
  background-color: red;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const HeaderCat = styled.h3`
    color: white;
    font-size: 15px;
    margin: auto 15px auto 15px;
    text-align: center;
    max-width: 155px;
`

const HeaderBar = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  vertical-align: middle;
  width: 100%;
  z-index: 999;
  position: ${props => props.height > 150 ? 'fixed' : 'static'};
    top: ${props => props.height > 150 ? '35px' : 'auto'};
  @media (max-width: 1338px) {
    display: none;
  }
`


//get category data from gatsby-node




//hardcoding data for now
const vinylTapes = [
  {
    "title": "Cut Vinyl",
    "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/690/805.jpg",
  },
  {
    "title": "Paper, Masking, Sandblast",
    "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/690/806.jpg",
  },
  {
    "title": "Application Tape",
    "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/690/882.jpg",
  },
  {
    "title": "Application Chemicals",
    "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/690/889.jpg",
  },
]


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const [height, setHeight] = useState(0)

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])
      
      const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        setHeight(winScroll);
    
        if (winScroll > heightToHideFrom) {  
             isVisible && setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
      };

      const vinylTapesMenu = (
        <Menu>
          {
            vinylTapes.map((item, index) => {
              if (item.title === "Paper, Masking, Sandblast") {
                return (
                  <Menu.Item key={index} width={201}>
                <a href={`/vinyl-tapes/masking`}>
                  <img src={item.image} alt={item.title} width={173} height={173} />
                  <h4>{item.title}</h4>
                </a>
              </Menu.Item>
                )
              } else {
                return (
              <Menu.Item key={index} width={201}>
                <a href={`/vinyl-tapes/${item.title.replace(' ', '-').toLowerCase()}`}>
                  <img src={item.image} alt={item.title} width={173} height={173} />
                  <h4>{item.title}</h4>
                </a>
              </Menu.Item>
                )
            }})
          }
        </Menu>
      );


    return (
        <HeaderBar height={height}>
            <Category>
                <HeaderCat>Digital <br></br> Media</HeaderCat>
                <Dropdown overlay={vinylTapesMenu}>
                  <HeaderCat className='header-title'>Vinyl &#38; Application <br></br> Tapes</HeaderCat>
                </Dropdown>
                <HeaderCat>Heat Transfer <br></br> Vinyl</HeaderCat>
                <HeaderCat>Vehicle <br></br> Wraps</HeaderCat>
                <HeaderCat>Wrap <br></br> Tools</HeaderCat>
                <HeaderCat>Paper <br></br> Materials</HeaderCat>
                <HeaderCat>Frames <br></br> &#38; Displays</HeaderCat>
                <HeaderCat>RLM <br></br> Sign Lights</HeaderCat>
                <HeaderCat>Standoff <br></br> Systems</HeaderCat>
                <HeaderCat>Sign <br></br> Brackets</HeaderCat>
                <HeaderCat>Substrates</HeaderCat>
                <HeaderCat>Vinyl <br></br> Racks</HeaderCat>
                <HeaderCat>Banner <br></br> Stands</HeaderCat>
                <HeaderCat>Sign <br></br> Stakes</HeaderCat>
            </Category>
        </HeaderBar>
    )
}




export default Navbar;