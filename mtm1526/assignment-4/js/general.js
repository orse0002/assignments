/*Document ready events
//It's best practice to put all you JQuery code inside
$(document).ready(function(){
	
	$('form').on('submit', function (ev){
		//Stop the form from do what it normally does
		//Stops the form from packaging its date and sending
		// a POST request
		ev.preventDefault();
		
		console.log('form submitted');
		
		var item=$('#item').val();
		//.prepend(), before(), after(), html()
		$('.todos').append('<li>'+item+'</li>');
		$('.todos li:last-child').hide().fadeIn(300);
		
		$('#item').val('');
		// clears any info in box by giving it no value
	});
	
	$('.todos').on('click', 'li' function(){
		$(this).toggleClass('done');
		
	});
	
//$(elem).css('background-color', '#f00')... for homework!
});
*/

