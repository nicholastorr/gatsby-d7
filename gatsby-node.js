const path = require('path');


var fs = require('fs');
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    } 
 }

 exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

   

    const calenderedVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "calendered_vinyl"}}}
          ) {
            nodes {
              data {
                field_product_image {
                  file {
                    uuid
                  }
                }
                field_product_series
                field_product_roll_size
                field_product_width_in
                field_product_length_in_yards
                field_product_finish
                field_product_color
                field_product_color_number
                field_product_color_range
                field_product_adhesive
                field_product_application
                field_product_punched
                field_product_surface
                field_product_vinyl_type
                field_product_durability
                field_product_vinyl_class
                sku
                title
              }
            }
          }
        }
    `);



    const castVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "cast_vinyl"}}}
          ) {
            nodes {
              data {
                field_product_image {
                  file {
                    uuid
                  }
                }
                field_product_series
                field_product_roll_size
                field_product_width_in
                field_product_length_in_yards
                field_product_finish
                field_product_color
                field_product_color_number
                field_product_color_range
                field_product_adhesive
                field_product_application
                field_product_punched
                field_product_surface
                field_product_vinyl_type
                field_product_durability
                field_product_vinyl_class
                sku
                title
              }
            }
          }
        }
    `);
        
    


    
    //category logic
    //run query for categories
    //filter categories that have no children
    //send category name to product-list template --- product list template will run static query for products in category


    const newArr = [];

    castVinyl.data.allCommerceProduct.nodes.map(node => {
      if (node.data.field_product_image.length >= 1) {
        newArr.push(node.data.field_product_image[0].file.uuid)
      }
      else {
        newArr.push("74d62dd3-e5b2-472c-bbea-26c7461d5558")
      }
      
    })

 
    

    createPage({
        path: '/cast-vinyl',
        component: path.resolve('./src/templates/castvinyl.js'),
        context: {
            //need to make this dynamic
            data: castVinyl.data.allCommerceProduct.nodes,
        },
    })

    const newArr2 = [];

    calenderedVinyl.data.allCommerceProduct.nodes.map(node => {
      if (node.data.field_product_image.length >= 1) {
        newArr2.push(node.data.field_product_image[0].file.uuid)
      }
      else {
        newArr2.push("74d62dd3-e5b2-472c-bbea-26c7461d5558")
      }
    })

    createPage({
        path: '/calendered-vinyl',
        component: path.resolve('./src/templates/calenderedvinyl.js'),
        context: {
            //need to make this dynamic
            data: calenderedVinyl.data.allCommerceProduct.nodes,
            images: newArr2,
        },
    })

  }



 
 