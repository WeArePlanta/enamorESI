// <!-- Initialize Swiper -->

document.addEventListener('DOMContentLoaded', function () {

	var swiper = new Swiper('.swiper', {
		effect: 'cards',
		grabCursor: true,
		// allowSlidePrev: false,
		on: {
			slideChange: function (e) {
				console.log(e);
				console.log(e.swipeDirection);
				if (e.previousIndex > e.activeIndex) {
					e.slideTo(e.previousIndex);
					document.body.classList.add('show-message');
					// setTimeout(function () {
					// 	document.body.classList.remove('show-message');
					// }, 3000);
				}
			}
		}
	});

	let closeBtn = document.getElementById('close-btn');

	closeBtn.addEventListener('click', function(e) {
        document.body.classList.remove('show-message');
    });
});