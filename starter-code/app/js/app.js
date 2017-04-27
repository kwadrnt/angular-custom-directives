angular
  .module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .controller('PlayersController', PlayersController)
  .directive('wdiCard', CardViewDirective)
  .directive('scoreCard', ScoreCardDirective);

function CardsController() {
  var vm = this;
  vm.questions = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];
}

function PlayersController(){
  var vm = this;
  vm.players = [
    {name: 'Gilligan', points: 2},
    {name: 'Mary Ann', points: 16},
    {name: 'Ginger', points: 12},
    {name: 'Thurson', points: 6},
    {name: 'Skipper', points: 9},
    {name: 'The Professor', points: 21}
  ];
}

function CardViewDirective(){
  var directiveDefObj = {
    restrict: 'EA',
    templateUrl: 'cardView.html',
    scope : {
        question: '@'
    }
  };
  return directiveDefObj;
}

function ScoreCardDirective(){
  var directiveDefObj = {
    restrict: 'EA',
    templateUrl: 'scoreCard.html',
    scope : {
        name: '@',
        points: '@'
    }
  };
  return directiveDefObj;
}
