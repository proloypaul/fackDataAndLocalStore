
// set data to local storage 
const addTolocalStorage = (id) => {
    const checkData = getDb();
    let shopping_cart = {};
    if(!checkData){
        shopping_cart[id] = 1;
    }else{
        shopping_cart = JSON.parse(checkData);
        if(shopping_cart[id]){
            const incrementValue = shopping_cart[id] + 1;
            shopping_cart[id] = incrementValue; 
        }else{
            shopping_cart[id] = 1;
        };
    };

    updateDb(shopping_cart)
}

const  updateDb = (cart) => localStorage.setItem("shopping-cart", JSON.stringify(cart))
const getDb = () => localStorage.getItem("shopping-cart");



const removeFromDb = (id) => {
    const  checkData = getDb();
    if(checkData){
        const shopping_cart = JSON.parse(checkData);
        delete shopping_cart[id]
        updateDb(shopping_cart);
    }
    
}

export{addTolocalStorage, removeFromDb}