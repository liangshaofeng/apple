var search=$('.search');
search.click(function(){
    $(".mask").show();
    $("html,body").css("overflow","hidden");
    $('.bag-icon').addClass("active");
    $('.item,.search').each(function(){
        $(this).transition({'scale':[0,0],'opacity':'0'},function(){
            $(this).hide();
            if($(this).is(".search")){
                $('.searchbox').css('display','inline-block').transition({x:0})
            }
        })
    })

    $('.bag-icon.active').click(function(){
        $('.mask').hide();
        $("html,body").css("overflow","");
        $('.bag-icon').removeClass("active");
        $('.searchbox').css('display','none').transition({x:40})
        $('.bag-input').blur();
        $('.item,.search').each(function(){
            $(this).transition({'scale':[1,1],'opacity':'1'},function(){
                $(this).css('display','inline-block')
            })
        })

    })
});
//左侧的东西
$('.small-menu').click(function(){
    $(this).children().toggleClass('active')
    if($(".small-menu").children().hasClass("active")){

        $(".daohang").css("background","#000");
        $(".bag").transition({x:20});
        $(".small_mask").transition({height:"100%"},function(){
            $("html,body").css("overflow","hidden");
        })
    }else{
        $(".bag").transition({x:0},function(){
            $("html,body").css("overflow","");
        });
        $(".small_mask").transition({height:0},function(){
            $(".daohang").css("background","#333");
        });

    }
})
//轮播
var bw=$(".mall_banner").width();
var next=0;
var index=0;
var flag=true;
var imgs=$(".mall_banner");
var btnl=$(".prev");
var btnr=$(".next");
var lis=$("a",$(".btn"));
$("html,body").css("overflowX","hidden");
imgs.css("left",bw).eq(0).css("left",0);
lis.eq(0).addClass("jzp_btn");
var t=setInterval(moveL,2000);
function moveL(){
    next++;
    if(next==imgs.length){
        next=0;
    }
    imgs.eq(next).css("left",bw);
    imgs.eq(index).animate({left:-bw});
    imgs.eq(next).animate({left:0},function(){flag=true;});
    lis.removeClass("jzp_btn").eq(next).addClass("jzp_btn");
    index=next;
}
//下边的
$(".small_zi").click(function(){
    $(this).find("ul").slideToggle()
    $(this).children().toggleClass('active')
})