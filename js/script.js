$(document).ready(function(){

$(window).resize(function() { resizeit(); });
resizeit();




$('.nav').click(function(){

	$('.nav').css("class", "active")

});



$("#tabs_ul li").click(function(){
	var id = $(this).attr("id");
	if(id == "topics_tab"){ 
		$("#topics").css("display","inline-block"); 
		$("#topics_tab").addClass("active_tab");
		$("#formats").css("display","none");
		$("#formats_tab").removeClass("active_tab");
	}
	if(id == "formats_tab"){ 
		$("#formats").css("display","inline-block"); 
		$("#formats_tab").addClass("active_tab"); 
		$("#topics").css("display","none"); 
		$("#topics_tab").removeClass("active_tab"); 
	}
});

	$('#main-slider ul li[slide_id!="1"]').css('opacity', '0');

	$("#navigation div").click(function(){
	    slide($(this).attr('slide_id'));
	});

	// ПЕРЕМЕННЫЕ ДЛЯ СЛАЙДЕРА ПОСТОВ
	var total = $("#new_posts ul").children().length; // количество элементво в списке постов
	var current = 1;
	var see = 4; //количество видимых постов

	$("#nav_posts_next").click(function(){

	if(current<total && current>0){
	$("#new_posts ul").animate({"left":"-=25%"}, "slow");
		current++; }
	else{ return false;	}
	});

	$("#nav_posts_prev").click(function(){

	if(current<=total && current>0){
		$("#new_posts ul").animate({"left":"+=25%"}, "slow");
		current--; }
	else{ return false; }
	});

 });


function resizeit(){

	var a = (1920 - $(window).width())/38; //на сколько ширина экрана меньше 1920
	var block_width = 50 + a;
	var nav_posts_width = block_width+10;
	var menu_font = (a/50)+1.2;
	var welcome_font = (a/50)+0.75;
	
	if(a>0)	{
	$(".block").css("width", block_width +"%");
	$("#nav_posts").css("width", nav_posts_width +"%");
	$("#menu").css("font-size", menu_font +"vw");
	$("#welcome").css("font-size", welcome_font+"vw");
			}

	$("#navigation").css("width", ($("#navigation").children().length+2)*20+"px");
	$("#navigation").css("top", $("#main-slider ul li img").height()-35 +"px");


	$("#new_posts").css("width", $(".block").width()+"px");
	$("#new_posts ul").css("width", $("#new_posts ul").children().length*($("#new_posts ul li").width())+($("#new_posts").width()/100)*3*$("#new_posts ul").children().length+"px");//
	$("#new_posts ul li").css("width", ($("#new_posts").width()/100)*22.917+"px");

	$("#body .block:first").css("height", $("#main-slider ul li").height()+"px");
	$("#nav_posts").css("bottom", ($("#new_posts ul li").height()/1.25)+"px");
	$("#new_posts ul").css("height", $("#new_posts ul li").height()+"px"); // !!??

	$("#home").css("height", $("#home").width());
		}


// function Size() {
//   var width = 1920; // ширина, от которой идет отсчет
//   var fontSize = 12; // минимальный размер шрифта
//   var bodyWidth = $('html').width();
//   var multiplier = bodyWidth / width;
//   if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
//   $('body').css({fontSize: fontSize+'px'});
// }


function slide(slide)
    {      
    	
    	if($('div#navigation div[slide_id="'+slide+'"]').hasClass('active')) return false;

    	$('div#navigation div[slide_id]').removeClass('active');

    	$("#main-slider ul li").css("z-index", "1");
    	$("#main-slider ul li").css("opacity", "0");
        $("#main-slider ul li[slide_id="+slide+"]").css({"z-index":"100", "opacity": "0"});
        $("#main-slider ul li[slide_id="+slide+"]").animate({opacity: 1}, "slow");

        $('div#navigation div[slide_id="'+slide+'"]').addClass('active');
    }
