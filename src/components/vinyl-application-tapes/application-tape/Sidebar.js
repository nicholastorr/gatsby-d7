
import * as React from 'react';
import { Checkbox } from 'antd';
import { UnorderedListOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { SidebarContainer, SubCategories, FilterContainer } from '../../styles/styledComponents';




export const Sidebar = ({products, setProducts, baseProducts }) => {
    const [filters, setFilters] = React.useState([]);
    const [on, setOn] = React.useState(false);
    const [click, setClick] = React.useState(false);
    const [click1, setClick1] = React.useState(false);
    const [click2, setClick2] = React.useState(false);
    const [click3, setClick3] = React.useState(false);
    const [click4, setClick4] = React.useState(false);
    const [click5, setClick5] = React.useState(false);
    const [click6, setClick6] = React.useState(false);
    const [click7, setClick7] = React.useState(false);
    const [click8, setClick8] = React.useState(false);
    const [click9, setClick9] = React.useState(false);
    const [click10, setClick10] = React.useState(false);
    const [click11, setClick11] = React.useState(false);
    const [click12, setClick12] = React.useState(false);

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
    const handleClick7 = () => {
        setClick7(!click7);
    }
    const handleClick8 = () => {
        setClick8(!click8);
    }
    const handleClick9 = () => {
        setClick9(!click9);
    }
    const handleClick10 = () => {
        setClick10(!click10);
    }
    const handleClick11 = () => {
        setClick11(!click11);
    }
    const handleClick12 = () => {
        setClick12(!click12);
    }
    console.log(products);

    const onChange = (checkedValues) => {
        if (filters.length > 0) {
            if (checkedValues != undefined && checkedValues.length > 0 && !filters.includes(checkedValues) && !filters.includes(checkedValues[0])) {
            setFilters(checkedValues);
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
        if ( on == true) {
            const filteredProducts = products.filter(product => 
             (filters.includes(product.data.field_product_width)) 
            || (filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_backing))
            || (filters.includes(product.data.field_product_level))
            || (filters.includes(product.data.field_product_punched))
            || (filters.includes(product.data.field_product_opacity))
            || (filters.includes(product.data.field_product_backing))
            || (filters.includes(product.data.field_product_material_thickness)));
            setProducts(filteredProducts);
            setOn(true);
        }

        else if (filters.length > 0) {
            const filteredProducts = baseProducts.filter(product => 
              (filters.includes(product.data.field_product_width)) 
            || (filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_backing))
            || (filters.includes(product.data.field_product_level))
            || (filters.includes(product.data.field_product_opacity))
            || (filters.includes(product.data.field_product_backing))
            || (filters.includes(product.data.field_product_material_thickness)));
            setProducts(filteredProducts);
            setOn(true);
        }

    }, [filters]);
    //clear filter button
    const clearFilters = () => {
        setFilters([]);
        setOn(false);
        setProducts(baseProducts);
        setClick(false);
        setClick1(false);
        setClick2(false);
        setClick3(false);
        setClick4(false);
        setClick5(false);
        setClick6(false);
        setClick7(false);
        setClick8(false);
        setClick9(false);
        setClick10(false);
        setClick11(false);
    }

    const width = [...new Set(products.map(fields => fields.data.field_product_width))]
    const widths = [];
    width.sort().forEach(roll => {
        if (roll) {
            widths.push({ 'label': `${roll}`, 'value': `${roll}` });
        }
    });

    const thickness = [...new Set(products.map(fields => fields.data.field_product_material_thickness))]
    const thicknesses = [];
    thickness.sort().forEach(roll => {
        if (roll) {
            thicknesses.push({ 'label': `${roll}`, 'value': `${roll}` });
        }
    });
    
    const color = [...new Set(products.map(fields => fields.data.field_product_color))]
    const colors = [];
    color.sort().forEach(color => {
        if (color) {
            colors.push({ 'label': `${color}`, 'value': `${color}`});
        }
    })

    const opacity = [...new Set(products.map(fields => fields.data.field_product_opacity))]
    const opacitys = [];
    opacity.sort().forEach(color => {
        if (color) {
            opacitys.push({ 'label': `${color}`, 'value': `${color}`});
        }
    })

    const backing = [...new Set(products.map(fields => fields.data.field_product_backing))]
    const backings = [];
    backing.sort().forEach(color => {
        if (color) {
            backings.push({ 'label': `${color}`, 'value': `${color}`});
        }
    })

    const tacking = [...new Set(products.map(fields => fields.data.field_product_level))]
    const tackings = [];
    tacking.sort().forEach(color => {
        if (color) {
            tackings.push({ 'label': `${color}`, 'value': `${color}`});
        }
    })

    return (
        <SidebarContainer>
                <h2 style={{fontWeight: "bold", marginTop: "25px", textAlign: "center", borderBottom: "1px solid black", paddingBottom: "10px"}}>Filters</h2>
                <FilterContainer>
                {filters.length > 0 ? <button onClick={clearFilters}>Clear Filters</button> : null}
                        <li onClick={() => handleClick1()}>Width {click1 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click1 ? <Checkbox.Group options={widths.sort()} onChange={onChange}/> : null}
                        <li onClick={() => handleClick2()}>Material Thickness {click2 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click2 ? <Checkbox.Group options={thicknesses.sort()} onChange={onChange}/> : null} 
                        <li onClick={() => handleClick3()}>Color {click3 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click3 ? <Checkbox.Group options={colors.sort()} onChange={onChange}/> : null}   
                        <li onClick={() => handleClick4()}>Opacity {click4 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click4 ? <Checkbox.Group options={opacitys.sort()} onChange={onChange}/> : null}     
                        <li onClick={() => handleClick5()}>Backing {click5 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click5 ? <Checkbox.Group options={backings.sort()} onChange={onChange}/> : null} 
                        <li onClick={() => handleClick6()}>Tack Level {click6 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click6 ? <Checkbox.Group options={tackings.sort()} onChange={onChange}/> : null}                       
                </FilterContainer>
        </SidebarContainer>
    )
}

