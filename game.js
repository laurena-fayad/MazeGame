window.onload = function(){
    let maze_borders = document.getElementById('game').getElementsByClassName('boundary')
    let start_btn = document.getElementById('start')
    let end_btn = document.getElementById('end')
    let status = document.getElementById('status')
    let game_status = "Avoid touching the walls... "
    
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

    function colorWallsGreen(){
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].style.backgroundColor = "green";
        }
    }

    function resetMaze(){
        colorWallsGray()
        status.innerHTML = game_status
    }

    function youLose(){
        colorWallsRed()
        status.innerHTML = "You lost! Score = -10"
    }

    function youWin(){
        if (document.getElementById("boundary1").style.backgroundColor == "red"){
            status.innerHTML = "You already lost. Click S to retry."
        }else{
            colorWallsGreen()
            status.innerHTML = "Great job, you won! Score = 5"
        }
    }

    start_btn.addEventListener("mouseover", function(){
        
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].addEventListener("mouseover", youLose)
        }
        start_btn.addEventListener("click", resetMaze)
        end_btn.addEventListener("mouseover", youWin)
    })
}