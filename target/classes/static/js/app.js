var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when("/login",{
		templateUrl:"views/login.html"
	})
	.when("/home",{
		templateUrl:"views/home.html"
	})
	.otherwise({
		template:"<h1>Invalid Route</h1>"
	});

	$locationProvider.html5Mode(true);
})
var signupCtrl=function($scope, $http)
{
	$scope.user={fullname:"",email:"",password:"",password2:"",address:"" };
	$scope.signuperror="";
	$scope.validateFullName=function(fullname){
		if(fullname.length==0){
			return "Full Name Field is Required";
		}
		return true;
	}
	$scope.validateEmail=function(email)
	{			
		var emailVal=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(emailVal.test(email)){
			return true;
		}else{
			return false;
		}
	}
	$scope.ConfirmPassword=function(pw1,pw2)
	{			
		if(pw1!=pw2){
			return "Two passwords not matched";
		}
		if(pw1.length<6){
			return "Password must be at least 6 charecters";
		}
		return true;

	}


	$scope.signup= function(){
		var v;

		v=$scope.validateFullName($scope.user.fullname);
		if(v!=true){
			$scope.signuperror=v;
			return;
		} 
		v=$scope.validateEmail($scope.user.email);
		if(v==false)
		{
			$scope.signuperror="Invalid Email!!";
			return ;
		}
		v=$scope.ConfirmPassword($scope.user.password,$scope.user.password2);
		if(v!=true){
			$scope.signuperror=v;
		}

		$http({
			url:'http://127.0.0.1:8080/user/register',
			method:"POST",
			data: user
		}).then(function(response){
			alert("User Registered!!");
		},function(response){
			alert("Error creating user"+response);
		});
	}
};

		// login Controller
		var loginCtrl=function($scope,$http)
		{
			$scope.user={email:"",password:""};
			$scope.loginerror="";

			$scope.validateEmail=function(email)
			{	
				var emailVal=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

				if(email.length==0){
					return "Field Required";
				}
				if(emailVal.test(email)){
					return true;
				}
				return "Invalid Email";

			}
			$scope.passwordFieldCheck=function(password)
			{
				if(password.length==0)
				{
					return "Password field is required";
				}
				return true;
			}

			$scope.login=function()
			{
				var v;
				v=$scope.validateEmail($scope.user.email);
				if(v!=true)
				{
					$scope.loginerror=v;
					return ;
				}
				v=$scope.passwordFieldCheck($scope.user.password);
				if(v!=true){
					$scope.signuperror=v;
					return;
				}

				$http({
					url:'http://127.0.0.1:8001/api/login',
					method:"POST",
					data: user
				}).then(function(response){
					alert("User Logged in!!");
					//redirect
				},function(response){
					alert("Error logging in"+response);
				});
			}
			
		};
		app.controller('signupCtrl',signupCtrl);
		app.controller('loginCtrl',loginCtrl);