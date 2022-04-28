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

    const allChemicals = await graphql(`
    {
      allCommerceProduct(filter: {data: {type: {eq: "rapid_tac"}}}) {
        totalCount
        nodes {
          data {
            field_product_image {
              file {
                uuid
              }
            }
            sku
            title
            field_product_tools_required
            field_product_quantity
            field_product_material
            field_product_short_description
            field_product_type
            field_product_installation {
              value
            }
          }
        }
      }
    }
    `);    

   const allRolls = await graphql(`
   {
    allCommerceProduct(filter: {data: {type: {eq: "roll"}}}) {
      nodes {
        data {
          field_product_image {
            file {
              uuid
            }
          }
          sku
          title
          field_product_color
          field_product_rated_strength
          field_product_width_in
          field_product_length_in_yards
          field_product_roll_size
          field_product_price_sqft
          field_product_brand
          field_product_tools_required
          field_product_short_description
          type
          field_product_finish
          field_product_durability
          field_product_compatibility
          field_product_material
          field_product_type
          field_product_length
          field_product_application
          field_product_thickness
          field_product_width
          field_product_qty_rolls
          field_product_sqft
        }
      }
      totalCount
    }
  }
`)  

    const allVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {in: ["vinyl", "transferrite"]}}}
          ) {
            nodes {
              data {
                field_product_image {
                  file {
                    uuid
                  }
                }
                field_product_adhesive_color
                field_product_adhesive_features
                field_product_application
                field_product_app_surface
                field_product_series
                field_product_roll_size
                field_product_width_in
                field_product_length_in_yards
                field_product_liner_type
                field_product_finish
                field_product_brand
                field_product_color
                field_product_color_number
                field_product_color_range
                field_product_compatibility
                field_product_adhesive
                field_product_application
                field_product_uv_resistance
                field_product_punched
                field_product_inside_or_outside
                field_product_removability
                field_product_surface
                field_product_vinyl_type
                field_product_core_diameter
                field_product_durability
                field_product_price_sqft
                field_product_sqft_per_roll
                field_product_vinyl_class
                field_product_opacity
                field_product_vinyl_type
                field_product_punched
                field_product_short_description
                field_product_thickness
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

    const calenderedVinyl = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_category: {eq: "calendered_vinyl"}}}
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

    const metallicVinyl = await graphql(`
    {
      allCommerceProduct(
          filter: {data: {field_category: {eq: "metallic_vinyl"}}}
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

    const reflectiveVinyl = await graphql(`
    {
      allCommerceProduct(
          filter: {data: {field_category: {eq: "reflective_vinyl"}}}
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

    const specialtyVinyl = await graphql(`
    {
      allCommerceProduct(
          filter: {data: {field_category: {eq: "specialty_vinyl"}}}
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

    const translucentVinyl = await graphql(`
    {
      allCommerceProduct(
          filter: {data: {field_category: {eq: "translucent_vinyl"}}}
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

    const fluorescentVinyl = await graphql(`
    {
      allCommerceProduct(
          filter: {data: {field_category: {eq: "fluorescent_vinyl"}}}
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
              field_product_price_sqft
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



  allVinyl.data.allCommerceProduct.nodes.forEach(element => {
    const images = [];
    element.data.field_product_image.forEach(image => {
      if (image) {
        images.push(image.file.uuid);
      }
    });
    createPage({
      path: `/products/${element.data.sku}`,
      component: path.resolve('./src/pages/product-pages/vinylproduct.js'),
      context: {
        //need to make this dynamic
        data: element.data,
        images: images,
        series: element.data.field_product_series,
      },
    })  
  });

  allRolls.data.allCommerceProduct.nodes.forEach(element => {
    const images = [];
    element.data.field_product_image.forEach(image => {
      if (image) {
        images.push(image.file.uuid);
      }
    });
    createPage({
      path: `/products/${element.data.sku}`,
      component: path.resolve('./src/pages/product-pages/rollproduct.js'),
      context: {
        //need to make this dynamic
        data: element.data,
        images: images,
        series: element.data.field_product_series,
      },
    })  
  });

  allChemicals.data.allCommerceProduct.nodes.forEach(element => {
    const images = [];
    element.data.field_product_image.forEach(image => {
      if (image) {
        images.push(image.file.uuid);
      }
    });
    createPage({
      path: `/products/${element.data.sku}`,
      component: path.resolve('./src/pages/product-pages/chemicalproducts.js'),
      context: {
        //need to make this dynamic
        data: element.data,
        images: images,
        series: element.data.field_product_series,
      },
    })  
  });

  createPage({
    path: '/cast-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/castvinyl.js'),
    context: {
        //need to make this dynamic
        data: castVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/calendered-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/calenderedvinyl.js'),
    context: {
        //need to make this dynamic
        data: calenderedVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/metallic-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/metallicvinyl.js'),
    context: {
        //need to make this dynamic
        data: metallicVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/reflective-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/reflectivevinyl.js'),
    context: {
        //need to make this dynamic
        data: reflectiveVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/specialty-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/specialtyvinyl.js'),
    context: {
        //need to make this dynamic
        data: specialtyVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/translucent-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/translucentvinyl.js'),
    context: {
      //need to make this dynamic
      data: translucentVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/fluorescent-vinyl',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/cut-vinyl/fluorescentvinyl.js'),
    context: {
      //need to make this dynamic
      data: fluorescentVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/vinyl-tapes/masking',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/paper-masking-sandblast/masking.js'),
    context: {
      //need to make this dynamic
      data: maskedVinyl.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/vinyl-tapes/application-tape',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/application-tapes/applicationtape.js'),
    context: {
      //need to make this dynamic
      data: applicationTape.data.allCommerceProduct.nodes,
    },
  })

  createPage({
    path: '/vinyl-tapes/application-chemicals',
    component: path.resolve('./src/templates/vinyl-and-app-tapes/application-chemicals/applicationChemicals.js'),
    context: {
      //need to make this dynamic
      data: applicationChemicals.data.allCommerceProduct.nodes,
    },
  })
}



 
 