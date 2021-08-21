// Positive message generator That displays a random positive message when user runs program.....Real simple!!!

const positiveMessage = [
    "You are great!!",
    "You are Confident!!",
    "You are Successful!!",
    "You are Smart!!",
    "You are the greatest Software Engineer!!",
    "You have nothing to worry about!!",
    "You are fearless!!",
    "Nothing can hurt you!!"
];

// Function that takes an array and logs random item from said array

const message = arr => {
    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);
}

message(positiveMessage);


