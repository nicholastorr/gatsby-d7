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
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const DetailTable = ( data, images ) => {

    console.log(data);
    console.log(images);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const rows1 = [
        createData('Sku', data.data.sku),
        createData('Color', data.data.field_product_color),
        createData('Color #', data.data.field_product_color_number),
        createData('Color Range', data.data.field_product_color_range),
        createData('Finish', data.data.field_product_finish),
        createData('Durability', data.data.field_product_durability),
        createData('Print Compatability', data.data.field_product_compatibility),
        createData('Inside/Outside', data.data.field_product_inside_or_outside),
        createData('UV Resistance', data.data.field_product_uv_resistance),
        createData('Type', data.data.field_product_vinyl_type),
        createData('Adhesive Color', data.data.field_product_adhesive_color),
        createData('Adhesive Features', data.data.field_product_adhesive_features),
        createData('Liner Type', data.data.field_product_liner_type),
        createData('Opacity', data.data.field_product_opacity),
    ];

    const rows2 = [
        createData('Thickness', data.data.field_product_thickness),
        createData('Width IN', data.data.field_product_width_in),
        createData('Length YDS', data.data.field_product_length_in_yards),
        createData('Roll Size', data.data.field_product_roll_size),
        createData('Price Sqft', data.data.field_product_price_sqft),
        createData('Square Footage Per Roll', data.data.field_product_sqft_per_roll),
        createData('Punched', data.data.field_product_punched),
        createData('Core Diameter', data.data.field_product_core_diameter),
        createData('Application Surface', data.data.field_product_app_surface),
        createData('Brand', data.data.field_product_brand),
        createData('Series', data.data.field_product_series),
        createData('Removability', data.data.field_product_removability),
        createData('Liner Type', data.data.field_product_liner_type),
        createData('Application', data.data.field_product_application),
    ];
    

  return (
    <Box sx={{ width: '70%', margin: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Technical Information" {...a11yProps(1)} />
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
                             <TableCell style={{color: "black", fontWeight: "bold"}} component="th" scope="row">
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
    </Box>
  );
}

export default DetailTable;