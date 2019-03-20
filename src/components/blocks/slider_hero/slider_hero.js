export default function(){
	
	let touchstartX = 0;
	let touchendX = 0;

	const slider = document.getElementById('slider');
	const sliderContainer = document.getElementById('slider__container');

	slider.addEventListener('mousedown', function(event) {
		touchstartX = event.screenX;
	}, false);

	slider.addEventListener('mouseup', function(event) {
		touchendX = event.screenX;       
		handleGesure();
	}, false); 

	//функция определения направления прокрутки слайдера

	function handleGesure() {
		if (touchendX < touchstartX) {
			//left
			sliderMoveLeft(sliderContainer);
		}
		if (touchendX > touchstartX) {
			//right
			sliderMoveRight(sliderContainer);
		}
	}

	// функция для получения порядкового номера элемента в родителе

	function indexElem(elem){

		var i = 0;

		while(elem.previousElementSibling){
			i++;
			elem = elem.previousElementSibling;
		}
 
		return i;
	}

	// движение влево контейнера сладера

	function sliderMoveLeft(container){
		const slideActive = container.querySelector('.active__slide');
		const slideNext = slideActive.nextElementSibling;
		const slideFirst = container.firstElementChild;
		let positionSlider;
            
		slideActive.classList.remove('active__slide');

		if (slideNext){

			slideNext.classList.add('active__slide');
            
			positionSlider = indexElem(slideNext) * -100;
		} else {
            
			slideFirst.classList.add('active__slide');

			positionSlider = indexElem(slideFirst) * -100;
		}

		container.style.left = positionSlider + '%';
	}

	// // движение вправо контейнера сладера

	function sliderMoveRight(container){
            
		const slideActive = container.querySelector('.active__slide');
		const slidePrev = slideActive.previousElementSibling;
		const slideLast = container.lastElementChild;
		let positionSlider;
            
		slideActive.classList.remove('active__slide');

		if (slidePrev){
			slidePrev.classList.add('active__slide');
            
			positionSlider = indexElem(slidePrev) * -100;
		} else {
            
			slideLast.classList.add('active__slide');

			positionSlider = indexElem(slideLast) * -100;
		}

		container.style.left = positionSlider + '%';
	}

}