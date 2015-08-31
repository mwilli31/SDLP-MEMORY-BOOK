angular.module('app', ['ui.router'])
.controller('MainController',
  function($scope) {
    //Name, GE Business, Education, Location
    $scope.name = "Michael Williams";
    $scope.geBusiness1 = "GE Intelligent";  //only split on two lines if more than two words
    $scope.geBusiness2 = "Platforms"        //leave this blank if "GE Software"
    $scope.education1 = "University of";     //Same rules apply as above
    $scope.education2 = "Notre Dame";
    $scope.locationCityState = "Foxboro, MA"
    $scope.locationCountry = "USA"
    $scope.homeCityState = "St. Paul, MN"
    $scope.homeCountry = "USA"

    //About Me
    $scope.facts = [];
    var fact1 = {
      title: "World Traveler",
      imageName: "images/factOne.jpg",
      description: "I studied abroad at Oxford for an entire year.  While there I loved taking trips all around Europe.  I hope I continue to find times to travel the world!"
    };
    var fact2 = {
      title: "Hockey Player",
      imageName: "images/factTwo.jpeg",
      description: "Playing hockey was a given growing up in Minnesota. One of my fondest memories playing was winning the UK Championship representing Oxford University."
    };
    var fact3 = {
      title: "The Ventured Life",
      imageName: "images/factThree.png",
      description: "About two years ago, myself and some friends started an online magazine called The Ventured Life. Working on side projects has become a natural extension of my daily life."
    };
    $scope.facts.push(fact1,fact2,fact3);

    //Favorite Quote or Inspirational Idea
    $scope.quote = "\"When I was 17, I read a quote that went something like: 'If you live each day as if it was your last, someday you'll most certainly be right.' It made an impression on me, and since then, for the past 33 years, I have looked in the mirror every morning and asked myself: 'If today were the last day of my life, would I want to do what I am about to do today?' And whenever the answer has been 'no' for too many days in a row, I know I need to change something.\""
    $scope.reference = "-Steve Jobs"

    //Q&A - Pick 3-4 questions and answer them, can be the examples given or any you come up with
    $scope.qas = [];
    var qa1 = {
      question: "Favorite Place?",
      answer:"Cinque Terre, Italy"
    };
    var qa2 = {
      question: "Spirit Animal?",
      answer:"Minion"
    };
    var qa3 = {
      question: "If you were an ice cream flavor, what would you be?",
      answer:"Coffee with Chocolate Chunks"
    };
    $scope.qas.push(qa1,qa2,qa3);

})
