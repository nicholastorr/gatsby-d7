import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
   const imageData = useStaticQuery(graphql`
   {
    allFiles(filter: {data: {uuid: {in: 
      [
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
        "bafca2f2-b974-44e6-a6f4-8144ad4bb48f",
        "6fde7fa2-dc91-4402-800e-e980a1c1fa5b",
        "7f514ba0-673f-4dd3-ba26-7d0c80f996ac",
        "345b15ec-cfaa-4476-a450-c90aae20545d",
        "9767d612-619d-4a51-8e60-37c0a58d1380",
        "d51d2bb3-abc3-4425-8850-a9a35193a6b5",
        "9b42263b-7e9e-4405-a882-ac4431920560",
        "df08d092-35d4-49b3-8e94-4671ef96bb7c",
        "418dca1e-78a5-4dea-8dd6-9a0f1a39fb28",
        "86341e07-fcbb-4c35-b1f0-2ca082ab8911",
        "893f64e3-e99d-48ed-9f3c-8794ef389469",
        "2cd98578-059b-4c46-8474-df53fd3a8393",
        "86341e07-fcbb-4c35-b1f0-2ca082ab8911",
        "893f64e3-e99d-48ed-9f3c-8794ef389469",
        "2cd98578-059b-4c46-8474-df53fd3a8393",
        "86341e07-fcbb-4c35-b1f0-2ca082ab8911",
        "32a04426-8f2a-451c-adb9-ef776fdc46ea",
        "5ef8ff15-7b7f-4f3b-a278-afbfd576e8b2",
        "8cc0521e-d942-472b-8f21-ada850a958d6",
        "32a04426-8f2a-451c-adb9-ef776fdc46ea",
        "5ef8ff15-7b7f-4f3b-a278-afbfd576e8b2",
        "8cc0521e-d942-472b-8f21-ada850a958d6",
        "32a04426-8f2a-451c-adb9-ef776fdc46ea",
        "5ef8ff15-7b7f-4f3b-a278-afbfd576e8b2",
        "8cc0521e-d942-472b-8f21-ada850a958d6",
        "32a04426-8f2a-451c-adb9-ef776fdc46ea",
        "5ef8ff15-7b7f-4f3b-a278-afbfd576e8b2",
        "8cc0521e-d942-472b-8f21-ada850a958d6",
        "93216d02-828f-4af9-98f4-c23cf1d34ac0",
        "93216d02-828f-4af9-98f4-c23cf1d34ac0",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "8d7e3843-90a8-4d05-9b79-157b44e26ce4",
        "caf6f6f6-723e-43fd-9489-4a49a9c30600",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "487d64d0-1984-49e1-9824-55dba7360fed",
        "f656a62d-729c-435b-9b07-6b8dcb4bfbea",
        "b20b532c-5c2e-4eb4-ba8c-d31d56e791ce",
        "4ece2a0b-fdc8-4bb0-b4b6-8853c928c216",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1",
        "2681de04-e490-4114-8e1a-08365f133280",
        "e0bd01e1-355e-45b9-a2de-71e6aaf76513",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "006409dc-4012-4545-9274-f56c5b224b3c",
        "61ba0fc9-aa83-4156-9e76-94b942fc5def",
        "0cfc40d2-5a1e-4ee6-b9f3-0bb347ab999d",
        "6a28393c-2b23-4c48-9fa2-0ce6d068d46c",
        "bd5f596a-01c1-462b-8192-7f575cab56e1"
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