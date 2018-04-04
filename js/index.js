angular.module('App', ['ngMaterial', 'ngAnimate'])
  .controller('Contentcontroller', ['$scope', '$mdDialog', '$mdSidenav', function ($scope, $mdDialog, $mdSidenav, $http) {
    var contentCtrl = this;

    contentCtrl.showAllGames = true;
    contentCtrl.showGameType = false;
    contentCtrl.gameTypeIndex = null;
    contentCtrl.gamesOfAType = [];
    contentCtrl.listOfGames = [];
    var drafting = [];
    var euro = [];
    var bluffing = [];
    var deduction = [];
    var party = [];
    var cooperative = [];

    $scope.viewGameType = function(idx) {

      contentCtrl.gameTypeIndex = idx;
      contentCtrl.showAllGames = true;
      contentCtrl.showGameType = false;
      contentCtrl.listOfGames.length = 0;

      var gamesOfType = contentCtrl.gameTypes[idx].games;

      for (var i = 0; i < gamesOfType.length; i++) {
        contentCtrl.listOfGames.push(games[gamesOfType[i]]);
      }

      console.log(JSON.stringify(contentCtrl.listOfGames));

      $mdSidenav('left').toggle();
    };

    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };

    $scope.filterResults = function() {
      console.log($scope.search)
    };

    $scope.showAllGames = function() {
      contentCtrl.showGameType = false;
      contentCtrl.gameTypeIndex = null;
      contentCtrl.showAllGames = true;
      contentCtrl.listOfGames.length = 0;
      contentCtrl.listOfGames = [].concat(games);
    };

    $scope.toggleGameCard = function(id) {
      id = '#' + id;
      if ($(id + ' img.game-item-img').is(":visible")) {
        $(id + ' .game-item-img').toggle('slow');
        $(id + ' .game-item-video').toggle('slow');
        $(id + '.game-item-card').height("300px");
        $(id + ' div div.game-item-header').width("250px");
        setTimeout(function() {
          $(id + ' div.game-item-card-transform').toggleClass('game-item-card-transform-active');
          $(id + ' div div.game-item-description-text').toggle('slow');
          $(id + ' div.game-item-content-transform').toggleClass('game-item-content-transform-active');
        }, 300);
      } else {
        $(id + ' div.game-item-card-transform').toggleClass('game-item-card-transform-active');
        $(id + ' div.game-item-content-transform').toggleClass('game-item-content-transform-active');
        setTimeout(function() {
          $(id + '.game-item-card').height("fit-content");
          $(id + ' div div.game-item-header').width("auto");
          $(id + ' img.game-item-img').toggle('slow');
          $(id + ' div div.game-item-description-text').toggle('slow');
          $(id + ' div div.game-item-video').toggle('slow');
        }, 300);
      }
    }

    contentCtrl.gameTypes = [{
        "name": "Drafting",
        "desc": "These types of games have players \"draft\" cards in consecutive rounds. At each round, players must evaluate where they stand and the other players to draft the proper cards.",
        "color": "#F6941F",
        "games": [7, 9, 12, 13]
      }, {
        "name": "Euro",
        "desc": "This is the style of game that Europeans tend to make. These games tend to have a lot of resource management and worker placement in them. This is one of the board game types that tend to have less variance (luck) and is more focused on skilled play. Mathmeticians tend to favor board game types like this because there are a lot of number calculations involved throughout the game.",
        "color": "#F6941F",
        "games": [10, 11, 16, 17]
      }, {
        "name": "Bluffing",
        "desc": "Bluffing games give players hidden identities, or roles. They must use these secret roles to help them on their various missions. Generally, the more information a player gives up about their role, the better action they get to take. This is fun because it causes players to valuate high risk, high reward situations.",
        "color": "#F6941F",
        "games": [0, 3, 4, 8]
      }, {
        "name": "Deduction",
        "desc": "When you play deduction games, you are given small amounts of known information. It is your job to use this information to deduce (narrow down) what you think the answer to the puzzle is.",
        "color": "#F6941F",
        "games": [0, 3, 8, 14]
      }, {
        "name": "Cooperative",
        "desc": "Players unite against the game and either “win as a team” or “lose as a team”. The game’s AI (Artificial Intelligence) generally has it’s own turn where new information is revealed to players and “bad things” happen. In Pandemic, the AI reveals diseases and outbreaks across the world that require players to work together to cure before the world is overwhelmed.",
        "color": "#F6941F",
        "games": [2, 5, 6, 14]
      }, {
        "name": "Party",
        "desc": "If you have a big group of people, then party games are typically what gets played. These games are designed to handle a lot of people and are easier for players to learn. A well designed party game can be learned in less than 5 minutes and give players the creative ability to produce funny scenarios.",
        "color": "#F6941F",
        "games": [1, 3, 8, 15]
      }];

    var games = [{
        "title": "Revolution",
        "desc": "Blackmail the printer. Threaten the innkeeper. Bribe the priest. Welcome to Revolution! Secretly bid against your opponents to gain victory points, control territories (worth victory points at the end of the game) and collect more Gold, Blackmail, and Force tokens for the next round of bidding! Will you try to control the tavern or the fortress? The harbor or the plantation? Knowing where to push for points – and where to back away and let your opponents fight – is the key to victory. Whoever has the most victory points at the end of the game wins. It's a game of bluff, counter-bluff, and surprise!",
        "ageMin": 13,
        "time": 60,
        "numPlayers": "3-4",
        "types": ['Bluffing', 'Deduction'],
        "color": "#0171b8",
        "link": "img/revolution.jpg",
        "watch": "http://www.youtube.com/embed/WEfDV_sub6E",
        "buy": "http://a.co/4RXd1BY"
      },{
        "title": "Walk the Plank",
        "desc": "In Walk the Plank!, players represent the worst pirates in a captain's crew. The captain has rounded you all up because you're all lazy and stupid and simply not worth the rum and loot you get paid. That said, the captain has decided he's willing to keep two of you in his crew. To prove you're worthy, you will fight amongst yourselves, trying to shove other players' pirates off the end of the plank while keeping yours alive!",
        "ageMin": 6,
        "time": 20,
        "numPlayers": "3-5",
        "types": ['Party'],
        "color": "#0171b8",
        "link": "img/walk_the_plank.jpg",
        "watch": "http://www.youtube.com/embed/a294DWVlto0",
        "buy": "http://a.co/8kFS2UA"
      },{
        "title": "Escape: The Curse of the Temple",
        "desc": "Escape: The Curse of the Temple is a cooperative game in which players must escape (yes...) from a temple (yes...) which is cursed (yes...) before the temple collapses and kills one or more explorers, thereby causing everyone to lose.",
        "ageMin": 8,
        "time": 10,
        "numPlayers": "1-5",
        "types": ['Cooperative'],
        "color": "#0171b8",
        "link": "img/escape.jpg",
        "watch": "http://www.youtube.com/embed/precx0zmetg",
        "buy": "http://a.co/iXuEMkk"
      },{
        "title": "One Night Ultimate Werewolf",
        "desc": "One Night Ultimate Werewolf is a fast game for 3-10 players in which everyone gets a role: One of the dastardly Werewolves, the tricky Troublemaker, the helpful Seer, or one of a dozen different characters, each with a special ability. In the course of a single morning, your village will decide who is a werewolf...because all it takes is lynching one werewolf to win!",
        "ageMin": 8,
        "time": 10,
        "numPlayers": "3-10",
        "types": ['Bluffing', 'Deduction', 'Party'],
        "color": "#0171b8",
        "link": "img/one_night_ult_werewolf.jpg",
        "watch": "http://www.youtube.com/embed/dQcG1mOa5fY",
        "buy": "http://a.co/e9Zw6he"
      },{
        "title": "Sheriff of Nottingham",
        "desc": "In Sheriff of Nottingham, players will not only be able to experience Nottingham as a merchant of the city, but each turn one player will step into the shoes of the Sheriff himself. Players declare goods they wish to bring into the city, goods that are secretly stored in their burlap sack. The Sheriff must then determine who gets into the city with their goods, who gets inspected, and who may have their goods confiscated!",
        "ageMin": 13,
        "time": 60,
        "numPlayers": "3-5",
        "types": ['Bluffing'],
        "color": "#0171b8",
        "link": "img/sheriff_of_nottingham.jpg",
        "watch": "http://www.youtube.com/embed/czYKbtCT9D0",
        "buy": "http://a.co/9Hvyrsf"
      },{
        "title": "Pandemic",
        "desc": "In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are Epidemic! cards that accelerate and intensify the diseases' activity. A second, separate deck of cards controls the \"normal\" spread of the infections.",
        "ageMin": 8,
        "time": 45,
        "numPlayers": "2-4",
        "types": ['Cooperative'],
        "color": "#0171b8",
        "link": "img/pandemic.jpg",
        "watch": "http://www.youtube.com/embed/UIpoDcPj8VU",
        "buy": "http://a.co/b9Hqano"
      },{
        "title": "Castle Panic",
        "desc": "Castle Panic is a cooperative, light strategy game for 1 to 6 players ages 10 and up. Players must work together to defend their castle, in the center of the board, from monsters that attack out of the forest at the edges of the board. Players trade cards, hit and slay monsters, and plan strategies together to keep their castle towers intact. The players either win or lose together, but only the player with the most victory points is declared the Master Slayer. Players must balance the survival of the group with their own desire to win.",
        "ageMin": 10,
        "time": 60,
        "numPlayers": "1-6",
        "types": ['Cooperative'],
        "color": "#0171b8",
        "link": "img/castle_panic.jpg",
        "watch": "http://www.youtube.com/embed/cSccFBceyKE",
        "buy": "http://a.co/gLs09PB"
      },{
        "title": "7 Wonders",
        "desc": "7 Wonders lasts three ages. In each age, players receive seven cards from a particular deck, choose one of those cards, then pass the remainder to an adjacent player. Players reveal their cards simultaneously, paying resources if needed or collecting resources or interacting with other players in various ways. (Players have individual boards with special powers on which to organize their cards, and the boards are double-sided). Each player then chooses another card from the deck they were passed, and the process repeats until players have six cards in play from that age. After three ages, the game ends.",
        "ageMin": 10,
        "time": 30,
        "numPlayers": "2-7",
        "types": ['Drafting'],
        "color": "#0171b8",
        "link": "img/wonders.jpg",
        "watch": "http://www.youtube.com/embed/2rACazNmWjg",
        "buy": "http://a.co/3INyWW2"
      },{
        "title": "Codenames",
        "desc": "In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.",
        "ageMin": 14,
        "time": 15,
        "numPlayers": "2-8",
        "types": ['Bluffing', 'Deduction', 'Party'],
        "color": "#0171b8",
        "link": "img/codenames.jpg",
        "watch": "http://www.youtube.com/embed/DpZvT76SP88",
        "buy": "http://a.co/dP6n5uj"
      },{
        "title": "Sushi Go!",
        "desc": "In the super-fast sushi card game Sushi Go!, you are eating at a sushi restaurant and trying to grab the best combination of sushi dishes as they whiz by. Score points for collecting the most sushi rolls or making a full set of sashimi. Dip your favorite nigiri in wasabi to triple its value! And once you've eaten it all, finish your meal with all the pudding you've got! But be careful which sushi you allow your friends to take; it might be just what they need to beat you!",
        "ageMin": 8,
        "time": 15,
        "numPlayers": "2-5",
        "types": ['Drafting'],
        "color": "#0171b8",
        "link": "img/sushi_go.jpg",
        "watch": "http://www.youtube.com/embed/MQXMfSedbVw",
        "buy": "http://a.co/hxPL6YR"
      },{
        "title": "Agricola",
        "desc": "In Agricola, you're a farmer in a wooden shack with your spouse and little else. On a turn, you get to take only two actions, one for you and one for the spouse, from all the possibilities you'll find on a farm: collecting clay, wood, or stone; building fences; and so on. You might think about having kids in order to get more work accomplished, but first you need to expand your house. And what are you going to feed all the little rugrats?",
        "ageMin": 13,
        "time": "30-150",
        "numPlayers": "1-5",
        "types": ['Euro'],
        "color": "#0171b8",
        "link": "img/agricola.jpg",
        "watch": "http://www.youtube.com/embed/c7R7B83w3xY",
        "buy": "http://a.co/3itt4Ae"
      },{
        "title": "Settlers of Catan",
        "desc": "In The Settlers of Catan, players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players collect these resources (cards)—wood, grain, brick, sheep, or stone—to build up their civilizations to get to 10 victory points and win the game.",
        "ageMin": 10,
        "time": 60,
        "numPlayers": "3-4",
        "types": ['Euro'],
        "color": "#0171b8",
        "link": "img/catan.jpg",
        "watch": "http://www.youtube.com/embed/lTV03kCoDIw",
        "buy": "http://a.co/7ATqJ1J"
      },{
        "title": "Ticket to Ride",
        "desc": "With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes, while providing players with intense strategic and tactical decisions every turn. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets – goal cards that connect distant cities; and to the player who builds the longest continuous route.",
        "ageMin": 8,
        "time": "30-60",
        "numPlayers": "2-5",
        "types": ['Drafting'],
        "color": "#0171b8",
        "link": "img/ticket_to_ride.jpg",
        "watch": "http://www.youtube.com/embed/r0od4NBvnBc",
        "buy": "http://a.co/jbNjZhx"
      },{
        "title": "Splendor",
        "desc": "Splendor is a game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops—all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.",
        "ageMin": 10,
        "time": 30,
        "numPlayers": "2-4",
        "types": ['Drafting'],
        "color": "#0171b8",
        "link": "img/splendor.jpg",
        "watch": "http://www.youtube.com/embed/JF-I44_EF7g",
        "buy": "http://a.co/guFNXgu"
      },{
        "title": "Betrayal at House on the Hill",
        "desc": "Betrayal at House on the Hill quickly builds suspense and excitement as players explore a haunted mansion of their own design, encountering spirits and frightening omens that foretell their fate. With an estimated one hour playing time, Betrayal at House on the Hill is ideal for parties, family gatherings or casual fun with friends. Secretly, one of the characters betrays the rest of the party, and the innocent members of the party must defeat the traitor in their midst before it’s too late! Betrayal at House on the Hill will appeal to any game player who enjoys a fun, suspenseful, and strategic game.",
        "ageMin": 12,
        "time": 60,
        "numPlayers": "3-6",
        "types": ['Deduction', 'Cooperative'],
        "color": "#0171b8",
        "link": "img/betrayal_at_house_on_the_hill.jpg",
        "watch": "http://www.youtube.com/embed/8GL-VvJjPT4",
        "buy": "http://a.co/g2YQslC"
      },{
        "title": "Exploding Kittens",
        "desc": "Exploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck. The game gets more and more intense with each card you draw because fewer cards left in the deck means a greater chance of drawing the kitten and exploding in a fiery ball of feline hyperbole.",
        "ageMin": 7,
        "time": 15,
        "numPlayers": "2-5",
        "types": ['Party'],
        "color": "#0171b8",
        "link": "img/exploding_kittens.png",
        "watch": "http://www.youtube.com/embed/kAkRKuv5Rts",
        "buy": "http://a.co/7TGPs3m"
      },{
        "title": "Citadels",
        "desc": "In Citadels, players take on new roles each round to represent characters they hire in order to help them acquire gold and erect buildings. The game ends at the close of a round in which a player erects their eighth building. Players then tally their points, and the player with the highest score wins.",
        "ageMin": 10,
        "time": "30-60",
        "numPlayers": "2-8",
        "types": ['Euro'],
        "color": "#0171b8",
        "link": "img/citadels.jpg",
        "watch": "http://www.youtube.com/embed/cYuMoIc0jUc",
        "buy": "http://a.co/5s9FUZZ"
      },{
        "title": "Power Grid",
        "desc": "The objective of Power Grid is to supply the most cities with power when someone's network gains a predetermined size. Players mark pre-existing routes between cities for connection, and then bid against each other to purchase the power plants that they use to power their cities. However, as plants are purchased, newer, more efficient plants become available, so by merely purchasing, you're potentially allowing others access to superior equipment. Additionally, players must acquire the raw materials needed to power said plants, making it a constant struggle to upgrade your plants for maximum efficiency while still retaining enough wealth to quickly expand your network to get the cheapest routes.",
        "ageMin": 12,
        "time": 120,
        "numPlayers": "2-6",
        "types": ['Euro'],
        "color": "#0171b8",
        "link": "img/power_grid.jpg",
        "watch": "http://www.youtube.com/embed/AgU0GVa-dtE",
        "buy": "http://a.co/iTtUoIw"
      }];

      contentCtrl.listOfGames = [].concat(games);
  }])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://www.youtube.com/embed/**'
    ]);
  });
