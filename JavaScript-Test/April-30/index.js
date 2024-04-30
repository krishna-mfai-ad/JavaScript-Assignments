var countbox=document.getElementById("countBox")
var shapebox=document.getElementById("shapeBox")

var count=0;
function clicking(){
    count=count+1;
    countbox.textContent="Count = " + count ;
    if(count%2==0){
        shapebox.style="height:100px; width:100px; transition:all 0.3s;"
    }
    else if(count%5==0){
        shapebox.style="height:100px; width:100px; border-radius:50%;transition:all 0.3s;"
    }
    else{
        shapebox.style="height: 100px; width: 300px;transition:all 0.3s;"
    }

    if(shapebox.style=="background-color:blue"){
        shapebox.style="background-color:blue;"
    }
    
}
function reseting(){
    count=0
    countbox.textContent="Count = 0" ;
    shapebox.style="height: 100px; width: 300px; background-color:black"
}
function changetoBlue(){
    shapebox.style="background-color:blue;"
}
function changetoRed(){
    shapebox.style="background-color:red"
}