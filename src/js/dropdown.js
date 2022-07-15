// import { copy } from "clipboard";


$( ".dropbtn" ).click(function() {
    $("#myDropdown").slideToggle(500)
});


$(".mobile-accrodion").click(function() {
    $(".nav-panel").slideToggle(500)
    $(".mobile-accrodion").toggleClass("active")
   
})

$('.col').hover( function() {
  
   $(this).children(".hover-container").slideToggle(300)
   $(this).children(".head-container").slideToggle(300)
});


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




