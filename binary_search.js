/*
function binary_search(input_max) {
    var golden_number = 7;
    var min = 1, max = input_max;
    var user_guess = parseInt(prompt("First guess?"));
    while(user_guess != golden_number){
        user_guess = parseInt(prompt("Next guess?"));
        if(user_guess === golden_number){
            console.log("that's the number");
        }
        else if (user_guess > golden_number){
            max = parseInt(user_guess - 1);
            console.log("wrong, new max is: " + max);
        }
        else {
            min = parseInt(user_guess + 1);
            console.log("wrong, new min is: " + min);
        }
    }
}

binary_search(20);*/

stuff = [1, 2, 23, 14, 35, 36, 87, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function binary_search(array, target){
    //SET THESE TO MAKE IT WORK
    var max, min;

    var guess = Math.round((max + min)/2);
    while(guess !== target){
        var guess = Math.round((max + min)/2);
        if(max < min){
            console.log("no find");
            return -1;
        }
        else if(array[guess] == target){
            console.log(guess);
            return guess;
        }
        else if(array[guess] < target){
            min = guess + 1;
        }
        else if(array[guess] > target){
            max = guess - 1;
        }
    }
    return -1;
}

binary_search(stuff, 35);