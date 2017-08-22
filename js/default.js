// JavaScript Document
//头部js
		    var Z_now_time = "1483443183";    
		    var z_user_id = "";    
		    function showUI(obj) {        
		    	var className = obj.className;        
		    	if (className == "zc-my-center") {            
		    		obj.className = "zc-my-center zc-hover";            
		    		document.getElementById("zc-my-center-bd").style.display = "block";       
		    	}
		    		else if (className == "zc-mobile") {            
		    			obj.className = "zc-mobile zc-hover";            
		    			document.getElementById("zc-mobile-bd").style.display = "block";       
		    		}
		    			else {            
		    				obj.parentNode.className = "customer zc-hover";            
		    				obj.nextSibling.style.display = "block";        
		    			}
		    }    
		    function hideUI(obj) {
		    	var className = obj.className;        
		    	if (className == "zc-my-center zc-hover") {           
		    		obj.className = "zc-my-center";            
		    		document.getElementById("zc-my-center-bd").style.display = "none";        
		    	} 
		    	else if (className == "zc-mobile zc-hover") {            
		    		obj.className = "zc-mobile";            
		    		document.getElementById("zc-mobile-bd").style.display = "none";        
		    	} else {            
		    		obj.parentNode.className = "customer";            
		    		obj.nextSibling.style.display = "none";        
		    	}    
		    }   

//全国下拉标签tab方法
$(function(){
 $('.city-location').hover(function(){
 	
 	$('.city-list').CSS("dispaly","block");	
 })
})	
	
//浮动导航栏
$(function(){
var sc=$(document);//得到document文档对象。
$(window).scroll(function () {

if(sc.scrollTop()>=300){
   $(".big-header").fadeIn(); 

}else{
   $(".big-header").fadeOut();
}
}) 
})





/*$('.titlemessage li').hover(function(){
		$('.titlemessage li').removeClass('fli');
		$(this).addClass('fli');
		
		$('.menu-content div').removeClass('left');
		alert($(this).index())
		$('.menu-content div').eq($(this).index()).addClass('left');
})
	*/
	
//$(function(){
//		var i=0;
//		var arr=["1","2","3"];
//		var time;
//		time=setInterval(function(){
//		if(i>arr.length-1){
//			i=0;
//		}
//			$('.img').attr('src','images/banner'+arr[i]+'.jpg')
//			i++;
//      },1000)
//		
//		
//		
///*		
//		$('.scroll img').hover(function(){
//			var left=$('.scroll').scrollLeft();
//			$('.scroll').scrollLeft(left-5);
//		})*/
//		  
//})

//倒计时
$(function timer(intDiff){

 var intDiff = parseInt(4210); //倒计时总秒数量
 var hour=0,
 minute=0,
 second=0;//时间默认值

window.setInterval(function(){

if(intDiff > 0){
hour = Math.floor(intDiff / 3600) ; 
minute = Math.floor(intDiff / 60) - (hour * 60);
second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
}
if (hour <= 9) hour = "0" + hour; //格式设置
if (minute <= 9) minute = "0" + minute;
if (second <= 9) second = "0" + second;
  $('.b1').html(hour+" ");
  $('.b2').html(minute+" ");
  $('.b3').html(second+" ");
  intDiff--;
},1000);
})


//banner图片轮播
$(function(){
imgscrool('.bannerbox');
})

function imgscrool(obj){
	var width = $(obj+" .banner .img img").width();
	var i=0;
	var clone=$(obj+" .banner .img li").first().clone();
	$(obj+" .banner .img").append(clone);	
	var size=$(obj+" .banner .img li").size();	
//	alert(size);
	for(var j=0;j<size-1;j++){
		$(obj+" .banner .num").append("<li></li>");
	}
	$(obj+" .banner .num li").first().addClass("on");
	
	/*鼠标划入圆点*/
	$(obj+" .banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(obj+" .banner .img").stop().animate({left:-index*width},500)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
		
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move();
	},1000)
		
	/*对banner定时器的操作*/
	$(obj+" .banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move();
		},1000)
	})
		
	/*向左的按钮*/
	$(obj+" .banner .btn_l").stop(true).delay(800).click(function(){
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(obj+" .banner .btn_r").stop(true).delay(800).click(function(){
		i++
		move()				
	})
		
	function move(){
		
		if(i==size){
			$(obj+" .banner  .img").css({left:0})			
			i=1;
		}
		
		// 修改轮播没屏宽度
		if(i==-1){
			$(obj+" .banner .img").css({left:-(size-1)*width})
			i=size-2;
		}
		
		$(obj+" .banner .img").stop(true).animate({left:-i*width},500)	
		
		if(i==size-1){
			$(obj+" .banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(obj+" .banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}	
}	


//头部轮播下面的图片ajax
		$(function(){

			    $.ajax({
			        type: 'GET',
			        url: './data/listdata.json',
			        dataType: 'json',
			        success: function(data){
			//         alert(123);
						var htme=htmll(data);
						
						console.log(data);
						$('.aj').append(htme);
			        },
			        error: function(xhr, type){
			            alert('Ajax error!')
			        }
			    })
			    
			function htmll(data){
				var html='';
				for(i in data){
					html=html+'<li><h4>'+data[i].htext+'</h4><p class="price">'+data[i].ptext+'</p><div class="scroll">'
					+'<img src="'+data[i].img+'"/></li>'
				}
				return html;
				
			}
			

		})

//换一批按钮ajax
$(function(){
			$('.change').click(function(){
				getData();
			})

			function getData(type){
			    $.ajax({
			        type: 'GET',
			        url:'./data/change.json',
			        dataType: 'json',
			        success: function(data){
//		        alert(123);
						var htme=htmll(data);
						
						console.log(data);
						$('.hotsale-list').html(htme);
			        },
			        error: function(xhr, type){
			            alert('Ajax error!')
			        }
			    })
			}
			function htmll(data){
				var html='';
				for(i in data){
					html=html+'<ul class="hotsale-list"><li><span class="arrival-time">'+data[i].time+
					'</span><a href="#" target="_blank" class="picture">'+
					'<img src="'
					+data[i].img+
					'"width="221" height="220"></a>'+
					'<h4 class="phone-name"><a href="#" target="_blank">'+
					data[i].text+
					'</a></h4><div class="price-tag"><span class="phone-price">'+
					data[i].id+
					'</span><div class="ico-box"></div></div></li>'                       
				}
				return html;
				
			}
			
		})
