import * as React from 'react';
import { Checkbox } from 'antd';
import { UnorderedListOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { SidebarContainer, SubCategories, FilterContainer } from '../styles/styledComponents';



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
    
    //add filters based on selection
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
    //add and remove products based on filters
    React.useEffect(() => {
        if ( on == true) {
            const filteredProducts = products.filter(product => 
                (filters.includes(product.data.field_product_roll_size)) 
            || (filters.includes(product.data.field_product_width_in)) 
            || (filters.includes(product.data.field_product_length_in_yards)) 
            || (filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_color_range))
            || (filters.includes(product.data.field_product_application))
            || (filters.includes(product.data.field_product_punched))
            || (filters.includes(product.data.field_product_surface))
            || (filters.includes(product.data.field_product_durability))
            || (filters.includes(product.data.field_product_vinyl_class))
            || (filters.includes(product.data.field_product_finish)));
            setProducts(filteredProducts);
            setOn(true);
        }
       
        else if (filters.length > 0) {
            const filteredProducts = baseProducts.filter(product => 
                (filters.includes(product.data.field_product_roll_size)) 
            || (filters.includes(product.data.field_product_width_in)) 
            || (filters.includes(product.data.field_product_length_in_yards)) 
            || (filters.includes(product.data.field_product_series))
            || (filters.includes(product.data.field_product_color))
            || (filters.includes(product.data.field_product_color_number))
            || (filters.includes(product.data.field_product_color_range))
            || (filters.includes(product.data.field_product_application))
            || (filters.includes(product.data.field_product_punched))
            || (filters.includes(product.data.field_product_surface))
            || (filters.includes(product.data.field_product_durability))
            || (filters.includes(product.data.field_product_vinyl_class))
            || (filters.includes(product.data.field_product_finish)));
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


    //get filter data, turn into array, then use data in sidebar component to allow selection of filters
    const rollSize = [...new Set(products.map(fields => fields.data.field_product_roll_size))]
    const rollsizes = [];
    rollSize.sort().forEach(roll => {
        const removefirstscore = roll.replace('_','" ').replace('-x-', '" x ');
        const removesecscore = removefirstscore.replace('_',' ').replace('-x-', ' x ');
        const removelast = removesecscore.replace('_',' ').replace('-yards', ' yards').replace('-yds', ' yds');
        rollsizes.push({ 'label': `${removelast}`, 'value': `${roll}` });
    });
    //order sizes
    if (rollsizes.length > 64) {       
        const pop1 = rollsizes.splice(39, 1);
        const pop2 = rollsizes.splice(41, 1);
        const pop3 = rollsizes.splice(47, 1);
        const pop4 = rollsizes.splice(56, 1);
        const pop5 = rollsizes.splice(5, 1);
        const pop6 = rollsizes.splice(58, 1);
        const pop7 = rollsizes.splice(6, 1);
        const pop8 = rollsizes.splice(9, 1);
        const pop9 = rollsizes.splice(10, 1);
        const pop10 = rollsizes.splice(11, 1);
        const pop11 = rollsizes.splice(13, 1);
        const pop12 = rollsizes.splice(14, 1);
        const pop13 = rollsizes.splice(16, 1);
        const pop14 = rollsizes.splice(16, 1);
        const pop15 = rollsizes.splice(28, 1);
        const pop16 = rollsizes.splice(29, 1);
        const pop17 = rollsizes.splice(30, 1);
        const pop18 = rollsizes.splice(19, 1);
        const pop19 = rollsizes.splice(37, 1);
        const pop20 = rollsizes.splice(39, 1);
        const pop21 = rollsizes.splice(44, 1);
        const pop22 = rollsizes.splice(12, 1);
        const pop23 = rollsizes.splice(22, 1);
        const pop24 = rollsizes.splice(31, 1);
        const pop25 = rollsizes.splice(32, 1);
        const pop26 = rollsizes.splice(36, 1);
        const pop27 = rollsizes.splice(8, 1);
        const pop28 = rollsizes.splice(16, 1);
        const pop29 = rollsizes.splice(7, 1);
        const pop30 = rollsizes.splice(14, 1);

        rollsizes.unshift(pop30[0]);
        rollsizes.unshift(pop29[0]);
        rollsizes.unshift(pop28[0]);
        rollsizes.unshift(pop27[0]);
        rollsizes.unshift(pop26[0]);
        rollsizes.unshift(pop25[0]);
        rollsizes.unshift(pop24[0]);
        rollsizes.unshift(pop23[0]);
        rollsizes.unshift(pop22[0]);
        rollsizes.unshift(pop21[0]);
        rollsizes.unshift(pop20[0]);
        rollsizes.unshift(pop19[0]);
        rollsizes.unshift(pop17[0]);
        rollsizes.unshift(pop16[0]);
        rollsizes.unshift(pop15[0]);
        rollsizes.unshift(pop18[0]);
        rollsizes.unshift(pop14[0]);
        rollsizes.unshift(pop13[0]);
        rollsizes.unshift(pop12[0]);
        rollsizes.unshift(pop11[0]);
        rollsizes.unshift(pop10[0]);
        rollsizes.unshift(pop9[0]);
        rollsizes.unshift(pop8[0]);
        rollsizes.unshift(pop7[0]);
        rollsizes.unshift(pop6[0]);
        rollsizes.unshift(pop5[0]);
        rollsizes.unshift(pop4[0]);
        rollsizes.unshift(pop3[0]);
        rollsizes.unshift(pop2[0]);
        rollsizes.unshift(pop1[0]);
    }
 
    
    const width = [...new Set(products.map(fields => fields.data.field_product_width_in))]
    const widths = [];
    width.sort().forEach(width => {
        const refactorwidth = width.replace('"', '').replace("00", "").replace("1108", "6").replace("in", "");
        widths.push({ 'label': `${refactorwidth}"`, 'value': `${width}`});
    })
    //order widths
    console.log(widths);
    if (widths.length > 24) {
        const pop1 = widths.splice(1, 1);
        const pop2 = widths.splice(12, 1);
        widths.unshift(pop2[0]);
        widths.unshift(pop1[0]);
        const pop3 = widths.splice(13, 1)
        widths.splice(3, 0, pop3[0])
        const pop4 = widths.splice(10, 1)
        widths.splice(4, 0, pop4[0])
        const pop5 = widths.splice(13, 1)
        widths.splice(5, 0, pop5[0])
        const pop6 = widths.splice(17, 1)
        widths.splice(6, 0, pop6[0])
        const pop7 = widths.splice(19, 1)
        widths.splice(7, 0, pop7[0])
        const pop8 = widths.splice(21, 1)
        widths.splice(8, 0, pop8[0])
        const pop9 = widths.splice(10, 1)
        widths.splice(9, 0, pop9[0])
        const pop10 = widths.splice(23, 1)
        widths.splice(10, 0, pop10[0])
        const pop11 = widths.splice(24, 1)
        widths.splice(11, 0, pop11[0])
    }


    const length = [...new Set(products.map(fields => fields.data.field_product_length_in_yards))]
    const lengths = [];
    length.sort().forEach(length => {
        lengths.push({ 'label': `${length.replace("_yards", "")}`, 'value': `${length}`});
    })
    if (lengths.length > 6) {       
        const pop1 = lengths.splice(6, 1)
        lengths.splice(0, 0, pop1[0])
        const pop2 = lengths.splice(2, 1)
        lengths.splice(1, 0, pop2[0])
        const pop3 = lengths.splice(5, 1)
        lengths.splice(2, 0, pop3[0])
        const pop4 = lengths.splice(6, 1)
        lengths.splice(3, 0, pop4[0])
    }


    const serie = [...new Set(products.map(fields => fields.data.field_product_series))]
    const series = [];
    serie.sort().forEach(serie => {
        const refactorSeries = serie.replace('_', ' ').replace('-', ' ');
        const uppercase = refactorSeries.toString().toUpperCase();
        series.push({ 'label': `${uppercase.replace("_", " ")}`, 'value': `${serie}`});
    })

    const color = [...new Set(products.map(fields => fields.data.field_product_color))]
    const colors = [];
    color.sort().forEach(color => {
        const refactorcolor = color.replaceAll('_', ' ').replaceAll('-', ' ').replace('100', 'Blue').replace('101', 'Gloss Gold').replace('102', 'Gloss Orange').replace('105', 'Gloss Yellow').replace('1200', 'Gloss Green').replace('1269', 'Gloss Silver').replace('1283', 'Gloss Red').replace('1269', 'Gloss Silver').replace('1290', 'Gloss White').replace('1317', 'Clear');
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
    colornumber.forEach(colornumber => {
        colornumbers.push({ 'label': `${colornumber}`, 'value': `${colornumber}`});
    })
    //console.log(colornumbers.sort(function(a,b) {return (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0);} )); 

    const colorrange = [...new Set(products.map(fields => fields.data.field_product_color_range))]
    const colorranges = [];
    colorrange.sort().forEach(colorrange => {
        if (colorrange) {
            colorranges.push({ 'label': `${colorrange}`, 'value': `${colorrange}`});
        }
    })

    const application = [...new Set(products.map(fields => fields.data.field_product_application))]
    const applications = [];
    application.sort().forEach(application => {
        if (application) {
            const refactorapp = application.replaceAll('_', ' ').replaceAll('-', ' ')
            const newapp = refactorapp.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            applications.push({ 'label': `${newapp}`, 'value': `${application}`});
        }
    })


    const punched = [...new Set(products.map(fields => fields.data.field_product_punched))]
    const puncheds = [];
    punched.sort().forEach(punched => {
        if (punched) {
            puncheds.push({ 'label': `${punched}`, 'value': `${punched}`});
        }
    })

    const surface = [...new Set(products.map(fields => fields.data.field_product_surface))]
    const surfaces = [];
    surface.sort().forEach(surface => {
        const refactorsurface = surface.replaceAll('_', ' ').replaceAll('-', ' ')
        const newsurface = refactorsurface.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        surfaces.push({ 'label': `${newsurface}`, 'value': `${surface}`});
    })

    const durability = [...new Set(products.map(fields => fields.data.field_product_durability))]
    const durabilities = [];
    durability.sort().forEach(durability => {
        durabilities.push({ 'label': `${durability.replace("_", " ").replace("-years", " years").replace("_or_", " or ")}`, 'value': `${durability}`});
    })

    const vinylclass = [...new Set(products.map(fields => fields.data.field_product_vinyl_class))]
    const vinylclasses = [];
    vinylclass.sort().forEach(vinylclass => {
        if (vinylclass) {
            vinylclasses.push({ 'label': `${vinylclass}`, 'value': `${vinylclass}`});
        }
    })


    return (
        <SidebarContainer>
                <ul><h2 style={{fontWeight: "bold", marginTop: "30px"}}>Sub Categories</h2></ul>
                <SubCategories>
                    <a href="/calendered-vinyl"><li><UnorderedListOutlined />Calendered Vinyl</li></a>
                    <a href="/cast-vinyl"><li className="active"><UnorderedListOutlined />Cast Vinyl</li></a>
                    <a href="/metallic-vinyl"><li><UnorderedListOutlined />Metallic Vinyl</li></a>
                </SubCategories>
                <h2 style={{fontWeight: "bold", marginTop: "25px", textAlign: "center", borderBottom: "1px solid black", paddingBottom: "10px"}}>Filters</h2>
                <FilterContainer>
                    {filters.length > 0 ? <button onClick={clearFilters}>Clear Filters</button> : null}
                        <li onClick={() => handleClick()}>Roll Size {click ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {/*map through roll size array*/}
                            {/*each size has an onclick function that filters the products array*/}
                            {click ? <Checkbox.Group options={rollsizes} onChange={onChange}/> : null}
                        <li onClick={() => handleClick1()}>Width {click1 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click1 ? <Checkbox.Group options={widths.sort()} onChange={onChange}/> : null}
                        <li onClick={() => handleClick2()}>Length (in yards) {click2 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click2 ? <Checkbox.Group options={lengths} onChange={onChange}/> : null}
                        <li onClick={() => handleClick3()}>Series {click3 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click3 ? <Checkbox.Group options={series} onChange={onChange}/> : null}
                        <li onClick={() => handleClick4()}>Color {click4 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click4 ? <Checkbox.Group options={colors} onChange={onChange}/> : null}
                        <li onClick={() => handleClick5()}>Finish {click5 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click5 ? <Checkbox.Group options={finishes} onChange={onChange}/> : null}
                        <li onClick={() => handleClick6()}>Color Number {click6 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click6 ? <Checkbox.Group options={colornumbers.sort()} onChange={onChange}/> : null}
                        <li onClick={() => handleClick7()}>Color Range {click7 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click7 ? <Checkbox.Group options={colorranges} onChange={onChange}/> : null}
                        <li onClick={() => handleClick8()}>Application {click8 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click8 ? <Checkbox.Group options={applications} onChange={onChange} style={{overflowWrap: "anywhere"}}/> : null}
                        <li onClick={() => handleClick9()}>Punched {click9 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click9 ? <Checkbox.Group options={puncheds} onChange={onChange}/> : null}
                        <li onClick={() => handleClick10()}>Surface {click10 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click10 ? <Checkbox.Group options={surfaces} onChange={onChange} style={{overflowWrap: "anywhere"}}/> : null}
                        <li onClick={() => handleClick11()}>Durability {click11 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click11 ? <Checkbox.Group options={durabilities} onChange={onChange}/> : null}
                        <li onClick={() => handleClick12()}>Vinyl Class {click12 ? <MinusOutlined style={{paddingTop: "5px"}} height={10}/> : <PlusOutlined style={{paddingTop: "5px"}} height={10}/>}</li>
                            {click12 ? <Checkbox.Group options={vinylclasses} onChange={onChange}/> : null}
                </FilterContainer>
        </SidebarContainer>
    )
}