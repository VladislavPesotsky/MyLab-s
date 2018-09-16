var check=false;
function action(){
    var fun,a,b,l,e1,e2,x,y,z,f_y,f_z,a1,z1,xEnd,f_min,output,L=-5;
    fun=2*x*x-12*x;
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    l=document.getElementById("l").value;
    e1=document.getElementById("e1").value;
    e2=document.getElementById("e2").value;
    a=Number(a);
    b=Number(b);
    l=Number(l);
    e1=Number(e1);
    e2=Number(e2);
    while(1){
    z=(a+b+l)/2;
    y=(a+b-l)/2;
    f_y=2*y*y-12*y;
    f_z=2*z*z-12*z;
    L=Math.abs(b)-Math.abs(a);
    console.log(f_y);
    console.log(f_z);
    if(f_y<f_z){
        a=a;
        b=z;
        L=Math.abs(b)-Math.abs(a);
        if(L>e1 && L<e2){
            xEnd=(a+b)/2;
            f_min=2*xEnd*xEnd-12*xEnd;
        alert("Интервал минимума ["+a+";"+b+"]; "+"Точка минимума: "+xEnd+"; Глобальный минимум: "+f_min);
            return 1;
                        }
               }
    else if(f_y>f_z){
            a=y;
            b=b;
            L=Math.abs(b)-Math.abs(a);
        if(L>e1 && L<e2){
             xEnd=(a+b)/2;
            f_min=2*xEnd*xEnd-12*xEnd;
        alert("Интервал минимума ["+a+";"+b+"]; "+"Точка минимума: "+xEnd+"; Глобальный минимум: "+f_min);
            return 1;
                        }
        }
    else{
        alert("Error");
        return 1;
    }
        
    }
            
    }
function example(){
    var p;
    p=document.getElementById("example");
    if(p.style.visibility=="hidden"){
         p.style.visibility = "visible";
    }
    else{
         p.style.visibility ="hidden";
    }    
}
function algoritm(){
    var r;
    r=document.getElementById("algoritm");
    if(r.style.visibility=="hidden"){
         r.style.visibility = "visible";
    }
    else{
         r.style.visibility ="hidden";
    }    
}