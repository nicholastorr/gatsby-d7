import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';
import { InputNumber, Button } from 'antd';
import { StaticImage } from 'gatsby';
import 'antd/dist/antd.css';
import ProductImage from './ProductImage';

const RelatedProductwrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `

function createData(field, data) {
    return { field, data };
  }


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const DetailTable = ( data, images, relatedProduct ) => {

    console.log(data);
    console.log(images);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const rows1 = [
        createData('Sku', data.data.sku),
        createData('Color', data.data.field_product_color),
        createData('Tack Strength', data.data.field_product_level),
    ];

    const rows2 = [
        createData('Width IN', data.data.field_product_width),
        createData('Length YDS', data.data.field_product_length),
        createData('Price Sqft', data.data.field_product_price_sqft),
        createData('Square Footage Per Roll', data.data.field_product_sqft_per_roll),
        createData('Brand', data.data.field_product_brand),
    ];
    

  return (
    <Box sx={{ width: '70%', margin: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Technical Information" {...a11yProps(1)} />
          {data.relatedProduct.length > 0 && <Tab label="Related Products" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h3 style={{color: "black"}}>{data.data.title}</h3>
        <p style={{color: "black", fontWeight: "bold"}}>SKU: <span style={{fontWeight: "normal"}}>{data.data.sku}</span></p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <img src={data.images[0].data.url} loading="lazy" alt={data.data.title} width={"35%"}/>
                <div style={{flexDirection: "column", width: "50%"}}>
                    <p style={{fontWeight: "bold"}}>Description</p>
                    <p>{data.data.field_product_short_description}</p>
                </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3 style={{color: "black"}}>{data.data.title}</h3>
        <p style={{color: "black", fontWeight: "bold"}}>SKU: <span style={{fontWeight: "normal"}}>{data.data.sku}</span></p>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <TableContainer style={{width: "48%"}}>
                <Table  aria-label="simple table">
                <TableBody>
                    {rows1.map((row) => {
                        if (row.data != null) {
                           return ( <TableRow
                            key={row.field}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#ddd" }}
                            >
                            <TableCell style={{color: "black", fontWeight: "bold"}} component="th" scope="row">
                                {row.field}
                            </TableCell>
                            <TableCell style={{color: "black" }} align="right">{row.data.charAt(0).toUpperCase() + row.data.slice(1)}</TableCell>
                        </TableRow>
                           )
                        }
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TableContainer style={{width: "48%", overflowWrap: "anywhere"}}>
                <Table  aria-label="simple table">
                <TableBody>
                    {rows2.map((row) => {
                        if (row.data != null) {
                            const field = row.data.charAt(0).toUpperCase() + row.data.slice(1)
                            return ( <TableRow
                             key={row.field}
                             sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#ddd" }}
                             >
                             <TableCell style={{color: "black", fontWeight: "bold", overflowWrap: "normal"}} component="th" scope="row">
                                 {row.field}
                             </TableCell>
                             <TableCell style={{color: "black" }} align="right">{field.replace('-x-', ' x ').replace('_x_', '" x ').replace("1108", "6").replaceAll('_', ' ')}</TableCell>
                         </TableRow>
                            )
                         }
                        })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3 style={{color: "black"}}>{data.data.title}</h3>
        <p style={{color: "black", fontWeight: "bold"}}>SKU: <span style={{fontWeight: "normal"}}>{data.data.sku}</span></p>
            <RelatedProductwrapper>
              {data.relatedProduct.map((item, index) => {
                  console.log(item)
                return (
                  <div style={{marginBottom: "20px"}}>
                    {item.data.field_product_image.length > 0 ? <ProductImage uuid={item.data.field_product_image[0].file.uuid} /> : <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" />}
                    <a href={`/products/${item.data.sku}`}><h4 style={{height: "75px"}}>{item.data.title}</h4></a>
                    <p style={{fontWeight: "bold"}}>Sku: <span style={{fontWeight: "normal"}}>{item.data.sku}</span></p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <InputNumber min={1} defaultValue={1}  />
                                <Button type="primary"  onClick={onclick}>Add to cart</Button>
                            </div>
                  </div>
                )}
              )}
            </RelatedProductwrapper>
      </TabPanel>
    </Box>
  );
}

export default DetailTable;