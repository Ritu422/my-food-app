var foodieApp = angular.module('foodieApp', ['ngRoute']);
console.log(foodieApp);
var list;
foodieApp.controller('loginController', function($scope, $location) {
	$scope.goToHome = function() {
		$location.url('home')
	}
})
foodieApp.controller('restaurantController', function($scope, $routeParams, $http) {
	$scope.restaurantId = $routeParams.id;



	var restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'http://static01.nyt.com/images/2015/08/27/multimedia/clark-tomato-sandwich/clark-tomato-sandwich-videoSmall.jpg',
		bestDish: {
			name: 'Corn Pizza',
			image: 'http://static01.nyt.com/images/2015/08/27/multimedia/clark-tomato-sandwich/clark-tomato-sandwich-videoSmall.jpg'
		}
	},
                       
         {
	name: 'Misso Hungry',
	address: 'Booth 41, Sector 34, Chandigarh',
	location: 'Chandigrah',
	category: '',
	vote: '4.6',
	cuisines: 'Rolls, Fast Food',
	cost: '1700',
	hours: '1 PM to 10:30 PM(Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k'
},
{
	name: 'dominoze',
	address: 'T 1-107, 1st Floor, One Horizon Centre, Golf Course Road, Gurgaon',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, Thai',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TN-R0OiyveXxPe2PQkcXsYOXdOm_1IwoLmt_B-FsaIylQ0is'
},
{
	name: 'Caffe Tonino',
	address: '1st Floor, One Horizon Center, Golf Course Road, Gurgaon',
	location: 'One Horizon Center, Golf Course',
	category: 'Casual Dining,Caffe',
	vote: '3.9',
	cuisines: 'Italian, Pizza, Cafe',
	cost: '1000',
	hours: '8:30Am to 9PM (Mon-Sun)',
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLzjuPjm8BslLlghSNxRKoCcgW9X_c_oAPr2cBUrUb4fo9yIPMQ'
},
                       
     {
		name: 'Pirates',
		address: '38/39, Level 10, Block F , Inner Circle, Corol bagh',
		location: 'Connaught Place',
		category: 'Bakery',
		vote: '4.4',
		cuisines: 'Desert',
		cost: '200',
		hours: '12 Noon to 10 PM (Mon-Sun)',
		image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg'
	}]
				$scope.x = 0;
				$scope.toggle=function(){
   			$scope.x = 1-$scope.x;
				console.log($scope.x);
				}
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key d4aa0fd8f7c94d9a85f0eaddf27c4deb',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function(response) {
			var ingredients = response.data.outputs[0].data.concepts;

			$scope.ingredients = [];
			for (var i = 0; i < ingredients.length; i++) {
				$scope.ingredients.push(ingredients[i]);
			}

$scope.save = function(){
  $scope.useringredient = [];
  angular.forEach($scope.ingredients, function(ingredient){
    if (!!ingredient.selected&&ingredient.value>=0.75) {
		$scope.useringredient.push(ingredient.name);
  }
	else {
		$scope.message="Sorry ! Not found in our list";
	}
 })
 
}
        }
        )
	$scope.user=[];
	$("input:checkbox[name=user]:checked").each(function(){
	    $scope.user.push($(this).val());
			console.log($scope.user);
	});




			list = $scope.ingredients;



			// $('.ingredients').html(list);
		}, function(xhr) {
			console.log(xhr);
		}


	})


foodieApp.controller('mainController', function($scope) {
	$scope.restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		id: 1
	},
       {
	name: 'Misso Hungry',
	address: 'Booth 41, Sector 34, Chandigarh',
	location: 'Chandigrah',
	category: '',
	vote: '4.6',
	cuisines: 'Rolls, Fast Food',
	cost: '1700',
	hours: '1 PM to 10:30 PM(Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k',
     id: 2      
},
{
	name: 'dominoze',
	address: 'T 1-107, 1st Floor, One Horizon Centre, Golf Course Road, Gurgaon',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, Thai',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TN-R0OiyveXxPe2PQkcXsYOXdOm_1IwoLmt_B-FsaIylQ0is',
    id: 3
},
{
	name: 'Caffe Tonino',
	address: '1st Floor, One Horizon Center, Golf Course Road, Gurgaon',
	location: 'One Horizon Center, Golf Course',
	category: 'Casual Dining,Caffe',
	vote: '3.9',
	cuisines: 'Italian, Pizza, Cafe',
	cost: '1000',
	hours: '8:30Am to 9PM (Mon-Sun)',
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLzjuPjm8BslLlghSNxRKoCcgW9X_c_oAPr2cBUrUb4fo9yIPMQ',
    id: 4
                          
    },                       {
		name: 'Pirates',
		address: '38/39, Level 10, Block F , Inner Circle, Corol bagh',
		location: 'Connaught Place',
		category: 'Bakery',
		vote: '4.4',
		cuisines: 'Desert',
		cost: '200',
		hours: '12 Noon to 10 PM (Mon-Sun)',
		image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg',
		id: 5
	}];
console.log($scope.restaurants[0].name);
$scope.change = function(){

console.log($scope);
console.log($scope.$parent.restaurants);

}

})
foodieApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	}).when('/home', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	}).when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	}).when('/todolist', {
		templateUrl: 'pages/todo.html',
		controller: 'todo'
	})
})
