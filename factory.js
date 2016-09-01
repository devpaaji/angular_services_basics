//The difference between a factory and a service is that a factory injects a plain function 
//so AngularJS will call the function and a service injects a constructor. A constructor creates a new object 
//so new is called on a service and with a factory you can let the function return anything you want
app.factory("tododata", ["$http", function ($http) {
    return $http.get('https://jsonplaceholder.typicode.com/todos')
        .success(function (data) {
         return data;
    })
       .error(function (err) {
         return err;
    });
}]);