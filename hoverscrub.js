(function( $ ) {
  $.fn.hoverScrub = function() {
  	var fPos = 0;
  	var counter = 0;
  	
  	var images = this.attr('data-images').split(',');
  	var current = this.attr('src'); 
  	var queueIndex = images.indexOf(current)+1;
  	var holder = this;
  					
		this.mousemove(function(e){
			var xPos = e.pageX; 
			if (xPos > fPos) { 
				counter++; 
				if ( counter > 10 ){ 
					counter = 0;
					if (images[queueIndex]==undefined) {
						queueIndex = 0; 
					}
					console.log("Loading: " + images[queueIndex]);
					holder.attr('src', images[queueIndex]); 
					queueIndex++;  
				}	
			} else { 
				counter++; 
				if ( counter > 10 ){ 
					counter = 0;
					if (images[queueIndex]==undefined) {
						queueIndex = images.length; 
					}
					console.log("Loading: " + images[queueIndex]);
					holder.attr('src', images[queueIndex]); 
					queueIndex = queueIndex-1;   
				}
			} 
			fPos = xPos; 
		});  	
  };
})( jQuery );