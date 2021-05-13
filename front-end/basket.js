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

};