window.onload = function(){
    let maze_borders = document.getElementById('game').getElementsByClassName('boundary')
    let start_btn = document.getElementById('start')
    let end_btn = document.getElementById('end')
    let loser = "You lost! Move your mouse over the S to try again."
    let winner = "Congratulations, you won! Move your mouse over the S to play again."
    let status = document.getElementById('status')
    let game_status = "Avoid touching the walls... "
    let initial_status = "Begin by moving your mouse over the S."

    
    function colorWallsRed(){
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].style.backgroundColor = "red";
        }
    }

    function colorWallsGray(){
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].style.backgroundColor = "#eeeeee";
        }
    }

    function checkRedWalls(){
        if (document.getElementById('boundary1').style.backgroundColor = "red"){
            return true;
        }
    }

    start_btn.addEventListener("onclick", colorWallsGray)

    start_btn.addEventListener("mouseover", function(){
        if (checkRedWalls()){
            colorWallsGray();
        }
    })

    for (var i = 0; i<maze_borders.length; i++){
        maze_borders[i].addEventListener("mouseover", colorWallsRed)
    }
}