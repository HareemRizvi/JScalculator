function getnum(num){
    var res=document.getElementById('result');
    res.value += num;
}
function getclear(){
    var clear=document.getElementById('result');
    clear.value="";
}
function getresult(){
    var result=document.getElementById('result');
    result.value=eval(result.value);
}