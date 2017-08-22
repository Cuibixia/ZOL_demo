





	             
	             $(function(){
	             	
	             	
	             	
	             $('.waretype-tab #t31,.waretype-tab #t32,.waretype-tab #t33').hover(function(){

		                      $('.waretype-tab #t31,.waretype-tab #t32,.waretype-tab #t33').removeClass('fli');
		                      $(this).addClass('fli');
		
		                      $('.tab_con #f31,.tab_con #f32,.tab_con #f33').removeClass('fdiv');
//		                      alert($(this).index())
		                      $('.tab_con #f31,.tab_con #f32,.tab_con #f33').eq($(this).index()).addClass('fdiv');
                  
                
                })	             	
	            })
	             
	             
	             $(function(){
	             	
	             
	             	
	             $('.waretype-tab #t21,.waretype-tab #t22,.waretype-tab #t23').hover(function(){

		                      $('.waretype-tab #t21,.waretype-tab #t22,.waretype-tab #t23').removeClass('fli');
		                      $(this).addClass('fli');
		
		                      $('.tab_con #f21,.tab_con #f22,.tab_con #f23').removeClass('fdiv');
//		                      alert($(this).index())
		                      $('.tab_con #f21,.tab_con #f22,.tab_con #f23').eq($(this).index()).addClass('fdiv');
                  
                
                })	             	
	            })
	             
	             
	             $(function(){
                 
                  $('.waretype-tab #t1,.waretype-tab #t2,.waretype-tab #t3').hover(function(){

		                      $('.waretype-tab #t1,.waretype-tab #t2,.waretype-tab #t3').removeClass('fli');
		                      $(this).addClass('fli');
		
		                      $('.tab_con #f1,.tab_con #f2,.tab_con #f3').removeClass('fdiv');
//		                      alert($(this).index())
		                      $('.tab_con #f1,.tab_con #f2,.tab_con #f3').eq($(this).index()).addClass('fdiv');
               
                 })
                 
                 
              }) 
    