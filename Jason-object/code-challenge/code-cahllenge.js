async function fetchHero() {
    /* This line below is fetching data from a website API. You haven't learned how to do this just yet, so here's a short explanation of what it does:
    - 'fetch' is the function that sends a query to the website url, in this case this website https://www.superheroapi.com.
    - 'await' tells JavaScript that the answer won't come back immediately and it needs to wait for it.
    - 'then' tells JavaScript what to do with the website answer when it comes back
    - 'response' is what the website sends back. We then use the text() function to get the text result. Note that the json() function would return a well formed JSON JavaScript Object.
    */

    const hero = await fetch(
        "https://www.superheroapi.com/api.php/1079471338910705/731"
    ).then((response) => response.text());

    /**** Step 1: print in the console the value of 'hero'. Check that it is a JSON in a string format. ****/
    // Add your code here
    let stringHero = JSON.stringify(hero)
    console.log(stringHero)

    /**** Step 2: transform this string into a JavaScript Object and console.log it ****/
    // Add your code here
    let jsonHero = JSON.parse(hero)
    console.log(jsonHero)

    /**** Step 3: using the function alert, display the name and the eye color of the Hero ****/
    // Add your code here
    let name = String(jsonHero.biography["full-name"]);
    let eye = String(jsonHero.appearance["eye-color"]);
    let person = "Name ->" + name + " Eye -> " + eye
    //alert(person);
    //console.log(jsonHero.biography["full-name"]);
    //console.log(jsonHero.appearance["eye-color"]);

    /**** Step 4: create a new constant named 'myHero' following the same format. Same fields can be set as 'null' ****/
    // Add your code here
    const myHero = await fetch(
        "https://www.superheroapi.com/api.php/1079471338910705/731"
    ).then((response) => response.text());

    let jsonMyHero = JSON.parse(myHero);

    jsonMyHero.biography["full-name"] = null
    console.log(jsonMyHero);

    /**** Step 5: create a new 'heroes' array and add both 'hero' and 'myHero' to it. Then create a stringified version of the array it using the JSON.stringify function, and console.log() it. ****/
    // Add your code here
    let heroes = new Array;
    heroes[0] = JSON.stringify(jsonHero);
    heroes[1] = JSON.stringify(jsonMyHero);
    console.log(heroes);
}

fetchHero();
