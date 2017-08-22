
function sendok(){
	if(userid.value!="" && userpwd.value!=""){
		localStorage.userid=userid.value;
		sessionStorage.userpwd=userpwd.value;
		document.location="default.html";

		}
		else{
			alert("请输入账号");
//			document.location="login.html";
		}
//	document.onkeydown = function(e){
//  if((e||event).keyCode==13)
//      next();
//};
	}
function isload(){
   	localStorage.clear();
	
	if(localStorage.userid){
		
		 userid.value=localStorage.userid;
	}
	   
	   
}

function login1(){
	if(localStorage.userid!="xiaohong"||sessionStorage.userpwd!="123"){
	alert("账户密码错误，请重新登录！！");
    sessionStorage.removeItem('userpwd');
	document.location="login.html";
	}
}
	