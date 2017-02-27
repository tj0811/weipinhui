/**
 * Created by asus1 on 2017/2/13.
 */
//鼠标浮动
$(function(){
    $(".header ul li").hover(function(){
        $(this).css({background:'#DB0C77'});
    },function(){
        $(this).css({background:'#F10381'});
    });
})

//精品图片展示
$(function(){
    $(".choice01").hover(function(){
        $(".choice01").css({opacity:'0.6'});
        $(".choice_main").css({display:'block'});
        $(".name01").css({display:'none'});
    },function(){
        $(".choice_main").css({display:'none'});
        $(".choice01").css({opacity:'1'});
        $(".name01").css({display:'block'});
    });

    $(".choice02").hover(function(){
        $(".choice02").css({opacity:'0.6'});
        $(".choice_main1").css({display:'block'});
        $(".name02").css({display:'none'});
    },function(){
        $(".choice_main1").css({display:'none'});
        $(".choice02").css({opacity:'1'});
        $(".name02").css({display:'block'});
    });
    $(".choice03").hover(function(){
        $(".name03").css({display:'none'});
        $(".choice03").css({opacity:'0.6'});
        $(".choice_main2").css({display:'block'});
    },function(){
        $(".choice_main2").css({display:'none'});
        $(".choice03").css({opacity:'1'});
        $(".name03").css({display:'block'});
    })

    $(".choice04").hover(function(){
        $(".name04").css({display:'none'});
        $(".choice04").css({opacity:'0.6'});
        $(".choice_main3").css({display:'block'});
    },function(){
        $(".choice_main3").css({display:'none'});
        $(".choice04").css({opacity:'1'});
        $(".name04").css({display:'block'});
    })
    $(".choice05").hover(function(){
        $(".name05").css({display:'none'});
        $(".choice05").css({opacity:'0.6'});
        $(".choice_main4").css({display:'block'});
    },function(){
        $(".choice_main4").css({display:'none'});
        $(".choice05").css({opacity:'1'});
        $(".name05").css({display:'block'});
    })
    $(".choice06").hover(function(){
        $(".name06").css({display:'none'});
        $(".choice06").css({opacity:'0.6'});
        $(".choice_main5").css({display:'block'});
    },function(){
        $(".choice_main5").css({display:'none'});
        $(".choice06").css({opacity:'1'});
        $(".name06").css({display:'block'});
    })
});

//精品小图片鼠标悬浮
$(function(){
    $(".coat01").hover(function(){
        $(".coat01").css({opacity:'0.3'});
    },function(){
        $(".coat01").css({opacity:'1'});
    });

    $(".coat02").hover(function(){
        $(".coat02").css({opacity:'0.3'});
    },function(){
        $(".coat02").css({opacity:'1'});
    });
    $(".coat03").hover(function(){
        $(".coat03").css({opacity:'0.3'});
    },function(){
        $(".coat03").css({opacity:'1'});
    });
})

$(function(){
    $(".coat04").hover(function(){
        $(".coat04").css({opacity:'0.3'});
    },function(){
        $(".coat04").css({opacity:'1'});
    });

    $(".coat05").hover(function(){
        $(".coat05").css({opacity:'0.3'});
    },function(){
        $(".coat05").css({opacity:'1'});
    });
    $(".coat06").hover(function(){
        $(".coat06").css({opacity:'0.3'});
    },function(){
        $(".coat06").css({opacity:'1'});
    });
})

$(function(){
    $(".coat07").hover(function(){
        $(".coat07").css({opacity:'0.3'});
    },function(){
        $(".coat07").css({opacity:'1'});
    });

    $(".coat08").hover(function(){
        $(".coat08").css({opacity:'0.3'});
    },function(){
        $(".coat08").css({opacity:'1'});
    });
    $(".coat09").hover(function(){
        $(".coat09").css({opacity:'0.3'});
    },function(){
        $(".coat09").css({opacity:'1'});
    });
})

$(function(){
    $(".coat10").hover(function(){
        $(".coat10").css({opacity:'0.3'});
    },function(){
        $(".coat10").css({opacity:'1'});
    });

    $(".coat11").hover(function(){
        $(".coat11").css({opacity:'0.3'});
    },function(){
        $(".coat11").css({opacity:'1'});
    });
    $(".coat12").hover(function(){
        $(".coat12").css({opacity:'0.3'});
    },function(){
        $(".coat12").css({opacity:'1'});
    });
})

$(function(){
    $(".coat13").hover(function(){
        $(".coat13").css({opacity:'0.3'});
    },function(){
        $(".coat13").css({opacity:'1'});
    });

    $(".coat14").hover(function(){
        $(".coat14").css({opacity:'0.3'});
    },function(){
        $(".coat14").css({opacity:'1'});
    });
    $(".coat15").hover(function(){
        $(".coat15").css({opacity:'0.3'});
    },function(){
        $(".coat15").css({opacity:'1'});
    });
})

$(function(){
    $(".coat16").hover(function(){
        $(".coat16").css({opacity:'0.3'});
    },function(){
        $(".coat16").css({opacity:'1'});
    });

    $(".coat17").hover(function(){
        $(".coat17").css({opacity:'0.3'});
    },function(){
        $(".coat17").css({opacity:'1'});
    });
    $(".coat18").hover(function(){
        $(".coat18").css({opacity:'0.3'});
    },function(){
        $(".coat18").css({opacity:'1'});
    });
})
//女装渐变
$(function(){
    $(".women_dress01").hover(function(){
        $(".women_dress01").css({opacity:'0.5'});
    },function(){
        $(".women_dress01").css({opacity:'1'});
    });
    $(".women_dress02").hover(function(){
        $(".women_dress02").css({opacity:'0.5'});
    },function(){
        $(".women_dress02").css({opacity:'1'});
    });
    $(".women_dress03").hover(function(){
        $(".women_dress03").css({opacity:'0.5'});
    },function(){
        $(".women_dress03").css({opacity:'1'});
    });
    $(".women_dress04").hover(function(){
        $(".women_dress04").css({opacity:'0.5'});
    },function(){
        $(".women_dress04").css({opacity:'1'});
    });

})
//更多显示
$(function(){
    var oHeader=document.getElementsByClassName('header')[0];
    var oUl=oHeader.getElementsByClassName('ul');
    var oMa09=oHeader.getElementsByClassName('ma09')[0];
    var oBox=oHeader.getElementsByClassName('box01')[0];
    oMa09.onmouseover=function(){

        oBox.style.display='block';
    };
    oMa09.onmouseout=function(){

        oBox.style.display='none';
    };
    oBox.onmouseover=function(){
        oBox.style.display='block';
    };
    oBox.onmouseout=function(){
        oBox.style.display='none';

    }
})