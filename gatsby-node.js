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

    const products = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}}}
          ) {
            totalCount
            nodes {
              data {
                sku
                title
                field_category
        field_latex_print
        field_open_sku
        field_product_above_thread_len
        field_product_adhesive
        field_product_anchor_for_concret
        field_product_anchor_for_dry_wal
        field_product_application
        field_product_application_text
        field_product_arm_length
        field_product_availability
        field_product_avoid_carrier
        field_product_backing
        field_product_bag_compartments
        field_product_below_thread_len
        field_product_beam_spread
        field_product_belt_clup
        field_product_best_seller
        field_product_blade_angle
        field_product_blade_compat
        field_product_blade_edges
        field_product_blade_material
        field_product_blade_size
        field_product_blade_type
        field_product_blank_color
        field_product_blank_material
        field_product_body_diameter
        field_product_box_length
        field_product_box_height
        field_product_box_whl
        field_product_box_width
        field_product_brand
        field_product_brightness
        field_product_bulb_base_size
        field_product_cable_diameter
        field_product_cable_spacing
        field_product_cap_height
        field_product_case_dimensions
        field_product_certification
        field_product_color
        field_product_color_number
        field_product_color_range
        field_product_color_temperature
        field_product_compatibility
        field_product_concrete_or_drywal
        field_product_convertion
        field_product_core_diameter
        field_product_cost
        field_product_degree
        field_product_cri
        field_product_degree_splittip
        field_product_denier
        field_product_depth
        field_product_description_purcha
        field_product_diameter
        field_product_dimmable
        field_product_distance_from_wall
        field_product_distance
        field_product_drawing
        field_product_drill_diameter
        field_product_durability
        field_product_drilled_holes
        field_product_duty
        field_product_elongation
        field_product_end_type
        field_product_energy_star_rated
        field_product_fabric
        field_product_fabric_color
        field_product_felt
        field_product_felt_type
        field_product_fill_holes
        field_product_filletage_de_la_te
        field_product_finial
        field_product_finish
        field_product_fit_screw_sizes
        field_product_flute_length
        field_product_flute_type
        field_product_frame_size
        field_product_free_shipping_disc
        field_product_glantz_code
        field_product_glass_shape
        field_product_glass_type
        field_product_grade
        field_product_grip_style
        field_product_groove
        field_product_handle
        field_product_hangs_material
        field_product_hardness
        field_product_head_shape
        field_product_height
        field_product_head_type
        field_product_height_in
        field_product_height_range
        field_product_hole_qty
        field_product_hole_size
        field_product_hours_rating
        field_product_id_tolerance
        field_product_in_popup
        field_product_image {
          file {
            uuid
          }
        }
        field_product_incand_watt_eq
        field_product_include
        field_product_ink
        field_product_input_voltage
        field_product_inside_diameter
        field_product_inside_or_outside
        field_product_instruction_guide
        field_product_invert_corners
        field_product_ip_rating
        field_product_led_lighting
        field_product_length
        field_product_length_dec
        field_product_length_in_mm
        field_product_length_in_yards
        field_product_length_tolerance
        field_product_level
        field_product_lift_clearance
        field_product_line
        field_product_load_capacity_per_
        field_product_loading_style
        field_product_locking
        field_product_locking_type
        field_product_lumens
        field_product_magnetic
        field_product_machine_washable
        field_product_material
        field_product_material_grade
        field_product_material_hole_size
        field_product_material_thickness
        field_product_material_weight
        field_product_max_height_letter
        field_product_max_wattage
        field_product_maximum_thickness
        field_product_maximum_weight
        field_product_media_size
        field_product_meta_description
        field_product_meta_keyword
        field_product_meta_title
        field_product_minimum_thickness
        field_product_mount
        field_product_number_of_columns
        field_product_number_of_row
        field_product_number_of_tiers
        field_product_numbers_of_spirals
        field_product_od_tolerance
        field_product_old_id
        field_product_opacity
        field_product_options
        field_product_optional_ride
        field_product_orientation
        field_product_outer_diameter
        field_product_outside_diameter
        field_product_outside_dimensions
        field_product_pack
        field_product_packing_fee
        field_product_panel_finish
        field_product_panel_material
        field_product_placement
        field_product_patented
        field_product_pkg_weight
        field_product_pocket_size
        field_product_pole_type
        field_product_position
        field_product_post_height
        field_product_power_factor
        field_product_price_sqft
        field_product_printability
        field_product_punched
        field_product_qty_wheel
        field_product_qty_rolls
        field_product_qty_wheel_lock
        field_product_quality
        field_product_quantity
        field_product_quantity_of_panels
        field_product_quantity_rolls
        field_product_quick_change
        field_product_rated_strength
        field_product_related_products {
          uri
          uuid
        }
        field_product_required_material
        field_product_rider_size
        field_product_ring_spacing
        field_product_riders
        field_product_rod_diameter
        field_product_roll_height_max
        field_product_roll_outer_diamete
        field_product_roll_size
        field_product_safety_listing
        field_product_screw_size
        field_product_screw_type
        field_product_series
        field_product_shade_style
        field_product_set_quantity
        field_product_shank_length
        field_product_shank_type
        field_product_shape
        field_product_short_description
        field_product_short_long_term
        field_product_size
        field_product_socket_depth
        field_product_solid_or_hollow
        field_product_socket_width
        field_product_spacing
        field_product_special_text
        field_product_sqft
        field_product_sqft_per_roll
        field_product_sqft_of_rolls
        field_product_stacking_lugs
        field_product_style
        field_product_supplier_name
        field_product_surface
        field_product_tamper_proof
        field_product_system
        field_product_tamper_proof1
        field_product_tapped
        field_product_tapped_type
        field_product_taraudage
        field_product_thickness_board_ac
        field_product_thickness
        field_product_thread
        field_product_thread_depth
        field_product_thread_length
        field_product_thread_type
        field_product_tightening_method
        field_product_tools_required
        field_product_treatment
        field_product_type
        field_product_use
        field_product_uv_resistance
        field_product_video
        field_product_viewable_surface
        field_product_vinyl_class
        field_product_vinyl_serie
        field_product_vinyl_style
        field_product_vinyl_type
        field_product_volumen
        field_product_waist_strap
        field_product_warranty
        field_product_washer
        field_product_watts
        field_product_weight_max
        field_product_whiteness
        field_product_wide
        field_product_width
        field_product_width_in
        field_product_yes_no
        field_products_glove_size
              }
            }
          }
    }
    `);

    const landingPages = await graphql(`
    {
        allTaxonomyTerm(filter: {data: {parent: {elemMatch: {id: {eq: 805}}}}}) {
          nodes {
            data {
              name
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
                field_product_width
                field_product_width_in
                field_product_length
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

    landingPages.data.allTaxonomyTerm.nodes.map(node => {
        const pathName = node.data.name.toLowerCase().replace(/\s/g, '_');
        createPage({
            path: `/product-list/${pathName}`,
            component: path.resolve('./src/templates/product-list.js'),
            context: {
                //need to make this dynamic
                category: pathName,
            },
        })
    })

    const newArr = [];

    castVinyl.data.allCommerceProduct.nodes.map(node => {
        node.data.field_product_image.map(image => {
            newArr.push(image.file.uuid);
        })
    })


    createPage({
        path: '/cast-vinyl',
        component: path.resolve('./src/templates/castvinyl.js'),
        context: {
            //need to make this dynamic
            data: castVinyl.data.allCommerceProduct.nodes,
            uuids: newArr,
        },
    })


    products.data.allCommerceProduct.nodes.map(product => {
        createPage({
            path: `/vinyl/${product.data.sku}`,
            component: path.resolve('./src/templates/product.js'),
            context: {
                sku: product.data.sku,
                title: product.data.title
            }
        })
    })

 }