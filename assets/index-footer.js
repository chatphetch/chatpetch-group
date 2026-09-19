<!DOCTYPE html>
<html lang="th">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    CHATPHETCH GROUP | Flooring & Construction
</title>

<meta
    name="description"
    content="CHATPHETCH GROUP วัสดุงานพื้น งานก่อสร้าง ระบบพื้น สินค้า ผลงาน และบริการให้คำปรึกษา"
>

<link
    rel="icon"
    href="assets/logo.png"
>


<style>

/* =========================================================
   ROOT
========================================================= */

:root{

    --gold:#c9a45c;
    --gold2:#e4c57f;
    --gold3:#8d6b2f;

    --white:#f7f0e8;
    --text:#ded4c8;
    --muted:#a99e92;

    --black:#050403;

    --line:
        rgba(201,164,92,.22);

    --max:1240px;

}


/* =========================================================
   RESET
========================================================= */

*{
    box-sizing:border-box;
}


html{
    scroll-behavior:smooth;
}


body{

    margin:0;

    background:
        #050403;

    color:
        var(--text);

    overflow-x:hidden;

    font-family:
        "Prompt",
        "Kanit",
        sans-serif;

}


a{
    color:inherit;
    text-decoration:none;
}


/* =========================================================
   PAGE
========================================================= */

.cp-page{

    position:relative;

    min-height:100vh;

    overflow:hidden;

    background:
        #050403;

}


/* =========================================================
   SINGLE FULL PAGE BACKGROUND
========================================================= */

.cp-page::before{

    content:"";

    position:absolute;

    inset:0;

    z-index:0;

    background-image:
        url("assets/index-main-bg.png");

    background-repeat:
        no-repeat;

    background-position:
        center top;

    background-size:
        cover;

}


/* =========================================================
   OVERLAY
========================================================= */

.cp-page::after{

    content:"";

    position:absolute;

    inset:0;

    z-index:1;

    pointer-events:none;

    background:

        linear-gradient(
            180deg,
            rgba(0,0,0,.16) 0%,
            rgba(0,0,0,.04) 24%,
            rgba(0,0,0,.08) 48%,
            rgba(0,0,0,.30) 72%,
            rgba(0,0,0,.78) 100%
        );

}


/* =========================================================
   CONTENT LAYER
========================================================= */

.cp-page > *{

    position:relative;

    z-index:2;

}


/* =========================================================
   HERO
========================================================= */

.cp-hero{

    min-height:
        760px;

    position:relative;

}


.cp-hero-inner{

    width:
        min(
            var(--max),
            calc(100% - 80px)
        );

    min-height:
        760px;

    margin:
        0 auto;

    display:flex;

    align-items:center;

    padding-top:
        86px;

}


.cp-hero-copy{

    width:
        min(
            650px,
            100%
        );

    transform:
        translateY(
            clamp(
                55px,
                7vh,
                85px
            )
        );

}


.cp-kicker{

    display:flex;

    align-items:center;

    gap:12px;

    margin-bottom:
        18px;

    color:
        var(--gold2);

    font-size:
        11px;

    font-weight:
        500;

    letter-spacing:
        3px;

}


.cp-kicker::before{

    content:"";

    width:
        40px;

    height:
        1px;

    background:
        var(--gold);

}


.cp-title{

    margin:0;

    color:
        var(--white);

    font-family:
        "Kanit",
        "Prompt",
        sans-serif;

    font-size:
        clamp(
            48px,
            5.7vw,
            80px
        );

    font-weight:
        400;

    line-height:
        1.01;

    letter-spacing:
        -1.8px;

    text-shadow:
        0 8px 35px
        rgba(0,0,0,.65);

}


.cp-title span{

    display:block;

    color:
        var(--gold2);

}


.cp-line{

    width:
        70px;

    height:
        1px;

    margin-top:
        23px;

    background:
        linear-gradient(
            90deg,
            var(--gold),
            transparent
        );

}


.cp-description{

    max-width:
        570px;

    margin:
        17px 0 0;

    color:
        rgba(
            247,
            240,
            232,
            .84
        );

    font-size:
        14px;

    line-height:
        1.9;

    text-shadow:
        0 4px 20px
        rgba(0,0,0,.75);

}


/* =========================================================
   BUTTONS
========================================================= */

.cp-actions{

    display:flex;

    flex-wrap:wrap;

    gap:
        11px;

    margin-top:
        24px;

}


.cp-button{

    min-height:
        46px;

    padding:
        0 22px;

    display:inline-flex;

    align-items:center;

    justify-content:center;

    font-size:
        12px;

    transition:
        .25s ease;

}


.cp-button-main{

    color:
        #160e07;

    background:
        linear-gradient(
            135deg,
            #e4c57f,
            #b18442
        );

    border:
        1px solid
        #e4c57f;

}


.cp-button-main:hover{

    transform:
        translateY(-2px);

}


.cp-button-sub{

    color:#fff;

    background:
        rgba(
            5,
            4,
            3,
            .25
        );

    border:
        1px solid
        rgba(
            228,
            197,
            127,
            .52
        );

    backdrop-filter:
        blur(7px);

}


.cp-button-sub:hover{

    transform:
        translateY(-2px);

    background:
        rgba(
            5,
            4,
            3,
            .48
        );

}


/* =========================================================
   SCROLL
========================================================= */

.cp-scroll{

    position:absolute;

    left:50%;

    bottom:
        22px;

    transform:
        translateX(-50%);

    display:flex;

    flex-direction:column;

    align-items:center;

    gap:
        7px;

    color:
        rgba(
            255,
            255,
            255,
            .45
        );

    font-size:
        8px;

    letter-spacing:
        3px;

}


.cp-scroll span{

    width:
        1px;

    height:
        30px;

    background:
        linear-gradient(
            to bottom,
            var(--gold),
            transparent
        );

}


/* =========================================================
   CONTENT
========================================================= */

.cp-content{

    position:relative;

    margin-top:
        -35px;

}


.cp-section{

    width:
        min(
            var(--max),
            calc(100% - 80px)
        );

    margin:
        0 auto;

    padding:
        68px 0;

}


.cp-eyebrow{

    margin-bottom:
        10px;

    color:
        var(--gold2);

    font-size:
        10px;

    letter-spacing:
        3px;

}


.cp-heading{

    margin:0;

    color:
        var(--white);

    font-family:
        "Kanit",
        "Prompt",
        sans-serif;

    font-size:
        clamp(
            34px,
            3.8vw,
            52px
        );

    font-weight:
        400;

    line-height:
        1.1;

    letter-spacing:
        -.5px;

}


.cp-text{

    max-width:
        650px;

    margin:
        14px 0 0;

    color:
        rgba(
            245,
            239,
            231,
            .65
        );

    font-size:
        13px;

    line-height:
        1.9;

}


/* =========================================================
   SOLUTIONS
========================================================= */

.cp-solutions{

    display:grid;

    grid-template-columns:
        repeat(
            4,
            1fr
        );

    gap:
        1px;

    margin-top:
        32px;

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .22
        );

    background:
        rgba(
            201,
            164,
            92,
            .22
        );

}


.cp-card{

    min-height:
        245px;

    padding:
        26px;

    display:flex;

    flex-direction:column;

    background:
        linear-gradient(
            145deg,
            rgba(
                30,
                21,
                14,
                .74
            ),
            rgba(
                5,
                4,
                3,
                .66
            )
        );

    backdrop-filter:
        blur(8px);

    transition:
        .25s;

}


.cp-card:hover{

    transform:
        translateY(-3px);

    background:
        linear-gradient(
            145deg,
            rgba(
                51,
                33,
                18,
                .84
            ),
            rgba(
                6,
                4,
                3,
                .72
            )
        );

}


.cp-card-number{

    color:
        rgba(
            228,
            197,
            127,
            .70
        );

    font-size:
        9px;

    letter-spacing:
        2px;

}


.cp-card-icon{

    width:
        40px;

    height:
        40px;

    margin-top:
        22px;

    display:flex;

    align-items:center;

    justify-content:center;

    color:
        var(--gold2);

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .32
        );

    font-size:
        18px;

}


.cp-card h3{

    margin:
        15px 0 7px;

    color:
        #fff;

    font-family:
        "Kanit",
        "Prompt",
        sans-serif;

    font-size:
        20px;

    font-weight:
        400;

}


.cp-card p{

    margin:0;

    color:
        rgba(
            245,
            239,
            231,
            .57
        );

    font-size:
        11px;

    line-height:
        1.8;

}


.cp-card-link{

    margin-top:
        auto;

    padding-top:
        17px;

    color:
        var(--gold2);

    font-size:
        10px;

}


/* =========================================================
   WORK
========================================================= */

.cp-work{

    display:grid;

    grid-template-columns:
        repeat(
            4,
            1fr
        );

    gap:
        12px;

    margin-top:
        32px;

}


.cp-work-card{

    position:relative;

    min-height:
        235px;

    overflow:hidden;

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .18
        );

    background:
        linear-gradient(
            145deg,
            rgba(
                35,
                23,
                14,
                .66
            ),
            rgba(
                5,
                3,
                2,
                .78
            )
        );

    transition:
        .25s;

}


.cp-work-card:hover{

    transform:
        translateY(-4px);

    border-color:
        rgba(
            201,
            164,
            92,
            .42
        );

}


.cp-work-card::before{

    content:"";

    position:absolute;

    inset:0;

    background:
        radial-gradient(
            circle at 50% 20%,
            rgba(
                201,
                164,
                92,
                .15
            ),
            transparent 45%
        );

}


.cp-work-card:nth-child(2)::before{

    background:
        repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 34px,
            rgba(
                201,
                164,
                92,
                .05
            ) 35px,
            transparent 36px
        );

}


.cp-work-card:nth-child(3)::before{

    background:
        linear-gradient(
            135deg,
            transparent 43%,
            rgba(
                201,
                164,
                92,
                .12
            ) 44%,
            transparent 46%
        );

}


.cp-work-card:nth-child(4)::before{

    background:
        linear-gradient(
            145deg,
            rgba(
                255,
                255,
                255,
                .04
            ),
            transparent 46%
        );

}


.cp-work-card::after{

    content:"";

    position:absolute;

    left:0;
    right:0;
    bottom:0;

    height:
        65%;

    background:
        linear-gradient(
            180deg,
            transparent,
            rgba(
                0,
                0,
                0,
                .86
            )
        );

}


.cp-work-inner{

    position:absolute;

    left:
        21px;

    right:
        21px;

    bottom:
        21px;

    z-index:
        2;

}


.cp-work-number{

    color:
        var(--gold2);

    font-size:
        9px;

    letter-spacing:
        2px;

    margin-bottom:
        6px;

}


.cp-work-title{

    color:
        #fff;

    font-family:
        "Kanit",
        "Prompt",
        sans-serif;

    font-size:
        18px;

}


.cp-work-sub{

    margin-top:
        5px;

    color:
        rgba(
            255,
            255,
            255,
            .42
        );

    font-size:
        8px;

    letter-spacing:
        2px;

}


/* =========================================================
   STATS
========================================================= */

.cp-stats{

    display:grid;

    grid-template-columns:
        repeat(
            3,
            1fr
        );

    margin-top:
        10px;

    border-top:
        1px solid
        rgba(
            201,
            164,
            92,
            .22
        );

    border-bottom:
        1px solid
        rgba(
            201,
            164,
            92,
            .22
        );

    background:
        rgba(
            4,
            3,
            2,
            .18
        );

    backdrop-filter:
        blur(7px);

}


.cp-stat{

    padding:
        32px 20px;

    text-align:
        center;

    border-right:
        1px solid
        rgba(
            201,
            164,
            92,
            .15
        );

}


.cp-stat:last-child{

    border-right:
        0;

}


.cp-stat strong{

    display:block;

    color:
        var(--gold2);

    font-family:
        "Kanit",
        "Prompt",
        sans-serif;

    font-size:
        clamp(
            42px,
            4.5vw,
            62px
        );

    font-weight:
        300;

    line-height:
        1;

}


.cp-stat span{

    display:block;

    margin-top:
        9px;

    color:
        rgba(
            255,
            255,
            255,
            .46
        );

    font-size:
        9px;

    letter-spacing:
        2px;

}


/* =========================================================
   CTA
========================================================= */

.cp-cta{

    width:
        min(
            var(--max),
            calc(100% - 80px)
        );

    margin:
        0 auto 80px;

    padding:
        clamp(
            40px,
            6vw,
            70px
        );

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .30
        );

    background:
        linear-gradient(
            135deg,
            rgba(
                31,
                20,
                12,
                .72
            ),
            rgba(
                5,
                4,
                3,
                .72
            )
        );

    backdrop-filter:
        blur(9px);

}


.cp-cta-label{

    color:
        var(--gold2);

    font-size:
        9px;

    letter-spacing:
        3px;

}


.cp-cta h2{

    margin:
        10px 0 0;

    color:
        #fff;

    font-family:
        "Kanit",
        "Prompt",
        sans-serif;

    font-size:
        clamp(
            34px,
            4vw,
            56px
        );

    font-weight:
        400;

    line-height:
        1.08;

}


.cp-cta p{

    max-width:
        650px;

    margin:
        14px 0 0;

    color:
        rgba(
            255,
            255,
            255,
            .60
        );

    font-size:
        13px;

    line-height:
        1.9;

}


.cp-cta-button{

    margin-top:
        23px;

}


/* =========================================================
   =========================================================
   FOOTER
   BASED ON ABOUT.HTML
   =========================================================
   ========================================================= */

.footer{

    width:
        100%;

    background:

        radial-gradient(
            circle at 12% 12%,
            rgba(
                201,
                164,
                92,
                .055
            ),
            transparent 30%
        ),

        radial-gradient(
            circle at 88% 88%,
            rgba(
                201,
                164,
                92,
                .035
            ),
            transparent 34%
        ),

        #050505;

    border-top:
        1px solid
        rgba(
            201,
            164,
            92,
            .30
        );

}


/* =========================================================
   FOOTER CONTAINER
========================================================= */

.footer .container{

    width:
        min(
            1280px,
            calc(100% - 80px)
        );

    margin:
        0 auto;

}


/* =========================================================
   FOOTER MAIN
========================================================= */

.footer-main{

    padding:
        70px 0 62px;

    display:grid;

    grid-template-columns:
        minmax(0,1fr)
        430px;

    gap:
        8px;

    align-items:
        start;

}


/* =========================================================
   FOOTER BRAND
========================================================= */

.footer-brand{

    min-width:
        0;

}


.footer-logo{

    display:flex;

    align-items:center;

    gap:
        20px;

    text-decoration:
        none;

    width:
        max-content;

}


.footer-logo img{

    width:
        76px;

    height:
        76px;

    object-fit:
        contain;

    display:
        block;

    filter:
        drop-shadow(
            0 0 14px
            rgba(
                201,
                164,
                92,
                .18
            )
        );

}


.footer-logo-text strong{

    display:block;

    color:
        #fff;

    font-family:
        "Kanit",
        sans-serif;

    font-size:
        27px;

    line-height:
        1.1;

    letter-spacing:
        1.3px;

    font-weight:
        600;

}


.footer-logo-text small{

    display:block;

    margin-top:
        7px;

    color:
        #d8b86b;

    font-size:
        11px;

    letter-spacing:
        2.2px;

    line-height:
        1.2;

}


.footer-description{

    margin:
        30px 0 0;

    color:
        #858585;

    font-size:
        15px;

    line-height:
        1.9;

    max-width:
        700px;

}


.footer-tagline{

    margin:
        25px 0 0;

    color:
        #8f8f8f;

    font-size:
        15px;

    line-height:
        2;

}


/* =========================================================
   FOOTER MENU
========================================================= */

.footer-menu{

    justify-self:
        start;

    margin-left:
        0;

}


.footer-menu-title{

    color:
        #e4c978;

    font-size:
        15px;

    letter-spacing:
        2px;

    font-weight:
        500;

    margin:
        2px 0 22px;

    position:
        relative;

    padding-bottom:
        13px;

}


.footer-menu-title::after{

    content:"";

    position:absolute;

    left:
        0;

    bottom:
        0;

    width:
        42px;

    height:
        2px;

    background:
        #d8b86b;

}


.footer-links{

    display:flex;

    flex-direction:
        column;

    gap:
        13px;

}


.footer-links a{

    color:
        #777;

    font-size:
        14px;

    line-height:
        1.5;

    transition:
        .25s ease;

}


.footer-links a:hover{

    color:
        #e4c978;

    transform:
        translateX(4px);

}


/* =========================================================
   FOOTER BOTTOM
========================================================= */

.footer-bottom{

    min-height:
        88px;

    padding:
        18px 0;

    border-top:
        1px solid
        rgba(
            201,
            164,
            92,
            .28
        );

    display:grid;

    grid-template-columns:
        auto
        1fr
        auto
        auto;

    gap:
        28px;

    align-items:
        center;

}


/* =========================================================
   COPYRIGHT
========================================================= */

.footer-copy{

    color:
        #777;

    font-size:
        12px;

    white-space:
        nowrap;

}


.footer-copy strong{

    color:
        #ddd;

    font-weight:
        500;

}


/* =========================================================
   ADDRESS
========================================================= */

.footer-address{

    color:
        #777;

    font-size:
        12px;

    display:flex;

    align-items:
        center;

    gap:
        8px;

    min-width:
        0;

}


.footer-address .footer-pin{

    color:
        #e4c978;

    font-size:
        20px;

    flex:
        0 0 auto;

}


/* =========================================================
   ACTION BUTTONS
========================================================= */

.footer-actions{

    display:flex;

    align-items:
        center;

    gap:
        12px;

    padding-left:
        24px;

    border-left:
        1px solid
        rgba(
            201,
            164,
            92,
            .28
        );

}


.footer-action{

    display:inline-flex;

    align-items:
        center;

    gap:
        9px;

    min-height:
        46px;

    padding:
        0 17px;

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .30
        );

    border-radius:
        11px;

    color:
        #e4c978;

    font-size:
        13px;

    white-space:
        nowrap;

    transition:
        .25s ease;

}


.footer-action:hover{

    border-color:
        #d8b86b;

    background:
        rgba(
            201,
            164,
            92,
            .06
        );

    transform:
        translateY(-2px);

}


/* =========================================================
   SOCIAL
========================================================= */

.footer-social{

    display:flex;

    align-items:
        center;

    gap:
        10px;

    padding-left:
        24px;

    border-left:
        1px solid
        rgba(
            201,
            164,
            92,
            .28
        );

}


.footer-social a{

    width:
        48px;

    height:
        48px;

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .42
        );

    border-radius:
        50%;

    display:flex;

    align-items:
        center;

    justify-content:
        center;

    color:
        #e4c978;

    font-size:
        18px;

    transition:
        .25s ease;

}


.footer-social a:hover{

    background:
        rgba(
            201,
            164,
            92,
            .08
        );

    border-color:
        #e4c978;

    transform:
        translateY(-2px);

}


.footer-social a:last-child{

    font-size:
        14px;

}


/* =========================================================
   FLOATING CONTACT
========================================================= */

.floating-contact{

    position:
        fixed;

    right:
        22px;

    bottom:
        22px;

    z-index:
        9999;

    display:flex;

    flex-direction:
        column;

    gap:
        9px;

}


.float-btn{

    width:
        46px;

    height:
        46px;

    display:grid;

    place-items:
        center;

    border-radius:
        50%;

    background:
        #0d0d0d;

    border:
        1px solid
        rgba(
            201,
            164,
            92,
            .40
        );

    color:
        var(--gold2);

    font-size:
        17px;

    transition:
        .3s;

}


.float-btn:hover{

    background:
        rgba(
            201,
            164,
            92,
            .10
        );

    border-color:
        var(--gold2);

    transform:
        translateY(-3px);

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1050px){

    .cp-hero{

        min-height:
            680px;

    }


    .cp-hero-inner{

        min-height:
            680px;

        width:
            calc(
                100% - 50px
            );

    }


    .cp-solutions,
    .cp-work{

        grid-template-columns:
            repeat(
                2,
                1fr
            );

    }


    .cp-section{

        width:
            calc(
                100% - 50px
            );

    }


    .cp-cta{

        width:
            calc(
                100% - 50px
            );

    }


    .footer-main{

        grid-template-columns:
            1fr 300px;

        gap:
            45px;

    }


    .footer-bottom{

        grid-template-columns:
            1fr 1fr;

        row-gap:
            20px;

    }


    .footer-actions{

        border-left:
            0;

        padding-left:
            0;

    }


    .footer-social{

        justify-content:
            flex-end;

    }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:700px){

    .cp-page::before{

        background-position:
            58% top;

    }


    .cp-hero{

        min-height:
            650px;

    }


    .cp-hero-inner{

        min-height:
            650px;

        width:
            calc(
                100% - 30px
            );

    }


    .cp-hero-copy{

        transform:
            translateY(
                35px
            );

    }


    .cp-title{

        font-size:
            clamp(
                40px,
                12vw,
                60px
            );

    }


    .cp-description{

        font-size:
            12px;

    }


    .cp-scroll{

        display:
            none;

    }


    .cp-section{

        width:
            calc(
                100% - 30px
            );

        padding:
            52px 0;

    }


    .cp-solutions,
    .cp-work{

        grid-template-columns:
            repeat(
                2,
                1fr
            );

    }


    .cp-card{

        min-height:
            220px;

    }


    .cp-work-card{

        min-height:
            215px;

    }


    .cp-stats{

        grid-template-columns:
            1fr;

    }


    .cp-stat{

        border-right:
            0;

        border-bottom:
            1px solid
            rgba(
                201,
                164,
                92,
                .15
            );

    }


    .cp-stat:last-child{

        border-bottom:
            0;

    }


    .cp-cta{

        width:
            calc(
                100% - 30px
            );

        margin-bottom:
            60px;

        padding:
            38px 25px;

    }


    /* =============================
       FOOTER MOBILE
    ============================= */

    .footer .container{

        width:
            calc(
                100% - 40px
            );

    }


    .footer-main{

        grid-template-columns:
            1fr;

        gap:
            45px;

        padding:
            52px 0 45px;

    }


    .footer-logo img{

        width:
            64px;

        height:
            64px;

    }


    .footer-logo-text strong{

        font-size:
            22px;

    }


    .footer-logo-text small{

        font-size:
            9px;

        letter-spacing:
            1.6px;

    }


    .footer-description{

        font-size:
            13px;

    }


    .footer-tagline{

        font-size:
            13px;

    }


    .footer-bottom{

        grid-template-columns:
            1fr;

        gap:
            18px;

        padding:
            25px 0 30px;

    }


    .footer-copy{

        white-space:
            normal;

    }


    .footer-address{

        line-height:
            1.7;

    }


    .footer-actions{

        padding-left:
            0;

        border-left:
            0;

        justify-content:
            flex-start;

        flex-wrap:
            wrap;

    }


    .footer-social{

        padding-left:
            0;

        border-left:
            0;

        justify-content:
            flex-start;

    }


}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:480px){

    .cp-page::before{

        background-position:
            60% top;

    }


    .cp-hero{

        min-height:
            620px;

    }


    .cp-hero-inner{

        min-height:
            620px;

        width:
            calc(
                100% - 24px
            );

    }


    .cp-hero-copy{

        transform:
            translateY(
                25px
            );

    }


    .cp-kicker{

        font-size:
            9px;

        letter-spacing:
            2px;

    }


    .cp-title{

        font-size:
            39px;

    }


    .cp-description{

        font-size:
            11.5px;

    }


    .cp-actions{

        flex-direction:
            column;

        align-items:
            flex-start;

    }


    .cp-solutions,
    .cp-work{

        grid-template-columns:
            1fr;

    }


    .cp-section{

        width:
            calc(
                100% - 24px
            );

        padding:
            44px 0;

    }


    .cp-heading{

        font-size:
            31px;

    }


    .cp-cta{

        width:
            calc(
                100% - 24px
            );

    }


    /* =============================
       FOOTER SMALL MOBILE
    ============================= */

    .footer .container{

        width:
            calc(
                100% - 28px
            );

    }


    .footer-logo{

        gap:
            15px;

    }


    .footer-logo img{

        width:
            58px;

        height:
            58px;

    }


    .footer-logo-text strong{

        font-size:
            19px;

        letter-spacing:
            .8px;

    }


    .footer-logo-text small{

        font-size:
            8px;

        letter-spacing:
            1.5px;

    }


    .footer-description{

        font-size:
            12px;

    }


    .footer-tagline{

        font-size:
            12px;

        line-height:
            1.9;

    }


    .footer-menu-title{

        font-size:
            14px;

    }


    .footer-links{

        gap:
            11px;

    }


    .footer-links a{

        font-size:
            13px;

    }


    .footer-copy{

        font-size:
            11px;

    }


    .footer-address{

        font-size:
            11px;

    }


    .footer-actions{

        display:grid;

        grid-template-columns:
            1fr 1fr;

        width:
            100%;

        gap:
            9px;

    }


    .footer-action{

        width:
            100%;

        justify-content:
            center;

        padding:
            0 8px;

        font-size:
            11px;

    }


    .footer-social{

        gap:
            8px;

    }


    .footer-social a{

        width:
            43px;

        height:
            43px;

    }


    .floating-contact{

        right:
            14px;

        bottom:
            14px;

    }


    .float-btn{

        width:
            44px;

        height:
            44px;

    }

}

</style>

</head>


<body>


<main class="cp-page">


<!-- =====================================================
     HERO
===================================================== -->

<section class="cp-hero">

    <div class="cp-hero-inner">

        <div class="cp-hero-copy">

            <div class="cp-kicker">
                FLOORING &amp; CONSTRUCTION
            </div>


            <h1 class="cp-title">

                วัสดุงานพื้น

                <span>
                    และงานก่อสร้าง
                </span>

            </h1>


            <div class="cp-line"></div>


            <p class="cp-description">

                โซลูชันด้านวัสดุงานพื้นและงานก่อสร้าง
                สำหรับบ้าน อาคารพาณิชย์ โรงงาน
                และโครงการขนาดใหญ่
                พร้อมทีมงานดูแลตั้งแต่การเลือกวัสดุ
                จนถึงการติดตั้ง

            </p>


            <div class="cp-actions">

                <a
                    href="products.html"
                    class="cp-button cp-button-main"
                >
                    ดูสินค้า →
                </a>


                <a
                    href="contact.html"
                    class="cp-button cp-button-sub"
                >
                    ติดต่อเรา
                </a>

            </div>

        </div>

    </div>


    <div class="cp-scroll">

        SCROLL

        <span></span>

    </div>

</section>



<!-- =====================================================
     CONTENT
===================================================== -->

<div class="cp-content">


<!-- =====================================================
     SOLUTIONS
===================================================== -->

<section class="cp-section">

    <div class="cp-eyebrow">
        OUR SOLUTIONS
    </div>


    <h2 class="cp-heading">

        ครบทุกความต้องการ

        <br>

        เรื่องพื้น และงานก่อสร้าง

    </h2>


    <p class="cp-text">

        วัสดุ บริการ และโซลูชัน
        สำหรับงานพื้นและงานก่อสร้าง
        ที่เหมาะกับลักษณะของแต่ละโครงการ

    </p>


    <div class="cp-solutions">


        <a
            href="services.html"
            class="cp-card"
        >

            <div class="cp-card-number">
                01 / FLOORING
            </div>


            <div class="cp-card-icon">
                ◇
            </div>


            <h3>
                ระบบงานพื้น
            </h3>


            <p>

                ระบบพื้นสำหรับพื้นที่หลากหลายประเภท
                ทั้งงานอุตสาหกรรม อาคาร
                พื้นที่พาณิชย์ และพื้นที่ใช้งานทั่วไป

            </p>


            <div class="cp-card-link">
                ดูบริการ →
            </div>

        </a>



        <a
            href="products.html"
            class="cp-card"
        >

            <div class="cp-card-number">
                02 / PRODUCTS
            </div>


            <div class="cp-card-icon">
                □
            </div>


            <h3>
                สินค้า
            </h3>


            <p>

                วัสดุและผลิตภัณฑ์สำหรับงานพื้น
                งานก่อสร้าง และงานตกแต่ง
                คัดเลือกให้เหมาะกับแต่ละโครงการ

            </p>


            <div class="cp-card-link">
                ดูสินค้า →
            </div>

        </a>



        <a
            href="projects.html"
            class="cp-card"
        >

            <div class="cp-card-number">
                03 / PROJECTS
            </div>


            <div class="cp-card-icon">
                ✦
            </div>


            <h3>
                ผลงาน
            </h3>


            <p>

                ชมตัวอย่างผลงานด้านระบบพื้น
                งานก่อสร้าง และโครงการ
                จากการใช้งานจริง

            </p>


            <div class="cp-card-link">
                ดูผลงาน →
            </div>

        </a>



        <a
            href="service-detail.html?service=consulting"
            class="cp-card"
        >

            <div class="cp-card-number">
                04 / CONSULT
            </div>


            <div class="cp-card-icon">
                +
            </div>


            <h3>
                คำปรึกษา
            </h3>


            <p>

                ให้คำแนะนำด้านวัสดุ
                ระบบพื้น และแนวทางการใช้งาน
                ให้เหมาะสมกับแต่ละพื้นที่

            </p>


            <div class="cp-card-link">
                ปรึกษาเรา →
            </div>

        </a>

    </div>

</section>



<!-- =====================================================
     WORK
===================================================== -->

<section class="cp-section">

    <div class="cp-eyebrow">
        OUR WORK
    </div>


    <h2 class="cp-heading">
        ผลงานของเรา
    </h2>


    <p class="cp-text">

        ตัวอย่างงานด้านพื้น งานเคลือบผิว
        และงานก่อสร้างจากหลากหลายประเภทโครงการ

    </p>


    <div class="cp-work">


        <a
            href="projects.html"
            class="cp-work-card"
        >

            <div class="cp-work-inner">

                <div class="cp-work-number">
                    01
                </div>

                <div class="cp-work-title">
                    พื้นโรงงานอุตสาหกรรม
                </div>

                <div class="cp-work-sub">
                    INDUSTRIAL FLOOR
                </div>

            </div>

        </a>



        <a
            href="projects.html"
            class="cp-work-card"
        >

            <div class="cp-work-inner">

                <div class="cp-work-number">
                    02
                </div>

                <div class="cp-work-title">
                    พื้นพาณิชย์ / อาคาร
                </div>

                <div class="cp-work-sub">
                    COMMERCIAL FLOOR
                </div>

            </div>

        </a>



        <a
            href="projects.html"
            class="cp-work-card"
        >

            <div class="cp-work-inner">

                <div class="cp-work-number">
                    03
                </div>

                <div class="cp-work-title">
                    งานพื้นและการเคลือบผิว
                </div>

                <div class="cp-work-sub">
                    SURFACE SYSTEM
                </div>

            </div>

        </a>



        <a
            href="projects.html"
            class="cp-work-card"
        >

            <div class="cp-work-inner">

                <div class="cp-work-number">
                    04
                </div>

                <div class="cp-work-title">
                    งานก่อสร้าง
                </div>

                <div class="cp-work-sub">
                    CONSTRUCTION
                </div>

            </div>

        </a>

    </div>

</section>



<!-- =====================================================
     STATS
===================================================== -->

<section class="cp-section">

    <div class="cp-stats">


        <div class="cp-stat">

            <strong>
                500+
            </strong>

            <span>
                PROJECTS
            </span>

        </div>


        <div class="cp-stat">

            <strong>
                10+
            </strong>

            <span>
                YEARS EXPERIENCE
            </span>

        </div>


        <div class="cp-stat">

            <strong>
                100%
            </strong>

            <span>
                COMMITMENT
            </span>

        </div>


    </div>

</section>



<!-- =====================================================
     CTA
===================================================== -->

<section class="cp-cta">


    <div class="cp-cta-label">
        START YOUR PROJECT
    </div>


    <h2>

        สร้างพื้นที่ที่ดีกว่า

        <br>

        เริ่มต้นกับเรา

    </h2>


    <p>

        ให้เราช่วยเลือกวัสดุและโซลูชัน
        ที่เหมาะสมกับพื้นที่ของคุณ

    </p>


    <div class="cp-cta-button">

        <a
            href="contact.html"
            class="cp-button cp-button-main"
        >
            ปรึกษาเราได้วันนี้ →
        </a>

    </div>


</section>


</div>

</main>



<!-- =====================================================
     MASTER NAV
===================================================== -->

<script src="assets/customer-master-nav.js"></script>



<!-- =====================================================
     REPLACE MASTER NAV FOOTER
     
     customer-master-nav.js จะสร้าง Footer ของมันเอง
     เราลบตัวนั้นออก แล้วใช้ Footer แบบ about.html
===================================================== -->

<script>

(function(){

    "use strict";


    function replaceFooter(){

        /* ---------------------------------------------
           Remove old footer
        --------------------------------------------- */

        document
            .querySelectorAll(
                ".customer-footer"
            )
            .forEach(function(el){

                el.remove();

            });


        /* ---------------------------------------------
           Remove old floating phone
        --------------------------------------------- */

        document
            .querySelectorAll(
                ".customer-floating-phone"
            )
            .forEach(function(el){

                el.remove();

            });


        /* ---------------------------------------------
           Prevent duplicate
        --------------------------------------------- */

        if(
            document.querySelector(
                ".footer"
            )
        ){

            return;

        }


        /* ---------------------------------------------
           FOOTER
        --------------------------------------------- */

        var footer =
            document.createElement(
                "footer"
            );

        footer.className =
            "footer";


        var container =
            document.createElement(
                "div"
            );

        container.className =
            "container";


        /* =============================================
           MAIN
        ============================================= */

        var footerMain =
            document.createElement(
                "div"
            );

        footerMain.className =
            "footer-main";


        /* =============================================
           BRAND
        ============================================= */

        var footerBrand =
            document.createElement(
                "div"
            );

        footerBrand.className =
            "footer-brand";


        var footerLogo =
            document.createElement(
                "a"
            );

        footerLogo.href =
            "index.html";

        footerLogo.className =
            "footer-logo";


        var logo =
            document.createElement(
                "img"
            );

        logo.src =
            "assets/logo.png";

        logo.alt =
            "CHATPHETCH GROUP";


        var logoText =
            document.createElement(
                "div"
            );

        logoText.className =
            "footer-logo-text";


        var logoStrong =
            document.createElement(
                "strong"
            );

        logoStrong.textContent =
            "CHATPHETCH GROUP";


        var logoSmall =
            document.createElement(
                "small"
            );

        logoSmall.textContent =
            "FLOORING & CONSTRUCTION";


        logoText.appendChild(
            logoStrong
        );

        logoText.appendChild(
            logoSmall
        );


        footerLogo.appendChild(
            logo
        );

        footerLogo.appendChild(
            logoText
        );


        var description =
            document.createElement(
                "p"
            );

        description.className =
            "footer-description";

        description.textContent =
            "🌹 โรงงานผลิต-จำหน่าย วัสดุงานพื้นทุกประเภท 🌹";


        var tagline =
            document.createElement(
                "p"
            );

        tagline.className =
            "footer-tagline";

        tagline.innerHTML =
            "♠️ สร้างสรรค์ผลงาน" +
            "&nbsp;&nbsp;" +
            "♠️ มาตรฐานเข้าถึง" +
            "&nbsp;&nbsp;" +
            "♠️ ยืน 1 คุณภาพ" +
            "<br>" +
            "บริการให้คำปรึกษาเกี่ยวกับพื้นทุกระบบแบบครบวงจร";


        footerBrand.appendChild(
            footerLogo
        );

        footerBrand.appendChild(
            description
        );

        footerBrand.appendChild(
            tagline
        );


        /* =============================================
           MENU
        ============================================= */

        var footerMenu =
            document.createElement(
                "div"
            );

        footerMenu.className =
            "footer-menu";


        var menuTitle =
            document.createElement(
                "div"
            );

        menuTitle.className =
            "footer-menu-title";

        menuTitle.textContent =
            "MENU";


        var footerLinks =
            document.createElement(
                "div"
            );

        footerLinks.className =
            "footer-links";


        var menuItems = [

            [
                "หน้าแรก",
                "index.html"
            ],

            [
                "เกี่ยวกับเรา",
                "about.html"
            ],

            [
                "สินค้า",
                "products.html"
            ],

            [
                "บริการ",
                "services.html"
            ],

            [
                "ผลงาน",
                "projects.html"
            ],

            [
                "ติดต่อเรา",
                "contact.html"
            ]

        ];


        menuItems.forEach(
            function(item){

                var link =
                    document.createElement(
                        "a"
                    );

                link.href =
                    item[1];

                link.textContent =
                    item[0];

                footerLinks.appendChild(
                    link
                );

            }
        );


        footerMenu.appendChild(
            menuTitle
        );

        footerMenu.appendChild(
            footerLinks
        );


        footerMain.appendChild(
            footerBrand
        );

        footerMain.appendChild(
            footerMenu
        );


        /* =============================================
           BOTTOM
        ============================================= */

        var footerBottom =
            document.createElement(
                "div"
            );

        footerBottom.className =
            "footer-bottom";


        /* ---------------------------------------------
           COPYRIGHT
        --------------------------------------------- */

        var copy =
            document.createElement(
                "div"
            );

        copy.className =
            "footer-copy";

        copy.innerHTML =
            "© 2026 " +
            "<strong>" +
            "CHATPHETCH GROUP CO., LTD." +
            "</strong>" +
            " All Rights Reserved.";


        /* ---------------------------------------------
           ADDRESS
        --------------------------------------------- */

        var address =
            document.createElement(
                "div"
            );

        address.className =
            "footer-address";


        var pin =
            document.createElement(
                "span"
            );

        pin.className =
            "footer-pin";

        pin.textContent =
            "📍";


        var addressText =
            document.createElement(
                "span"
            );

        addressText.textContent =
            "10/1 ม.9 ต.นาหม่อม อ.นาหม่อม จ.สงขลา 90310";


        address.appendChild(
            pin
        );

        address.appendChild(
            addressText
        );


        /* ---------------------------------------------
           ACTIONS
        --------------------------------------------- */

        var actions =
            document.createElement(
                "div"
            );

        actions.className =
            "footer-actions";


        var contact =
            document.createElement(
                "a"
            );

        contact.href =
            "contact.html";

        contact.className =
            "footer-action";

        contact.innerHTML =
            "☎ ติดต่อเรา";


        var order =
            document.createElement(
                "a"
            );

        order.href =
            "order-status.html";

        order.className =
            "footer-action";

        order.innerHTML =
            "🔎 ติดตามคำสั่งซื้อ";


        actions.appendChild(
            contact
        );

        actions.appendChild(
            order
        );


        /* ---------------------------------------------
           SOCIAL
        --------------------------------------------- */

        var social =
            document.createElement(
                "div"
            );

        social.className =
            "footer-social";


        var facebook =
            document.createElement(
                "a"
            );

        facebook.href =
            "https://www.facebook.com/ChatphetchGroup";

        facebook.target =
            "_blank";

        facebook.rel =
            "noopener";

        facebook.setAttribute(
            "aria-label",
            "Facebook"
        );

        facebook.textContent =
            "f";


        var youtube =
            document.createElement(
                "a"
            );

        youtube.href =
            "#";

        youtube.setAttribute(
            "aria-label",
            "YouTube"
        );

        youtube.textContent =
            "▶";


        var line =
            document.createElement(
                "a"
            );

        line.href =
            "#";

        line.setAttribute(
            "aria-label",
            "LINE"
        );

        line.textContent =
            "LINE";


        social.appendChild(
            facebook
        );

        social.appendChild(
            youtube
        );

        social.appendChild(
            line
        );


        footerBottom.appendChild(
            copy
        );

        footerBottom.appendChild(
            address
        );

        footerBottom.appendChild(
            actions
        );

        footerBottom.appendChild(
            social
        );


        /* =============================================
           BUILD FOOTER
        ============================================= */

        container.appendChild(
            footerMain
        );

        container.appendChild(
            footerBottom
        );

        footer.appendChild(
            container
        );


        document.body.appendChild(
            footer
        );


        /* =============================================
           FLOATING CONTACT
        ============================================= */

        var floating =
            document.createElement(
                "div"
            );

        floating.className =
            "floating-contact";


        var phone =
            document.createElement(
                "a"
            );

        phone.href =
            "tel:0856299778";

        phone.className =
            "float-btn";

        phone.title =
            "ฝ่ายเทคนิค";

        phone.textContent =
            "☎";


        var facebookFloat =
            document.createElement(
                "a"
            );

        facebookFloat.href =
            "https://www.facebook.com/ChatphetchGroup";

        facebookFloat.target =
            "_blank";

        facebookFloat.rel =
            "noopener";

        facebookFloat.className =
            "float-btn";

        facebookFloat.title =
            "Facebook";

        facebookFloat.textContent =
            "f";


        floating.appendChild(
            phone
        );

        floating.appendChild(
            facebookFloat
        );


        document.body.appendChild(
            floating
        );

    }


    /*
     * customer-master-nav.js runs first.
     * Then replace its footer.
     */

    if(
        document.readyState ===
        "loading"
    ){

        document.addEventListener(
            "DOMContentLoaded",
            replaceFooter
        );

    }else{

        replaceFooter();

    }


})();

</script>


</body>

</html>
