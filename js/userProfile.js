//get height of header and assing form pop up height accordingly
var headerHeight = document.querySelector("header").offsetHeight;
document.querySelector(".popup-form-main-container").style.height = "calc(100vh - "+headerHeight+"px)";

function closeFormPopupContainer(){
    $(".user-profile-form-container").css("display","none");
    $(".popup-form-main-container").css("display","none");
    $("body").css("overflow","auto");
}

function openAddExperienceForm(){
    $("#addExperienceForm").css("display","block");
    $(".popup-form-main-container").css("display","flex");
    $("body").css("overflow","hidden");
}

function openAddEducationForm(){
    $("#addEducationForm").css("display","block");
    $(".popup-form-main-container").css("display","flex");
    $("body").css("overflow","hidden");
}

function openAddLicensesForm(){
    $("#addLicensesForm").css("display","block");
    $(".popup-form-main-container").css("display","flex");
    $("body").css("overflow","hidden");
}