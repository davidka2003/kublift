// import { copy } from "clipboard";




$( ".dropbtn" ).click(function() {
    $("#myDropdown").slideToggle(500)
});


$(".mobile-accrodion").click(function() {
    $(".nav-panel").slideToggle(500)
    $(".mobile-accrodion").toggleClass("active")
   
})




$('.partners__row--col').hover( function() {
  
   $(this).children(".hover-container").slideToggle(450)
   $(this).children(".head-container").slideToggle(450)
});

$(".maintenance-list").click(function() {
    $(this).children(".maintenance-list__hidden-content").slideToggle(300)
    $(this).find(".maintenance-list__header").toggleClass("active")
})
$(".vacancies__list").click(function() {
    $(this).children(".vacancies__list--hidden-content").slideToggle(300)
    $(this).find(".vacancies__list--header").toggleClass("active")
})


tippy('.btn-email', {
    content: 'Скопировать',
    theme: 'light',
});

tippy('.btn-phone', {
    content: "Скопировать",
    theme: "light"
});

tippy('.btn-email', {
    content: "Скопировано",
    trigger: 'click',
    theme: "light"
});

tippy('.btn-phone', {
    content: "Скопировано",
    trigger: 'click',
    theme: "light"
});

// $( ".btn-phone" ).click(function() {
//     copy('123')
// });

new ClipboardJS('.btn-phone');
new ClipboardJS('.btn-email');




