function names(name) {
    function greetings(greeting) {
        return greeting + " " + name;
    }
    return greetings;
}
var n = names("Shreya");
console.log(n("Hello"));
