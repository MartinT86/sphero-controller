function tester(){
    console.log("tester fired");
}

$(document).ready(function(){
    $("#redButton").click(function(){
        $.post("/colour/red",
        {
          data: "data",
        },
        function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
        });
        $(".ball").css("background", "radial-gradient(circle at 100px 100px, red, #000");
    });
    
    $("#blueButton").click(function(){
        $.post("/colour/blue",
        {
          data: "data",
        },
        function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
        });
        $(".ball").css("background", "radial-gradient(circle at 100px 100px, royalblue, #000");
    });
    
    $("#greenButton").click(function(){
        $.post("/colour/green",
        {
          data: "data",
        },
        function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
        });
        $(".ball").css("background", "radial-gradient(circle at 100px 100px, limegreen, #000");
    });
});