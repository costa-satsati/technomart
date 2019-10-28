// MODAL WRITE US
var link = document.querySelector(".contacts-button");
var popup_contact = document.querySelector(".modal-contact");

if (popup_contact) {
    var close = popup_contact.querySelector(".modal-close")

    var form = popup_contact.querySelector(".form-message");
    var name = popup_contact.querySelector("[name=user-name]");
    var email = popup_contact.querySelector("[name=email]");
    var message = popup_contact.querySelector("textarea");



    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_contact.classList.add("modal-show")
        name.focus();
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_contact.classList.remove("modal-show");
        popup_contact.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value) {
            evt.preventDefault();
            popup_contact.classList.add("modal-error");
            console.log("Нужно ввести имя, имеил и текс сообщения");
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup_contact.classList.contains("modal-show")) {
                popup_contact.classList.remove("modal-show");
                popup_contact.classList.remove("modal-error");
            }
        }
    });

}

// Modal MAP
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");

if (mapPopup) {
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.style.display = "block";
    });

    mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.style.display = "none";
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (mapPopup.classList.contains("modal-show")) {
                mapPopup.classList.remove("modal-show");
            }
        }
    });
}
// MODAL ADD TO CART
var catalog = document.querySelector(".catalog-items");
var popup2 = document.querySelector(".modal-cart");

if (popup2) {
    var close_cart = popup2.querySelector(".modal-close");

    catalog.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (evt.target.className === "buy") {
            popup2.classList.add("modal-show");
        }
    });

    close_cart.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup2.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup2.classList.contains("modal-show")) {
                popup2.classList.remove("modal-show");
            }
        }
    });

}
