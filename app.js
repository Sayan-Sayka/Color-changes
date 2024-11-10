// array -> [number,string,boolean,null]
var num = [2424,4,23,133,23242,4,"hi","ro",3454,23];
console.log(num);
// index -> element position (0,1,2,3...)
console.log(num[num.length-1]);
console.log(num[0]);
for(var i=0; i<=num.length-1; i++){
    console.log(num[i]);
}

var n = [3,4,5,6,10];
console.log(n[0]*n[n.length-1]);

var a = [345,62,5462,54,6347];
for(i=0; i<=(a.length-1); i++){
    if(a[i]%2==0){
        console.log(a[i]+" is even");
    }else{
        console.log(a[i]+" is odd");
    }
}

var b = [1,2,3,4,5,6,7,8,9,11];
var sum = 0;
var mul = 1;
for(i=0; i<=(b.length-1); i++){
    sum=b[i]+sum;
    mul=b[i]*mul;
}
console.log("the sum is "+sum+" and the answer of multiplication is "+mul);

var n = [3,-5,8,-10,11];
var random=Math.floor(Math.random()*(n.length-1));
console.log(n[random]);

var body = document.getElementsByTagName("body")[0];
var colors = ['orange','red','aqua','green','yellow'];
var next=document.querySelector('.next');
var preview=document.querySelector('.preview');
var s;
var autoBtn=document.querySelector('.automatic');
var stopBtn=document.querySelector('.stop');
var white = 'white'
var i=-1;
function change(){
    i++;
    
    if(i>(colors.length-1)){
        i=0;
    }
    next.innerText=colors[i];
    body.style.backgroundColor=colors[i];
    
}
function Repeat(){
    i--;
    if(i==-1){
        i=colors.length-1;
    }
    preview.innerText=colors[i];
    body.style.backgroundColor=colors[i];
}
// setTimeout -> function works how much time later
function auto(){
    i++;
    if(i>(colors.length-1)){
        i=0;
    }
    body.style.backgroundColor=colors[i];
    s=setTimeout(auto,1000);
    autoBtn.disabled=true;
    stopBtn.disabled=false;

}
function stop(){
    clearTimeout(s);
    autoBtn.disabled=false;
    stopBtn.disabled=true;
}

