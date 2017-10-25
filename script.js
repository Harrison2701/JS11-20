/**
 * Created by h205p2 on 9/28/17.
 */
//write first method
function firstLast6(array) {
    if(array.indexOf(6)==0 || array.lastIndexOf(6)==array.length-1){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    if(array.indexOf(2)==0||1 || array.lastIndexOf(3)==0||1){
        return true;
    }else{
        return false;
    }
}

function fix23(array){
    for(var i = 0; i < array.length - 1; i++){
        if(array[i] == 2 && array[i+1]== 3){
            array[i+1]=0
        }
    }
    return array;
}

function countYZ(string){
    var count = 0;

    for(var i = 0; i < string.length-1; i++){
        if(string[i] == " " ){
            if(string[i-1] == "y" || string[i-1] == "z"){
                count = count+ 1;
            }
        }
    }
    if(string[string.length-1] == "y" || string[string.length-1] == "z"){
        count = count + 1;
    }

    return count;
}

function endOther(string1 , string2){
    var x = string1.toLowerCase();
    var y = string2.toLowerCase();

    if(x.endsWith(y)){
        return true;
    }
    if(y.endsWith(x)){
        return true;
    }

    if(y.endsWith(x) != true || x.endsWith(y) != true){
        return false;
    }
}

function starOut(word){
    var sum = ""
    for(var i = 0; i < word.length-1; i++){
        if(word[i-1] != "*" && word[i] != "*" && word[i+1] != "*"){
            sum = sum + word[i];
        }
    }
    if(word[word.length-2] != "*"){
        sum = sum + word[word.length-1];
    }
    return sum
}

function getSandwich(word){
    var A = word.indexOf("bread");
    var B = word.lastIndexOf("bread");
    var C = word.substring(A+5,B);

    if(A>=0){
        if(A != B){
            return C
        }else{
            return ""
        }
    }else{
        return ""
    }

}

function canBalance(number) {
    var sum1 = 0;
    var sum = 0

    for (var i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    var sum2 = sum
    for (var j = 0; j < number.length; j++) {
        sum1 = sum1 + number[j];
        sum2 = sum2 - number[j];
        if (sum1 == sum2) {
            break;
        }
    }
    if (sum1 == sum2) {
        return true
    }else{
        return false
    }
}

function countClumps(numbers){
    var sum = 0
    for(var i = 0;i< numbers.length; i++){
        if(numbers[i] == numbers[i+1]){
            sum++
            if(numbers[i+2] == numbers[i+1]){
                sum--
            }
        }
    }
    return sum
}

function evenlySpaced(a,b,c){
    var signal = false;
    if(a!=b || b!=c || a!=c){
        signal = false;
    }
    if(a-b==b-c || c-b==b-a){
        signal = true;
    }
    if(a-c==c-b || b-c==c-a){
        signal = true
    }
    if(c-a==a-b || b-a==a-c){
        signal = true
    }
    return signal
}


function tester() {
    document.getElementById("output").innerHTML = firstLast6([1,4,5,2,6]);
    document.getElementById("output1").innerHTML = has23([2,4]);
    document.getElementById("output2").innerHTML = fix23([3,2,3]);
    document.getElementById("output3").innerHTML = countYZ("day hiz piy");
    document.getElementById("output4").innerHTML = endOther("abc" ,  "xyzabc");
    document.getElementById("output5").innerHTML = starOut("ab*cd");
    document.getElementById("output6").innerHTML = getSandwich("breadAbread");
    document.getElementById("output7").innerHTML = canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output8").innerHTML = countClumps([1, 1, 1, 2, 1]);
    document.getElementById("output9").innerHTML = evenlySpaced([2,4,6]);

}
