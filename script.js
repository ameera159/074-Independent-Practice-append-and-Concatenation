$(".to-pack-button").click(function(){
    var input1 = $(".to-pack-input").val();
    $(".packing-list").append("<li>" + "I'm going to pack" + " " +  input1 + "</li>");
});

$(".course-button").click(function(){
    var input2 = $("course-input").val();
    $(".course-list").append("<li>" + input2 + "</li>");
});