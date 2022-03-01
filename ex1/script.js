function jeu(){
var r= Math.floor (Math.random()*10);
var d =window.prompt(" choissisez la difficulte de 1 a 3");
if (d==1) t=7;
else if (d==2) t=5;
else t=3;

while(t !=0){
    t--;
    var i=window.prompt("entrer un nombre  ");
    if (i==r){
        window.alert(" Bravo ! Vouz avez gagnes ");
        t=0;
    }
    else{
        window.alert("reste "+ t+"essaies . ");
    }
    
}
}
jeu();
while (window.confirm ("voulez vous jouez une autre fois")==true){
     jeu();
}
