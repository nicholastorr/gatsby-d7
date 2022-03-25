import * as React from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    background-color: #434343;
`

const FooterWrap = styled.footer`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
`

const FooterCat = styled.div`
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
    `

const Footer = () => (
    <Container>
    <FooterWrap>
        <FooterCat>
            <h4>Company Info</h4>
            <a>About Us</a>
            <a>Contact Us</a>
            <a>Legal</a>
            <a>Privacy Policy</a>
        </FooterCat>
        {/* IF logged in display My account, My Cart, My Orders, Wishlist, Log Out */}
        <FooterCat>
            <h4>Account Info</h4>
            <a>Sign In</a>
            <a>Create Account</a>
            <a>My Cart</a>
        </FooterCat>
        <FooterCat>
            <h4>Company Contents</h4>
            <a>Frequently Asked Questions</a>
            <a>Testimonials</a>
            <a>Online Catalog &amp; Request</a>
            <a>Project Photos</a>
            <a>Blogs</a>
            <a>Careers</a>
        </FooterCat>
        <FooterCat>
            <h4>Site Links</h4>
            <a>Site Map</a>
        </FooterCat>
        <FooterCat>
            <h4>Products</h4>
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
            <h4>Tools</h4>
            <a>RAL to Pantone Conversion</a>
        </FooterCat>
        <FooterCat>
            <h4>Business Links</h4>
            <a>Credit Application</a>
        </FooterCat>
    </FooterWrap>
    </Container>
)

export default Footer;