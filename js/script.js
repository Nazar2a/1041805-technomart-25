var delivery = document.querySelector(".service-delivery-item");
var delivery_list = document.querySelector(".service-delivery");
var warranty = document.querySelector(".service-warranty-item");
var warranty_list = document.querySelector(".service-warranty");
var credit = document.querySelector(".service-credit-item");
var credit_list = document.querySelector(".service-credit");
var service_warranty_item = document.querySelector(".service-warranty-item");
var service_credit_item = document.querySelector(".service-credit-item");
var service_delivery_item = document.querySelector(".service-delivery-item");
var services_img = document.querySelector(".services-wrapper");



var map = document.querySelector(".map-oll");
var modal_map = document.querySelector(".modal-map");
var modal_close = document.querySelector(".modal-close");
var write = document.querySelector(".write");
var modal_letter = document.querySelector(".modal-letter");
var close_modal_map = document.querySelector("#close-modal-map");




var login = modal_letter.querySelector("[name=user-name]");
var form = modal_letter.querySelector("form");
var user_mail = modal_letter.querySelector("[name=user-mail]");
var text_letter = modal_letter.querySelector("[name=text-letter]");

var isStorageSupport = true;
var storage = "";
var storage_mail = "";

try {
	storage = localStorage.getItem("login");
	} catch (err) {
	isStorageSupport = false;
}

try {
	storage_mail = localStorage.getItem("user_mail");
	} catch (err) {
	isStorageSupport = false;
}




var buy = document.querySelector(".buy");
var modal_information = document.querySelector(".modal-information");
var close_modal_information = document.querySelector("#close-modal-information");




delivery.addEventListener("click", function (evt) {
	evt.preventDefault();
	service_delivery_item.classList.add("services-item-current");
	warranty_list.classList.remove("show");
	delivery_list.classList.remove("services-close");
	services_img.classList.remove("services-img-warranty");
	services_img.classList.remove("credit-img-warranty");
	credit_list.classList.remove("show");
	service_warranty_item.classList.remove("services-item-current");
	service_credit_item.classList.remove("services-item-current");
});

warranty.addEventListener("click", function (evt) {
	evt.preventDefault();
	warranty_list.classList.add("show");
	delivery_list.classList.add("services-close");
	services_img.classList.add("services-img-warranty");
	service_warranty_item.classList.add("services-item-current");
	service_delivery_item.classList.remove("services-item-current");
	credit_list.classList.remove("show");
	services_img.classList.remove("credit-img-warranty");
	service_credit_item.classList.remove("services-item-current");
	
});

credit.addEventListener("click", function (evt) {
	evt.preventDefault();
	credit_list.classList.add("show");
	delivery_list.classList.add("services-close");
	services_img.classList.add("credit-img-warranty");
	service_credit_item.classList.add("services-item-current");
	service_warranty_item.classList.remove("services-item-current");
	warranty_list.classList.remove("show");
	services_img.classList.remove("services-img-warranty");
	service_delivery_item.classList.remove("services-item-current");
});



map.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_map.classList.add("show-popup");
});

modal_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_map.classList.remove("show-popup");
	modal_letter.classList.remove("show-popup");
	modal_letter.classList.remove("modal-error");
});

close_modal_map.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_map.classList.remove("show-popup");
});



write.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_letter.classList.add("show-popup");
	if (storage  || storage_mail) {
		login.value = storage;
		user_mail.value = storage_mail;
		text_letter.focus();
		} else {
		if (storage){
			login.value = storage;
			user_mail.focus();
			} else {
			login.focus();
		}
	}
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !user_mail.value || !text_letter.value) {
		evt.preventDefault();
		modal_letter.classList.remove("modal-error");
		modal_letter.offsetWidth = modal_letter.offsetWidth;
		modal_letter.classList.add("modal-error");
		} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
			localStorage.setItem("user_mail", user_mail.value);
		}
	}
});







buy.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_information.classList.add("show-catalog");
});


close_modal_information.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_information.classList.remove("show-catalog");
});















