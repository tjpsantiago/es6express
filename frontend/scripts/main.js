require([
    'angular',
    'angular-sanitize',
    './module',
    'jquery',
    'bootstrap'],
    function(angular) {
        angular.element().ready(
            function() {
                angular.bootstrap(document, ['mainModule']);
            }
        );
    }
);
