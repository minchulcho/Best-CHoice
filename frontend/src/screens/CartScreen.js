import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]): 1;
    //productScreen addTocartHandler 안에 있는 qty값을 가지고 온다 .

    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1 > cart Screen </h1>
            <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
        </div>
    )
}
