var bravefrontier = document.getElementById("BraveFrontier");
var bravepic = document.getElementById("bravefrontierpic");
var counterstrike = document.getElementById("CountnerStrike");
var counterpic = document.getElementById("counterpic");
var leagueoflegends = document.getElementById("LeagueofLegends");
var leaguepic = document.getElementById("leaguepic");
var overwatch = document.getElementById("Overwatch");
var overwatchpic = document.getElementById("overwatchpic");

var braveinfo = document.getElementById("braveinfo");
var counterinfo = document.getElementById("counterinfo");
var leagueinfo = document.getElementById("leagueinfo");
var overwatchinfo = document.getElementById("overwatchinfo");

bravepic.addEventListener("click", function(){
    
    braveinfo.innerHTML = '<h2 id="braveinfo"> Brave Frontier is an IOS/Android mobile game that is about having different units/characters. \
    You use those units with different abilities and strengths to make a team of 6 to create a powerful team that will get you through tough story line fights and boss battles. \
    You can also use them to help other friends on your friends list. There are many different things that you can do in the game such as follwing the storyline as the character of summoner. \
    You can get new units by \"Summoning\" using gems/diamonds that you get from completing quests and boss battles. \
    This is a very fun game for me because i can play with friends and we each help each other with hard battles. </h2>';
});
                       
counterpic.addEventListener("click", function(){
    
    counterinfo.innerHTML = ' <h2 id="counterinfo"> Counter-Strike is one of the most played games in the world. It is a 5v5 FPS game with real time strategies. \
You try to eliminate the enemy team before the time runes out and plant the bomb as a terrorist. \
Or you can defend the bombsite ans eliminate the enemy team before they can plant the bomb. \
This is a game that my friends and i play a lot because it just a lot of fun to cooperate with friends and do fun things in the game.\
Counter-Strike has been out for a very long time and there has been many different games that were of the same title. \
The most recent one, Global Offensive, is the most poplar with professional esports players. </h2>';
});

leaguepic.addEventListener("click", function(){
    
   leagueinfo.innerHTML = ' <h2 id="leagueinfo"> League of legends is a 5v5 game with different characters named "champions." The goal of the game is to destroy the enemy nexus. \
There are different objective you have to take before you can kill the nexus, such as destroying the turrets that guard the 3 lanes in the map. \
Some objectives are getting dragon, which gives buffs to help you team, and a boss, which is named Baron Nashor. \
Baron Nashor gives super strong buffs that empowers you team as well as the minions that help you. This game is fun because we can play and have fun with friends. </h2>';

});
overwatchpic.addEventListener("click", function(){

    overwatchinfo.innerHTML = ' <h2 id="overwatchinfo"> Overwatch is an FPS game made by Blizzard. It is a 6 vs. 6 player game with different gamemodes. \
    You either play attack and defend, control point, or etc. You can play the game by picking 1 of the 21 different operatives from the overwatch team. \
    You need to learn how to play the game and create a team compisition that will be able to win against the enemy team, you switch in and out of different heroes to find the best team.\
    </h2>';

});