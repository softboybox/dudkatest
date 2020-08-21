// Hello!

import * as JQuery from "jquery";
window.$ = JQuery.default;

console.log('Hello!');


$(document).ready(function(){
    $(".more").toggle();
    $(".cards__btn").click(function(){
        let item = $(this).parent();
        $(".more", item).toggle();
        if($(".more", item).is(":visible")){
            $("span", this).text('Show less');
            $(this).addClass("cards__btn_toogled");
        }else{
            $("span", this).text('Show more');
            $(this).removeClass("cards__btn_toogled");
        }
        toogled = !toogled;
    });
});