
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
	modal_map.classList.add("show");
});

modal_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_map.classList.remove("show");
	modal_letter.classList.remove("show");
});

write.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_letter.classList.add("show");
});

close_modal_map.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_map.classList.remove("show");
});







buy.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_information.classList.add("show-catalog");
});


close_modal_information.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_information.classList.remove("show-catalog");
});















