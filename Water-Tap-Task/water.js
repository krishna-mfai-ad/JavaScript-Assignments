var tapOpenBtnEl = document.getElementById("openClose");
var waterFlow = document.getElementById("waterFlow");

var watersEl = document.getElementById("water")
var tapstatus = "OFF";

waterFlow.style.backgroundColor="White";

var H = 250;
var MT =0;

var flow = "ON";

function opentap(){


    if(tapstatus=="OFF"){
        tapOpenBtnEl.style.backgroundColor="green";
        tapstatus = "ON";
        watersEl.style.borderTopLeftRadius = "0px";
        watersEl.style.borderTopRightRadius = "0px";
    
        if(H>0){
        waterFlow.style.backgroundColor="lightblue";
        var intervalIdEl = setInterval(function(){
            H = H-1;
            MT = MT+1;
            watersEl.style.height = H+"px";
            watersEl.style.marginTop = MT+"px";
                if(H===0 || MT===500|| flow=="OFF"){
                    clearInterval(intervalIdEl);
                    waterFlow.style.backgroundColor="White";
                    flow = "ON";
                    }
        },50);
        
    }
        
    }
    else if(tapstatus=="ON"){
        flow = "OFF";
        tapOpenBtnEl.style.backgroundColor="red";
        tapstatus = "OFF";
        waterFlow.style.backgroundColor="White";
    }
   



}