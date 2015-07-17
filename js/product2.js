(function() {
	var app = angular.module('store_product',[]);
	app.directive('productTitle', function(){
		return {
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'product_title.html',
			controller: function(){
				this.current = 0;

				this.setValue = function(newValue){
					this.current = newValue || 0;
				}
			},
			controllerAs: 'grallery',
		};
	});

	app.directive('productInfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'product_info.html',
			controller: function(){
				this.tab = 1;

				this.setTab = function(newValue) {
					this.tab = newValue;
				}

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel',
		};
	});

	app.directive('productAdd', function() {
		return {
			restrict: 'A',
			templateUrl: 'product_add.html',
			controller: function(){
				this.review = {};
				this.addReview = function(product) {
					product.reviews.push(this.review);
					this.review = {};
				}
				
			},
			controllerAs: 'reviewCtrl'
		};
	});

})();