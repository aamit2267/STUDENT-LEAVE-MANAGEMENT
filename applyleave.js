function fromCheckDate(){
    var date = new Date();
    var dfrom = document.getElementById("dfrom").value;
    var dfrom = new Date(dfrom);
    if(dfrom <= date){
        alert("You can not select past date or today's date");
        document.getElementById("dfrom").value = "";
    }
}
function toCheckDate(){
    var date = new Date();
    var dto = document.getElementById("dto").value;
    var dto = new Date(dto);
    if(dto <= date || dto < new Date(document.getElementById("dfrom").value)){
        alert("You can not select past date or today's date or less than from date.");
        document.getElementById("dto").value = "";
    }
}