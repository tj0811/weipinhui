/**
 * Created by Administrator on 2017/2/20.
 */
//导航颜色变化
$(function(){
    $(".header ul li").hover(function(){
        $(this).css({background:'#DB0C77'});
    },function(){
        $(this).css({background:'#F10381'});
    });
});
//鼠标浮动渐变
$(function(){
    $(".right01 img").hover(function(){
        $(this).fadeTo(500,0.4);
        $(this).fadeTo(500,1);
    },function(){
    });
});
//童装渐变
$(function(){
    $(".child_dress01").hover(function(){
        $(".child_dress01").css({opacity:'0.4'});
    },function(){
        $(".child_dress01").css({opacity:'1'});
    });
    $(".child_dress02").hover(function(){
        $(".child_dress02").css({opacity:'0.4'});
    },function(){
        $(".child_dress02").css({opacity:'1'});
    });
    $(".child_dress03").hover(function(){
        $(".child_dress03").css({opacity:'0.4'});
    },function(){
        $(".child_dress03").css({opacity:'1'});
    });
    $(".child_dress04").hover(function(){
        $(".child_dress04").css({opacity:'0.4'});
    },function(){
        $(".child_dress04").css({opacity:'1'});
    });
})