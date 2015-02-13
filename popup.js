function myAlert(){
    alert('hello world');
    load();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search').addEventListener('click', myAlert);
});

var pages = 5;
var count = 0;
var mylist = [];
var timeout;
//load();
 
function load(){ 

  $('.Pin').each(function(){ 
    mylist.push( $(this)[0] ) 
  });
 
  $(window).scrollTop( $(document).height() );
 
  timeout = window.setTimeout(load, 4000);
 
  count++;
  if(count==pages){
  	finish();
  }
}
 
function finish() { 
	window.clearTimeout(timeout)
	console.log(mylist.length);
 
	var list = mylist.filter(function(f){ 
	  if( $(f).find('.likeCountSmall').length>0 ){
	    return f;
	  } 
	});
 
	console.log(list);
 
	list.sort(function(a, b) {
	   var compA = Number( $(a).find('.likeCountSmall').text().trim() );
	   var compB = Number( $(b).find('.likeCountSmall').text().trim() );
	   return (compA == compB) ? 0 : (compA > compB) ? -1 : 1;
	});
 
	$(".Grid").before('<div id="organized"/>').remove();
 
	$.each(list, function(idx, itm) { 
	  $("#organized").append($(itm)); 
	});
 
	$('.Pin').css({'clear': 'both', 'position': 'static'});
}