const player1 = "x"
const player2 = "o"
var playTime = player1;
var gameOver = false;


atualizaMostrador();
inicializarEspacos();

function atualizaMostrador() {
    
    if(gameOver) {return}

    if(playTime == player1){

        var player = document.querySelectorAll("div#mostrador img")[0]
    player.setAttribute("Src", "x.jpeg");
    }else{

        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("Src", "o.jpeg");
    
    }


}


function inicializarEspacos(){

    var espacos = document.getElementsByClassName("espaco")
    for (var i = 0; i < espacos. length; i++){

        espacos [i].addEventListener("click",function(){

            if(gameOver) {return;}

            if( this.getElementsByTagName("img").length == 0){

                if(playTime == player1){

                    this.innerHTML = "<img src='x.jpeg'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;

                }else{

                    
                    this.innerHTML = "<img src='o.jpeg'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;

                    
                }
                atualizaMostrador();
                verificarVencedor();
            }
        });
    }
    
}