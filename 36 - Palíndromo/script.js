function palindromo(str){
    const palavra = str.split("").reverse().join("");
    return (palavra == str) ? true : false;
    
}

console.log(palindromo('radar'));