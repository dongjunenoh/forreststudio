$(function(){
start();
var imgs = 2;
var now = 0;
function start(){
    $('.banner img').eq(0).siblings().fadeIn;
    setInterval(function(){slide();},2000);
};
function slide(){
    now=now==imgs?0:now+=1;
    $('.banner img').eq(now-1).fadeOut(2000);
    $('.banner img').eq(now).fadeIn(2000);
};
});