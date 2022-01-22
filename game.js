window.onload = function(){
    let maze_borders = document.getElementById('game').getElementsByClassName('boundary');
    let start_btn = document.getElementById('start');
    let loser = "You lose! Move your mouse over the S to try again.";
    let status = document.getElementById('status');
    let initial_status = "Avoid touching the walls... ";
  
    start_btn.addEventListener("mouseover", function() {
        //Resets maze color if it is red

        for (var i=0; i<maze_borders.length; i++){
            if(maze_borders[i].style.borderColor = "red"){
               maze_borders[i].style.borderColor = "black";
               status.innerHTML= initial_status;
            }
            maze_borders[i].addEventListener("mouseover", function(){
                for (var i=0; i<maze_borders.length; i++){
                    maze_borders[i].style.borderColor = "red";
                    document.getElementById('status').innerHTML= loser;
                }
            })
        }
    })
}