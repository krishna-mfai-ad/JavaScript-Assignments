function palindrome(word){
    let str = ""
    for(let i = 0;i<word.length;i++){
        str = word.charAt(i) + str
    }
    if(str === word){
    return true
    }
    else{
    return false
    }
}

console.log(palindrome("peace"))
console.log(palindrome("madam"))