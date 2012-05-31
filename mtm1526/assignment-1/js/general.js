var lettermaker = function(){
	var alpha;
	
	while(!alpha){
		alpha=prompt ('Type a letter, eh?');
	}
	
	for (var i=0; i<10; i++){
		
		document.write(alpha);
		
		document.write('<br>');
	}
	
	
};

lettermaker();
