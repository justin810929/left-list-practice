$(document).ready(function() {
	/*包包的列表*/
	$('.baglist-open').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.baglist').fadeIn(700);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.baglist').fadeOut(700)
	});
	$('.baglist').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.baglist').css('display','inline-block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.baglist').fadeOut(1500)
	});
/*食物的列表*/
	$('.foodlist-open').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.foodlist').css('display','inline-block').fadeIn(1500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.foodlist').css('display','none').fadeOut(1500)
	});
	$('.foodlist').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.foodlist').css('display','inline-block').fadeIn(1500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.foodlist').css('display','none').fadeOut(1500)
	});
/*鞋子的列表*/
	$('.shoeslist-open').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.shoeslist').css('display','inline-block').fadeIn(1500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.shoeslist').css('display','none').fadeOut(1500)
	});
	$('.shoeslist').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.shoeslist').css('display','inline-block').fadeIn(1500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.shoeslist').css('display','none').fadeOut(1500)
	});
/*ＧＧ的列表*/
	$('.GGlist-open').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.GGlist').css('display','inline-block').fadeIn(1500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.GGlist').css('display','none').fadeOut(1500)
	});
	$('.GGlist').hover(function() {
		/* Stuff to do when the mouse enters the element */
	$('.GGlist').css('display','inline-block').fadeIn(1500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	$('.GGlist').css('display','none').fadeOut(1500)
	});
