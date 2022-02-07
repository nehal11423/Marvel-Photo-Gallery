var list = [];
var insert;

$(".add").click(function() {
    insert=$(".picture-url").val();
    list.push(insert);
    $(".gallery").append("<img src=" +insert+ ">");
    $(".counters").text(list.length);
    
});