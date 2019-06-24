$(document).ready(function(){



//   $('#myList').click(function(event){
//   $(event.target).addClass('clicked'); // добавим нажатому элементу класс clicked
//  });





$('.nav').live('click', function(){

 /* менять вид кнопки навигации при нажатии на нее */ 
	var current_nav_active = $(this).siblings(".active");
	/*var current_nav_active = $($(this)~".active");*/
	current_nav_active.removeClass("active");
	current_nav_active.addClass("nav");
	$(this).addClass("active");
	$(this).removeClass("nav");

	if( $(this).parent(".navigation_slider").attr('id') == "nav_main-slider"){  /* если это навигация слайдера */

		$(".main_slider ul li").toggleClass("active");
	}

	else if($(this).parent(".navigation_slider").attr('id') == "nav_opinions"){ /* если это навигация мнений */


	}

});




// 3 блок - Тренинги и Консультации

/* $("#menu_trainings ul li").click(function(){   

	$("#menu_trainings ul li.active").removeClass("active");
	$(this).addClass("active");

	if($(this).text()=="Темы"){ 
		$(".topics").addClass("active");
		$(".formats").removeClass("active");
		$(".opinions").removeClass("active");
	}

	if($(this).text()=="Форматы"){ 
		$(".topics").removeClass("active");
		$(".formats").addClass("active");
		$(".opinions").removeClass("active");
	}

	if($(this).text()=="Отзывы"){ 
		$(".topics").removeClass("active");
		$(".formats").removeClass("active");
		$(".opinions").addClass("active");
	}

});*/


// заполнение массива для определения какому табу какая вкладка соответствует
var count_tabs = $("#menu_trainings ul").children().length;
var tabs_arr = {};
var temp_i,temp_val;

for(i=0; i<count_tabs; i++){

	temp_i = $('#menu_trainings ul li:eq('+ i +')').text();
	temp_val = $('.trainings .tab:eq('+ i +')').attr('class');
	temp_val = temp_val.split(' ');
	tabs_arr[temp_i] = temp_val[0];
}

$("#menu_trainings ul li").click(function(){

	$("#menu_trainings ul li.active").removeClass("active");
	$(this).addClass("active");

	for(var key in tabs_arr){

		if($(this).text()==key){ $('.'+ tabs_arr[key] +'').addClass("active");}
		else { $('.'+ tabs_arr[key] +'').removeClass("active"); }
	
	}
});





var push = 0;
var count_posts = $("#posts ul li").length-1;
var count_hidden_posts =  $("#posts ul li.hidden").length;
var count_visible_posts = count_posts-count_hidden_posts+1;
//var start_hid=-1;

$(".prev_post").click(function(){

	$("#posts ul li:eq(0)").appendTo($("#posts ul"));

for(i=0; i<=count_posts; i++){

	if(i<count_visible_posts){$("#posts ul li:eq("+i+")").removeClass("hidden");}
	else{$("#posts ul li:eq("+i+")").addClass("hidden");}

	}
});



$(".next_post").click(function(){
	
	$("#posts ul li:eq("+count_posts+")").prependTo($("#posts ul"));

for(i=0; i<=count_posts; i++){

	if(i<count_visible_posts){$("#posts ul li:eq("+i+")").removeClass("hidden");}
	else{$("#posts ul li:eq("+i+")").addClass("hidden");}

	}
});





});










