$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favoriteThing1 = $("input#f1").val();
    var favoriteThing2 = $("input#f2").val();
    var favoriteThing3 = $("input#f3").val();
    var favoriteThing4 = $("input#f4").val();
    var favoriteThing5 = $("input#f5").val();
    var favoriteThing6 = $("input#f6").val();
    var x;
    var favoriteArray = [];

    favoriteArray.push(favoriteThing1);
    favoriteArray.push(favoriteThing2);
    favoriteArray.push(favoriteThing3);
    favoriteArray.push(favoriteThing4);
    favoriteArray.push(favoriteThing5);
    favoriteArray.push(favoriteThing6);


  for(x=0;x<favoriteArray.length;x++){

  //  $("ul#favoriteList").append("<li>"+favoriteArray[x]+"</li>");
   }

   var fewArray = [];
   fewArray.push(favoriteArray[1]);
   fewArray.push(favoriteArray[0]);
   fewArray.push(favoriteArray[2]);

  $("ul#favoriteList").append("<li>"+favoriteArray[1]+"</li>");
  $("ul#favoriteList").append("<li>"+favoriteArray[0]+"</li>");
  $("ul#favoriteList").append("<li>"+favoriteArray[2]+"</li>");

  event.preventDefault();

    });
  });
