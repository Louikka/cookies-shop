document.getElementById('main-action-button').onclick = function() {

    document.getElementById('products').scrollIntoView({behavior : "smooth"});

};


const LINKS = document.querySelectorAll('.menu-item > a');

for (let i = 0; i < LINKS.length; i++) {

    LINKS[i].onclick = function() {
        document.getElementById( LINKS[i].getAttribute('data-link') ).scrollIntoView({behavior : "smooth"});
    };

};


const BUTTONS = document.querySelectorAll('.products-items-item .button');

for (let i = 0; i < BUTTONS.length; i++) {

    BUTTONS[i].onclick = function() {
        document.getElementById('order').scrollIntoView({behavior : "smooth"});
    };

};


const PRICES = document.getElementsByClassName('products-items-item-detail-extra-info-price');

document.getElementById('change-currency').onclick = function(e) {

    const CURRENT_CURRENCY = e.target.innerText;

    let new_currency = "$";
    let coefficient = 1;

    if (CURRENT_CURRENCY === "$") {
        
        new_currency = "₽";
        coefficient = 90;
        
    } else if (CURRENT_CURRENCY === "₽") {

        new_currency = "BYN";
        coefficient = 3;

    } else if (CURRENT_CURRENCY === 'BYN') {

        new_currency = "€";
        coefficient = 0.9;

    } else if (CURRENT_CURRENCY === '€') {

        new_currency = "¥";
        coefficient = 6.9;

    };

    e.target.innerText = new_currency;

    for (let i = 0; i < PRICES.length; i++) {

        PRICES[i].innerText = `${ +(PRICES[i].getAttribute('data-base-price') * coefficient).toFixed(1) } ${new_currency}`;

    };

};


const PRODUCT = document.getElementById('input_product');
const NAME = document.getElementById('input_name');
const PHONE = document.getElementById('input_phone');

document.getElementById('order-action').onclick = function() {

    let has_error = false;

    [PRODUCT, NAME, PHONE].forEach(item => {

        if (!item.value) {

            item.style.borderColor = "red";
            has_error = true;

        } else {

            item.style.borderColor = "white";

        };

    });

    if (!has_error) {

        [PRODUCT, NAME, PHONE].forEach(item => {

            item.value = "";

        });

        alert( "Thank you for your order!" );

    };

};