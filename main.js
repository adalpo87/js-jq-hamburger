$(document).ready(function(){
    
    
    var link = $('header .header-right>a');
    var menu = $('.hamburger-menu');
    var link_close = $('.hamburger-menu a.close')

    link.click(function(){
        menu.show();
    });
    link_close.click(function(){
        menu.hide();
    })
})