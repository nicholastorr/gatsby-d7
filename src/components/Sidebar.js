import * as React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { UnorderedListOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';


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

const FilterContainer = styled.div`
    list-style-type: none;
    li {
        font-weight: bold;
        font-size: 17px;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
    }

`

export const Sidebar = ({products, setProducts, baseProducts }) => {
    const [filters, setFilters] = React.useState([]);
    const [click, setClick] = React.useState(false);
    const [click1, setClick1] = React.useState(false);


    //open and close selected filter
    const handleClick = () => {
        setClick(!click);
    }

    const handleClick1 = () => {
        setClick1(!click1);
    }

    //add filter to array and rerender products
    const onChange = (checkedValues) => {
            setFilters(checkedValues);
            if (filters.length > 0) {
                const filteredProducts = products.filter(product => (filters.includes(product.data.field_product_roll_size) || (filters.includes(product.data.field_product_width_in))));
                console.log(filteredProducts);
                setProducts(filteredProducts); 
            }
            else {
                const filteredProducts = baseProducts.filter(product => (filters.includes(product.data.field_product_roll_size) || (filters.includes(product.data.field_product_width_in))));
                console.log(filteredProducts);
                setProducts(filteredProducts); 
            }     
    }
    React.useEffect(() => {
        if (filters.length > 0) {
            const filteredProducts = baseProducts.filter(product => (filters.includes(product.data.field_product_roll_size) || (filters.includes(product.data.field_product_width_in))));
            console.log(filteredProducts);
            setProducts(filteredProducts);
        }
    }, [filters]);

    const clearFilters = () => {
        setFilters([]);
        setProducts(baseProducts);
        setClick(false);
        setClick1(false);
    }

    //get unique values of rollsizes and add to filters
    const rollSize = [...new Set(products.map(fields => fields.data.field_product_roll_size))]
    const rollsizes = [];
    rollSize.sort().forEach(roll => {
        const removefirstscore = roll.replace('_','" ').replace('-x-', '" x ');
        const removesecscore = removefirstscore.replace('_',' ').replace('-x-', ' x ');
        const removelast = removesecscore.replace('_',' ').replace('-yards', ' yards');;
        rollsizes.push({ 'label': `${removelast}`, 'value': `${roll}`});
    });

    const width = [...new Set(products.map(fields => fields.data.field_product_width_in))]
    const widths = [];
    width.sort().forEach(width => {
        const refactorwidth = width.replace('973', '12"').replace('00', '').replace('905', '4"').replace('920', '5"').replace('1108', '06"').replace('912', '08"').replace('916', '10"');
        widths.push({ 'label': `${refactorwidth}`, 'value': `${width}`});
    })


    return (
        <SidebarContainer>
                <ul><h2 style={{fontWeight: "bold", marginTop: "30px"}}>Sub Categories</h2></ul>
                <SubCategories>
                    <a href="/vinyls/calendered_vinyl"><li><UnorderedListOutlined />Calendered Vinyl</li></a>
                    <a href="/cast-vinyl"><li className="active"><UnorderedListOutlined />Cast Vinyl</li></a>
                </SubCategories>
                <h2 style={{fontWeight: "bold", marginTop: "25px", textAlign: "center", borderBottom: "1px solid black", paddingBottom: "10px"}}>Filters</h2>
                <FilterContainer>
                    {filters.length > 0 ? <button onClick={clearFilters}>Clear Filters</button> : null}
                        <li onClick={() => handleClick()}>Roll Size {click ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click ? <Checkbox.Group options={rollsizes} onChange={onChange}/> : null}
                        <li onClick={() => handleClick1()}>Width {click1 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click1 ? <Checkbox.Group options={widths} onChange={onChange}/> : null}
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
                </FilterContainer>
        </SidebarContainer>
    )
}