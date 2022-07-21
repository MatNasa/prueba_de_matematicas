function addUser() {
    //crea una variable que se llame player1_name que sea igual con document.getElementById("player1_name_input").value;
    var player1_name = document.getElementById("player1_name_input").value;
    //crea una variable que se llame player2_name que sea igual con document.getElementById("player2_name_input").value;
   var player2_name = document.getElementById("player2_name_input").value;
    //usa el comando localStorage.setItem( ) para almacenanar el valor de la variable player1_name con su respectiva clave en el almacenamiento local
      localStorage.setItem("player1_name", player1_name);
      //usa el comando localStorage.setItem( ) para almacenanar el valor de la variable player2_name con su respectiva clave en el almacenamiento local
      localStorage.setItem("player2_name", player2_name);
  //usa el comnado window.location para abril la pagina del juego "game_page.html"
   window.location = "game_page.html";   
  }

  