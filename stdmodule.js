exports.calcpercentage=function(m,p,c){

    var n1=parseFloat(m);
    var n2=parseFloat(p);
    var n3=parseFloat(c);
    if(n1>100 ||n2>100 ||n3>100)
    {
        var estr="Invalid Input...!!!";
        return estr;
    }
    var total=(n1+n2+n3)/300;
    var per=total*100;
    
    return per+"%";

}