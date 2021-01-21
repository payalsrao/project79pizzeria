name_of_the_pizza = [];

function submitmenu() {
    var E = "Farmhouse Pizza";
    var F = "Creamy Corn Pizza";
    var G = "Pesto Pasta Pizza";
    var H = "Veg Exotica Pizza";

    var A = document.getElementById("name1").value;
    var B = document.getElementById("name2").value;
    var C = document.getElementById("name3").value;
    var D = document.getElementById("name4").value;

    name_of_the_pizza.push(A);
    name_of_the_pizza.push(B);
    name_of_the_pizza.push(C);
    name_of_the_pizza.push(D);
    

    console.log(name_of_the_pizza);

    document.getElementById("nA").innerHTML = name_of_the_pizza[0];
    document.getElementById("nB").innerHTML = name_of_the_pizza[1];
    document.getElementById("nC").innerHTML = name_of_the_pizza[2];
    document.getElementById("nD").innerHTML = name_of_the_pizza[3];
    document.getElementById("n1").innerHTML = (E);
    document.getElementById("n2").innerHTML =  (F);
    document.getElementById("n3").innerHTML = (G);
    document.getElementById("n4").innerHTML = (H);

    arraypizza = ["Farmhouse Pizza","Creamy Corn Pizza","Pesto Pasta Pizza", "Veg Exotica Pizza"];
    

console.log(arraypizza);

var allpizza = name_of_the_pizza.concat(arraypizza);
console.log(allpizza);
var length= allpizza.length;
console.log(length);
}
function sorting(){
    var allpizza = name_of_the_pizza.concat(arraypizza);
    console.log(allpizza);
    allpizza.sort();
    console.log(allpizza);
    document.getElementById("list1").innerHTML = allpizza[0];
    document.getElementById("list2").innerHTML = allpizza[1];
    document.getElementById("list3").innerHTML = allpizza[2];
    document.getElementById("list4").innerHTML = allpizza[3];
    document.getElementById("list5").innerHTML = allpizza[4];
    document.getElementById("list6").innerHTML = allpizza[5];
    document.getElementById("list7").innerHTML = allpizza[6];
    document.getElementById("list8").innerHTML = allpizza[7];
    document.getElementById("l").style.display = "inline-block";
    document.getElementById("sort_button").style.display = "none";
}

function menuavail(){
    document.getElementById("P").style.display = "inline-block";
    document.getElementById("click").style.display = "none";
    



}