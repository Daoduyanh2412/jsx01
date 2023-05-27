let greet =function(name){
    console.log("Hello"+  name);
}
greet("Đào Duy Anh");

function min(a,b){
    return a<b ? a:b;
}
console.log(min(5,4));

function ỉncrement(x){
    let y=20;
    x+=y;
    console.log("The number is:" + x);
}

let minvalue =function(h,j){
    return h<j ? h:j;
}
console.log(minvalue(4,6));

minvalue= function(h,j,z){
    let min=h;
    if(j<min) min=b;
    if(z<min) min=c;
    return min;
}
console.log(minvalue(3,5,8));

minvalue= 0;
console.log(minvalue);

year =function(s){
if(s%4==0){
console.log("Đây là năm nhuận");}
else{
    console.log("Không phải năm nhuận");
}
}
let i=year(2009);

/*let a=document.getElementById("h1").style.color="red";
let b=document.getElementById("h1").style.backgroundColor="Blue";
let c=document.getElementById("h1").innerHTML="Chào buổi tối và chúc ngủ ngon"  */
 let d=document.getElementById("button1").addEventListener("mouseover",ChangeColor);
 let e=document.getElementById("button1").addEventListener("mouseout", colorout);
 function ChangeColor(){
    document.getElementById("button1").style.backgroundColor="red";
    document.getElementById("button1").style.color="white";
 }
function colorout(){
    document.getElementById("button1").style.backgroundColor="white"
    document.getElementById("button1").style.color="pink"
}