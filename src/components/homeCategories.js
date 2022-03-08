
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./styles/homeCategories.css";


const Categories = styled.div`
    width: 297.5px;
    height: 347.5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1260px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`
const HomeCategoriesHeader = styled.h1`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
  text-align: left;
`

const Wrapper = styled.div`
    width: 100%;
`


const HomeCategories = () => {
    const arr = [688, 690];
    const digitalMediaChilds = [];
    const vinylAndAppTapesChilds = [];
    const vehicleWrapsChilds = [];
    const wrapToolChilds = [];
    const paperMaterialsChilds = [];
    const framesAndDisplaysChilds = [];
    const artHangingChilds = [];
    const lightingSystemsChilds = [];
    const standoffChilds = [];
    const signBracketsChilds = [];
    const substrateChilds = [];
    const vinylRacksChilds = [];
    const bannerStandChilds = [];
    const signStakesChilds = [];
    const sneezeGuardKitsChilds = [];
  
    const data = useStaticQuery(graphql`
      query HeaderQuery {
        allTaxonomyTerm {
          nodes {
            data {
              name
              parents_all {
                resource
                uri
                id
              }
            }
          }
        }
      }
    `)

return (
    <Wrapper>
        <HomeCategoriesHeader>Top Selling Categories</HomeCategoriesHeader>
        <Categories>
        {
            //get all children of home page categories
            data.allTaxonomyTerm.nodes.map(node => {
                if (node.data.parents_all.some(parent => parent.id === '688')) {
                    digitalMediaChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '690')) {
                    vinylAndAppTapesChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '817')) {
                    vehicleWrapsChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '692')) {
                    wrapToolChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '907')) {
                    paperMaterialsChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '693')) {
                    framesAndDisplaysChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '365')) {
                    artHangingChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '708')) {
                    lightingSystemsChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '4')) {
                    standoffChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '696')) {
                    signBracketsChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '840')) {
                    substrateChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '697')) {
                    vinylRacksChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '698')) {
                    bannerStandChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '700')) {
                    signStakesChilds.push(node.data.name)
                }
                if (node.data.parents_all.some(parent => parent.id === '877')) {
                    sneezeGuardKitsChilds.push(node.data.name)
                }
            })
        }
            {/*can probably be made into a loop with arr*/}
            {/*cards for home page categories*/}
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/688.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {digitalMediaChilds.map(child => {
                    if (child === 'Banners' || child === 'Floor Graphic' || child === 'Overlaminates' || child === 'Perforated Film' || child === 'Windows Films' || child === 'Printable Wrap Media' || child === 'Transit Media' || child === 'Block-Out Media' || child === 'Print and Laminate Kit' || child === 'Printable Translucents' || child === 'Backlit Film' ) {
                        return <div className="childCat">{child}</div>
                }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Digital Media</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/690.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {vinylAndAppTapesChilds.map(child => {
                    if (child === 'Cut Vinyl' || child === 'Paper, Masking, Sandblast' || child === 'Application Tape' || child === 'Application Chemicals' ) {
                        return <div className="childCat">{child}</div>
                }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Vinyl &amp; Application Tapes</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/817.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {vehicleWrapsChilds.map(child => {
                    if (child === 'Paint Protection Film' || child === 'Solid Color Wrap Vinyl' || child === 'Chrome Wrap Vinyl' || child === 'Color Shift Wrap Vinyl' || child === 'Printable Wrap Media' || child === 'Overlaminates' || child === 'Perforated Window Film' ) {
                        return <div className="childCat">{child}</div>
                    }
                })}
        </div>  
            <a href="/landing/digital-media">
                <h3>Vehicle Wrap</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/692.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {wrapToolChilds.slice(0, 11).map(child => {
                    return <div className="childCat">{child}</div>
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Wrap Tools</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/907.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {paperMaterialsChilds.map(child => {
                    if (child === 'Colored Bond' || child === 'Coated Bond' || child === 'Engineering Copier Paper' || child === 'Plotter Paper' || child === 'Translucent Bond' || child === 'Photo Paper' || child === 'Mylar and Films' ) {
                        return <div className="childCat">{child}</div>
                }   
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Paper Materials</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/693.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {framesAndDisplaysChilds.map(child => {
                    if (child === 'A Frames' || child === 'Real Estate Sign Frames' || child === 'Round Rod Sign Frame' || child === 'Hardware' || child === 'Yard Sign Stakes' ) {
                        return <div className="childCat">{child}</div>
                    }   
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Frames &amp; Displays</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/365.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {artHangingChilds.map(child => {
                    if (child === 'Acrylic Wall Frame Kits' || child === 'Hanging Systems' || child === 'Rails' || child === 'Hardware' || child === 'Hooks' || child === 'Accessories' || child === 'Sign & Poster Holders' || child === 'Tools' ) {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Art Hanging Systems</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/708.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {lightingSystemsChilds.map(child => {
                    if (child === 'Angle Shade Sign Lights' || child === 'Barn Lights' || child === 'Light Fixture Kits' || child === 'Light Fixture Shades' || child === 'Gooseneck Arms' || child === 'LED Bulbs' ) {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Lighting Systems</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/4.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {standoffChilds.map(child => {
                    if (child === 'Inexpensive Standoffs' || child === 'Affordable Standoffs' || child === 'Tamper Proof Standoffs' || child === 'Special Standoffs' || child === 'Square Standoffs' || child === 'LED Standoffs' || child === 'Desktop Standoffs' || child === 'Glass Standoffs' || child === 'Edge Grip Standoffs' || child === 'Sign Clamp') {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Standoff Systems</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/696.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {signBracketsChilds.map(child => {
                    if (child === 'Ceiling Mount Bracket' || child === 'Classic Bracket' || child === 'Curved Mount Bracket' || child === 'Deluxe Bracket' || child === 'Double Mount Bracket' || child === 'Light Duty Brackets' || child === 'Reverse Scroll Bracket' || child === 'Straight Arm Bracket' || child === 'Bracket & Blank Kits' || child === 'Sign Blanks') {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Sign Brackets</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/840.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {substrateChilds.map(child => {
                    if (child === 'Pre-Cut Sign Blanks' || child === 'Corrugated Board' || child === 'Curved Mount Bracket' || child === 'Foam Boards' ) {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Substrates</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/697.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {vinylRacksChilds.map(child => {
                    if (child === 'EZ Racks') {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Vinyl Racks</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/698.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {bannerStandChilds.map(child => {
                    if (child === 'Roll-Up' || child === 'X Banner' || child === 'Accessories' || child === 'Banner Stands Film') {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Banner Stands</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/700.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {signStakesChilds.map(child => {
                    if (child === 'Kits' || child === 'Stakes' ) {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Sign Stakes</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/877.jpg" alt="digital-media image" width={285.5} />
            </div>
            <div className="displayed">
                {sneezeGuardKitsChilds.map(child => {
                    if (child === 'Mounts Sneeze Guard Kits' || child === 'Rod Sneeze Guard Kits' || child === 'Rod Clamp Sneeze Guard Kits' || child === 'Feet Sneeze Guard Kits' || child === 'Clamp Sneeze Guard Kits' ) {
                        return <div className="childCat">{child}</div>
                    }
                })}
            </div>  
            <a href="/landing/digital-media">
                <h3>Sneeze Guard Kits</h3>
            </a>
        </div>
        <div className="cat-card">
            <div className="productbox">
                <StaticImage className="cat-image" src="https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/home_page/mbs-signsupply-catalog.jpg" alt="digital-media image" width={285.5} />
            </div>  
            <a href="/landing/digital-media">
                <h3>New 2022 Catalog</h3>
            </a>
        </div>            
        </Categories> 
    </Wrapper>  
    )
}

export default HomeCategories;