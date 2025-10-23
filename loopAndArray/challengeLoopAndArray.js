const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];

//combine first name and last name of array
const fullName = firstNamesArray.map((element, index) => {
    return "'" + String(element) + " " + String(lastNamesArray[index]) + "'";
});

//print after combine name
fullName.forEach(name => {
    console.log(name);
});

console.log("========================")

//reverse the array items
const reverse = fullName.reverse().forEach(name=>{
    console.log(name);
});


