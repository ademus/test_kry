var url_send_reponse =  "/fr/le-cafe/activites/555/messages";
var url_tracking = "/fr/tracking/activities/555";


var date_finale_str = '2016-03-02T20:00:00'; //Y-m-d H:m:s
var date_finale = new Date(date_finale_str); //Y-m-d H:m:s
var debut_hour = '12' // le jeu commence à 12H


http://jdp-dev.initialmedia.fr/fr/le-cafe/activites/511/messages
largeur = 340;// largeur image mystere
hauteur = 439;
nbre_col = 7; // nbre de colonne du jeu
nbre_row = 8;



var cases = new Array();
cases[1] = new Array(); // 1er jour
cases[2] = new Array(); // 2e jour
cases[3] = new Array(); 
cases[4] = new Array(); 
cases[5] = new Array(); 
cases[6] = new Array(); 
cases[7] = new Array(); 

cases[1][1] ={"id":1, "x":1,"y":1}; // 1er jour, 1ére heure
cases[1][2] ={"id":2, "x":3,"y":2}; // 1er jour, 2éme heure
cases[1][3] ={"id":3, "x":3,"y":6}; 
cases[1][4] ={"id":4, "x":4,"y":1}; 
cases[1][5] ={"id":5, "x":6,"y":2}; 
cases[1][6] ={"id":6, "x":7,"y":1}; 
cases[1][7] ={"id":7, "x":1,"y":5}; 
cases[1][8] ={"id":8, "x":2,"y":8}; 

cases[2][1] ={"id":9, "x":2,"y":1}; // 2er jour, 1ére heure
cases[2][2] ={"id":10, "x":5,"y":8}; // 2er jour, 2éme heure
cases[2][3] ={"id":11, "x":1,"y":3}; 
cases[2][4] ={"id":12, "x":1,"y":8}; 
cases[2][5] ={"id":13, "x":5,"y":1}; 
cases[2][6] ={"id":14, "x":7,"y":4}; 
cases[2][7] ={"id":15, "x":1,"y":6}; 
cases[2][8] ={"id":16, "x":7,"y":8}; 

cases[3][1] ={"id":17, "x":3,"y":1}; 
cases[3][2] ={"id":18, "x":1,"y":2}; 
cases[3][3] ={"id":19, "x":7,"y":2}; 
cases[3][4] ={"id":20, "x":2,"y":7}; 
cases[3][5] ={"id":21, "x":6,"y":1}; 
cases[3][6] ={"id":22, "x":6,"y":8}; 
cases[3][7] ={"id":23, "x":3,"y":8}; 
cases[3][8] ={"id":24, "x":7,"y":6}; 

cases[4][1] ={"id":25, "x":3,"y":5}; 
cases[4][2] ={"id":26, "x":5,"y":2}; 
cases[4][3] ={"id":27, "x":4,"y":8}; 
cases[4][4] ={"id":28, "x":1,"y":4}; 
cases[4][5] ={"id":29, "x":6,"y":7}; 
cases[4][6] ={"id":30, "x":1,"y":7}; 
cases[4][7] ={"id":31, "x":7,"y":5}; 
cases[4][8] ={"id":32, "x":2,"y":2}; 

cases[5][1] ={"id":33, "x":4,"y":7}; 
cases[5][2] ={"id":34, "x":4,"y":2}; 
cases[5][3] ={"id":35, "x":2,"y":6}; 
cases[5][4] ={"id":36, "x":7,"y":7}; 
cases[5][5] ={"id":37, "x":3,"y":3}; 
cases[5][6] ={"id":38, "x":7,"y":3}; 
cases[5][7] ={"id":39, "x":3,"y":7}; 
cases[5][8] ={"id":40, "x":2,"y":4}; 

cases[6][1] ={"id":41, "x":5,"y":7}; 
cases[6][2] ={"id":42, "x":4,"y":4}; 
cases[6][3] ={"id":43, "x":4,"y":6}; 
cases[6][4] ={"id":44, "x":2,"y":3}; 
cases[6][5] ={"id":45, "x":6,"y":3}; 
cases[6][6] ={"id":46, "x":6,"y":6}; 
cases[6][7] ={"id":47, "x":2,"y":5}; 
cases[6][8] ={"id":48, "x":4,"y":3}; 

cases[7][1] ={"id":49, "x":3,"y":4}; 
cases[7][2] ={"id":50, "x":6,"y":4}; 
cases[7][3] ={"id":51, "x":4,"y":5}; 
cases[7][4] ={"id":52, "x":6,"y":5}; 
cases[7][5] ={"id":53, "x":5,"y":3}; 
cases[7][6] ={"id":54, "x":5,"y":5}; 
cases[7][7] ={"id":55, "x":5,"y":6}; 
cases[7][8] ={"id":56, "x":5,"y":4}; 

cases[0] = new Array(); 
cases[0][0] ={"id":56, "x":150,"y":140}; // case dessinée qd le jeu n a pas commencée; sera déssinée hors le canvas