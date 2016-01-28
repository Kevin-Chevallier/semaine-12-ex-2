var getById = function(id){
  return document.getElementById(id);
}

var $infojeu = getById("infojeu");
var $infojoueur = getById("infojoueur");
var $jeu = getById("jeu");

var $x1 = getById("x1");
var $x2 = getById("x2");
var $x3 = getById("x3");

var $x1y1 = getById("x1y1");
var $x1y2 = getById("x1y2");
var $x1y3 = getById("x1y3");
var $x2y1 = getById("x2y1");
var $x2y2 = getById("x2y2");
var $x2y3 = getById("x2y3");
var $x3y1 = getById("x3y1");
var $x3y2 = getById("x3y2");
var $x3y3 = getById("x3y3");
var col_array = [$x1y1, $x1y2, $x1y3, $x2y1, $x2y2, $x2y3, $x3y1, $x3y2, $x3y3];

var $btn = getById('btn');


var $croix = document.createElement('i');
$croix.classList.add('fa');
$croix.classList.add('fa-times');

var $cercle = document.createElement('i');
$cercle.classList.add('fa');
$cercle.classList.add('fa-circle-o');


// variables logiques //
var debut_jeu = false;
var fin_jeu = true;
var count = 1;
var joueur_actuel;
var gagnant = 0;


//fonctions //
function afficher_joueur(){
  if(count % 2 == 0){
    joueur_actuel = 2;
    $infojoueur.innerHTML = "<h1> Joueur 2 (0) </h1>";
  }else{
    joueur_actuel = 1;
    $infojoueur.innerHTML = "<h1> Joueur 1 (X) </h1>";
  }
}

function afficher_fin(){
  $infojeu.innerHTML = "<h1> Gagné !</h1>";
  count = 1;
}


function verif_ligne(){
  if ($x1y1.hasChildNodes() && $x1y2.hasChildNodes() && $x1y3.hasChildNodes()){
    if ($x1y1.firstChild.className == $x1y2.firstChild.className && $x1y2.firstChild.className == $x1y3.firstChild.className){
      gagnant = joueur_actuel;
      $x1y1.style.backgroundColor = "lightblue";
      $x1y2.style.backgroundColor = "lightblue";
      $x1y3.style.backgroundColor = "lightblue";
      
      end();
    }
  }
  if ($x2y1.hasChildNodes() && $x2y2.hasChildNodes() && $x2y3.hasChildNodes()){
    if ($x2y1.firstChild.className == $x2y2.firstChild.className && $x2y2.firstChild.className == $x2y3.firstChild.className){
      gagnant = joueur_actuel;
      $x2y1.style.backgroundColor = "lightblue";
      $x2y2.style.backgroundColor = "lightblue";
      $x2y3.style.backgroundColor = "lightblue";
      
      end();
    }
  }
  if ($x3y1.hasChildNodes() && $x3y2.hasChildNodes() && $x3y3.hasChildNodes()){
    if ($x3y1.firstChild.className == $x3y2.firstChild.className && $x3y2.firstChild.className == $x3y3.firstChild.className){
      gagnant = joueur_actuel;
      $x3y1.style.backgroundColor = "lightblue";
      $x3y2.style.backgroundColor = "lightblue";
      $x3y3.style.backgroundColor = "lightblue";
      
      end();
    }
  }
}

function verif_col(){
  if ($x1y1.hasChildNodes() && $x2y1.hasChildNodes() && $x3y1.hasChildNodes()){
    if ($x1y1.firstChild.className == $x2y1.firstChild.className && $x2y1.firstChild.className == $x3y1.firstChild.className){
      gagnant = joueur_actuel;
      $x1y1.style.backgroundColor = "lightblue";
      $x2y1.style.backgroundColor = "lightblue";
      $x3y1.style.backgroundColor = "lightblue";
      
      end();
    }
  }
  if ($x1y2.hasChildNodes() && $x2y2.hasChildNodes() && $x3y2.hasChildNodes()){
    if ($x1y2.firstChild.className == $x2y2.firstChild.className && $x2y2.firstChild.className == $x3y2.firstChild.className){
      gagnant = joueur_actuel;
      $x1y2.style.backgroundColor = "lightblue";
      $x2y2.style.backgroundColor = "lightblue";
      $x3y2.style.backgroundColor = "lightblue";
      
      end();
    }
  }
  if ($x1y3.hasChildNodes() && $x2y3.hasChildNodes() && $x3y3.hasChildNodes()){
    if ($x1y3.firstChild.className == $x2y3.firstChild.className && $x2y3.firstChild.className == $x3y3.firstChild.className){
      gagnant = joueur_actuel;
      $x1y3.style.backgroundColor = "lightblue";
      $x2y3.style.backgroundColor = "lightblue";
      $x3y3.style.backgroundColor = "lightblue";
      
      end();
    }
  }
}

function verif_diag(){
  if ($x1y1.hasChildNodes() && $x2y2.hasChildNodes() && $x3y3.hasChildNodes()){
    if ($x1y1.firstChild.className == $x2y2.firstChild.className && $x2y2.firstChild.className == $x3y3.firstChild.className){
      gagnant = joueur_actuel;
      $x1y1.style.backgroundColor = "lightblue";
      $x2y2.style.backgroundColor = "lightblue";
      $x3y3.style.backgroundColor = "lightblue";
      
      end();
    }
  }
  if ($x1y3.hasChildNodes() && $x2y2.hasChildNodes() && $x3y1.hasChildNodes()){
    if ($x1y3.firstChild.className == $x2y2.firstChild.className && $x2y2.firstChild.className == $x3y1.firstChild.className){
      gagnant = joueur_actuel;
      $x1y3.style.backgroundColor = "lightblue";
      $x2y2.style.backgroundColor = "lightblue";
      $x3y1.style.backgroundColor = "lightblue";
      
      end();
    }
  }
}

function end(){
  debut_jeu = false;
  fin_jeu = true;
  joueur_actuel = null;
  count = 1;
  afficher_fin();
}

function reinit_grille(){
  for(i=0; i < col_array.length; i++){
    if(col_array[i].firstChild != null){
      col_array[i].removeChild(col_array[i].firstChild);
      col_array[i].style.backgroundColor = "white";
    }

  }

}

function ajout_croix(e){

  if(e.target.hasChildNodes() == false && (e.target.className !== "fa fa-times" && e.target.className !== "fa fa-circle-o")){
    e.target.appendChild($croix.cloneNode());
    verif_ligne();
    verif_col();
    verif_diag();
    count++;
  }else{
    $infojeu.innerHTML = "<h1> Case déjà occupée </h1>"
  }
}

function ajout_cercle(e){
  if(e.target.hasChildNodes() == false && (e.target.className != "fa fa-times" && e.target.className != "fa fa-circle-o")){
    e.target.appendChild($cercle.cloneNode());
    verif_ligne();
    verif_col();
    verif_diag();
    count++;
  }else {
    $infojeu.innerHTML = "<h1>  Case déjà occupée </h1>"
  }
}



function play(e){
  if (debut_jeu){

    if(count > col_array.length - 1){
        ajout_croix(e);
        end();
        
      } else {
        if(joueur_actuel == 1){
          ajout_croix(e);
        } else {
          ajout_cercle(e);
        }
        if(fin_jeu == false){
          afficher_joueur();
        }else{
          infojoueur.innerHTML = "";
        }
      }
    }else{
      $infojeu.innerHTML = "<h1> cliquez sur 'Commencer' pour jouer </h1>"
   
    }


}
function ajout_actions_grille(){
  for (i = 0; i < col_array.length; i++){
    col_array[i].addEventListener('click', play, false);
  }
}

function start() {
  reinit_grille();
  ajout_actions_grille();
  count = 1;
  gagnant = 0;
  debut_jeu = true;
  fin_jeu = false;
  joueur_actuel = 1;
  afficher_joueur();
}

$btn.addEventListener('click', start, false);