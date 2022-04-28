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
            "de8c53da-4087-49f6-9453-8a3e0662664d",
            "a2876002-511f-4609-9f7b-126b826a1e8f",
            "6e5bebd4-8654-443a-bef2-f57e031d00ab",
            "d848338c-62b2-47e4-973d-27eade847e7f",
            "2ceda9dd-c653-4dd8-8b89-a130f70f0bd4",
            "8ca8be51-046d-4241-ad90-2ee03eafa7f0",
            "8ec95536-7da2-4393-b978-3508ebf63e4b",
            "2ab3368b-c9c0-49f8-a830-773ff24f87fb",
            "f3b337b3-3cad-49fa-a69d-2635cf2bf3c3",
            "8851d84a-e89b-4a2c-aaaf-809cf2c27cd8",
            "3e7cbe09-bf2a-494e-be7a-948843392377",
            "79ea4f75-5576-4c00-b413-61d4cba26c83",
            "b0a5569f-a385-4e00-828b-fafb14b0dd34",
            "2ddb2ea3-83bc-4190-a3e7-c1b1c67970a6",
            "e1111c04-c735-45ad-8d80-a69c509ca05a",
            "d1cf725f-b71d-4dc0-8dc3-2121e0ecec99",
            "7f8e9825-b565-4ca5-8949-3a6bf6cccd32",
            "d2096c1a-02c7-4f79-8932-388a9abb98cb",
            "70158ede-5b47-4dd4-a436-ca8068951387",
            "9c54cdc2-c8c8-46ce-bad0-f5c4519dbf4b",
            "ac3550d8-2312-4770-b775-cc383093d008",
            "38d18d32-9494-472b-8f43-e4cadd8aa9bf",
            "c6c731c7-d5d0-471e-87b2-14c039c5c05f",
            "006737a5-03af-4299-8eeb-0310eed0ef6b",
            "15a18bfa-d50f-45bf-88e6-004e7d892789",
            "a95df39d-995c-46b1-a895-c600a693d22f",
            "c2c2969e-0eb9-4c5b-ab50-336026742d16",
            "2b26b61e-d060-456e-8671-30a506450991",
            "985c4962-169b-4071-ada2-c5f3f986d134",
            "81b7c352-1947-4832-beb3-73fe5e09ab0e",
            "06e6c3e4-4d40-4751-821c-39d19c897db3",
            "f2e8404e-fdfc-4da8-ad80-8517f17f8196",
            "98c6f1fe-847d-44c7-b5b6-9a77391ff8d4",
            "523a919b-83a3-4351-a3f3-35097747f680",
            "b36cbc3f-4f0a-4bf9-a4ca-458b1d62464c",
            "eec8d9d4-b2c0-4ae1-bfb2-62f9f2f67d26",
            "5ab58354-6400-4b7a-9b40-1214dca04d4b",
            "a368053b-3c97-4cd1-9a34-cdf97ebe7fc8",
            "9752bdcd-9267-44aa-bcf3-46aa7ea17412",
            "79e4362c-4d0d-4d12-9cec-f73c0107aad2",
            "2501f824-1f55-4edf-ac78-c58ca20e4b7e",
            "d393af73-d6d9-4147-b58f-803b0f19bbf7",
            "e1cf3d76-ccd9-4cce-8e14-885a8419c9e9",
            "9fdba0c2-1813-4823-84de-600f7176e6df",
            "8bcca90d-65bc-4720-9b8d-71bbcf33dea6",
            "d6dc9abb-4f4b-482f-ac4e-6dbee015c18d",
            "06f51c10-4a2a-434a-b850-838821d78c4e",
            "8bf98bbc-af03-4ba3-801d-635146293010",
            "f1f68daf-0c0f-4721-995c-204fc08fd7d8",
            "5a9d6d5b-d4a7-4b15-ac48-a35e6a97f4d4",
            "894c677a-758d-4660-80c0-7b8bf6c8dc84",
            "7fde75ae-2fde-4e6a-b39c-e03df718edcb",
            "bc7e6dbf-fbfd-4df1-bc34-d78b55eeb48f",
            "9a9d9d65-bf94-44a2-b657-8ad01cf148ec",
            "06215a42-420c-4f9e-9bb0-cb17b0664795",
            "ed9b3e79-0817-474d-8fef-21a45997c7cb",
            "0aaeeedf-ef90-40da-a042-9d9b56beede4",
            "0ce19d63-9be8-4876-9c13-2e9394be5f23",
            "6587282f-08dd-4a9d-a46e-e94c61580bbf",
            "e82a6233-71c6-4882-a80a-d77c360cf55c",
            "ae544f4b-af8e-4744-872a-1658843337f2",
            "046ede53-df4f-4859-a434-c3a29c3d4d32",
            "f98c6c62-bb60-496e-8149-6ec83486d60e",
            "88023f86-b1fc-4d94-b02a-0291a5e9edf6",
            "cdb282af-9eff-4b60-a42f-7fa791be0f1b",
            "907b9fde-694c-4efd-9a6e-62dcf5049cd5",
            "afab1bb7-394c-4633-a5f1-b397efcbe27d",
            "0e363729-5a85-48fc-8442-725d493f1829",
            "ff7bd830-6670-4490-9d8d-d1d6bb7a37ad",
            "1ec6280b-5e25-4269-9a79-f438fe4288f4",
            "58e6747f-1ea1-4bf2-b6aa-f35feca7493b",
            "701f9535-912b-4a6e-8331-72289fef7dce",
            "d62d601c-4c40-4099-b5bb-17c3e0b9b2b6",
            "a86e02c7-85f9-4b45-b7fc-338d136c8d79",
            "ca4b8e7c-ca39-4481-a6aa-5bec73b45168",
            "d213f9cb-e817-4075-84a1-488062b109a6",
            "3747035a-85e8-4173-96a7-5c0ea78ddcf1",
            "da8c0927-04d0-4971-aee1-8678f094a2c1",
            "dfb1057c-920f-4a5d-8141-025ab4009049",
            "ca62f25d-3331-4154-bdc7-b6a3299afd1d",
            "2c161c1c-2653-439e-9bc4-f6aa118aa479",
            "92c1985d-14cb-4dbc-9fe9-600120bbf577",
            "eead2543-b466-4152-9298-504f54a5a344",
            "bd4c5566-1ca6-4db8-a83d-0e1d00f4cee7",
            "6e0aa18c-f969-48a5-ae2d-b44ee35e5bfa",
            "f71bf3ba-5471-4899-af4b-7422ad671c12",
            "f8e8aefc-d099-4484-a4bc-2a4fe0ebd214",
            "b0cb44de-0cc6-47c4-9b76-73ae9ff2994d",
            "1c02ca3f-3214-46c4-b00c-11e66708f344",
            "88bd5856-0215-44c0-90aa-11195d8bb84e",
            "fc464b1d-98e9-4213-ac15-e9699b8ed81b",
            "0570fdad-9f9b-4ebb-9c86-1aa303415496",
            "276cfd0c-9b50-46da-894b-d69f2d4938eb",
            "42bfdb4a-dce4-4f0f-8927-c96832e1256b",
            "be93cf9c-cfb2-4852-9d48-1c5eaddda84f",
            "dba6db8e-643c-4c36-84b0-0361700f5fbf",
            "9a0244c0-3d1b-4c9d-abbd-9634ba2c8c61",
            "e8878555-4cb3-4fe6-8f43-d6cca91829aa",
            "31b841c6-01fe-4ce4-9bdb-8095aeb839b5",
            "54e0b010-1097-4c4e-9853-95cbac8bc5a2",
            "4e07d382-29e7-4c0f-86ab-a244a77556ce",
            "62996fde-8e83-4740-bb84-bdd8dfbfe1e1",
            "493d4726-e4a2-4853-97ba-c027deb5c094",
            "37fef4a3-5ab8-4913-90ac-2cfc83347411",
            "6abaa58d-f5c8-430d-a187-7c0de5363682",
            "7f89b0e8-e062-4592-b37f-1709af3f1486",
            "d2a8a657-96fd-4fa5-bce9-46e295df358a",
            "5d37ebe0-c7d2-429d-ac4c-be53ba7c246c",
            "41868451-c21c-4717-9267-2fa7f117c272",
            "931eb70b-2f4b-4ed9-833f-eae44f4cc7dc",
            "e9874eff-7270-4331-9174-ffef1906ce8a",
            "0ab67651-8904-40f9-aed1-665c66015898",
            "d6abc623-5a41-4c01-9617-8ba325424324",
            "09784140-629a-4508-a10d-d0f881b8b579"
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


    
