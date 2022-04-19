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

   

    const allVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}}}
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
                field_product_brand
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
                commerce_price {
                  amount_decimal
                }
              }
            }
          }
        }
    `);



    const castVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_category: {eq: "cast_vinyl"}}}
            sort: {fields: data___type, order: ASC}
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
                field_product_brand
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
                field_open_sku
                commerce_price {
                  amount_decimal
                }
              }
            }
          }
        }
    `);

   /* const metallicVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "metallic_vinyl"}}}
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
                commerce_price {
                  amount_decimal
                }
              }
            }
          }
        }
    `);

    const reflectiveVinyl = await graphql(`
    {
      allCommerceProduct(
          filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "reflective_vinyl"}}}
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
              commerce_price {
                amount_decimal
              }
            }
          }
        }
      }
  `);

  const specialtyVinyl = await graphql(`
  {
    allCommerceProduct(
        filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "specialty_vinyl"}}}
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
            commerce_price {
              amount_decimal
            }
          }
        }
      }
    }
`);

const translucentVinyl = await graphql(`
{
  allCommerceProduct(
      filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "translucent_vinyl"}}}
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
          commerce_price {
            amount_decimal
          }
        }
      }
    }
  }
`);
        
const fluorescentVinyl = await graphql(`
{
  allCommerceProduct(
      filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}, field_category: {eq: "fluorescent_vinyl"}}}
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
          commerce_price {
            amount_decimal
          }
        }
      }
    }
  }
`);

const maskedVinyl = await graphql(`
{
  allCommerceProduct(filter: {data: {field_category: {eq: "masking"}}}) {
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
          commerce_price {
            amount_decimal
          }
        }
      }
    }
  }
`);

const kraftPaper = await graphql(`
{
  allCommerceProduct(
    filter: {data: {field_category: {eq: "kraft_paper"}}}) {
      nodes {
        data {
          field_product_image {
            file {
              uuid
            }
          }
          field_product_finish
          field_product_color
          field_product_durability
          sku
          title
          commerce_price {
            amount_decimal
          }
        }
      }
    }
  }
`);

const applicationTape = await graphql(`
{
  allCommerceProduct(
    filter: {data: {field_category: {eq: "application_tape"}}}) {
      nodes {
        data {
          field_product_image {
            file {
              uuid
            }
          }
          field_product_width
          field_product_material_thickness
          field_product_color
          field_product_opacity
          field_product_backing
          field_product_level
          sku
          title
          commerce_price {
            amount_decimal
          }
        }
      }
    }
  }`);

const applicationChemicals = await graphql(`
{
  allCommerceProduct(
    filter: {data: {field_category: {eq: "application_chemicals"}}}) {
      nodes {
        data {
          field_product_image {
            file {
              uuid
            }
          }
          field_product_type
          field_product_quantity
          sku
          title
          commerce_price {
            amount_decimal
          }
        }
      }
    }
  }`);
    
    //category logic
    //run query for categories
    //filter categories that have no children
    //send category name to product-list template --- product list template will run static query for products in category


    //template to send image data

 
    

    createPage({
        path: '/cast-vinyl',
        component: path.resolve('./src/templates/castvinyl.js'),
        context: {
            //need to make this dynamic
            data: castVinyl.data.allCommerceProduct.nodes,
        },
    })


    createPage({
        path: '/calendered-vinyl',
        component: path.resolve('./src/templates/calenderedvinyl.js'),
        context: {
            //need to make this dynamic
            data: calenderedVinyl.data.allCommerceProduct.nodes,
        },
    })

    //get metallic images and push to page data

    createPage({
        path: '/metallic-vinyl',
        component: path.resolve('./src/templates/metallicvinyl.js'),
        context: {
            //need to make this dynamic
            data: metallicVinyl.data.allCommerceProduct.nodes,
        },
    })

    createPage({
      path: '/reflective-vinyl',
      component: path.resolve('./src/templates/reflectivevinyl.js'),
      context: {
          //need to make this dynamic
          data: reflectiveVinyl.data.allCommerceProduct.nodes,
      },
    })

  createPage({
    path: '/specialty-vinyl',
    component: path.resolve('./src/templates/specialtyvinyl.js'),
    context: {
        //need to make this dynamic
        data: specialtyVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/translucent-vinyl',
    component: path.resolve('./src/templates/translucentvinyl.js'),
    context: {
      //need to make this dynamic
      data: translucentVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/fluorescent-vinyl',
    component: path.resolve('./src/templates/fluorescentvinyl.js'),
    context: {
      //need to make this dynamic
      data: fluorescentVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/vinyl-tapes/masking',
    component: path.resolve('./src/templates/masking.js'),
    context: {
      //need to make this dynamic
      data: maskedVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/kraft-paper',
    component: path.resolve('./src/templates/kraftpaper.js'),
    context: {
      //need to make this dynamic
      data: kraftPaper.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/vinyl-tapes/application-tape',
    component: path.resolve('./src/templates/applicationtape.js'),
    context: {
      //need to make this dynamic
      data: applicationTape.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/vinyl-tapes/application-chemicals',
    component: path.resolve('./src/templates/applicationChemicals.js'),
    context: {
      //need to make this dynamic
      data: applicationChemicals.data.allCommerceProduct.nodes,
    },
  })*/

  allVinyl.data.allCommerceProduct.nodes.forEach(element => {
    createPage({
      path: `/products/${element.data.sku}`,
      component: path.resolve('./src/pages/vinylproduct.js'),
      context: {
        //need to make this dynamic
        data: element.data,
      },
    })  
  });

  createPage({
    path: '/cast-vinyl',
    component: path.resolve('./src/templates/castvinyl.js'),
    context: {
        //need to make this dynamic
        data: castVinyl.data.allCommerceProduct.nodes,
    },
  })

}



 
 