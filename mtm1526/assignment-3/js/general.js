jQuery (function ($) {
		var $ball=$('#balls')
		,$property=$('#property')
		,$color=$('#colors')

;
	$('form').on('submit', function (e) {
		var color=$color.val();
		
		e.preventDefault();
		
		if(color){
			$ball.css($property.val(), $color.val());
		}
	});
	
	$('#button').on('click', function (e){
		$ball.toggle(500);
	});
	
});