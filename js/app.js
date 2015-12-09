$(document).ready(function(){
    var dropdownButton = $(".blue-arrow");
    //  $(".dropdown").children().last();
    var singleItemSelectName = dropdownButton.eq(0).parent().next().children().first().children();
    var singleItemSelectColor = dropdownButton.eq(1).parent().next().children().first().children();
    var singleItemSelectFabric = dropdownButton.eq(2).parent().next().children().first().children()

    dropdownButton.on("click", function(){
        $(this).parent().next().toggle(100);
    });

    singleItemSelectName.on("click", function(){
        var chairName = $(this).data("chair");
        var chairPrice = parseFloat($(this).data("chair-price"));
        console.log(chairName + chairPrice);
        $("#chair-name").html(chairName);
        $("#chair-price").html(chairPrice);
    });

    singleItemSelectColor.on("click", function(){
        var chairColor = $(this).data("color");
        var chairColorPrice = parseFloat($(this).data("color-price"));
        console.log(chairColor + chairColorPrice);
        $("#chair-color").html(chairColor);
        $("#color-price").html(chairColorPrice);
    });

    singleItemSelectFabric.on("click", function(){
        var chairFabric = $(this).data("fabric");
        var chairFabricPrice = parseFloat($(this).data("fabric-price"));
        console.log(chairFabric + chairFabricPrice);
        $("#chair-fabric").html(chairFabric);
        $("#fabric-price").html(chairFabricPrice);
    });

    $("#transport").on("click", function(){
        $("#transport-yes").eq(0).toggle();
        $("#transport-price").eq(0).toggle();
    });
});