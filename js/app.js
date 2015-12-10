$(document).ready(function(){
    var dropdownButton = $(".blue-arrow");
    var singleItemSelectName = dropdownButton.eq(0).parent().next().children().first().children();
    var singleItemSelectColor = dropdownButton.eq(1).parent().next().children().first().children();
    var singleItemSelectFabric = dropdownButton.eq(2).parent().next().children().first().children();
    var chairPrice = 0;
    var chairColorPrice = 0;
    var chairFabricPrice = 0;
    var transportPrice = 0;
    var transportPriceBox = $("#transport-price").eq(0).children().first();

    dropdownButton.on("click", function(){
        $(this).parent().next().toggle(100);
    });

    singleItemSelectName.on("click", function(){
        var chairName = $(this).data("chair");
        chairPrice = parseFloat($(this).data("chair-price"));
        $("#chair-name").html(chairName);
        $("#chair-price").html(chairPrice);
        var sum = chairPrice + chairFabricPrice + chairColorPrice + transportPrice;
        $("#chair-sum").html(sum);
        $(this).parent().parent().prev().children().first().html(chairName);
        $(this).parent().parent().prev().children().first().css("color","black");
        $(this).parent().parent().hide(100);


    });

    singleItemSelectColor.on("click", function(){
        var chairColor = $(this).data("color");
        chairColorPrice = parseFloat($(this).data("color-price"));
        $("#chair-color").html(chairColor);
        $("#color-price").html(chairColorPrice);
        var sum = chairPrice + chairFabricPrice + chairColorPrice + transportPrice;
        $("#chair-sum").html(sum);
        $(this).parent().parent().prev().children().first().html(chairColor);
        $(this).parent().parent().prev().children().first().css("color","black");
        $(this).parent().parent().hide(100);
    });

    singleItemSelectFabric.on("click", function(){
        var chairFabric = $(this).data("fabric");
        chairFabricPrice = parseFloat($(this).data("fabric-price"));
        $("#chair-fabric").html(chairFabric);
        $("#fabric-price").html(chairFabricPrice);
        var sum = chairPrice + chairFabricPrice + chairColorPrice + transportPrice;
        $("#chair-sum").html(sum);
        $(this).parent().parent().prev().children().first().html(chairFabric);
        $(this).parent().parent().prev().children().first().css("color","black");
        $(this).parent().parent().hide(100);
    });

    $("#transport").on("click", function(){
        var transportInCheckoutName = $("#transport-yes").eq(0).children().first();
        transportInCheckoutName.toggle();
        transportPriceBox.toggle();
        if(transportInCheckoutName.css("display") === "none"){
            transportPrice = 0;
        }
        else{
            transportPrice = parseInt($("#transport").data("transport-price"));
            transportPriceBox.html(transportPrice);
        }
        var sum = chairPrice + chairFabricPrice + chairColorPrice + transportPrice;
        $("#chair-sum").html(sum);
    });

});