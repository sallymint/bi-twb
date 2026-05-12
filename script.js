//----------------------------------------------------------------------------
var aktualniObrazek = 0;

var obrazky = new Array();
obrazky[0] = "https://img.magnific.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389976.jpg?semt=ais_hybrid&w=740&q=80";
obrazky[1] = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
obrazky[2] = "https://www.naturepl.com/siteowner/pages/pageimages/aboutmain/about-main.jpg";

var popisky = new Array();
popisky[0] = "1";
popisky[1] = "2";
popisky[2] = "3";

//----------------------------------------------------------------------------
function zmenObrazek(smer) {
  aktualniObrazek = aktualniObrazek + smer;

  if (aktualniObrazek < 0) {
    aktualniObrazek = obrazky.length - 1;
  }

  if (aktualniObrazek >= obrazky.length) {
    aktualniObrazek = 0;
  }

  document.getElementById("galerie").src = obrazky[aktualniObrazek];
  document.getElementById("popisek").innerHTML = popisky[aktualniObrazek];
}

//===================================================================================================
function kontrolaFormulare() {
  var jmeno = document.forms["kontakt"]["jmeno"].value;
  var email = document.forms["kontakt"]["email"].value;
  var zprava = document.forms["kontakt"]["zprava"].value;

  if (jmeno == "" || email == "" || zprava == "") {
    alert("Vyplnte prosim vsechna pole formulare.");
    return false;
  }

  alert("Formular byl ukazkove odeslan. Ve skutecnosti se nikam neposila.");
  return false;
}
//----------------------------------------------------------------------------