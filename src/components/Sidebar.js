import * as React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';


const SidebarContainer = styled.div`
    margin-right: 20px;
    width: 260px;
    overflow: auto;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
`

const SubCategories = styled.div`
    list-style-type: none;
    border: 1px solid transparent;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    li {
        padding: 5px;
    }
    span {
        margin-right: 7px;
        margin-left: 7px;
    }
    li:hover {
        background-color: #f5f5f5;
    }
    li.active {
        background-color: #f5f5f5;
    }
`
export const Sidebar = ({ path, setProducts, baseProducts }) => {
    const [filters, setFilters] = React.useState([]);
    const [click, setClick] = React.useState(false);

    const url = path ? path : '';

    const handleClick = () => {
        setClick(!click);
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

    console.log(url);

    return (
        <SidebarContainer>
                <ul><h2 style={{fontWeight: "bold", marginTop: "30px"}}>Sub Categories</h2></ul>
                <SubCategories>
                    <a href="/vinyls/calendered_vinyl"><li><UnorderedListOutlined />Calendered Vinyl</li></a>
                    <a href="/cast-vinyl"><li className="active"><UnorderedListOutlined />Cast Vinyl</li></a>
                </SubCategories>
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