var container = document.getElementById("boxbox");
var current = document.getElementsByClassName("colors currentcolor")[0];
for (var i = 0; i < 1200; i++) {
   container.innerHTML += '<div class="box whitebox"></div>';
}

var brushcolor = 'whitecolor';

//Change red box
document.addEventListener('click', function(e){
	if(e.target.parentElement.id === 'boxbox'){
		if(brushcolor === "pinkcolor"){
    	e.target.className = 'box pinkbox';
    }else
    if(brushcolor === "redcolor"){
    	e.target.className = 'box redbox';
    }else
		if(brushcolor === 'burlycolor'){
    	e.target.className = 'box burlybox';
    }else
		if(brushcolor === 'browncolor'){
    	e.target.className = 'box brownbox';
    }else
		if(brushcolor === 'orangecolor'){
    	e.target.className = 'box orangebox';
    }else
		if(brushcolor === 'khakicolor'){
    	e.target.className = 'box khakibox';
    }else
		if(brushcolor === 'yellowcolor'){
    	e.target.className = 'box yellowbox';
    }else
		if(brushcolor === 'greencolor'){
    	e.target.className = 'box greenbox';
    }else
		if(brushcolor === 'mediumgreencolor'){
    	e.target.className = 'box mediumgreenbox';
    }else
		if(brushcolor === 'deepbluecolor'){
    	e.target.className = 'box deepbluebox';
    }else
		if(brushcolor === 'bluecolor'){
    	e.target.className = 'box bluebox';
    }else
		if(brushcolor === 'mediumpurplecolor'){
    	e.target.className = 'box mediumpurplebox';
    }else
		if(brushcolor === 'purplecolor'){
    	e.target.className = 'box purplebox';
    }else
		if(brushcolor === 'blackcolor'){
    	e.target.className = 'box blackbox';
    }else
		if(brushcolor === 'greycolor'){
    	e.target.className = 'box greybox';
    }else
		if(brushcolor === 'whitecolor'){
    	e.target.className = 'box whitebox';
    }
  }
});

document.addEventListener('click', function(e){
	if(e.target.parentElement.id === 'colorcolor'){
    brushcolor = e.target.id;
		current.id = e.target.id;
  }
});
