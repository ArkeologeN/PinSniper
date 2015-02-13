console.log(__sniper);
var sniper = JSON.parse(__sniper);
var pages = sniper.pages;

var count = 0;
var mylist = [];
var timeout;
load();
 
function load(){ 
 
  $('.Pin').each(function(){ 
    mylist.push( $(this)[0] ) 
  });
 
  $(window).scrollTop( $(document).height() );
 
  timeout = window.setTimeout(load, 4000);
 
  count++;
  if(count==pages){
  	var func = "sortBy" + sniper.sorting;
  	console.log(func);
  	window[func]();
  	// finish();
  }
}

function sortByPins() {
	window.clearTimeout(timeout)
	 
	var list = mylist.filter(function(f){ 
	  if( $(f).find('.repinCountSmall').length>0 ){
	    return f;
	  } 
	});
 
	list.sort(function(a, b) {
	   var compA = Number( $(a).find('.repinCountSmall').text().trim() );
	   var compB = Number( $(b).find('.repinCountSmall').text().trim() );
	   return (compA == compB) ? 0 : (compA > compB) ? -1 : 1;
	});
 
	$(".Grid").before('<div id="organized"/>').remove();
 
	$.each(list, function(idx, itm) { 
	  $("#organized").append($(itm)); 
	});
 
	$('.Pin').css({'clear': 'both', 'position': 'static'});
}

function sortByLikes() {
	window.clearTimeout(timeout)
	 
	var list = mylist.filter(function(f){ 
	  if( $(f).find('.likeCountSmall').length>0 ){
	    return f;
	  } 
	});
 
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

function sortByComments() {
	window.clearTimeout(timeout)
	 
	var list = mylist.filter(function(f){ 
	  if( $(f).find('.commentCountSmall').length>0 ){
	    return f;
	  } 
	});
 
	list.sort(function(a, b) {
	   var compA = Number( $(a).find('.commentCountSmall').text().trim() );
	   var compB = Number( $(b).find('.commentCountSmall').text().trim() );
	   return (compA == compB) ? 0 : (compA > compB) ? -1 : 1;
	});
 
	$(".Grid").before('<div id="organized"/>').remove();
 
	$.each(list, function(idx, itm) { 
	  $("#organized").append($(itm)); 
	});
 
	$('.Pin').css({'clear': 'both', 'position': 'static'});
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