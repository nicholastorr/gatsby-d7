import * as React from "react";
import styled from "styled-components"

const Container = styled.div`
    
`

const FooterWrap = styled.footer`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-color: #434343;
    margin-top: 75px;
    padding: 25px 18% 25px 18%;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

const FooterHeader = styled.h3`
    color: white;
    font-weight: bold;
`

const FooterCat = styled.div`
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
    @media (max-width: 900px) {
        margin-bottom: 20px;
    }
`

const Footer = () => (
    <FooterWrap>
        <FooterCat>
            <FooterHeader>Company Info</FooterHeader>
            <a>About Us</a>
            <a>Contact Us</a>
            <a>Legal</a>
            <a>Privacy Policy</a>
        </FooterCat>
        {/* IF logged in display My account, My Cart, My Orders, Wishlist, Log Out */}
        <FooterCat>
            <FooterHeader>Account Info</FooterHeader>
            <a>Sign In</a>
            <a>Create Account</a>
            <a>My Cart</a>
        </FooterCat>
        <FooterCat>
            <FooterHeader>Company Contents</FooterHeader>
            <a>Frequently Asked Questions</a>
            <a>Testimonials</a>
            <a>Online Catalog &amp; Request</a>
            <a>Project Photos</a>
            <a>Blogs</a>
            <a>Careers</a>
        </FooterCat>
        <FooterCat>
            <FooterHeader>Site Links</FooterHeader>
            <a>Site Map</a>
        </FooterCat>
        <FooterCat>
            <FooterHeader>Products</FooterHeader>
            <a>Digital Media</a>
            <a>Vinyls &amp; Application Tapes</a>
            <a>Vehicle Wraps</a>
            <a>Wrap Tools</a>
            <a>Frames &amp; Displays</a>
            <a>RLM Sign Lights</a>
            <a>Standoff Systems</a>
            <a>Sign Brackets</a>
            <a>Substrates</a>
            <a>Vinyl Racks</a>
            <a>Banner Stands</a>
            <a>Signs Stakes</a>
        </FooterCat>
        <FooterCat>
            <FooterHeader>Tools</FooterHeader>
            <a>RAL to Pantone Conversion</a>
        </FooterCat>
        <FooterCat>
            <FooterHeader>Business Links</FooterHeader>
            <a>Credit Application</a>
        </FooterCat>
    </FooterWrap>
)

export default Footer;