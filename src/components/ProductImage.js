import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

const ProductImage = ({ images, sku }) => {
    //filter array and return image that matches sku
    const img = []
    
    
    images.nodes.forEach(image => {
        if (image.data.url.includes(sku.substring(0, 9))) {
            img.push(image.data.url)
        }
    })

    const imgPath = img[0];

    return (
        <div>
            <img src={imgPath} width={250} alt="Test" />
        </div>
    )
}




export default ProductImage;