var tiny = document.getElementById('ul');

var list = function (ev){
	
	tiny = document.createElement('li');
	
	document.getElementById('ul').appendChild(tiny);
	
	tiny.innerHTML=document.getElementById('item').value;
	
};

document.getElementById('button').addEventListener('click', list, false);

document.documentElement.addEventListener('click', function(ev){
	if (ev.target.tagName=='LI'){
		ev.target.className='deleted';
		tiny=ev.target;
		
	}
}, false);
	