let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#cara");
let flipBtn_2 = document.querySelector("#sello");
let resetBtn = document.querySelector("#reset-button");
let cont=0;
let acu=0;
let total=0;
let apu= document.querySelector("#apos");
let opc = document.querySelector("#cara");
let opcion = document.querySelector("#sello");
flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    cont++
    coin.style.animation = "none";
    let opc1=parseInt(opc.value)
    let apu1=parseInt(apu.value)
    total=total+apu1;
     
    if(i){
        coin.style.animation = "spin-heads 3s forwards";
        setTimeout(function(){
            if(i===opc1)
        {                   
        acu=acu=(parseInt(acu+(apu1*2)));
        swal("Ha ganado", "Ha caido cara, su acumulado es de "+acu);                 
        }         
        }, 4000);
        heads++;
    }
    else{
        coin.style.animation = "spin-tails 3s forwards";
        setTimeout(function(){
            if(i!==opc1)
            {              
                acu=(parseInt(acu-apu1));                                           
                swal("Ha Perdido", "Ha caido sello, su acumulado es de "+acu);                            
            }         
        }, 4000);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

flipBtn_2.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    cont++
    coin.style.animation = "none";
    let opcion1=parseInt(opcion.value)
    let apuesta1=parseInt(apu.value)
    total=total+apuesta1;
    
     
    if(i){
        coin.style.animation = "spin-tails 3s forwards";
        setTimeout(function(){
            if(i!==opcion1)
        {                                                         
            acu=(parseInt(acu+(apuesta1*2)));
            swal("Ha ganado" , "Ha caido sello, su acumulado es de "+acu);                   
        }         
        }, 4000);
        heads++;
    }
    else{
        coin.style.animation = "spin-heads 3s forwards";
        setTimeout(function(){
            if(i!==opcion1)
            {                                                         
                acu=(parseInt(acu-apuesta1));                                           
                swal("Ha Perdido", "Ha caido cara, su acumulado es de "+acu);                 
            }         
        }, 4000);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});


function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click",() => {    
    
    swal("Usted jugo "+cont+" veces y su dinero total fue "+total)
});

