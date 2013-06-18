$( document ).delegate("#videoplayer", "pageinit", function() { });


//  new page control
$( document ).delegate("#home", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
 var x =document.getElementsByClassName('ui-icon-check');
console.log(x);
$(x).removeClass('ui-icon-check').addClass('icon-music');

var y =document.getElementsByClassName('ui-icon-star');

$(y).removeClass('ui-icon-star').addClass('icon-facetime-video'); 

  $("#buttonId").removeClass().addClass("ui-grid-c");
$("#add3,#add7").removeClass().addClass("ui-block-c");
$("#add4,#add8").removeClass().addClass("ui-block-d");
  
 $('#fade').bind("click", function(){
$('#add1,#add2,#add3,#add4').fadeOut('slow');
$('#add1,#add2,#add3,#add4').css('display', 'none');
$('#add5,#add6,#add7,#add8').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade2').bind("click", function(){
$('#add5,#add6,#add7,#add8').fadeOut('slow');
$('#add5,#add6,#add7,#add8').css('display', 'none');
$('#add1,#add2,#add3,#add4').fadeIn('slow');

});
});

//  new page control
$( document ).delegate("#Events", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
 var a =document.getElementsByClassName('ui-icon-check');

$(a).removeClass('ui-icon-check').addClass('icon-music');

var b =document.getElementsByClassName('ui-icon-star');

$(b).removeClass('ui-icon-star').addClass('icon-facetime-video'); 
  $("#buttonId1").removeClass().addClass("ui-grid-c");
$("#add31,#add71").removeClass().addClass("ui-block-c");
$("#add41,#add81").removeClass().addClass("ui-block-d");
  
 $('#fade1').bind("click", function(){
$('#add11,#add21,#add31,#add41').fadeOut('slow');
$('#add11,#add21,#add31,#add41').css('display', 'none');
$('#add51,#add61,#add71,#add81').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade21').bind("click", function(){
$('#add51,#add61,#add71,#add81').fadeOut('slow');
$('#add51,#add61,#add71,#add81').css('display', 'none');
$('#add11,#add21,#add31,#add41').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#Classes", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
 var c =document.getElementsByClassName('ui-icon-check');

$(c).removeClass('ui-icon-check').addClass('icon-music');

var d =document.getElementsByClassName('ui-icon-star');

$(d).removeClass('ui-icon-star').addClass('icon-facetime-video'); 

  $("#buttonId2").removeClass().addClass("ui-grid-c");
$("#add32,#add72").removeClass().addClass("ui-block-c");
$("#add42,#add82").removeClass().addClass("ui-block-d");
  
 $('#fade20').bind("click", function(){
$('#add12,#add22,#add32,#add42').fadeOut('slow');
$('#add12,#add22,#add32,#add42').css('display', 'none');
$('#add52,#add62,#add72,#add82').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade22').bind("click", function(){
$('#add52,#add62,#add72,#add82').fadeOut('slow');
$('#add52,#add62,#add72,#add82').css('display', 'none');
$('#add12,#add22,#add32,#add42').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#Facilities", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
var e =document.getElementsByClassName('ui-icon-check');

$(e).removeClass('ui-icon-check').addClass('icon-music');

var f =document.getElementsByClassName('ui-icon-star');

$(f).removeClass('ui-icon-star').addClass('icon-facetime-video');  
  $("#buttonId3").removeClass().addClass("ui-grid-c");
$("#add33,#add73").removeClass().addClass("ui-block-c");
$("#add43,#add83").removeClass().addClass("ui-block-d");
  
 $('#fade3').bind("click", function(){
$('#add13,#add23,#add33,#add43').fadeOut('slow');
$('#add13,#add23,#add33,#add43').css('display', 'none');
$('#add53,#add63,#add73,#add83').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade23').bind("click", function(){
$('#add53,#add63,#add73,#add83').fadeOut('slow');
$('#add53,#add63,#add73,#add83').css('display', 'none');
$('#add13,#add23,#add33,#add43').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#Membership", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  var g =document.getElementsByClassName('ui-icon-check');

$(g).removeClass('ui-icon-check').addClass('icon-music');

var h =document.getElementsByClassName('ui-icon-star');

$(h).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId4").removeClass().addClass("ui-grid-c");
$("#add34,#add74").removeClass().addClass("ui-block-c");
$("#add44,#add84").removeClass().addClass("ui-block-d");
  
 $('#fade4').bind("click", function(){
$('#add14,#add24,#add34,#add44').fadeOut('slow');
$('#add14,#add24,#add34,#add44').css('display', 'none');
$('#add54,#add64,#add74,#add84').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade24').bind("click", function(){
$('#add54,#add64,#add74,#add84').fadeOut('slow');
$('#add54,#add64,#add74,#add84').css('display', 'none');
$('#add14,#add24,#add34,#add44').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#FindUs", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  var i =document.getElementsByClassName('ui-icon-check');

$(i).removeClass('ui-icon-check').addClass('icon-music');

var j =document.getElementsByClassName('ui-icon-star');

$(j).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId5").removeClass().addClass("ui-grid-c");
$("#add35,#add75").removeClass().addClass("ui-block-c");
$("#add45,#add85").removeClass().addClass("ui-block-d");
  
 $('#fade5').bind("click", function(){
$('#add15,#add25,#add35,#add45').fadeOut('slow');
$('#add15,#add25,#add35,#add45').css('display', 'none');
$('#add55,#add65,#add75,#add85').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade25').bind("click", function(){
$('#add55,#add65,#add75,#add85').fadeOut('slow');
$('#add55,#add65,#add75,#add85').css('display', 'none');
$('#add15,#add25,#add35,#add45').fadeIn('slow');

});
});
//
//  new page control
$( document ).delegate("#Videos", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  var k =document.getElementsByClassName('ui-icon-check');

$(k).removeClass('ui-icon-check').addClass('icon-music');

var l=document.getElementsByClassName('ui-icon-star');

$(l).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId6").removeClass().addClass("ui-grid-c");
$("#add36,#add76").removeClass().addClass("ui-block-c");
$("#add46,#add86").removeClass().addClass("ui-block-d");
  
 $('#fade6').bind("click", function(){
$('#add16,#add26,#add36,#add46').fadeOut('slow');
$('#add16,#add26,#add36,#add46').css('display', 'none');
$('#add56,#add66,#add76,#add86').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade26').bind("click", function(){
$('#add56,#add66,#add76,#add86').fadeOut('slow');
$('#add56,#add66,#add76,#add86').css('display', 'none');
$('#add16,#add26,#add36,#add46').fadeIn('slow');

});
});
//
function setupPages()

{
//window.alert("page 7 Button Clicked!");
$(function() {
  setTimeout(hideSplash, 3000);
});

function hideSplash() {
  $.mobile.changePage("#home", "fade");
}

 //var pageheight=$(#home).height();
//window.alert("height of the page is"+pageheight);



}

function showMyVideos(data) 
{

console.log(data);

//description
//var description = data.feed.entry[0].media$group.media$description.$t;
// id

var output ='';
for ( var i=0; i<data.feed.entry.length; i++)
{
var title = data.feed.entry[i].title.$t;
var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
var id =data.feed.entry[i].id.$t.substring(27);
var blocktype = ((i % 2)===1) ? 'b':'a';

output += '<div class="ui-block-'+blocktype+'">';
output +='<div class="backgroundVideo">';
output += '<a href="#videoplayer" data-transition="fade" onclick="playVideo(\''+id+'\',\''+title+'\')">';
output +='<h3 class="movietitle">'+title+'</h3>';
output +='<img src="'+thumbnail+'" alt="'+title+'"/>';
output +="</a>";
output +="</div>";
output +="</div>";
//output +="hello";

}
$('#videolist').html(output);

}

function playVideo(id,title)
{

//console.log(id);
//console.log(title);
//var output ='<div data-role="collapsible-set">';
//output +='<div class="background" data-role="collapsible" data-collapsed="false">';
var output='<div class="backgroundVideo">';
output += '<h3>' + title + '</h3>';
output+='<p></p>';
output +='<iframe src ="http://www.youtube.com/embed/'+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
output+='</div>';
//output+='</div>';


//var output ='<iframe src ="http://www.youtube.com/embed/'+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
//var output ='<iframe  src="http://www.youtube.com/embed/r-KAECwqHPg" frameborder="0" allowfullscreen></iframe>';
//output += '<h3>' + title + '</h3>';
$('#myplayer').html(output);

}


function listposts(data) 


{






var category = console.log(data.posts[0].categories[0].title);
console.log(data);


var morningClasses = "<ul>";
var eveningClasses = "<ul>";
var musicClasses = "<ul>";
var otherMusicClasses = "<ul>";
var SetDancingClasses = "";
var kidsSetDancingClasses = "";
var musicSessions = "";
var studioInfo ="";
var venueHire="";
var whyJoin ="";
var howToApply=""

var output='<div data-role="collapsible-set">';



$.each(data.posts,function(key,val){


var tempDiv = document.createElement("tempDiv");
tempDiv.innerHTML = val.excerpt;
$("a",tempDiv).remove();
var excerpt= tempDiv.innerHTML;


if (val.categories[0].title =='arasposts')
{

output+='<div class="background" data-role="collapsible">';

output+='<h3>'+val.title+'</h3>';
output+='<p>'+excerpt+'</p>';





output+='<img src="'+val.thumbnail+'" alt ="'+val.title+'" />';
output+='</div>';

}

if (val.categories[0].title =='otherMusicClasses')
{

otherMusicClasses+='<p>'+excerpt+'</p>';
otherMusicClasses+='<img src="'+val.thumbnail+'" width="350" height=400" alt ="'+val.title+'" />';
}

if (val.categories[0].title =='classes')
{
morningClasses+='<img src="'+val.thumbnail+'" width="350" height=400" alt ="'+val.title+'" />';
}
if (val.categories[0].title =='eveningclasses')
{
eveningClasses+='<img src="'+val.thumbnail+'" width="350" height=400" alt ="'+val.title+'" />';
}
if (val.categories[0].title =='music')
{
musicClasses+='<img src="'+val.thumbnail+'" width="350" height=400" alt ="'+val.title+'" />';
}
if (val.categories[0].title =='setdancing')
{
SetDancingClasses+=''+val.content+'';
}
if (val.categories[0].title =='kidsSetDancing')
{
kidsSetDancingClasses+=''+val.content+'';
}
if (val.categories[0].title =='musicSessions')
{
musicSessions+=''+val.content+'';
}
if (val.categories[0].title =='studioInfo')
{
studioInfo+=''+val.content+'';
}
if (val.categories[0].title =='venueHire')
{
venueHire+=''+val.content+'';
}
if (val.categories[0].title =='whyJoin')
{
whyJoin+=''+val.content+'';
whyJoin+='<img class="homeImage" src="'+val.thumbnail+'" width="350" height=400" alt ="'+val.title+'" />';
}
if (val.categories[0].title =='howToApply')
{
howToApply+=''+val.content+'';
}
});
output+='</div>';
morningClasses+='</ul>';
eveningClasses+='</ul>';
musicClasses+='</ul>';
otherMusicClasses+='</ul>';
SetDancingClasses += '';
kidsSetDancingClasses += '';
musicSessions += "";
studioInfo +="";
venueHire +="";
whyJoin +="";
howToApply +="";

$('#eventsList').html(output);
$('#morningClass').html(morningClasses);
$('#eveningClass').html(eveningClasses);
$('#musicClass').html(musicClasses);
$('#otherMusicClass').html(otherMusicClasses);
$('#setDancing').html(SetDancingClasses);
$('#kidsSetDancing').html(kidsSetDancingClasses);
$('#musicSessions').html(musicSessions);
$('#studioInfo').html(studioInfo);
$('#venueHire').html(venueHire);
$('#whyJoin').html(whyJoin);
$('#howToApply').html(howToApply);

}