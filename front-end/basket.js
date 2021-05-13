function getBasket(){
    let basket = JSON.parse(localStorage.getItem('basket'));
       if (basket === null){
           return basket = [];
        } else {
            return basket;
        }
};

function addToBasket(){

};

function countBasket(){
    const numberOfProducts = document.getElementsByTagName("i").item(0);
    let basket = JSON.parse(localStorage.getItem('basket'));
    if(basket === null){
        numberOfProducts.textContent = 0;
    }else{
        numberOfProducts.textContent = basket.length;
    }
};