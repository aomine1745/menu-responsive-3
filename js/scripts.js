var btn = document.getElementById('btn');
var links = document.getElementById('links');
btn.addEventListener("click", navbar);
function navbar(){
	if(links.classList.contains('active')){
		links.classList.remove('active');
	}else{
		links.classList.add('active');
	}
}