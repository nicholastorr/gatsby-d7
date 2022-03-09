import * as React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';


const SidebarContainer = styled.div`
    width: 290px;
    overflow: auto;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
`

const Filter = styled.li`
    border-bottom: 1px solid black;
`

export const Sidebar = ({ setProducts, baseProducts }) => {
    const [filters, setFilters] = React.useState([]);
    const [click, setClick] = React.useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const onChange = (e) => {
        console.log(`checked = ${e}`);
            if (!filters.includes(e)) {
                setFilters([...filters, e], () => console.log(filters));
            }
            if (filters.length > 0) {
                const filteredProducts = baseProducts.filter(product => filters.includes(product.data.field_product_roll_size));
            setProducts(filteredProducts);
            }
    }


    React.useEffect(() => {
        if (filters.length > 0) {
            const filteredProducts = baseProducts.filter(product => filters.includes(product.data.field_product_roll_size));
            setProducts(filteredProducts);
        }
    }, [filters]);

    const clearFilters = () => {
        setFilters([]);
        setProducts(baseProducts);
        setClick(false);
    }

    const rollSize = [...new Set(baseProducts.map(fields => fields.data.field_product_roll_size))]

    return (
        <SidebarContainer>
            <h3>Mbs Sign Supply</h3>
                <ul>Sub Categories</ul>
                    <a href="/vinyls/calendered_vinyl"><li>Calendered Vinyl</li></a>
                    <li>Cast Vinyl</li>
            <h3>Filters</h3>
            {filters.length > 0 ? <button onClick={clearFilters}>Clear Filters</button> : null}
            <li onClick={() => handleClick()}>Roll Size</li>
                {/*map through roll size array*/}
                {/*each size has an onclick function that filters the products array*/}
                {click ? rollSize.sort().map(size => {
                    return (
                        <span onClick={() => onChange(size)} style={{display: "flex", flexDirection: "row", alignItems: "center", height: "30px"}}>
                        <Checkbox  />
                        <p >{size}</p>
                        </span>
                    )
                }) : null}
            <li>Width</li>
            <li>Length</li>
            <li>Series</li>
            <li>Color</li>
            <li>Finish</li>
            <li>Color Number</li>
            <li>Color Range</li>
            <li>Adhesive</li>
            <li>Application</li>
            <li>Punched</li>
            <li>Surface</li>
            <li>Vinyl Type</li>
            <li>Durability</li>
            <li>Vinyl Class</li>
        </SidebarContainer>
    )
}