$(document).ready(function () {
	
	var userAvailable = $('.user-available');
	
	
	$('#username').on('change', function (ev){
		var username = $(this).val();
		
		userAvailable.attr('data-status', 'unchecked');
		
		if (username.length >= 3 && username.length <= 25){
			var ajax = $.post('check-username.php', {
				'username' : username
			});
			
			ajax.done(function (data) {
				if (data == 'available'){
					userAvailable
						.attr('data-status', 'available')
				        .html('Available')
						;
					
				} else {
					userAvailable
						.attr('data-status', 'unavailable')
						.html('Unavailable');	
				};
			});
		}
	});
	var emailAvailable = $('.email-available');

	$('#email').on('change', function (ev){
		var email = $(this).val();
		
		emailAvailable.attr('data-status', 'unchecked');
		
			var ajax = $.post('check-email.php', {
				'email' : email
			});
			
			ajax.done(function (data) {
				if (data == 'available'){
					emailAvailable
						.attr('data-status', 'available')
				        .html('Available')
						;
					
				} else {
					emailAvailable
						.attr('data-status', 'unavailable')
						.html('Unavailable');	
				};
			});
	});


	$('#password').on('keyup', function (ev) {
		var password = $(this).val();
		
		passwordReqs = 0;
		
		if (password.length > 5) {
			passwordReqs++;
			$('.pass-length').attr('data-state', 'achieved');
			
		}
		
		if(password.match(/[a-z]/)){
			passwordReqs++;
			$('.pass-lower').attr('data-state', 'achieved');
			
		}
		
		if(password.match(/[A-Z]/)){
			passwordReqs++;
			$('.pass-upper').attr('data-state', 'achieved');
			
		}
		
		if(password.match(/\d/)){
			passwordReqs++;
			$('.pass-num').attr('data-state', 'achieved');
			
		}
		
		if(password.match(/[^a-zA-Z0-9]/)){
			passwordReqs++;
			$('.pass-symbol').attr('data-state', 'achieved');
			
		}
		
	});
	
	var cityAvailable = $('.city-available');
	
	
	$('#city').on('change', function (ev){
		var city = $(this).val();
		
		cityAvailable.attr('data-status', 'unchecked');
		
		if (city.match(/[^a-zA-z]/)){
			cityAvailable
				.attr('data-status', 'unavailable')
				.html('Unavailable');
					
			} else {
				cityAvailable
					.attr('data-status', 'available')
					.html('Available');	
				}
			});

	
	var countryCA, countryUS; 
	
	$('[name="country"]').on('change', function (ev){
		var country = $(this).val();

		
		if(country=='usa'){
			if(!countryUS){
				$('#countryinfo').load ('usa.html', function(data){
					countryUS=data;
				});
			}else{
				$('#countryinfo').html(countryUS);
			}
		}else{
			if(!countryCA){
				$('#countryinfo').load ('canada.html', function(data){
					countryCA=data;
				});
			}else{
				$('#countryinfo').html(countryCA);
			}
		}
		
		});



	
	
	$('form').on('submit', function(ev) {
		if (
			userAvailable.attr('data-status')== 'unchecked'
			|| userAvailable.attr('data-status') == 'unavailable'
			|| passwordReqs < 5
		){
			ev.preventDefault();
		}
	});
});
