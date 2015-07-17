(function(){
	var app = angular.module('myStore', ['store_product']);

	/*
	app.controller('storeController', function(){
		this.products = gems;
	}); */

	app.controller('storeController',['$http', function($http){
		var store= this;

		store.products = [];

		$http.get('/product.json').success(function(data){
			console.log("get data success");
			store.products=data;
		});

/*
		$http({method: 'GET', url: '/product.json'}).
	        success(function(data, status) {
	          store.products=data;
	        }).
	        error(function(data, status) {
	        	alert("get data error");
	      });
*/
	}]);
/*
	app.controller('gralleryController', function(){
		this.current = 0;

		this.setValue = function(newValue){
			this.current = newValue || 0;
		}
	});

	app.controller('panelController', function(){
		this.tab = 1;

		this.setTab = function(newValue) {
			this.tab = newValue;
		}

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});
*/
/*
	app.controller('reviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
		
	});
*/

/*
	app.directive('productAdd', function() {
		return {
			restrict: 'A',
			templateUrl: 'product_add.html',
		};
	});
*/
/*
	var gems = [{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "img/gem-02.jpg",
        "img/gem-05.jpg",
        "img/gem-09.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
      	stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: true,
      soldOut: false,
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "img/gem-06.jpg",
        "img/gem-07.jpg",
        "img/gem-10.jpg"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: true,
      soldOut: false,
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "img/gem-06.jpg",
        "img/gem-07.jpg",
        "img/gem-10.jpg"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: false,
      soldOut: false,
    }];
   */
})();