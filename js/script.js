// Dena 
$(document).ready(function () {
    $("p:contains('Promo')").click(function () {
        $("#promoInput").toggle();
    });

    $("p:contains('Additional Details')").click(function () {
        $("#detailsInput").toggle();
    });

    $("#submitBtn").click(function () {
        $("#confirmation-msg").modal("show");
	});
});

// end

// $(document).ready(function () {

// BOOTSTRAP FORM VALIDATION
(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
//HOMEPAGE TRANSPARENT NAV
if (
	window.location.href == "localhost/cleanhome/" ||
	window.location.href ==
		"https://cleanhome.vercel.app/cleaners/register.html" ||
	window.location.href == "https://cleanhome.vercel.app/client/login.html" ||
	window.location.href == "https://cleanhome.vercel.app/client/register.html"
) {
	$(".header-nav")
		.css("background-color", "transparent")
		.css("padding-block", "2rem");
	$("body").css("background-color", "#F1F1F1");

	window.onscroll = function () {
		scrollFunction();
	};
	function scrollFunction() {
		if (
			document.body.scrollTop > 80 ||
			document.documentElement.scrollTop > 80
		) {
			document.querySelector(".header-nav").classList.add("scrolled");
		} else {
			document.querySelector(".header-nav").classList.remove("scrolled");
		}
		if (document.documentElement.scrollTop === 0) {
			document.querySelector(".header-nav").style.backgroundColor =
				"transparent";
		} else {
			document.querySelector(".header-nav").style.backgroundColor = "#F5F5F5";
		}
	}
} else {
	$(".header-nav")
		.css("background-color", "#F5F5F5")
		.css("padding-block", "1.8rem");
	$("body").css("background-color", "#FFFF");
}

//NAV BAR ACTIVE
const navLinks = document.querySelectorAll(".header-nav-link");
console.log(navLinks);
console.log(window.location.href);

navLinks.forEach((link) => {
	if (link.href === window.location.href) {
		link.classList.add("active-nav");
	}
});

//NAVBAR RESPONSIVENESS
var open_menu = false;
$("#menu-btn").click(function () {
	if (open_menu === false) {
		$(".menu-column ul").css("display", "block");
		$(".menu-column ul").addClass("show-menu");
		$("#icon").attr("class", "fa-solid fa-xmark").addClass("animate-x");
		open_menu = true;
	} else {
		$(".menu-column ul").css("display", "none");
		$(".nav-wrapper").removeClass("show-menu");
		$("#icon").attr("class", "fa-solid fa-bars");
		open_menu = false;
	}
});

//NAV HEADER WITH PROFILE AVATAR DROPDOWN
const profile_dropdown = document.querySelector(".profile-dropdown");
console.log("PROFILE", profile_dropdown);
const select = profile_dropdown.querySelector(".dropdown-select");
const menu = profile_dropdown.querySelector(".custom-dropdown-menu");
const options = profile_dropdown.querySelectorAll(
	".custom-dropdown-menu ul li"
);
const selected_span = profile_dropdown.querySelector(
	".selected-custom-dropdown span"
);
const selected = profile_dropdown.querySelector("#selected_value");

const select_icon = profile_dropdown.querySelector("i");

if (select) {
	select.addEventListener("click", () => {
		menu.classList.toggle("show-dropdown-menu");
		select_icon.classList.toggle("active-dropdown-icon");
	});
	options.forEach((option) => {
		option.addEventListener("click", () => {
			var selected_value = $(option).attr("value");
			$(selected).attr("value", selected_value);
			menu.classList.remove("show-dropdown-menu");
			options.forEach((option) => {
				option.classList.remove("dropdown-active");
			});
			option.classList.add("dropdown-active");
		});
	});
}

//SIDENAV LOGGED IN CLIENT
const sideNavLinks = document.querySelectorAll(".side-nav-link");
sideNavLinks.forEach((link) => {
	if (link.href === window.location.href) {
		link.classList.add("active-side-nav");
		const icon = link.querySelector("div svg path");
		$(icon).attr("fill", "#27B86C");
	} else {
		link.addEventListener("mouseover", (e) => {
			const icon = link.querySelector("div svg path");
			const label = link.querySelector("div p");
			$(label).css("color", "#303030");
			$(icon).attr("fill", "#27B86C");
		});

		link.addEventListener("mouseout", (e) => {
			const icon = link.querySelector("div svg path");
			const label = link.querySelector("div p");
			$(label).css("color", "#FFFF");
			$(icon).attr("fill", "#FFFF");
		});
	}
});

//SIDENAV LOGGED IN CLIENT COLLAPSE SIDENAV
const mobileSidenav = document.querySelector("#collapse-sidenav");
const sideNav = document.querySelector(".side-nav");

mobileSidenav.addEventListener("click", (e) => {
	$(sideNav).toggleClass(" expand-sidenav");
});

//FAQS ACCORDION
var accordion_item = $(".accordion-item");
var accordion_prev;

accordion_item.click(function () {
	$(this).toggleClass("accordion-active");
});

// *******LOGGED IN CLIENTS****

// TRANSACTION CARDS BUTTON EVENT LISTENERS****

// UPCOMING TRANSACTIONS -MARK AS DONE
function markAsDone() {}

function bookNow() {
	// alert("book Now");
}

// TRANSACTION HISTORY CARDS -  RATE NOW
function rateNow(name, value) {
	const selector = `.transaction-card .status button[value=${value}]`;
	const transactionCard = document.querySelector(selector);
	console.log("rate", transactionCard);
}

const transactionHistory = document.querySelectorAll(
	".transaction-history  li"
);
// console.log("HISTORY", transactionHistory);
transactionHistory.forEach((history) => {
	const rateButtons = history.querySelectorAll(".status button");
	rateButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const form = button.querySelector(".rating-form");
			$(form).toggleClass("show-form");
		});
	});
});

const homeFilters = document.querySelectorAll(".home-filter-button");
const homeFilterValue = document.querySelector("#transaction-filter-value");
console.log("HOME FILTERS", homeFilters);

if (homeFilters) {
	homeFilters.forEach((filter) => {
		filter.addEventListener("click", () => {
			let value = $(filter).attr("data-value");
			homeFilterValue = value;
			// alert(value);
		});
	});
}

// TRANSACTION PAGE FILTER
const transactionFilters = document.querySelectorAll(
	".transaction-filters button"
);

const transactionsList = document.querySelectorAll(".transaction-list");

// if (transactionsList) {
// 	transactionsList.forEach((transaction) => {
// 		let value = $(transaction).attr("data-value");
// 		let filterValue = homeFilterValue;

// 		if (value === filterValue) {
// 			$(transaction).addClass("show-transaction");
// 			$(transaction).siblings().removeClass("show-transaction");
// 		}
// 	});
// }

if (transactionFilters && transactionsList) {
	transactionFilters.forEach((filter) => {
		filter.addEventListener("click", () => {
			$(filter).addClass("active-filter");
			$(filter).siblings().removeClass("active-filter");

			transactionsList.forEach((transaction) => {
				let value = $(transaction).attr("data-value");
				let filterValue = $(filter).val();

				if (value === filterValue) {
					$(transaction).addClass("show-transaction");
					$(transaction).siblings().removeClass("show-transaction");
				}
			});
		});
	});
}

//RATING FORM
const ratingForm = document.querySelectorAll(".rating");
// console.log("rating-form", ratingForm);

var ratings = [];

ratingForm.forEach((form, i) => {
	ratings[i] = 0;
	const stars = form.querySelectorAll(".star");
	// console.log(stars);
	var rating = 0;

	stars.forEach((star, index) => {
		star.addEventListener("click", (e) => {
			const star_value = star.querySelector("input").value;

			rating = star_value;
			ratings[i] = rating;
			changeStarColor(rating, i);
		});
	});
});

$(".submit-rating").click((e) => {
	// e.preventDefault();
	var containsZero;
	ratings.forEach((rating) => {
		for (let i = 0; i < ratings.length; i++) {
			if (ratings[i] == 0) {
				console.log(ratings[i]);
				containsZero = true;
				break;
			}
		}
	});
	const errorMessage = document.querySelector(".invalid-rating");
	if (containsZero) {
		$(errorMessage).addClass("show-error");
		console.log(errorMessage);
	} else {
		$(errorMessage).removeClass("show-error");
		// alert("valid");
	}
});

function changeStarColor(rating, ratingFormIndex) {
	const stars = ratingForm[ratingFormIndex].querySelectorAll(".star");
	const ratingValue =
		ratingForm[ratingFormIndex].querySelector(".rating-value");

	// Change the rating value display
	$(ratingValue).text(rating).attr("value", rating);
	stars.forEach((star, index) => {
		const stars_icon = star.querySelector("i");
		$(stars_icon).css("color", "#BDBDBD");

		if (index < rating) {
			$(stars_icon).css("color", "#0FA958");
		}
	});
}

//PROFILE PAGE EDIT

//EDIT EMAIL
function editEmail() {
	const modal = document.querySelector("#edit-email");
	toggleModal(modal);
}

//EDIT CONTACT
function editContact() {
	const modal = document.querySelector("#edit-contact");
	toggleModal(modal);
}

//VERIFY CONTACT
function verifyContact() {
	const modal = document.querySelector("#verify-contact");
	toggleModal(modal);
}

// EDIT PROFILE
function editProfile() {
	const modal = document.querySelector("#edit-profile");
	toggleModal(modal);
}
// EDIT ADDRESS
function editAddress() {
	const modal = document.querySelector("#edit-address");
	toggleModal(modal);
}

// EDIT PASSWORD
function editPassword() {
	const modal = document.querySelector("#edit-password");
	toggleModal(modal);
}

//TOGGLE MODAL
function toggleModal(modal) {
	$(modal).addClass("show-modal");
	const closeIcon = modal.querySelector(".close-icon");
	closeIcon.addEventListener("click", (e) => {
		$(modal).removeClass("show-modal");
	});
}

//BOOKING OPTION SELECT

const bookingOptions = document.querySelectorAll(".booking-option-card");

const bookingOptionsContainer = document.querySelector(
	".home-content .booking-option"
);
const bookingProcess = document.querySelectorAll(".booking-process");
const onDemandChoices = document.querySelector(".on-demand-choices");
const premiumChoices = document.querySelector(".premium-choices");

const onDemand = document.querySelector(".on-demand-booking");
const premium = document.querySelector(".premium-booking");

var selectedBookingOption;

if (bookingOptions) {
	bookingOptions.forEach((option) => {
		$(bookingOptionsContainer).removeClass("booking-option-container-clicked");

		option.addEventListener("click", (e) => {
			e.stopPropagation();
			$(bookingOptionsContainer).addClass("booking-option-container-clicked");
			selectedBookingOption = $(option).attr("value");

			bookingOptions.forEach((o) => {
				if (selectedBookingOption !== $(o).attr("value")) {
					$(o).addClass("unselected-booking-option");
				} else {
					$(o).removeClass("unselected-booking-option");
				}
			});

			$(bookingProcess).addClass("show-booking-process");

			if (selectedBookingOption === "on-demand") {
				$(premium).removeClass("show-choices");
				$(onDemand).addClass("show-choices");
			} else {
				$(onDemand).removeClass("show-choices");
				$(premium).addClass("show-choices");
			}
		});
	});
}

// ON DEMAND BOOKING FLOW

function setCleanerPrice() {
	const cleanerPrice = document.querySelector(
		"#step-1 > div.on-demand-choices > label.cleaning-type-card.green-pattern.clicked-radio > div > p"
	);
	const value = $(cleanerPrice).text();
	const price = document.querySelector(
		"#step-3 > div.select-number-of-cleaners.on-demand-cleaners > div.price> p > span"
	);
	const input = document.querySelector("#cleaner-price");
	const cleaners = document.querySelector("#cleaners-count").value;

	parseInt(value);
	parseInt(cleaners);

	const subtotal = value * cleaners;

	$(input).val(value);
	$(price).text(subtotal);

	// console.log("CLEANER PRICE", value);
}

//BOOKING FLOW NEXT BUTTON  (CHECK VALIDITY)
let currentStep = 1;
const formSteps = document.querySelectorAll(".on-demand-step");
const bookingSteps = document.querySelectorAll(".on-demand-steps");
const mobileBookingSteps = document.querySelectorAll(
	".on-demand-step .mobile-booking-steps"
);

// PAYMENT METHOD FOR ON DEMAND

const paymentOptionsOnDemand = document.querySelectorAll(
	".on-demand-booking .method-wrapper .change-method"
);

if (paymentOptionsOnDemand) {
	paymentOptionsOnDemand.forEach((option) => {
		option.addEventListener("click", () => {
			paymentOptionsOnDemand.forEach((item) => {
				const marker = item.querySelector(".marker");
				$(marker).attr("src", "/images/white-check-circle.png");
			});

			const marker = option.querySelector(".marker");
			$(marker).attr("src", "/images/green-check-circle.png");
		});
	});
}

// SELECT FAVORITE CLEANER
const cleaners = document.querySelectorAll(
	".select-cleaners .cleaners .cleaner"
);

if (cleaners) {
	cleaners.forEach((cleaner) => {
		cleaner.addEventListener("click", () => {
			$(cleaner).toggleClass("unselected");
			const checkIcon = cleaner.querySelector("#check-icon");
			$(checkIcon).toggleClass("show-check-icon");
		});
	});
}

// BOOK NOW VALIDATION

function validateBookNow() {
	const bookNowForm = document.querySelector(".book-now form");
	const timeSelect = bookNowForm.querySelector("select");
	const date = bookNowForm.querySelector("input[type=date]");
	const property = bookNowForm.querySelector("input[type=radio]:checked");
	const cleaners = bookNowForm.querySelector("input[type=checkbox]:checked");
	const error = bookNowForm.querySelector(".validation-message");

	if (timeSelect.value !== "null" && date.value && property) {
		isValid = true;
	} else {
		isValid = false;
	}

	if (isValid) {
	} else {
		if (timeSelect.value === "null") {
			$(timeSelect).addClass("invalid");
		} else {
			$(timeSelect).removeClass("invalid");
		}
		if (!date.value) {
			$(date).addClass("invalid");
		} else {
			$(date).removeClass("invalid");
		}
		if (!property) {
			$(error).css("display", "flex");
		} else {
			$(error).css("display", "none");
		}
	}
}

// RADIOS EVENT LISTENER (RADIO CHOICES) FOR ON DEMAND
const radios = document.querySelectorAll(
	'.on-demand-step input[type = "radio"]'
);

if (radios) {
	radios.forEach((radio) => {
		radio.addEventListener("click", (e) => {
			const label = $(radio).parent();
			const labelSiblings = $(label).siblings();
			$(labelSiblings).removeClass("clicked-radio");

			if (currentStep !== 4) {
				$(label).addClass("clicked-radio");
			}

			setCleanerPrice();
		});
	});
}

function validateStep(step) {
	const inputs = formSteps[step - 1].querySelectorAll(" input[required]");
	const radios = formSteps[step - 1].querySelectorAll(
		'input[type="radio"][required]'
	);
	const dropdowns = formSteps[step - 1].querySelectorAll("select[required]");

	let isValid = true;

	for (let i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			$(inputs[i]).addClass("invalid");
			isValid = false;
		} else {
			$(inputs[i]).removeClass("invalid");
		}
	}

	for (let i = 0; i < dropdowns.length; i++) {
		if (dropdowns[i].value == "null") {
			$(dropdowns[i]).addClass("invalid");
			isValid = false;
		} else {
			$(dropdowns[i]).removeClass("invalid");
		}
	}

	for (let i = 0; i < radios.length; i++) {
		const radioGroup = radios[i].getAttribute("name");
		const radioChecked = formSteps[step - 1].querySelector(
			`input[name="${radioGroup}"]:checked`
		);

		if (!radioChecked) {
			console.log("radio-invalid");
			isValid = false;
			const errorMessage = formSteps[step - 1].querySelector(
				".validation-message"
			);
			$(errorMessage).css("display", "flex");
		} else {
			console.log("radio-valid");
			const errorMessage = formSteps[step - 1].querySelector(
				".validation-message"
			);
			$(errorMessage).css("display", "none");
		}
	}

	if (isValid) {
		formSteps[currentStep - 1].style.display = "none";
		currentStep = step + 1;
		formSteps[currentStep - 1].style.display = "block";

		const steps = document.querySelectorAll(".on-demand-steps div");
		steps.forEach((step, index) => {
			if (index < currentStep) {
				$(step).addClass("done-step");
			} else {
				$(step).removeClass("done-step");
			}
		});

		const mobileSteps = document.querySelectorAll(
			".on-demand-mobile-steps   div"
		);
		mobileSteps.forEach((step, index) => {
			if (index < currentStep) {
				$(step).addClass("done-step");
			} else {
				$(step).removeClass("done-step");
			}
		});

		if (currentStep === 4) {
			displayBookingSummary();
		}
	}
}

// RADIOS EVENT LISTENER (RADIO CHOICES) PAYMENT METHOD FOR PREMIUM
const radiosPremium = document.querySelectorAll(
	'.premium-step input[type = "radio"]'
);
const paymentOptions = document.querySelectorAll(
	".premium-booking .method-wrapper .change-method"
);

if (paymentOptions) {
	paymentOptions.forEach((option) => {
		option.addEventListener("click", () => {
			paymentOptions.forEach((item) => {
				const marker = item.querySelector(".marker");
				$(marker).attr("src", "/images/white-check-circle.png");
			});

			const marker = option.querySelector(".marker");
			$(marker).attr("src", "/images/green-check-circle.png");
		});
	});
}

//BOOKING FLOW NEXT BUTTON  (CHECK VALIDITY)
let currentStepPremium = 1;
const formStepsPremium = document.querySelectorAll(".premium-step");
const bookingStepsPremium = document.querySelectorAll(".premium-steps");
const mobileBookingStepsPremium = document.querySelectorAll(
	".premium-steps  .mobile-booking-steps"
);
var bookingQty = 0;

// console.log("premium-booking-steps", formStepsPremium);

function validateStepPremium(step) {
	const inputs =
		formStepsPremium[step - 1].querySelectorAll(" input[required]");

	const dropdowns =
		formStepsPremium[step - 1].querySelectorAll("select[required]");

	const radios = formStepsPremium[step - 1].querySelectorAll(
		'input[type="radio"][required]'
	);
	console.log(radios);

	let isValid = true;

	for (let i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			$(inputs[i]).addClass("invalid");
			isValid = false;
		} else {
			$(inputs[i]).removeClass("invalid");
		}
	}

	for (let i = 0; i < dropdowns.length; i++) {
		if (dropdowns[i].value == "null") {
			$(dropdowns[i]).addClass("invalid");
			isValid = false;
		} else {
			$(dropdowns[i]).removeClass("invalid");
		}
	}

	for (let i = 0; i < radios.length; i++) {
		const radioGroup = radios[i].getAttribute("name");
		const radioChecked = formStepsPremium[step - 1].querySelector(
			`input[name="${radioGroup}"]:checked`
		);
		console.log("checked", radioChecked);

		if (!radioChecked) {
			console.log("radio-invalid");
			isValid = false;
			const errorMessage = formStepsPremium[step - 1].querySelector(
				".validation-message"
			);
			$(errorMessage).css("display", "flex");
		} else {
			console.log("radio-valid");
			const errorMessage = formStepsPremium[step - 1].querySelector(
				".validation-message"
			);
			$(errorMessage).css("display", "none");
		}
	}

	if (currentStepPremium - 1 === 0) {
		if (bookingQty >= 4) {
			isValid = true;
			const errorMessage = formStepsPremium[step - 1].querySelector(
				".validation-message"
			);
			$(errorMessage).css("display", "none");
		} else {
			isValid = false;
			const errorMessage = formStepsPremium[step - 1].querySelector(
				".validation-message"
			);
			$(errorMessage).css("display", "flex");
		}
	}

	if (isValid) {
		formStepsPremium[currentStepPremium - 1].style.display = "none";
		currentStepPremium = step + 1;
		formStepsPremium[currentStepPremium - 1].style.display = "block";

		const steps = document.querySelectorAll(".premium-steps div");
		steps.forEach((step, index) => {
			if (index < currentStepPremium) {
				$(step).addClass("done-step");
			} else {
				$(step).removeClass("done-step");
			}
		});

		const mobileSteps = document.querySelectorAll(".premium-mobile-steps div");
		mobileSteps.forEach((step, index) => {
			if (index < currentStepPremium) {
				$(step).addClass("done-step");
			} else {
				$(step).removeClass("done-step");
			}
		});

		if (currentStepPremium === 2) {
			displayBookingSummaryPremium();
		}
	}
}

// DISPLAY BOOKING SUMMARY -  ON DEMAND
function displayBookingSummary() {
	const bookingSummary = document.querySelector(
		".on-demand-booking .booking-summary-container"
	);
	const type = bookingSummary.querySelector(
		" .on-demand-booking  #selected-type"
	);
	// const cleaningType = bookingSummary.querySelector(
	// 	" .on-demand-booking  #selected-cleaning"
	// );
	const property = bookingSummary.querySelector(
		" .on-demand-booking  #selected-property"
	);
	const date = bookingSummary.querySelector(
		" .on-demand-booking #selected-date"
	);
	const time = bookingSummary.querySelector(
		" .on-demand-booking #selected-time"
	);
	const cleaners = bookingSummary.querySelector(
		" .on-demand-booking  #selected-cleaners"
	);
	const cleanersCount = bookingSummary.querySelector(
		" .on-demand-booking  #selected-cleaners-count"
	);
	const request = bookingSummary.querySelector(
		" .on-demand-booking  #request-message"
	);
	const promoCode = bookingSummary.querySelector(
		" .on-demand-booking #inserted-promo-code"
	);
	const subtotal = bookingSummary.querySelector(
		".on-demand-booking  #subtotal"
	);
	const discount = bookingSummary.querySelector(
		".on-demand-booking  #discount"
	);
	const total = bookingSummary.querySelector(" .on-demand-booking  #total");
	const totalInput = bookingSummary.querySelector(
		" .on-demand-booking  #totalInput"
	);
	// console.log("summary", subtotal, discount, total);

	const typeInput = $('input[name="booking-type"]:checked').val();
	const cleaningTypeInput = $(
		' .on-demand-booking  input[name="cleaning-type"]:checked'
	).val();
	const propsInput = $(
		' .on-demand-booking  input[name="property"]:checked'
	).val();
	const dateInput = $('.on-demand-booking  select[name="date"]').val();
	const timeInput = $(' .on-demand-booking  select[name="time"]').val();
	const cleanersInput = $(
		' .on-demand-booking  input[name="cleaners-count"]'
	).val();
	const requestInput = $('.on-demand-booking  textarea[name="request"]').val();
	const promoCodeInput = $(' .on-demand-booking input[name="promoCode"]').val();
	const subtotalInput = $(".on-demand-booking  #subtotal-price").text();

	// console.log("subtotal", subtotalInput);

	// DISPLAY BOOKING SUMMARY VALUES
	type.innerHTML = typeInput;
	// cleaningType.innerHTML = cleaningTypeInput;
	property.innerHTML = propsInput;
	date.innerHTML = dateInput;
	time.innerHTML = timeInput;
	cleaners.innerHTML = cleanersInput;
	request.innerHTML = requestInput;
	promoCode.innerHTML = promoCodeInput;
	subtotal.innerHTML = subtotalInput;
	//sample total
	total.innerHTML = parseInt(subtotalInput) - parseInt(discount.innerHTML);
	totalInput.value = parseInt(subtotalInput) - parseInt(discount.innerHTML);
	cleanersCount.value = cleanersInput;
}

// BOOKING SUMMARY PREMIUM
function displayBookingSummaryPremium() {
	const bookingSummary = document.querySelector(
		".premium-booking .booking-summary-container"
	);
	const selectedCleanings = bookingSummary.querySelector(".selected-cleanings");
	const type = bookingSummary.querySelector(".premium-booking #selected-type");
	const total = bookingSummary.querySelector("#total");

	// Values
	const typeInput = $('input[name="booking-type"]:checked').val();
	const cleaningsInput = document.querySelectorAll(
		".premium-booking .premium-choices .cleaning-type-card"
	);

	console.log("cleaningsInput", cleaningsInput);
	const totalInput = $(".premium-booking #my-total").text();

	// DISPLAY BOOKING SUMMARY VALUES
	$(selectedCleanings).empty();
	type.innerHTML = typeInput;
	total.innerHTML = totalInput;

	let cleanings = [];

	cleaningsInput.forEach((type) => {
		// let name = $(type).attr("data-value");
		// let value = $(type).val();
		let card = type.querySelector(".cleaning-type");

		let name = $(card).attr("data-name");
		let id = $(card).attr("data-value");
		let value = $(card).val();
		let cleaners = type.querySelector(".premium-count #cleaners-count").value;
		//console.log("cleaners count", cleaners);
		if (parseInt(value) > 0) {
			cleanings.push({
				id: parseInt(id),
				cleanersCount: parseInt(cleaners),
				value: parseInt(value),
			});

			$(selectedCleanings).append(
				'<div class="selected-cleaning">' +
					'<span class="cleaning-name">' +
					name +
					"</span>" +
					"<div>" +
					"<span>" +
					'<span id="cleaners-count">' +
					cleaners +
					"</span>" +
					"Cleaners/s" +
					"</span>" +
					"<span>" +
					'<span id="cleaning-qty">' +
					value +
					" </span> x </span>" +
					"</div>" +
					"</div>"
			);
		}
	});
	const cleaningsElement = document.querySelector("#cleanings-element-id");
	const cleaningsJSON = JSON.stringify(cleanings);
	cleaningsElement.value = cleaningsJSON;
}

//  PREMIUM BOOKING PREVIOUS BUTTON
function prevStepPremium() {
	formStepsPremium[currentStepPremium - 1].style.display = "none";
	currentStepPremium--;
	formStepsPremium[currentStepPremium - 1].style.display = "block";

	const steps = document.querySelectorAll(".premium-steps div");
	steps.forEach((step, index) => {
		if (index < currentStep) {
			$(step).addClass("done-step");
		} else {
			$(step).removeClass("done-step");
		}
	});

	const mobileSteps = document.querySelectorAll(
		".premium-steps .mobile-booking-steps div"
	);
	mobileSteps.forEach((step, index) => {
		if (index < currentStep) {
			$(step).addClass("done-step");
		} else {
			$(step).removeClass("done-step");
		}
	});
}

//  ON DEMAND BOOKING PREVIOUS BUTTON
function prevStep() {
	formSteps[currentStep - 1].style.display = "none";
	currentStep--;
	formSteps[currentStep - 1].style.display = "block";

	const steps = document.querySelectorAll(".on-demand-steps div");
	steps.forEach((step, index) => {
		if (index < currentStep) {
			$(step).addClass("done-step");
		} else {
			$(step).removeClass("done-step");
		}
	});

	const mobileSteps = document.querySelectorAll(
		".on-demand-steps .mobile-booking-steps div"
	);
	mobileSteps.forEach((step, index) => {
		if (index < currentStep) {
			$(step).addClass("done-step");
		} else {
			$(step).removeClass("done-step");
		}
	});
}

// ON DEMAND CLEANERS COUNT
function cleanersCountOnDemand(element) {
	var type = $(element).attr("data-value");

	const cleanerCount = document.querySelectorAll(
		".on-demand-cleaners #cleaners-count"
	);
	const totalPriceDisplay = document.querySelectorAll(
		".on-demand-cleaners .price #subtotal-price"
	);
	const price = document.querySelector(".on-demand-count #cleaner-price").value;
	var totalPrice = parseInt(price);
	var maxCleaners = 10;
	var cleanersVal = $(cleanerCount).val();

	if (type === "increment") {
		if (cleanersVal < maxCleaners) {
			cleanersVal = parseInt(cleanersVal) + 1;
			$(cleanerCount).val(cleanersVal);

			totalPrice = price * cleanersVal;
			$(totalPriceDisplay).text(totalPrice);
		}
	} else if (type === "decrement") {
		if (cleanersVal > 1) {
			cleanersVal = parseInt(cleanersVal) - 1;
			$(cleanerCount).val(cleanersVal);

			totalPrice = price * cleanersVal;
			$(totalPriceDisplay).text(totalPrice);
		}
	}
}

// COMPUTE MY TOTAL ON PREMIUM
function computeTotal() {
	let myTotal = document.querySelector("#my-total");
	let newTotal = 0;

	const premiumChoicesCard = document.querySelectorAll(
		".premium-choices .cleaning-type-card"
	);

	premiumChoicesCard.forEach((type) => {
		let price = parseInt(type.querySelector(".price-group .price").innerHTML);
		let qty = parseInt(type.querySelector(".count-span .count").innerHTML);
		let subtotal = price * qty;
		newTotal = newTotal + subtotal;
		$(myTotal).text(newTotal);
	});
}

// SET CLEANERS COUNT ON PREMIUM
const premiumChoicesCard = document.querySelectorAll(
	".premium-choices .cleaning-type-card"
);

if (premiumChoicesCard) {
	var maxCleaners = 10;
	var additional = 100;
	premiumChoicesCard.forEach((card) => {
		const counter = card.querySelector(".premium-count");
		let increment = counter.querySelector("#increment");
		let decrement = counter.querySelector("#decrement");
		let countElement = counter.querySelector("#cleaners-count");
		let count = parseInt(counter.querySelector("#cleaners-count").value);

		let priceElement = card.querySelector(".price-group .price");
		let price = parseInt($(priceElement).text());

		increment.addEventListener("click", () => {
			if (count < maxCleaners) {
				count++;
				$(countElement).val(count);
				price = price + additional;
				$(priceElement).text(price);
				$(priceElement).attr("data-value", price);
				computeTotal();
			}
		});
		decrement.addEventListener("click", () => {
			if (count > 1) {
				count--;
				$(countElement).val(count);
				price = price - additional;
				$(priceElement).text(price);
				$(priceElement).attr("data-value", price);
				computeTotal();
			}
		});
	});
}

//PREMIUM CHOICES STEP 1
const premiumCleanings = document.querySelectorAll(".premium-choices label");
if (premiumCleanings) {
	premiumCleanings.forEach((cleaning) => {
		//INCREMENT AND DECREMENT QUANTITY
		let plus = cleaning.querySelector(".quantity .increment");
		let minus = cleaning.querySelector(".quantity .decrement");
		let count = cleaning.querySelector(".quantity .cleaning-count");
		let qty = parseInt($(count).text());
		let inputCleaning = cleaning.querySelector("input[type=number]");

		// UPDATE CARD QUANTITY
		let cleaningPrice = cleaning.querySelector(".price-group .price");
		let cleaningCount = cleaning.querySelector(".price-group .count");
		let countSpan = cleaning.querySelector(".price-group .count-span");

		// MY TOTAL
		// let price = $(cleaningPrice).attr("data-value");
		let price = $(cleaningPrice).text();

		plus.addEventListener("click", () => {
			qty = qty + 1;

			bookingQty++;

			if (qty > 0) {
				$(countSpan).addClass("show-count");
			}
			$(count).text(qty);
			$(inputCleaning).val(qty);
			$(cleaningCount).text(qty);
			computeTotal();
		});

		minus.addEventListener("click", () => {
			if (qty > 0) {
				qty = qty - 1;
				bookingQty--;
				$(count).text(qty);
				$(inputCleaning).val(qty);
				$(cleaningCount).text(qty);
				computeTotal();
			}
			if (qty <= 0) {
				$(countSpan).removeClass("show-count");
			}
		});
	});
}

// FUNCTIONS

// Function to generate dynamic time options based on the selected date
function generateDynamicTimeOptions(selectedDate) {
	const options = [];
	// Get the current date and time
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth();
	const currentDate = now.getDate();

	// Function to format the time in AM/PM format
	function formatTimeAMPM(hours, minutes) {
		const ampm = hours >= 12 ? "PM" : "AM";
		const displayHours = hours % 12 || 12;
		return `${String(displayHours).padStart(2, "0")}:${String(minutes).padStart(
			2,
			"0"
		)} ${ampm}`;
	}

	// Function to format the time in 24-hour (military) format
	function formatTime24(hours, minutes) {
		return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
			2,
			"0"
		)}`;
	}

	// Generate time options based on the selected date
	const selectedYear = selectedDate.getFullYear();
	const selectedMonth = selectedDate.getMonth();
	const selectedDay = selectedDate.getDate();
	const selectedDayOfWeek = selectedDate.getDay(); // 0 for Sunday, 1 for Monday, etc.

	// For dates other than today, show options from 8:00 AM to 6:00 PM in 3-hour intervals
	for (let hour = 8; hour <= 18; hour += 1) {
		const startTime = formatTimeAMPM(hour, 0);
		const endTime = formatTimeAMPM(hour + 3, 0);
		const optionValue = formatTime24(hour, 0) + "-" + formatTime24(hour + 3, 0);
		options.push({ label: `${startTime} - ${endTime}`, value: optionValue });
	}

	// If the selected date is today, we'll adjust the options based on the current time
	if (
		selectedYear === currentYear &&
		selectedMonth === currentMonth &&
		selectedDay === currentDate
	) {
		const currentHour = now.getHours();
		const nearestHour = Math.ceil(currentHour / 3) * 3; // Round off to the nearest 3-hour interval

		// Remove options before the nearest hour
		options.splice(0, nearestHour - 8);

		// Remove options after 6:00 PM
		const endIndex = 19 - nearestHour;
		options.splice(endIndex);

		// Update the label of the first option to reflect the current time
		const startTime = formatTimeAMPM(nearestHour, 0);
		const endTime = formatTimeAMPM(nearestHour + 3, 0);
		options[0].label = `${startTime} - ${endTime}`;
	}

	return options;
}

// Function to populate the time select element with the dynamic time options
function populateTimeOptions(selectedDate) {
	const timeSelect = document.getElementById("time");
	const timeOptions = generateDynamicTimeOptions(selectedDate);

	// Clear existing options
	timeSelect.innerHTML =
		'<option disabled selected value="null">Select Time</option>';

	timeOptions.forEach((option) => {
		const optionElement = document.createElement("option");
		optionElement.value = option.value;
		optionElement.textContent = option.label;
		timeSelect.appendChild(optionElement);
	});
}

// Add event listener to the date select element to call populateTimeOptions when the date changes
const dateSelect = document.getElementById("date");
dateSelect.addEventListener("change", function () {
	const selectedDate = new Date(this.value);
	populateTimeOptions(selectedDate);
});

// Function to generate dynamic date options in YYYY-mm-dd format
function generateDynamicDateOptions() {
	const options = [];
	// Get the current date
	const today = new Date();
	// Get the day of the week (0 for Sunday, 1 for Monday, etc.)
	const dayOfWeek = today.getDay();

	// Create a function to add days to a date
	function addDays(date, days) {
		const result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}

	// Days of the week
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	// Create options dynamically for the next week (excluding Sundays)
	for (let i = 0; i <= 6; i++) {
		// Calculate the date for the current iteration
		const currentDate = addDays(today, i);
		const dayName = daysOfWeek[currentDate.getDay()];

		// Check if the current day is not Sunday (0)
		//   if (currentDate.getDay() !== 0) {
		// Format the date in YYYY-mm-dd format
		const year = currentDate.getFullYear();
		const month = String(currentDate.getMonth() + 1).padStart(2, "0");
		const day = String(currentDate.getDate()).padStart(2, "0");
		const formattedDate = `${year}-${month}-${day}`;

		// Add the day name and formatted date to the options array
		options.push({ day: dayName, date: formattedDate });
		//   }
	}

	return options;
}

// Function to populate the select element with the dynamic date options
function populateDateOptions() {
	const dateSelect = document.getElementById("date");
	const dateOptions = generateDynamicDateOptions();

	dateOptions.forEach((option) => {
		const { day, date } = option;
		const optionElement = document.createElement("option");
		optionElement.value = date;
		optionElement.textContent = `${day}, ${date}`;
		dateSelect.appendChild(optionElement);
	});
}

// Call the function to populate the date options when the page loads
populateDateOptions();

// ADD PROPERTIES FUNCTION
function addProperties() {
	const modal = document.querySelector("#add-property");
	toggleModal(modal);
}

// EDIT PROPERTIES FUNCTION
function editProperties(index, name, address, contact) {
	const modal = document.querySelector("#edit-property");
	console.log(index);
	toggleModal(modal);
	// Find the input element using its id
	const indexElement = document.querySelector("#index-element-id");
	const nameElement = document.querySelector("#name-element-id");
	const addressElement = document.querySelector("#address-element-id");
	const contactElement = document.querySelector("#contact-element-id");

	// Set the value of the input element to the 'index' variable
	indexElement.value = index;
	nameElement.value = name;
	addressElement.value = address;
	contactElement.value = contact;
}

// BOOKING PREMIUM PROPERTIES FUNCTION
function bookPremium(id) {
	console.log(id);
	// Get the anchor tag element
	const bookNowLink = document.getElementById("bookNowLink");

	// Update the href attribute with the premium value
	const premiumValue = id; // Assuming the id itself is the premium value
	bookNowLink.href = "transactions/book-now/" + premiumValue;

	// Trigger the hyperlink programmatically to navigate to the updated URL
	bookNowLink.click();
}

//BOOK IT EVENT LISTENER FROM HOME PAGE
function redirectBooking() {
	// const modal = document.querySelector("#book-it");
	alert("redirect to booking or login");
}

const bookingCards = document.querySelectorAll(
	"#cleaning-cards .swiper-slide "
);
console.log("booking", bookingCards);

if (bookingCards) {
	bookingCards.forEach((card) => {
		card.addEventListener("mouseover", () => {
			const button = card.querySelector(".type-button button");
			$(button).css("display", "inline");
			const price = card.querySelector(".cleaning-price");
			$(price).css("color", "#FFF");
		});
		card.addEventListener("mouseout", () => {
			const button = card.querySelector(".type-button button");
			$(button).css("display", "none");
			const price = card.querySelector(".cleaning-price");
			$(price).css("color", "#0fa958");
		});
	});
}

// });
