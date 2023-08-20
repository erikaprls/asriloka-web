const big_title = document.getElementById(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const img_container = document.querySelector(".imgContainer");
const section = document.querySelector("section");
const content = document.querySelector(".content");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

let judul = document.getElementById("judul");
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");

window.addEventListener("scroll", () => {
	let value = window.scrollY;
	let sectionY = section.getBoundingClientRect();

	judul.style.marginTop = value * 0.5 + "px";
	// layer1.style.marginTop = value * 50 + "px";
	layer2.style.marginTop = value * 0.8 + "px";

	opacity.forEach((Element) => {
		Element.style.opacity = value / (sectionY.top + section_height);
	});

	big_title.style.opacity = -value / (header_height / 2) + 1;
	shadow.style.height = `${value * 0.5 + 300}px`;

	content.style.transform = `translateY(${
		(value / (section_height + sectionY.top)) * 50 - 50
	}px
	)`;

	img_container.style.transform = `translateY(${
		(value / (section_height + sectionY.top)) * 50 + 50
	}px
	)`;

	border.style.width = `${(value / (sectionY.top + section_height)) * 30}%`;
});

const nav_btn = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".konten");

var sliderNav = function (manual) {
	nav_btn.forEach((btn) => {
		btn.classList.remove("active");
	});
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	contents.forEach((content) => {
		content.classList.remove("active");
	});

	nav_btn[manual].classList.add("active");
	slides[manual].classList.add("active");
	contents[manual].classList.add("active");
};
nav_btn.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		sliderNav(i);
	});
});
