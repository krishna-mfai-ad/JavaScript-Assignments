var waterOne = document.getElementById("waterOne");
var tapOne=document.getElementById("tapOne")
var flowOne=document.getElementById("flowOne")
var tapStatus="OFF"
var waterFlowStatus="ON"
flowOne.style.display="none"
var HW1=250
var stopWater="ON"
var bottomWater=document.getElementById("bottomWater")
var HBW0

function onTapOne(){
   if(tapStatus=="OFF"){
    tapStatus="ON"
    if(HW1>0){
      flowOne.style.display="block"
      var waterDecrease=setInterval(function(){
        HW1=HW1-1
        waterOne.style.height=HW1+"px"
        if(HW1==0 || waterFlowStatus=="OFF" || stopWater=="OFF"){
          clearInterval(waterDecrease);
          flowOne.style.display="none"
          waterFlowStatus="ON"
          stopWater="ON"
        }

      },30)
    }
    if(tapStatus=="ON"){
      var increasewater1= setInterval(function(){
        HBW=HBW+0.5
        bottomWater.style.height=HBW+"px"
        if(tapStatus=="OFF" || waterOne.style.height=="0px"){
          clearInterval(increasewater1)
        }
      },100)
    }
    }
  
    else if(tapStatus=="ON") {
      tapStatus="OFF"
      stopWater="OFF"
      flowOne.style.display="none"
   }
  }
  

// tap-2

var waterTwo=document.getElementById("waterTwo")
var tapTwo=document.getElementById("tapTwo")
var flowTwo=document.getElementById("flowTwo")
var tapTwoStatus="OFF"
var waterFlowStatus2="ON"
flowTwo.style.display="none"
var HWTwo=250
var stopwater2="ON"
var bottomWater2=document.getElementById("bottomWater")
var HBW=0
function onTapTwo() {
  if(tapTwoStatus=="OFF"){
     tapTwoStatus="ON"
     if(HWTwo>0){
      flowTwo.style.display="block"
      var waterDecrease2=setInterval(function () {
        HWTwo=HWTwo-1
        waterTwo.style.height=HWTwo+"px"; 
        if(HWTwo==0 || waterFlowStatus2=="OFF" || stopwater2=="OFF"){
          clearInterval(waterDecrease2);
          flowTwo.style.display="none"
          waterFlowStatus2="ON"
          stopwater2="ON"
        }
       
      },30)
     }
     if(tapTwoStatus=="ON"){
      var increasewater2= setInterval(function(){
        HBW=HBW+0.5
        bottomWater2.style.height=HBW+"px"
        if(tapTwoStatus=="OFF" || waterTwo.style.height=="0px"){
          clearInterval(increasewater2)
        }
      },100)
    }
  }
  else if(tapTwoStatus=="ON"){
    tapTwoStatus="OFF"
    stopwater2="OFF"
    flowTwo.style.display="none"
  }
}

// // tap-3

var waterThree=document.getElementById("waterThree")
var tapThree=document.getElementById("tapThree")
var flowThree=document.getElementById("flowThree")
var tapThreeStatus="OFF"
var waterFlowStatus="ON"
flowThree.style.display="none"
var HWThree=250
var bottomWater3=document.getElementById("bottomWater")
var HBW=0
var stopwater="ON"
function onTapThree() {
  if(tapThreeStatus=="OFF"){
     tapThreeStatus="ON"
     if(HWThree>0){
      flowThree.style.display="block"
      var waterDecreaseThree=setInterval(function () {
        HWThree=HWThree-1
        waterThree.style.height=HWThree+"px"
        if(HWThree==0 || waterFlowStatus=="OFF" || stopwater=="OFF"){
          clearInterval(waterDecreaseThree);
          flowThree.style.display="none"
          waterFlowStatus="ON"
          stopwater="ON"
        }
      },30)
     }
     if(tapThreeStatus=="ON"){
      var increasewater3= setInterval(function(){
        HBW=HBW+0.5
        bottomWater3.style.height=HBW+"px"
        if(tapThreeStatus=="OFF"|| waterThree.style.height=="0px"){
          clearInterval(increasewater3)
        }
      },100)
    }
     
  }
  else if(tapThreeStatus=="ON"){
    tapThreeStatus="OFF"
    stopwater="OFF"
    flowThree.style.display="none"
  }
}


