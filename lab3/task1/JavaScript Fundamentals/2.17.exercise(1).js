let question = prompt("Enter a question");

function ask(question, yes, no) {
    if(confrim(question)) yes();
    else no();
}

ask(
    "Do you agree?",
        () => alert("you agreed."),
        () => alert("You canceled the execution.")
);