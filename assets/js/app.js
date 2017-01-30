$(document).ready(function(){


  $('.about').click(function(){
    $('.aboutPage').toggle();
    });

  $('.projects').click(function(){
    $('.projectsPage').toggle();
    });

  $('.contacts').click(function(){
    $('.contactsPage').toggle();
    });

});


//////////  ADDING PROJECTS TO projectsPage   ////////////


                  ///////MY 3 PROJECTS////////
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



  ///////////  FOR LOOP WILL ADD JOBS TO PAGE    ///////


  function addJobs(){

  var thePage = document.getElementsByClassName('projectsPage');

  for(var i = 1; i < myWork.length; i++){   // I used 1 here as its easier to read (4 cards)

    //Create newCard as a Div

    var newJob = document.createElement('a');

    //Add Class of .card to the NewCard
    newJob.className = 'job';

    // Append card to the board
    projectsPage.appendChild(newJob);
    }
  }

addJobs();

  function createJob() {

  	var job = myWork[i].link;
      var cardArr = document.getElementsByClassName("card");
      for(var j = 0; j < myWork.length; j++){

  	  console.log(job);
      }
  	}

createJob();
