import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
        //filter array and return image that matches sku
       const imageData = useStaticQuery(graphql`
       {
        allFiles(filter: {data: {uuid: {in: 
            [
                "a0f603da-6b96-4d05-983a-28f54eb3ae75",
                "3fc73eeb-c258-4d5f-a5c6-207fb35c5349",
                "93305d69-9df4-4e6b-9bdf-99271e6b8a63",
                "fddfd9ce-a0b3-41b0-a368-d44b1b02f5de",
                "f8f470ca-8373-406f-b84f-6b5b398463c1",
                "f11634f4-993b-4148-b84c-4a2d0ff6be5a",
                "9b96ad5c-5cd6-468c-ab7b-3a48c77e05c9",
                "160ea46e-658e-4164-8d59-f0a160828142",
                "20ffe08b-8352-4b5e-8116-45b2dfa0ce7f",
                "f3a3ebff-5202-4a5c-8459-51080a7d54c8",
                "56cdace4-c049-4dab-a474-d769061f4129",
                "541ebd3f-e869-4ea2-9b42-8ca84a6f5cb5",
                "69417ce8-73cf-413d-b6ea-69bc8b6e6d75",
                "66bdf739-e2a4-4cc1-b517-54a4464328c5",
                "e96261b7-e146-4228-bbd6-73cd3545165c",
                "fe3650a2-2727-4641-b7ec-0bb87c32264c",
                "1ad153f0-cab3-413e-b3db-34230debe30b",
                "6d525f34-b8bc-4337-ab47-b37a60d6c9d6",
                "6cbfabaf-bab2-4e38-a6cc-85f396724757",
                "67248c0c-2e83-4b05-8413-a051d7dbad2f"
            ]
        }}}) {
            totalCount
            nodes {
              data {
                field_file_image_alt_text
                fid
                name
                mime
                size
                url
                timestamp
                type
                uuid
              }
            }
          }
       }`)

       const image = imageData.allFiles.nodes.filter(node => node.data.uuid == uuid.uuid)


    return (
        <div>
            {image.length > 0 ? <img src={image[0].data.url} alt={image[0].data.field_file_image_alt_text} width={250} /> : <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" alt="logo"  width={250}/>}
        </div>
    )
}



export default ProductImage;


    
