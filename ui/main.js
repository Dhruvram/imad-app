//counter code
var button = document.getElementById('counter');
var counter = 0;

button.oneclick=function (){
    
    
counter = counter+1;
var span = document.getElementById('count');
span.InnerHTML = counter.toString();
};

