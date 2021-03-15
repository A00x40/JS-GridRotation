var container = document.createElement("div");
container.id = "btns";
document.body.appendChild(container);

var btnsArr = [] ;
for(var i=1 ; i < 10; i++) {
    var btn = document.createElement("Button");
    btn.id = "btn"+i;
    btn.innerHTML = i;
    
    document.getElementById("btns").appendChild(btn);
    
    btnsArr.push( btn ); 
}


var btnsMatrix = [];
while(btnsArr.length) {
    btnsMatrix.push(btnsArr.splice(0,3));
}

var TempGrid = [];
    
for(var i=0 ; i < 3; i++) {
    var TempArr = [];
    for(var j=0 ; j < 3; j++) {
        TempArr.push( 0 );
    }
    TempGrid.push( TempArr );
}

btnsMatrix[1][1].onclick = function() {
        
    TempGrid[0][0] = btnsMatrix[1][0].innerHTML;
    TempGrid[0][1] = btnsMatrix[0][0].innerHTML;
    TempGrid[0][2] = btnsMatrix[0][1].innerHTML;
    TempGrid[1][0] = btnsMatrix[2][0].innerHTML;
    TempGrid[1][1] = btnsMatrix[1][1].innerHTML;
    TempGrid[1][2] = btnsMatrix[0][2].innerHTML;
    TempGrid[2][0] = btnsMatrix[2][1].innerHTML;
    TempGrid[2][1] = btnsMatrix[2][2].innerHTML;
    TempGrid[2][2] = btnsMatrix[1][2].innerHTML;
    
    for(var i=0 ; i < 3; i++) 
        for(var j=0 ; j < 3; j++) 
            btnsMatrix[i][j].innerHTML = TempGrid[i][j];
}