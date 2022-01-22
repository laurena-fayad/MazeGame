window.onload = function(){
    let maze_borders = document.getElementById('game').getElementsByClassName('boundary');
    let maze_border1 = document.getElementById('boundary1');
    let start_btn = document.getElementById('start');
  
    start_btn.addEventListener("click", function() {
        //Resets maze color if it is red

        for (var i=0; i<maze_borders.length; i++){
            if(maze_borders[i].style.borderColor = "red"){
               maze_borders[i].style.borderColor = "black";
            }
            maze_borders[i].addEventListener("mouseover", function(){
                for (var i=0; i<maze_borders.length; i++){
                    maze_borders[i].style.borderColor = "red";
                }
            })
        }
    })
}