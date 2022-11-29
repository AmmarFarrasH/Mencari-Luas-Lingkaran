// Mencari luas lingkaran
var input = require("readline-sync")
var jari2 = input.questionInt("Masukkan nilai jari-jari : ")

if (jari2%2 == 7){
    console.log(22/7 * jari2 * jari2)
}else{
    console.log(3.14 * jari2 * jari2)
}
