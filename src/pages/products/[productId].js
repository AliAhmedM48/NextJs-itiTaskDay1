import ProductDetailsComponent from '@/components/ProductDetailsComponent';
import { useRouter } from 'next/router';
import React from 'react';

const ProductId = ({ details }) => {
    // ! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // const router = useRouter();
    // const { productId } = router.query
    // console.log(productId);
    // ! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    return <ProductDetailsComponent {...details} />;
};

export default ProductId;
export async function getStaticPaths() {
    return {
        paths: [
            { params: { productId: '1' } },
            { params: { productId: '2' } },
            { params: { productId: '3' } },
        ],
        fallback: 'blocking'
    }
}
export async function getStaticProps(context) {
    console.log(context);
    const { params } = context;
    console.log(params);
    console.log(params.productId);
    const res = await fetch('https://dummyjson.com/products/' + params.productId)
    const data = await res.json();
    console.log(data);
    return {
        props: {
            details: data
        }
    }
}