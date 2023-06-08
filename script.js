function validation() {
    let x=Number(document.getElementById("box").value);
    
    for ( i=0; i <= x; i++){
        document.getElementById("demo").innerHTML+= "<br>"+ i;
    }
}

function validate() {
    let x=Number(document.getElementById("box1").value);
    let i=0;
    while ( i < x){
        i++
        document.getElementById("demo1").innerHTML+= "<br>"+ i;
    }
}

