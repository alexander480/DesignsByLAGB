
//
//  Designs By LAGB
//  Alexander Lester
//  September 12th
//
//  main.js
//

var homeDiv = $("#home");
var lastPage = "home";

var profile = Array();
var portfolio = Array();

init();
voiceCmd();

function init() {
    firebase.database().ref("profile").once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            profile.push(firebase.database().ref("profile/" + childSnapshot.key));
        });
    });

    firebase.database().ref("portfolio").once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            portfolio.push(firebase.database().ref("portfolio/" + childSnapshot.key));
        });
    });


    var logoImage = $("#logoImage");

    var profileBlock = $("#profileBlock");
    var portfolioBlock = $("#portfolioBlock");
    var contactBlock = $("#contactBlock");
    var aboutBlock = $("#aboutBlock");


    logoImage.click(function() {

    });

    profileBlock.click(function() {
        profile1();
    });
    portfolioBlock.click(function() {
        portfolio1();
    });
    contactBlock.click(function() {
        contact1();
    });
    aboutBlock.click(function() {
        about1();
    });
}

function voiceCmd() {
  if (annyang)
  {
      var commands =
      {
        'home': function() { home1(); },
        'profile': function() { profile1(); },
        'portfolio': function() { portfolio1(); },
        'contact': function() { contact1(); },
        'about': function() { about1(); },
        'back': function()
        {
          if (lastPage == "home") { home1(); }
          else if (lastPage == "profile") { profile1(); }
          else if (lastPage == "portfolio") { portfolio1(); }
          else if (lastPage == "contact") { contact1(); }
          else if (lastPage == "about") { about1(); }
          else { home1(); }
        }
      };

      annyang.addCommands(commands);
      annyang.start();
    }
}

function home1() {
  var html =
    '<div class="div-block-8">'+
    '<img class="image" id="logoImage" src="images/logo.png" width="290"></div>'+
    '<div class="container w-container">'+
      '<div class="homediv left light" id="profileBlock">'+
        '<h1 class="heading">Profile</h1>'+
      '</div>'+
      '<div class="homediv medium right" id="portfolioBlock">'+
        '<h1 class="heading">Portfolio</h1>'+
      '</div>'+
    '</div>'+
    '<div class="w-container">'+
      '<div class="dark homediv right" id="aboutBlock">'+
        '<h1 class="heading">About</h1>'+
      '</div>'+
      '<div class="homediv left medium" id="contactBlock">'+
        '<h1 class="heading">Contact</h1>'+
      '</div>'+
    '</div>'+
  '</div>';

  homeDiv.hide();
  homeDiv.html(html);
  homeDiv.fadeIn("slow");
}

function profile1() {
    var html =
        '<img class="image-4" id="profileLogo" src="images/ProHeading.png" width="225">'+

        '<div class="div-block-7" id="teamBlock">'+
            '<h1 class="heading-4">Our Team</h1>'+
        '</div>'+

        '<div class="divteam" id="styleBlock">'+
            '<h1 class="heading-2">Our Style</h1>'+
        '</div>';

    homeDiv.hide();
    homeDiv.html(html);
    homeDiv.fadeIn("slow");
}

function portfolio1() {
    var html =
        '<img class="image-5" id="portfolioLogo" src="images/Portfolio-Heading.png" width="267">'+
        '<div class="div-block-7" id="websitesBlock">'+
            '<h1 class="heading-4">Websites</h1>'+
        '</div>'+
        '<div class="divteam" id="applicationsBlock">'+
            '<h1 class="heading-2">Applications</h1>'+
        '</div>';

    homeDiv.hide();
    homeDiv.html(html);
    homeDiv.fadeIn("slow");
}

function contact1() {
    var html =
        '<img class="image-6" id="contactLogo" src="images/Contact-HEading.png" width="236">'+
        '<div class="div-block-7" id="callBlock">'+
          '<h1 class="heading-4">Call Us</h1>'+
        '</div>'+
        '<div class="divteam" id="emailBlock">'+
          '<h1 class="heading-2">Email Us</h1>'+
        '</div>';

    homeDiv.hide();
    homeDiv.html(html);
    homeDiv.fadeIn("slow");
}

function about1() {
    var html =
            '<img class="image-6" id="contactLogo" src="images/Contact-HEading.png" width="236">'+
            '<div class="div-block-7" id="callBlock">'+
                '<h1 class="heading-4">Call Us</h1>'+
            '</div>'+
            '<div class="divteam" id="emailBlock">'+
                '<h1 class="heading-2">Email Us</h1>'+
            '</div>';

      homeDiv.hide();
      homeDiv.html(html);
      homeDiv.fadeIn("slow");
}









