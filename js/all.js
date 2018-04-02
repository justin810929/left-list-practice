$(document).ready(function() {
	/*包包的列表*/
	$('.baglist-open').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.baglist').css('display','inline-block')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.baglist').css('display','none')
	});
	$('.top').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 400);	
	
    /*食物的列表*/
	
    /*鞋子的列表*/
	
    /*ＧＧ的列表*/



});
