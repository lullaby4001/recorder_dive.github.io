const diveLinker = new DiveLinker("dive");

window.onload = function(){
    diveLinker.enableBlock(false);
    diveLinker.start();
    
}

var answer1 = 0;

console.log(diveWorld.outputList.outA.value);
console.log(diveWorld.outputList.outB.value);
console.log(diveWorld.outputList.outC.value);

setInterval(()=>{
    if (diveWorld.outputList.click.value == 1){
        diveWorld.outputList.click.value = 0;
        if (diveWorld.outputList.outA.value == 2){
            answer1 +=1;
        }
        if (diveWorld.outputList.outB.value == 3){
            answer1 +=1;
        }
        if (diveWorld.outputList.outC.value == 1){
            answer1 +=1;
        }
        console.log(answer1);
    }
},50)

console.log(diveWorld.outputList.click.value);