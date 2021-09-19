$(document).ready(function(){
    // console.log('hey');
// Start Navbar

// for navbutton
$('.navbuttons').click(function(){
    // console.log('i am working');
    // toggleမှာသွားထည့်မဲ့ classs
    $('.navbuttons').toggleClass('changes');
});
// for navbar
// window လို့ပြန်မရေးဘဲ this လို့ပဲ သုံးလို့ရ
$(window).scroll(function(){
    let getscrolly=$(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
});
// End Navbar


// Start Mission Section
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 650){
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fromlefts');
        $('.missiontexts').removeClass('fromrights');
    }
});
// End Mission Section


// Start Gallery Section
$('.gallerylists').click(function(){
    // this က လက်ရှိclickတဲ့ကောင်အတွက်
    // attr က jsမှာဆို getAttribute => attribute 

    let datafilter = $(this).attr('data-filter');
    // console.log('hey');
    
    // datafilterထဲက click လိုက်တဲ့ကောင် မဟုတ်တဲ့ဟာလိုချင်လို့ not()
    // '.'+datafilter => '.new' or '.free' or '.pro'

    // ပြန်စစ်ထုတ်ပြီး click လိုက်တဲ့ကောင်ကိုတော့ဖော်စေချင်လို့ filterfrees();
    // bcz hideထားတဲ့ဟာတွေကိုတစ်ခါပြန်ဖော်ပြီး အဲ့ထဲကနေမှ ပြန်ဖော်မှရမှာ
    if(datafilter === 'all'){
        $('.filters').show(300);
    }else{
        $('.filters').not('.'+datafilter).hide(300);
        
        $('.filters').filter('.' +datafilter).show(300);
    }
});

// for ul active
$('.gallerylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
})
// End Gallery Section


// Start Pricing Section
$(window).scroll(function(){
    let getscrolly=$(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 4300){
        $('.cardones').addClass('movefromlefts');
        $('.cardtwos').addClass('movefrombottoms');
        $('.cardthrees').addClass('movefromrights');
    }else{
        $('.cardones').removeClass('movefromlefts');
        $('.cardtwos').removeClass('movefrombottoms');
        $('.cardthrees').removeClass('movefromrights');
    }
});
// End Pricing Section


// Start Footer Section
const showyear=document.getElementById('showyear');
const getfullyear= new Date().getFullYear();
showyear.textContent=getfullyear;
// End Footer Section

});