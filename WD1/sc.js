menu.onclick = function MyFunction(){
    var x = document.getElementById("Mytopnav");
    var y = document.getElementById("Mygalary");
    if (x.className === "topnav"){
        x.className+=" responsive";
    } else {
        x.className="topnav";
    }
    if (y.className === "pict"){
        y.className+=" active";
    } else {
        y.className="pict";
    }
    
    }