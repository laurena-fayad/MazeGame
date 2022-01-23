//Code will be executed after HTML content has fully loaded
window.onload = function(){

    //Variables to be used
    let boundary1 = document.getElementById("boundary1")
    let score = 0
    let maze_borders = document.getElementById('game').getElementsByClassName('boundary')
    let start_btn = document.getElementById('start')
    let end_btn = document.getElementById('end')
    let status = document.getElementById('status')
    let game_status = "Avoid touching the walls... "
    
    //Appending an instructions div to the body
    let instructions_div = document.createElement('div')
    instructions_div.innerHTML = '<h2>Click "S" at any time to reset the game.</h2>'
    document.body.appendChild(instructions_div)

    //Appending a score div to the body
    let score_div = document.createElement('div')
    score_div.innerHTML = '<h2 id = "score"> Score = 0 </h2>'
    document.body.appendChild(score_div)
    score_content = document.getElementById("score")

    //Function to color all the walls red
    function colorWallsRed(){
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].style.backgroundColor = "red";
        }
    }

    //Function to color all the walls gray
    function colorWallsGray(){
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].style.backgroundColor = "#eeeeee";
        }
    }

    //Function to color all the walls green
    function colorWallsGreen(){
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].style.backgroundColor = "green";
        }
    }

    //Function to reset the maze
    function resetMaze(){
        colorWallsGray()
        status.innerHTML = game_status
        score = 0
        score_content.innerHTML = "Score = " + score
    }

    function retry(){
        colorWallsGray()
        status.innerHTML = game_status
        score_content.innerHTML = "Score = " + score
    }


    //Function executed when the user loses if the walls are gray (neither red nor green)
    function youLose(){
        if (!(boundary1.style.backgroundColor == "red") && !(boundary1.style.backgroundColor == "green")){
            colorWallsRed()
            score  -= 10
            status.innerHTML = "You lost!" 
            score_content.innerHTML = "Score: " + score
        }
    }

    //Function executed when the user wins
    function youWin(){
        //If the user goes to E after already losing, a retry msg will be displayed
        if (boundary1.style.backgroundColor == "red"){
            status.innerHTML = "You already lost. Go back to S to retry."
        }else if (!(boundary1.style.backgroundColor == "green")){
            colorWallsGreen()
            score += 5
            status.innerHTML = "Great job, you won!"
            score_content.innerHTML = "Score: " + score
        }
    }

    //Game starts if the mouse hovers over the start btn
    start_btn.addEventListener("mouseover", function(){

        retry()

        //Calling the youLose function if the user touches any wall
        for (var i = 0; i<maze_borders.length; i++){
            maze_borders[i].addEventListener("mouseover", youLose)
        }

        //Calling the youWin function if the user gets to the end btn
        end_btn.addEventListener("mouseover", youWin)

        //Calling the resetMaze function if the user clicks the start btn
        start_btn.addEventListener("click", resetMaze)
    })
}