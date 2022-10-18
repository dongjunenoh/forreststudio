$(function(){
    $('.nav2 li:nth-child(1)').click(function(){
        $('.popup, .blur').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup, .blur').fadeOut();//hide()
    });

    $('.nav3 li:nth-child(1) p').click(function(){
        $('.pop1').fadeIn();//show()
    });
    $('.nav3 li:nth-child(2) p').click(function(){
        $('.pop2').fadeIn();//show()
    });
    $('.nav3 li:nth-child(3) p').click(function(){
        $('.pop3').fadeIn();//show()
    });
});