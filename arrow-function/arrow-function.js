const inches = feet => String(feet) + " feet equals: " + (feet * 6) + " inches.";
console.log(inches(5)); //5 feet equals: 30 inches.

const rectangleArea = (width, length) => {
    const area = width * length;
    return "The area of a " + String(width) + "*" + String(length)
        + " rectangle is: " + String(area);
}
console.log(rectangleArea(4, 5)) //The area of a 4*5 rectangle is: 20

const tltHours = days => String(days) + " days is equal to " + (days * 24) + " hours."
console.log(tltHours(28)) //28 days is equal to 672 hours.

const cardName = (value, suit) => "You turn the card over to reveal a " + value + " of " + suit + "!"
console.log(cardName(7, "Clubs")) //You turn the card over to reveal a 7 of Clubs!