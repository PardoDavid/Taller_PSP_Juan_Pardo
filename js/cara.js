const lanzacara=document.getElementById('cara')

lanzacara.addEventListener('click',()=>
{    
    apos=document.getElementById('apos').value
    apos=parseInt(apos) 
    cara=document.getElementById('cara').value
    
    let total=0;
    let acu=0;
    let cont=0;
    opc=confirm('Desea comenzar a jugar?');
    
    while(opc==true){
    alert('¡¡¡¡¡Se hace el lanzamiento de la moneda!!!!')
    random=Math.floor(Math.random() *2) +1;
    random=parseInt(random)
    if(cara==random)
    {        
        alert("A caido cara")    
        alert(`Usted ha ganado`)        
        acu=(parseInt(acu+(apos*2)));
        alert(acu)        
    }  
    else
    {
        alert("A caido sello")    
        alert(`Usted ha perdio`)        
        acu=(parseInt(acu-apos));
        alert(acu)        
    }
    cont=cont+1;
    opc=confirm('Desea seguir jugando');
    }
    total=total+acu;
    alert(`Su dinero total fue de ${total}`)
    alert(`La cantidad de veces que usted jugo fue de ${cont}`)
})