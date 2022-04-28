import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
   const imageData = useStaticQuery(graphql`
   {
    allFiles(filter: {data: {uuid: {in: 
      [
        "ca4b689d-90f1-4688-b2df-7afea8fd20ca",
        "8aba8628-144d-4c3d-837f-dee0be4be93e",
        "3b5ab7ec-aa02-48b8-b224-f4e31aea321f",
        "8cebd64b-294d-4c78-940a-ffe40e4e7288",
        "47e91f2f-2c89-488f-910c-0b1b49a9fc44",
        "cca44f48-cde8-4c53-9cba-1d35164c0d4d",
        "0bb2f655-05d9-4e70-9a9f-dbd29386d3b7",
        "1f1714a4-e7a3-43e8-bf44-b824c0e6913e",
        "d19671fd-5266-4fce-86ca-c644ea597443",
        "508273e0-3546-4842-84f2-4e3384d03344",
        "94874c71-c08d-4097-8d61-62c6ba0cecf3",
        "be523b81-6b44-4cfd-8bb2-2b821725ff07",
        "f56aece8-7614-402e-be04-51535267ad58",
        "29658f20-fdfe-4ea9-9060-092087956d22",
        "039b09ca-9765-4e4c-b786-778a0c4c9e10",
        "c250c32b-1e14-4e5f-8db7-a1020777d3d4",
        "c5b1c381-5307-416f-8b98-b5bde88f53f1",
        "680bcd4b-abef-4399-9810-79b3c8ad276f",
        "feed2a03-5272-49de-8776-9880291b1f9f",
        "44ca1a9e-bff8-4536-8a7a-a27bf09cd6a9",
        "24db1709-7a6a-48bb-830c-afb535198870",
        "79bdc5dc-dc58-4855-8e5d-75db1073e888",
        "94bea68c-177d-4786-ba23-fb0e15e6b3ea",
        "4dda77c0-f603-4d6b-8421-2c8939c42391",
        "3d3140cf-c740-45fc-9f6c-d35c79d60e25",
        "4a806920-557b-48ad-8b06-7689ee0c5016",
        "8de2ea27-7e75-4c12-971d-f9e380d1053f",
        "3b474dbf-3f16-458a-b99e-20d688974669",
        "ef4eaecc-b35b-468f-b432-4377bcbc3036",
        "2b37906a-8e1e-4837-9d53-99581e35778c",
        "4b2f5742-670a-4b9a-9a4e-a13ff42e42b4",
        "53fff6c3-8534-4c8c-ac34-9d16b2d09c5c",
        "0161cf9b-f6e0-4799-a800-c26cc0bccc10",
        "70cf05b2-ff19-44cc-af5c-d6be4a3a4d33",
        "16288789-0e1c-4658-ae27-2ccc12da3b03",
        "956ad3d8-5e0e-472c-8ecf-9f557ae7ea6e",
        "dde97d39-fa0b-44c2-9f72-348f4694da09",
        "0230d1ff-741b-410b-b30b-93a5371fd996",
        "eac74c7a-ce6e-4059-b109-609b2f405ec5",
        "3d743ad5-43a8-4cbf-92bf-37076c7005b0",
        "47cc56a3-0c3a-4009-8fb0-cee8a672ee64",
        "6f9a0b91-de2d-4efe-8a5e-e40f696b0745",
        "06a45bfe-ccd8-491c-9b81-f73491eedda1",
        "7e25487d-1043-4e9f-a798-8a50ba2e0469",
        "29207f4f-6cd5-44ca-95d1-6528ca8e0da1",
        "5cb8fdae-d7f3-4b2c-9aee-d5cfefcc050e",
        "b60ef12e-3893-47ff-894c-cf985699ce22",
        "3bf570b3-45eb-4435-972f-a8d9829571bd",
        "ae3f6d28-7c6d-41b1-9c7a-deddadf02720",
        "ff98b11a-ffa8-4a23-8d23-ecf6ca02e2df",
        "f7279b45-0872-4887-8119-6c85c0f749fe",
        "406f590e-fee5-4914-a725-60b4a4f4d5cd",
        "17b04a79-1f17-4d22-8207-ec240cfc18dd",
        "c5f704ae-ab26-43fb-8c98-2ff7b2b4fb86",
        "4f8b17e2-b5ef-4e90-998d-5bc6f86b728d",
        "4dd7b2d9-ba30-447b-9239-64db54160cd1",
        "63aa9871-3e21-4da6-9ff0-1f670fddc394",
        "d34e80c9-17f8-4001-a1b4-c9baae28fdec",
        "d7dbe3ee-fd9a-4d09-8f08-165ebcd67dfb",
        "841da4e0-c1a9-40d1-8a0a-64014a4bbbe2",
        "561bd025-01ad-4e9f-a09d-c92834464f27",
        "391d2aaf-4e42-42b7-9502-758e7134058c",
        "4f1f1a5b-c368-48d1-b0ea-df65169e5ceb",
        "9dae9314-db11-458b-ad50-3e927951cc9b",
        "bafca2f2-b974-44e6-a6f4-8144ad4bb48f",
        "8216535f-e338-43ca-b9b0-43b4e4e69b3c",
        "bf28b32b-79a3-4e79-9176-88b0552543c3",
        "8128dd31-e766-4f16-b8be-b20eff06a9ee",
        "0528dfb8-a756-4f83-9c19-7c47eebca69e",
        "6fde7fa2-dc91-4402-800e-e980a1c1fa5b",
        "7f514ba0-673f-4dd3-ba26-7d0c80f996ac",
        "345b15ec-cfaa-4476-a450-c90aae20545d",
        "9767d612-619d-4a51-8e60-37c0a58d1380",
        "d51d2bb3-abc3-4425-8850-a9a35193a6b5",
        "9b42263b-7e9e-4405-a882-ac4431920560",
        "df08d092-35d4-49b3-8e94-4671ef96bb7c",
        "418dca1e-78a5-4dea-8dd6-9a0f1a39fb28",
        "85c3d4f3-0bef-489c-8f5f-9d96cf68791b",
        "9403adc7-0116-45a4-a122-596357c3d5aa",
        "4e1fa853-8e43-494a-857c-15fa77e844ef",
        "efa65b39-cbf7-46ed-9e29-8eeb1867d674",
        "642097ab-9977-4504-b443-830f2f770e21",
        "b8e83242-5a69-4d4d-a0d4-8f5b8e9cd0dd",
        "eb06906e-da2f-4341-b6ea-03aec1d12e4d",
        "2d6ca008-0015-4439-812f-6da8c969c633"
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
            {image.length > 0 ? <img loading='lazy' src={image[0].data.url} alt={image[0].data.field_file_image_alt_text} width={250} /> : <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" alt="logo"  width={250}/>}
        </div>
    )
}



export default ProductImage;