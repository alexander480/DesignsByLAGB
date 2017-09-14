
//
//  Designs By LAGB
//  Alexander Lester
//  September 12th
//
//  main.js
//

var homeDiv = $("#home");
var lastPage = "home";

init();

function init() {

    var logoImage = $("#logoImage");

    var profileBlock = $("#profileBlock");
    var portfolioBlock = $("#portfolioBlock");
    var contactBlock = $("#contactBlock");
    var aboutBlock = $("#aboutBlock");

    voiceCmd();

    logoImage.click(function() {

    });

    profileBlock.click(function() {
        profile();
    });
    portfolioBlock.click(function() {
        portfolio();
    });
    contactBlock.click(function() {
        contact();
    });
    aboutBlock.click(function() {
        about();
    });
}

function voiceCmd() {
  if (annyang) {

      var commands =
      {
        'home': function() { home(); },
        'profile': function() { profile(); },
        'portfolio': function() { portfolio(); },
        'contact': function() { contact(); },
        'about': function() { about(); },
        'back': function()
        {
          if (lastPage == "home") { home(); }
          else if (lastPage == "profile") { profile(); }
          else if (lastPage == "portfolio") { portfolio(); }
          else if (lastPage == "contact") { contact(); }
          else if (lastPage == "about") { about(); }
          else { home(); }
        }
      };

      annyang.addCommands(commands);
      annyang.start();
    }
}

function home() {
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



function profile() {

    var people = Array();

    firebase.database().ref("profile").once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var data = childSnapshot.val();

            var person = { name: data.name, picture: data.picture, position: data.position, bio: data.bio };
            people.push(person);
        });
    });

    for person in people
    {
        var name = person.name;
        var picture = person.picture;
        var position = person.position;
        var bio = person.bio;

        var html =
          '<img class="image-13" src="' + picture + '" width="161">' +
          '<h6 class="h6">' + name + '</h6>';

        var proBlock = document.createElement('DIV');
            proBlock.className = "divportblock";
            proBlock.innerHTML = html;

        homeDiv.append(proBlock);

        proBlock.addEventListener("click", function() {
            console.log( name + "Has Been Clicked");
        });
    }
}

function portfolio() {

    var projects = Array();

    firebase.database().ref("portfolio").once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var data = childSnapshot.val();
            var pics = Array();

            childSnapshot.child('pictures').forEach(function(link){
                var pic = link.val();
                pics.push(pic);
            })

            var project = { name: data.name, pictures: pics, link: data.link, info: data.info, type: data.type};
            projects.push(project);
        });
    });

    for project in projects {

        var name = project.name;
        var pictures = project.pictures;
        var link = project.link;
        var info = project.info;
        var type = project.type;

        if ( type == "app" ) { link = ""; }

        var html =
          '<img class="image-13" src="' + pictures[0] + '" width="161">' +
          '<h6 class="h6">' + name + '</h6>';

        var portBlock = document.createElement('DIV');
            portBlock.className = "divportblock";
            portBlock.innerHTML = html;

        homeDiv.append(portBlock);

        portBlock.addEventListener("click", function() {
            console.log( name + "Has Been Clicked");
        });
    }
}

function contact() {
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

function about() {
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









