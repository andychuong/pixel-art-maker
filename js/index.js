var brushcolor = '';

//Change red box
document.addEventListener('click', function(e){
	if(e.target.parentElement.id === 'boxbox'){
    if(e.target.className === "box whitebox"){
    	e.target.className = 'box redbox';
    }
    else{
    	e.target.className = 'box whitebox';
    }
  }
});

document.addEventListener('click', function(e){
	if(e.target.parentElement.id === 'colorcolor'){
    brushcolor = e.target.id;
  }
});
