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
    const [checked, setChecked] = React.useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    function test(checkedValues) {
        console.log(checkedValues);
    }


    const onChange = (checkedValues) => {
        

                setFilters(checkedValues);
                const filteredProducts = baseProducts.filter(product => filters.includes(product.data.field_product_roll_size));
                setProducts(filteredProducts);
            
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

    const rollsizes = [];

    rollSize.sort().forEach(roll => {
        rollsizes.push({ 'label': `${roll}`, 'value': `${roll}`});
    });


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
                {click ? <Checkbox.Group options={rollsizes} onChange={onChange}/> : null}
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