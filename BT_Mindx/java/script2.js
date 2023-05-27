// BÀI  1
function min(c,b){
    return c<b ?c:b
}
console.log(min(2,5));
console.log(min(4,-1));
console.log(min(3,3));
//Bài 2

function show_search_advance()
{
   document.getElementById("show_search_advance").innerHTML=("Bỏ tìm kiếm nâng cao");

}
let a=document.getElementById("show_search_advance").addEventListener("click", show_search_advance);
