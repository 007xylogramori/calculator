// function to clear all
call = () => { text.innerHTML = " "; }
// function to clear one
cone = () => {
    let string = document.getElementById("text");
    string = string.innerText.toString();
    text.innerHTML = string.substr(0, string.length - 1);
}
//function to display num
displayit = (y) => {
    text.innerText = text.innerText + y;
}

onequal = () => {

    try {
        let x = document.getElementById("text");
        x.innerText = eval(x.innerText);    }
    catch (err) {
        document.getElementById("text").innerHTML = err.message;
    }                                                                         
}
