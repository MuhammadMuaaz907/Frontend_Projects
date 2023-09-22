$(document).ready function() {
    $(document).delegate(".open","click",function(event){
        $(this).addClass("opened");
        event.stopPropagation();
    });
}