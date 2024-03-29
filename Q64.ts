// Combine String and Number: Write a function that merges a piece of text with a number. For exapmle, it provided with"Age: " and 30. it should give back "Age: 30"
// This function mixes a text and a number into one text function
function combineStrwithnum(text: string, number: number): string {
    return text+number;
}
console.log(combineStrwithnum("Age:",30));