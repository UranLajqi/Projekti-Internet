$(document).ready(function(){
  $("#Fshehi").click(function(){
    $(".fshehja").hide(500);
  });
  $("#Shfaqi").click(function(){
    $(".fshehja").show(500);
  });
});

$(document).ready(function(){
  $("button").click(function(){
   	$("#Amazon").fadeToggle("fast");
  });
  });

$(document).ready(function(){
  $("#butt").click(function(){
    $("#Kompanit").hide("slow", function(){
      alert("U fshehen");
    });
  });
});


  var puntori = {
    Mosha: 50,
    Provoja: 15,
    Emri: "Hasan",
    Mbiemri: "Berisha",
    emriMbiemri : function() {
      return this.Emri + " " + this.Mbiemri;
    }
  };
  document.getElementById("puntori1").innerHTML =
  puntori.emriMbiemri() + " ne moshen " + puntori.Mosha + " vjet ka provoje pune "+ puntori.Provoja + " vjet.";
 
  function Puntori(emri, mbiemri, mosha, provoja) {
    this.emri = emri;
    this.mbiemri = mbiemri;
    this.mosha = mosha;
    this.provoja = provoja;
  }

  var PuntoriDyte = new Puntori("Blerim", "Krasniqi", 30, 2);
  document.getElementById("puntori2").innerHTML =
  PuntoriDyte.emri+ " " + PuntoriDyte.mbiemri + " ne moshen " + PuntoriDyte.mosha + " vjet ka provoje pune "+ PuntoriDyte.provoja + " vjet";


  var PuntoriTrete = new Puntori("Halil", "Mehmeti", 44, 5);
  document.getElementById("puntori3").innerHTML =
  PuntoriTrete.emri+ " " + PuntoriTrete.mbiemri + " ne moshen " + PuntoriTrete.mosha + " vjet ka provoje pune "+ PuntoriTrete.provoja + " vjet";

  var PuntoriKatert = new Puntori("Jehona", "Rexha", 20, 1);
  document.getElementById("puntori4").innerHTML =
  PuntoriKatert.emri+ " " + PuntoriKatert.mbiemri + " ne moshen " + PuntoriKatert.mosha + " ka provoje pune "+ PuntoriKatert.provoja + " vjet";
