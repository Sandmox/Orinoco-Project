const emptyBasket = document.getElementById('emptyBasket');
emptyBasket.addEventListener("click", () => {
    localStorage.clear();
}, false);