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
    const [click2, setClick2] = React.useState(false);
    const [click3, setClick3] = React.useState(false);
    const [click4, setClick4] = React.useState(false);
    const [click5, setClick5] = React.useState(false);
    const [click6, setClick6] = React.useState(false);

    //open and close selected filter
    const handleClick = () => {
        setClick(!click);
    }
    const handleClick1 = () => {
        setClick1(!click1);
    }
    const handleClick2 = () => {
        setClick2(!click2);
    }
    const handleClick3 = () => {
        setClick3(!click3);
    }
    const handleClick4 = () => {
        setClick4(!click4);
    }
    const handleClick5 = () => {
        setClick5(!click5);
    }
    const handleClick6 = () => {
        setClick6(!click6);
    }

    //add filter to array and rerender products
    /*const onChange = (checkedValues) => {
            
            if (filters.length == 1) {
                const newFilters = [...filters];
                newFilters.push(checkedValues[0]);
                setFilters(newFilters);
                const filteredProducts = products.filter(product => (filters.includes(product.data.field_product_roll_size)) || (filters.includes(product.data.field_product_width_in)));
                setProducts(filteredProducts); 
            }
            if (filters.length == 2) {
                const newFilters = [...filters];
                newFilters.push(checkedValues[0]);
                setFilters(newFilters);
                const filteredProducts = products.filter(product => (filters.includes(product.data.field_product_roll_size)) && (filters.includes(product.data.field_product_width_in)));
                setProducts(filteredProducts); 
            }
            else {
                setFilters(checkedValues);
                const filteredProducts = baseProducts.filter(product => (filters.includes(product.data.field_product_roll_size)) || (filters.includes(product.data.field_product_width_in)));
                setProducts(filteredProducts); 
            }    
    }*/
    const onChange = (checkedValues) => {
            console.log(checkedValues);
        if (filters.length > 0) {
            if (checkedValues != undefined && checkedValues.length > 0 && !filters.includes(checkedValues) && !filters.includes(checkedValues[0])) {
            const newFilters = [...filters];
            newFilters.push(checkedValues[0]);
            setFilters(newFilters);
            }
            
        }   
        else {
            if (checkedValues != undefined && checkedValues.length > 0 && !filters.includes(checkedValues) && !filters.includes(checkedValues[0])) {
            setFilters(checkedValues);
            const filteredProducts = baseProducts.filter(product => (filters.includes(product.data.field_product_roll_size)) || (filters.includes(product.data.field_product_width_in)));
            setProducts(filteredProducts);
            } 
        }    
    }
    React.useEffect(() => {
        if (filters.length == 1) {
            console.log(baseProducts);
            const filteredProducts = baseProducts.filter(product => 
                (filters.includes(product.data.field_product_roll_size)) 
            || (filters.includes(product.data.field_product_width_in)) 
            || (filters.includes(product.data.field_product_length_in_yards)) 
            || (filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_finish)));
            setProducts(filteredProducts);
        }
        if (filters.length == 2) {
            const filteredProducts = baseProducts.filter(product => 
                (filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_length_in_yards))
            || (filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_color))    
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_roll_size))
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_length_in_yards))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_roll_size))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_length_in_yards))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_roll_size)));
            setProducts(filteredProducts);
        }
        if (filters.length == 3) {
            const filteredProducts = baseProducts.filter(product => 
               (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_roll_size))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_length_in_yards))
            || (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_roll_size) && filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_length_in_yards))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color_number) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_roll_size))
            || (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards)));
            console.log(filters);
            console.log(filteredProducts); 
            setProducts(filteredProducts);
        }
        if (filters.length == 4) {
            const filteredProducts = baseProducts.filter(product => 
                (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_roll_size))
            ||  (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_roll_size))
            ||  (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_width_in))
            ||  (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color))
            ||  (filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color))
            ||  (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_finish) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color))
            ||  (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_finish)));
            console.log(filters);
            console.log(filteredProducts); 
            setProducts(filteredProducts);
        }
        if (filters.length == 5) {
            const filteredProducts = baseProducts.filter(product => 
                (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_finish))
            ||  (filters.includes(product.data.field_product_series) && filters.includes(product.data.field_product_width_in) && filters.includes(product.data.field_product_length_in_yards) && filters.includes(product.data.field_product_color) && filters.includes(product.data.field_product_roll_size)));                
            console.log(filters);
            console.log(filteredProducts); 
            setProducts(filteredProducts);
        }
        if (filters.length == 6) {
            const filteredProducts = baseProducts.filter(product => 
                (filters.includes(product.data.field_product_roll_size)) 
            && (filters.includes(product.data.field_product_width_in))
            && (filters.includes(product.data.field_product_length_in_yards))
            && (filters.includes(product.data.field_product_color))
            && (filters.includes(product.data.field_product_color))
            && (filters.includes(product.data.field_product_finish))
            && ((filters.includes(product.data.field_product_series))));
            console.log(filters);
            console.log(filteredProducts); 
            setProducts(filteredProducts);
        }
    }, [filters]);

    const clearFilters = () => {
        setFilters([]);
        setProducts(baseProducts);
        setClick(false);
        setClick1(false);
        setClick2(false);
        setClick3(false);
        setClick4(false);
        setClick5(false);
        setClick6(false);
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

    const length = [...new Set(products.map(fields => fields.data.field_product_length_in_yards))]
    const lengths = [];
    length.sort().forEach(length => {
        lengths.push({ 'label': `${length}`, 'value': `${length}`});
    })

    const serie = [...new Set(products.map(fields => fields.data.field_product_series))]
    const series = [];
    serie.sort().forEach(serie => {
        const refactorSeries = serie.replace('_', ' ').replace('-', ' ');
        const uppercase = refactorSeries.toString().toUpperCase();
        series.push({ 'label': `${uppercase}`, 'value': `${serie}`});
    })

    const color = [...new Set(products.map(fields => fields.data.field_product_color))]
    const colors = [];
    color.sort().forEach(color => {
        const refactorcolor = color.replaceAll('_', ' ').replaceAll('-', ' ').replace('100', 'Gloss Blue').replace('101', 'Gloss Gold').replace('102', 'Gloss Orange').replace('105', 'Gloss Yellow').replace('1200', 'Gloss Green').replace('1269', 'Gloss Silver').replace('1283', 'Gloss Red').replace('1269', 'Gloss Silver').replace('1290', 'Gloss White').replace('1317', 'Clear');
        const newcolor = refactorcolor.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        colors.push({ 'label': `${newcolor}`, 'value': `${color}`});
    })

    const finish = [...new Set(products.map(fields => fields.data.field_product_finish))]
    const finishes = [];
    finish.sort().forEach(finish => {
        const refactorfinish = finish.replaceAll('-', ' ');
        const newfinish = refactorfinish.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        finishes.push({ 'label': `${newfinish}`, 'value': `${finish}`});
    })

    const colornumber = [...new Set(products.map(fields => fields.data.field_product_color_number))]
    const colornumbers = [];
    colornumber.sort().forEach(colornumber => {
        colornumbers.push({ 'label': `${colornumber}`, 'value': `${colornumber}`});
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
                        <li onClick={() => handleClick2()}>Length {click2 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click2 ? <Checkbox.Group options={lengths} onChange={onChange}/> : null}
                        <li onClick={() => handleClick3()}>Series {click3 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click3 ? <Checkbox.Group options={series} onChange={onChange}/> : null}
                        <li onClick={() => handleClick4()}>Color {click4 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click4 ? <Checkbox.Group options={colors} onChange={onChange}/> : null}
                        <li onClick={() => handleClick5()}>Finish {click5 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click5 ? <Checkbox.Group options={finishes} onChange={onChange}/> : null}
                        <li onClick={() => handleClick6()}>Color Number {click6 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click6 ? <Checkbox.Group options={colornumbers} onChange={onChange}/> : null}
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