var brushcolor = 'whitecolor';

//Change red box
document.addEventListener('click', function(e){
	if(e.target.parentElement.id === 'boxbox'){
    if(brushcolor === "redcolor"){
    	e.target.className = 'box redbox';
    }else
		if(brushcolor === 'orangecolor'){
    	e.target.className = 'box orangebox';
    }
		else
		if(brushcolor === 'yellowcolor'){
    	e.target.className = 'box yellowbox';
    }
		else
		if(brushcolor === 'greencolor'){
    	e.target.className = 'box greenbox';
    }
		else
		if(brushcolor === 'bluecolor'){
    	e.target.className = 'box bluebox';
    }
		else
		if(brushcolor === 'purplecolor'){
    	e.target.className = 'box purplebox';
    }
		else
		if(brushcolor === 'blackcolor'){
    	e.target.className = 'box blackbox';
    }else
		if(brushcolor === 'greycolor'){
    	e.target.className = 'box greybox';
    }else
		if(brushcolor === 'whitecolor'){
    	e.target.className = 'box whitebox';
    }else
		if(brushcolor === 'browncolor'){
    	e.target.className = 'box brownbox';
    }
  }
});

document.addEventListener('click', function(e){
	if(e.target.parentElement.id === 'colorcolor'){
    brushcolor = e.target.id;
  }
});
