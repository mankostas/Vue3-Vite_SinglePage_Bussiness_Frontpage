<script setup>
import BadgeSVG from '@/assets/icons/5-badge.svg'
</script>

<template>
          <div class="section container-fluid">
            <div class="row">
                <div class="col-xl-5">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="img_cont">
                                <img class="img-fluid" :src="BadgeSVG" alt="">
                            </div>  
                            <div class="heading-container text-start">
                                <div class="intro-heading text-start">
                                <h2>HERE'S A <br> CRAZY  THOUGTH</h2>
                            </div>
                            <div class="main-heading ">
                                <h1>Happy & healthy employees work better!</h1>
                            </div>
                            <a href="#happy-and-healthy" type="button" class="btn learn-more btn-lg" role="button">FIND OUT HOW WE CAN HELP</a>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="section1_image">
                        <img class="img-fluid" src="@/assets/images/banner-image.png" alt="">
                    </div>
                </div>  
            </div>
            <div class="scroll_cont">
                <a href="#happy-and-healthy" type="button" class="btn scroll-for-more btn-lg" role="button"><span>SCROLL FOR MORE</span>                
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path stroke-width="0.5" stroke="#303644" fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg></a>

            </div>

            </div>
</template>

<style scoped>



.intro-heading {
    font-family: 'FreeScript-Bold';
    color: #00C8FF;
    text-shadow: -4px 2px #545454;
    font-size: 16px !important;

    width: fit-content;
}


.main-heading {
    font-family: 'cf_asty_stdbold';
    color:#fff;
    font-size: 20px !important;
    text-align: left;
}

.heading-container {
    max-width: 400px;
    margin: 0 auto;
}

.learn-more {
    background-color: #fff;
    width: 100%;
    max-width: 380px;
    border-radius: 30px;
    border-color: #303644;
    border: 4px solid;
    box-shadow: -5px 5px #303644;
    font-family: 'cf_asty_stdbold';
    color: #303644;
    margin-top: 20px;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 14px;
    width: fit-content;
}

.scroll-for-more {
    font-size: 17px;
    font-family: 'cf_asty_stdbold';
    color: #303644;
    padding: 0;
    border: none
}

.scroll-for-more > svg,
.scroll-for-more > span,
.scroll-for-more {
    display: block;
    width: 100%;
}


.scroll_cont {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.learn-more:hover {
    background-color: #FF931F;
    color: #fff;
    border-color: #303644 !important;
    border: 4px solid;
    box-shadow: -5px 5px #303644;
}

@media (min-width:1200px) {
    .img_cont {
        text-align: right;
    }

    .intro-heading {
        transform: rotate(-4deg) translateY(-25px);
        transform-origin: center center;
    }

}

@media (max-width:1199px) {
    .img_cont {
        text-align: center;
    }
    .intro-heading {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .heading-container {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }

    .main-heading {
    text-align: center;
}

.learn-more {
    font-size: 15px;
    margin-bottom: 20px;
    padding: 10px;
}

}
</style>
