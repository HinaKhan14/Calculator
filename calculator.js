function getNum(num){
    var view = document.getElementById("input");
    view.value += num;
}
function clearBtn(){
 var view = document.getElementById("input");
 view.value = "";
}
function result(){
    var view = document.getElementById("input");
    view.value = eval(view.value);
}