import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/header.css"
import ShipTimer from "./ShipTimer"
import IntervalRerenderer  from "react-interval-rerenderer"

const StyledHeader = styled.header`


  `



const Header = ({ siteTitle }) => (


  <StyledHeader> 
        <Topbar className="topbar"/>
            <div className="header-bar">
                <StaticImage src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/mss-main-logo.png" alt="mbs-logo" className="header-logo" />
                <IntervalRerenderer duration={1000} render={ShipTimer} />
            </div>
        <Navbar />
  </StyledHeader>
  
    

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header