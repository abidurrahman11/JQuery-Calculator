var resultField = $("#result");
function insertNumber(number){
    var existingNumbers = resultField.val();
    resultField.val(existingNumbers + number);
}

function clearNumbers(){
    resultField.val("");
}

function calculate(){
    var result = eval($("#result").val());
    resultField.val(result);
}

function deleteNumbers(){
    var presentValue = resultField.val();
    if(presentValue != ""){
        resultField.val(presentValue.slice(0, -1));
    }
}