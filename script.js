// sliders
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");

// numbers (hidden)
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");

// values above the slider
var val1 = document.getElementById("val1");
var val2 = document.getElementById("val2");
var val3 = document.getElementById("val3");

var c1=4.8, c2=4.8, c3=2.4, profit=12;

// on sliding the first slider
slider1.oninput = function() {
    this.value=Math.min(this.value,this.parentNode.childNodes[5].value);
    var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
    var children = this.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    val1.style.width=value+'%';
    // for different screens
    if(screen.width >1000){
        if(value < 10)
            val2.style.left=10+'%';
        else if(value > 76)
            val2.style.left=75+'%';
        else
            val2.style.left=value+'%';
    }else if(screen.width >800){
        if(value < 13)
            val2.style.left=13+'%';
        else if(value > 68)
            val2.style.left=68+'%';
        else
            val2.style.left=value+'%';
    }else if(screen.width >600){
        if(value < 20)
            val2.style.left=20+'%';
        else if(value > 60)
            val2.style.left=60+'%';
        else
            val2.style.left=value+'%';
    }else if(screen.width >500){
        if(value < 30)
            val2.style.left=30+'%';
        else if(value > 50)
            val2.style.left=50+'%';
        else
            val2.style.left=value+'%';
    }else {
        val2.style.left=40+'%';
        val1.style.width=20+'%';
    }
    children[7].style.left=value-1+'%';
    val1.innerText = "$" + Number(((this.value / 100) * 12)).toFixed(2);
    c1 = Number(((this.value / 100) * profit).toFixed(2));
    changeVal2();
}

// determine the value 
function changeVal2(){
    val2.innerHTML = "$" + (((profit -( c1 + c3))).toFixed(2));
    c2 =  (((profit -( c1 + c3))).toFixed(2));
    number1.value= c1;
    number3.value= c3;
    number2.value= c2;
}

// on submit button
document.getElementById("sliderForm").onsubmit = function(e){
    // e.preventDefault()
    number1.value= c1;
    number3.value= c3;
    number2.value= c2;
    //alert("value1: $" + this.elements.number1.value + "   value2: $" + this.elements.number2.value+"   value3: $" + this.elements.number3.value)
    
    return c1;
    return c2;
    return c3;
    
    $('c1-value').text(c1);
}

// on sliding the second slider
slider2.oninput = function() {
    this.value=Math.max(this.value,this.parentNode.childNodes[3].value);
        var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
    var children = this.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    val2.style.right=(100-value)+'%';
    val3.style.width=(100-value)+'%';
    // for different screens
    if(screen.width >1000){
        if(value < 30){
            val3.style.width = "60%"
        }
    }else if(screen.width >700){
        if(value > 35){
            val2.style.right = "35%";
        }
        
        if(value < 40){
            val3.style.width = "20%"
        }
    }else{
        val2.style.right = "30%";        
        val3.style.width = "20%"
    }
    children[9].style.left=value+1+'%';
    c3 = Number(((profit - (this.value / 100) * profit)).toFixed(2));
    val3.innerText = "$" + Number(((profit - (this.value / 100) * profit))).toFixed(2);
    changeVal2();
    }
