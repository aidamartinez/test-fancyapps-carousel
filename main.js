import './style.css'

import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

/* Basic */
const basicCarouselContainer = document.getElementById("basicCarousel");
const basicCarouselOptions = { infinite: false };
new Carousel(basicCarouselContainer, basicCarouselOptions);

/* Infinite */
const basicInfiniteCarouselContainer = document.getElementById("basicCarouselInfinite");
const basicInfiniteCarouselOptions = { infinite: true };
new Carousel(basicInfiniteCarouselContainer, basicInfiniteCarouselOptions);

/* Autoplay */
const container = document.getElementById("basicCarouselAutoplay");
const options = {
  Autoplay: {
    timeout: 2000,
  },
};
new Carousel(container, options, { Autoplay });

/* Responsive */
const responsiveCarouselContainer = document.getElementById("responsiveCarousel");
const responsiveCarouselOptions = { infinite: true };
new Carousel(responsiveCarouselContainer, responsiveCarouselOptions);

/* Options */
const optionsCarouselContainer = document.getElementById("optionsCarousel");
const optionsCarouselOptions = {
	infinite: true,
	transition: false,
	Navigation: {
		nextTpl: '<svg enable-background="new 0 0 91 91" height="91px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path fill="#000000" d="M1.176,81.346c0.592,1.524,2.45,2.753,4.053,1.646c9.228-6.361,18.816-12.109,28.06-18.441   c-0.006,3.309-0.013,6.617,0.002,9.927c0.009,1.914-0.524,5.02,0.251,6.866c0.612,1.462,2.446,2.821,4.047,1.648   c17.008-12.44,34.406-24.353,51.492-36.688c4.055-2.925-0.074-8.586-4.06-5.789c-3.03-2.592-5.917-5.359-9.186-7.696   c-4.111-2.939-8.307-5.76-12.533-8.533c-8.636-5.664-17.649-10.753-26.354-16.311c-1.866-1.189-4.473,0.359-4.417,2.535   c0.147,5.868,0.278,11.734,0.397,17.6c-1.945-1.864-3.805-3.845-5.947-5.49c-1.92-1.477-3.883-2.891-5.906-4.225   c-5.427-3.581-11.065-6.831-16.538-10.347c-1.811-1.163-4.333,0.355-4.286,2.461C0.614,26.627,0.444,79.461,1.176,81.346z    M83.204,41.941C68.738,53.439,53.917,64.563,38.887,75.319c0.006-0.48,0.082-12.118,0.098-17.456   c0.047-13.996,0.074-28.017-0.385-42.008C45.889,20.277,79.932,39.909,83.204,41.941z M32.987,30.998   c0.157,8.346,0.263,16.691,0.291,25.041c-0.344,0.153-18.213,13.078-26.839,19.27c0.007-0.578,0.149-12.545,0.17-17.951   c0.055-13.903,0.045-27.814-0.454-41.709C10.265,18.048,30.272,29.252,32.987,30.998z"/></g></svg>',
		prevTpl: '<svg enable-background="new 0 0 91 91" height="91px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path fill="#000000" d="M86.67,8.129c-5.456,3.504-11.08,6.745-16.492,10.316c-1.92,1.265-3.786,2.604-5.61,3.999   c-2.238,1.71-4.178,3.771-6.211,5.703c0.117-5.854,0.249-11.709,0.398-17.564c0.055-2.17-2.547-3.714-4.406-2.528   c-8.681,5.542-17.672,10.618-26.282,16.266c-4.044,2.656-8.062,5.352-12.003,8.155c-3.433,2.443-6.465,5.33-9.651,8.035   c-3.923-2.752-8.159,2.805-4.055,5.768C19.398,58.58,36.748,70.457,53.71,82.863c1.599,1.169,3.426-0.187,4.036-1.644   c0.741-1.765,0.26-13.352,0.255-16.747c9.219,6.314,18.778,12.047,27.982,18.391c1.597,1.104,3.45-0.122,4.04-1.642   c0.699-1.801,0.558-54.568,0.92-70.64C90.99,8.481,88.476,6.967,86.67,8.129z M52.703,15.911c-0.458,13.953-0.292,58.72-0.287,59.3   C37.431,64.488,22.652,53.397,8.232,41.933C11.33,40.025,45.434,20.321,52.703,15.911z M58.01,55.987   c0.028-8.327,0.134-16.65,0.291-24.972c2.618-1.674,5.516-3.052,8.121-4.706c2.032-1.292,4.093-2.522,6.212-3.665   c4.186-2.26,8.327-4.547,12.424-6.939c-0.498,13.854-0.507,27.726-0.452,41.592c0.021,5.286,0.164,17.222,0.171,17.904   C76.175,69.026,58.354,56.139,58.01,55.987z"/></g></svg>'
	}
};  
new Carousel(optionsCarouselContainer, optionsCarouselOptions);

/* Mobile */
const mobileCarouselContainer = document.getElementById("mobileCarousel");
const mobileCarouselOptions = {
    infinite: true,
    enabled: true,
    breakpoints: {
      "(min-width: 768px)": {
        enabled: false,
      },
    },
};   
new Carousel(mobileCarouselContainer, mobileCarouselOptions);


/* Overflow */
new Carousel(document.getElementById('overflowCarousel'), {
	Navigation: {
	prevTpl:
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
	nextTpl:
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
	},

	infinite: true,
	center: false,
	slidesPerPage: 'auto',
	transition: false,
});

/* Overflow - right side */
new Carousel(document.getElementById('overflowRightCarousel'), {
	Navigation: {
	prevTpl:
		'<svg enable-background="new 0 0 91 91" height="91px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path fill="#000000" d="M80.062,19.903c1.646-2.074,0.139-4.716-1.973-5.376c0.009-0.002,0.016-0.004,0.022-0.004   c-0.021-0.004-0.04-0.004-0.062-0.009c-0.782-0.235-1.644-0.191-2.454,0.249c-2.168,0.839-22.981,22.161-26.263,25.579   c-1.792,1.865-5.254,4.62-3.589,7.533c0.305,0.535,12.856,12.496,16.262,15.809c4.669,4.541,9.112,9.725,14.438,13.499   c1.306,0.927,2.971-0.874,2.16-2.162c-3.948-6.266-24.997-28.543-25.339-28.934C54.313,45.047,79.202,21.57,80.062,19.903z"/><path fill="#000000" d="M51.476,0.717c-3.154,1.191-32.299,31.116-37.038,35.986c-2.691,2.769-7.148,6.22-6.431,10.486   c0.189,1.117,1.031,2.097,2.023,2.728c0.367,0.375,34.475,34.777,42.558,40.507c1.877,1.332,4.268-1.257,3.104-3.104   c-5.551-8.81-35.755-40.814-36.414-41.531c1.397-1.384,37.272-35.233,38.53-37.656c2.339-2.993,0.142-6.791-2.905-7.709   l0.123-0.033C54.872,0.361,52.502,0.192,51.476,0.717z"/></g></svg>',
	nextTpl:
		'<svg enable-background="new 0 0 91 91" height="91px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path fill="#000000" d="M37.426,46.086c-0.342,0.391-21.391,22.668-25.339,28.934c-0.811,1.288,0.854,3.089,2.16,2.162   c5.325-3.774,9.769-8.958,14.438-13.499c3.405-3.313,15.957-15.273,16.262-15.809c1.665-2.913-1.797-5.667-3.589-7.533   c-3.281-3.418-24.095-24.74-26.263-25.579c-0.811-0.439-1.672-0.483-2.454-0.249c-0.021,0.004-0.041,0.004-0.062,0.009   c0.007,0,0.014,0.002,0.022,0.004c-2.111,0.66-3.619,3.302-1.973,5.376C11.488,21.57,36.378,45.047,37.426,46.086z"/><path fill="#000000" d="M39.215,0.717c3.154,1.191,32.3,31.116,37.038,35.986c2.691,2.769,7.148,6.22,6.431,10.486   c-0.188,1.117-1.03,2.097-2.023,2.728c-0.367,0.375-34.475,34.777-42.558,40.507c-1.877,1.332-4.268-1.257-3.104-3.104   c5.551-8.81,35.755-40.814,36.414-41.531c-1.396-1.384-37.272-35.233-38.53-37.656c-2.339-2.993-0.142-6.791,2.905-7.709   L35.665,0.39C35.818,0.361,38.188,0.192,39.215,0.717z"/></g></svg>',
	},

	infinite: true,
	center: false,
	slidesPerPage: 'auto',
	transition: false,
});


/* Sync */
const mainContainer = document.getElementById("slide1");
const mainOptions = {
	Dots: false
};
const mainCarousel = new Carousel(mainContainer, mainOptions);

const navContainer = document.getElementById("slide2");
const navOptions = {
	infinite: false,
	transition: false,
	center: true,
	fill: true,
	slidesPerPage: 1,
	dragFree: true,

	Dots: false,

	Sync: {
		target: mainCarousel,
	},
};
new Carousel(navContainer, navOptions);

/* Thumbs */
new Carousel(document.getElementById("thumbnailsCarousel"), {
	Dots: false,
	Thumbs: {
		type: "classic",
	},
}, { Thumbs });
new Carousel(document.getElementById("thumbnailsModernCarousel"), {
	Dots: false,
	Thumbs: {
		type: "modern",
	},
}, { Thumbs });