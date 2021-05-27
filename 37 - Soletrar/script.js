String.prototype.soletrar = function(){
    console.log(this.replace('-', '').toUpperCase().split("").join("-"));
}

"programador".soletrar();
"guarda-chuva".soletrar();
"matheus".soletrar();