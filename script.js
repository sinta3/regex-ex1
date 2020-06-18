let inputText = document.getElementById("input");
let button = document.getElementById("button");

function regex1(input) {
    let myRegex = /^[A-Z]/;
    if (myRegex.test(input) == true) {
        let result = "Huruf pertama adalah huruf besar";
        document.write(result);
    } else {
        let result = "Huruf pertama adalah huruf kecil";
        document.write(result);
    }
}
