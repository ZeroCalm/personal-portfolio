$(document).ready(function(){


  $('.projects').click(function(){
    $('.projectPage').toggle();
    });

  $('.about').click(function(){
    $('.aboutPage').toggle();
    });


  $('.contacts').click(function(){
    $('.contactsPage').toggle();
    });




});






////////   PROJECTS to go on projectsPage   ////////////

//
//                   /////MY 3 PROJECTS////////


var myWork = [

{
  name: "Random Colors",
  description: "Hover/click on buttons and get a lightshow!!! HTML, CSS and JAVASCRIPT",
  link:  "https://github.com/ZeroCalm/Web-Page-Fun-Personal-Projects"
},

{
  name: "Matching Cards Game",
  description: "Basic card matching game using HTML, CSS and JAVASCRIPT",
  link: "https://github.com/ga-students/wdi-fundamentals-memorygame"

},

{
  name: "Basic Algorithm practice",
  description: "Basic card matching game using HTML, CSS and JAVASCRIPT",
  link: "https://github.com/ZeroCalm/problem-set-js-basics"
}]


///  ADD THEM TO PAGE  ///

for (var i=0; i<myWork.length; i++){
  var name = myWork[i].name;
  var description = myWork[i].description;
  var link = myWork[i].link;



//console.log(name + "      " +  description + "     "  + link);
}
