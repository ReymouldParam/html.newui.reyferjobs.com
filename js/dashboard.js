//global values
const themeColorOrange= "#DC7D09";
const themeColorBlue = "#1751D0";
const themeColorGray= "#D9D9D9";

// dashboard left panel skills show more or less functions
var userSkillsItems = document.querySelectorAll('.user-skills-main-container .skills-container .skills-item');
var showMoreSkillsBtn = document.querySelector('#show-more-skills-button');
var numberOfSkillsToShow = 5;
if(userSkillsItems.length<=numberOfSkillsToShow){
    showMoreSkillsBtn.style.display="none";
}else{
    for(var i=numberOfSkillsToShow; i<userSkillsItems.length;i++){
        userSkillsItems[i].style.display = "none";
    }

    var allSkillsVisible = false;
    showMoreSkillsBtn.addEventListener("click", function () {
        if (!allSkillsVisible) {
            for (var i = numberOfSkillsToShow; i < userSkillsItems.length; i++) {
                userSkillsItems[i].style.display = "flex";
            }
            showMoreSkillsBtn.innerHTML = "Show Less";
            allSkillsVisible = true;
        } else {
            for (var i = numberOfSkillsToShow; i < userSkillsItems.length; i++) {
                userSkillsItems[i].style.display = "none";
            }
            showMoreSkillsBtn.innerHTML = "... More";
            allSkillsVisible = false;
        }
    });
}
// ///////////////////////////////////////////
// // dashboard left panel progess bar setting
// //////////////////////////////////////////
// var progressBarValue = document.querySelector(".user-profile-progessbar-container .title span").innerHTML;
// var progressBar = document.querySelector(".user-profile-progessbar-container .progressbar-container .progressbar");

// progressBar.style.width = progressBarValue+"%";
// if(progressBarValue<100){
//     document.querySelector(".user-profile-progessbar-container .progressbar-status").innerHTML="Profile Incomplete";
//     document.querySelector(".user-profile-progessbar-container .progressbar-status").style.color = "red";
// }else{
//     document.querySelector(".user-profile-progessbar-container .progressbar-status").innerHTML="Profile Complete";
//     document.querySelector(".user-profile-progessbar-container .progressbar-status").style.color = "green";
// }

////////////////////////////////////////
// Job Post hidden Details on cliking radio button
///////////////////////////////////////

function showJobPostDetails(hiddenStats,n){
    $(".job-post-hidden-details").css("display","none");
    $("#"+hiddenStats).css("display","contents");

    // $(".job-post-history-container .job-post-table > tbody >tr").css("border-bottom","1px solid rgb(177, 177, 177)");
    // $(".job-post-table-row-"+n).css("border","0");
}

////////////////////////////////////////
//Doughnut chart job posting
///////////////////////////////////////

// const noOfLatestJobPosts=3

// var jobPostDoughnut = [];
// for(var i=0;i<noOfLatestJobPosts;i++){
//     jobPostDoughnut[i]= document.getElementById("jobPostDoughnutChart"+(i+1));
// }

// var jobPostLabels = ["Applications","Shortlisted"];
// var jobPostLabelValues = [[100,20],[50,40],[80,10]];

// document.addEventListener('DOMContentLoaded', function(){
//     for(var i=0;i<noOfLatestJobPosts;i++){
//         var myDoughnutChart = new Chart(jobPostDoughnut[i], {
//             type: 'doughnut',
//             data: {
//                 labels: jobPostLabels,
//                 datasets: [{
//                     data: jobPostLabelValues[i], 
//                     backgroundColor: [themeColorBlue, themeColorOrange] // Customize colors
//                 }]
//             },
//             options: {
//                 plugins:{
//                     legend:{
//                         display:false,
//                     },
//                 },
//                 animation: {
//                     animateRotate: false, // Disable rotation animation
//                     animateScale: false,  // Disable scale animation
//                 },
                
//             },
//         });
//     }
// });


////////////////////////////////////////
// Job Saved hidden Details on cliking radio button
///////////////////////////////////////

function showJobSavedDetails(hiddenStats,n){
    $(".job-saved-hidden-details").css("display","none");
    $("#"+hiddenStats).css("display","contents");

    
}

////////////////////////////////////////
//Doughnut chart job Saved
///////////////////////////////////////

const noOfLatestJobSaved=3;

var jobSavedDoughnut = [];
for(var i=0;i<noOfLatestJobSaved;i++){
    jobSavedDoughnut[i]= document.getElementById("jobSavedDoughnutChart"+(i+1));
}

var jobSavedLabels = ["Match","Not Match"];
var jobSavedLabelValues = [[5,5],[4,1],[3,5]];


for(var i=0;i<noOfLatestJobSaved;i++){
  var myDoughnutChart = new Chart(jobSavedDoughnut[i], {
    type: 'doughnut',
    data: {
        labels: jobSavedLabels,
        datasets: [{
            data: jobSavedLabelValues[i], 
            backgroundColor: [themeColorBlue, themeColorGray] // Customize colors
        }]
    },
    options: {
        cutoutPercentage: 0, // Ensure that cutoutPercentage is set to 0
        plugins: {
            legend: {
                display: false,
            },
        },
        animation: {
            animateRotate: false, // Disable rotation animation
            animateScale: false,  // Disable scale animation
        },
        elements: {
            arc: {
                borderWidth: 2, // Ensure that there is no border
            },
        },
        radius: '100%', // Adjust this value to control the width of the doughnut chart
        backgroundColor: 'lightgray',
    },
});


    var jobMatchScoreElement = document.getElementById("jobMatchScore"+(i+1));
    var jobMatchScore = jobSavedLabelValues[i][0]/(jobSavedLabelValues[i][0]+jobSavedLabelValues[i][1]);
    jobMatchScoreElement.innerHTML=(parseInt(jobMatchScore*100))+"%";
}









