document.addEventListener("click",function(event){
    var clicked = event.target.id;
    animations(clicked);
    var arr = ["pi","divides","seven","eight","nine","multiply","four","five","six","subtract","one","two",
                "three","add","exp","zero","decimal"];
    k = document.getElementById("div1").innerHTML;
    if (arr.includes(clicked)){
        updateExpression(k,clicked);
    }
    else if (clicked === "ac"){
        document.getElementById("div1").innerHTML = 0;
    }
    else if (clicked === "back"){
        k = k.slice(0,k.length-1);
        if(k.length==0){
            document.getElementById("div1").innerHTML = 0;
        }
        else{
            document.getElementById("div1").innerHTML = k;
        }
    }
    else if(clicked === "equals"){
        k = evaluateExpression(k);
    }
})
function animations(clicked){
    $("#"+clicked).addClass("animation");
  setTimeout(function () {
    $("#"+clicked).removeClass("animation");
  }, 100);
}
function updateExpression(k,clicked){
    if (k==="0"){
        k = "";
    }
    switch(clicked){
        case "pi" : k+="3.14";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "divides" : k+="/";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "seven" : k+="7";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "eight" : k+="8";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "nine" : k+="9";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "one" : k+="1";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "two" : k+="2";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "three" : k+="3";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "four" : k+="4";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "five" : k+="5";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "six" : k+="6";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "add" : k+="+";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "subtract" : k+="-";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "multiply" : k+="*";
                document.getElementById("div1").innerHTML = k;
                break;   
        case "exp" : k+="2.718";
                document.getElementById("div1").innerHTML = k;
                break;
        case "decimal" : k+=".";
                document.getElementById("div1").innerHTML = k;
                break;
        case "zero" : k+="0";
                document.getElementById("div1").innerHTML = k;
                 break;
    }
}
function evaluateExpression(k){
    document.getElementById("div1").innerHTML = eval(k);
} 
function calculate(a,b,c){
    switch(c){
        case '+': return (parseFloat(a) + parseFloat(b));
        case '-': return (parseFloat(a) - parseFloat(b));
        case '*': return (parseFloat(a) * parseFloat(b));
        case '/': return (parseFloat(a) / parseFloat(b));
    }
}