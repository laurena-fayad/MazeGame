window.onload = function(){
    let maze_borders = document.getElementsByClassName('Boundary');
    let maze_border1 = document.getElementById('boundary1');
    let start_btn = document.getElementById('start');
  
    start_btn.addEventListener("click", function() {

        if(maze_border1.style.borderColor = "red")
        {
            maze_border1.style.borderColor = "black";
        }

        maze_border1.addEventListener("mouseover", function(){
            maze_border1.style.borderColor = "red";
        })
    })
}