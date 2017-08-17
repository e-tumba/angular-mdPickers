/* global moment, angular */

var module = angular.module("mdPickers", [
	"ngMaterial",
	"ngAnimate",
	"ngAria",
	"pascalprecht.translate"
]);

module.config(["$mdIconProvider", "mdpIconsRegistry", "$translateProvider", function($mdIconProvider, mdpIconsRegistry, $translateProvider) {
	angular.forEach(mdpIconsRegistry, function(icon, index) {
		$mdIconProvider.icon(icon.id, icon.url);
	});

	$translateProvider.translations('fr', {
        "LABEL_OK": "OK",
        "LABEL_CANCEL": "Annuler"
    });

    $translateProvider.translations('en', {
        "LABEL_OK": "OK",
        "LABEL_CANCEL": "Cancel"
    });
}]);

module.run(["$templateCache", "mdpIconsRegistry", function($templateCache, mdpIconsRegistry) {
	angular.forEach(mdpIconsRegistry, function(icon, index) {
		$templateCache.put(icon.url, icon.svg);
	});
}]);