// $("#rPocket3").hover(function() {
//     $(this).css("background-color", "#C17474");

//     if ($(this).has)
// });


$("#pPocket1").on({
    mouseenter: function(){
      $(this).css("background-color", "#E29E38");
      $("#pPocket2").css("background-color", "#E29E38");
    },
    mouseleave: function(){
      $(this).css("background-color", "#FCAF3B");
      $("#pPocket2").css("background-color", "#FCAF3B");
    }
});

$("#aPocket").on({
    mouseenter: function(){
      $(this).css("background-color", "#7A9A7D");
    },
    mouseleave: function(){
      $(this).css("background-color", "#91B995");
    }
});

$("#cPocket").on({
    mouseenter: function(){
      $(this).css("background-color", "#6597C6");
    },
    mouseleave: function(){
      $(this).css("background-color", "#7FC1FD");
    }
});

$("#rPocket1").on({
    mouseenter: function(){
      $("#rPocket3").css("background-color", "#C17474");
    },
    mouseleave: function(){
      $("#rPocket3").css("background-color", "#E98989");
    }
});

$("#rPocket3").on({
    mouseenter: function(){
      $(this).css("background-color", "#C17474");
    },
    mouseleave: function(){
      $(this).css("background-color", "#E98989");
    }
});