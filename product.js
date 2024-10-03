function ProductDetails(productName, price, availability){
    if (availability === true){
        console. log(`The ${productName} costs ${price}. It Is Available`)

    }
    else{
        console. log(`The ${productName} costs ${price}. It Is not Available`)
    }
}
ProductDetails("soap", 60, false);
ProductDetails("Milk", 120, true);
