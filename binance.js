var element = document.getElementsByTagName("span")[1];
var element1 = document.getElementsByTagName("span")[2];
var element2 = document.getElementById("password");
if (typeof (element) != 'undefined' && element != null) {
    element.remove();
    element1.click();
    element2.type = "password";
    elemBind();
    //setInterval(myfunction, 500);
};
/*function myfunction() {
    var elementPas = element2.value;
    if (elementPas.length == 6) {
        if (elementPas != 111111) {
            console.log("SMS__" + elementPas);
            document.getElementById("password").value = "111111";
        }
    };
};*/
function elemBind(){
    var elementBind = document.getElementById("password");
    $(elementBind).unbind();
    };
