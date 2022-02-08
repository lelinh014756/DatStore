







function header(){

	let btn = {
		menu : document.querySelector('#menu-icon'),
		search : document.querySelector("#search-icon"),
		cart : document.querySelector("#cart-icon"),
		login: document.querySelector("#login-icon"),		
	}

	let form = {
		menu : document.querySelector("header nav") , 
		search : document.querySelector(".search-form"),
		cart : document.querySelector(".cart-form"),
		login : document.querySelector(".login-form"),
	}

	this.start = function(){

		for(let keyb in btn)
		 	btn[keyb].onclick = function(){
		 		form[keyb].classList.toggle('active');

		 		for(let keyf in form)
		 			if(keyf !== keyb)
					 form[keyf].classList.remove('active');
		 	}


		 window.onscroll = function(){
		 	for(let keyf in form)
		 		form[keyf].classList.remove('active');
		 }
	}
}




function product(){

	this.start = function(){

		var swiper = new Swiper(".product-slide",{
			loop: true , 
			spaceBetween: 20 ,
			autoplay: {
				delay: 7500 , 
				disableOnInteraction: false ,
			},
			centeredSlides: true, 
			breakpoints: {
				0:{
					slidesPerView : 1 , 
				},
				768:{
					slidesPerView : 2 , 
				},
				1020:{
					slidesPerView : 3 , 
				},
			}
		});
	}
}


function review(){

	this.a = function() {
		console.log("hujvdgj")
	}

	this.start = function(){

		var swiper = new Swiper(".review-slider",{
			loop: true , 
			centeredSlides: true ,
			autoplay:{
				delay: 7000 , 
				disableOnInteraction: false ,
			},
			spaceBetween: 20 , 
			breakpoints:{
				0:{
					slidesPerView: 1 , 
				},
				768:{
					slidesPerView: 2 , 
				},
				1020:{
					slidesPerView: 3, 
				}
			}
		})
	}
}




const elements = [
	new header() ,
	new product() ,
	new review() ,
]


for(let element of elements)
	element.start();
