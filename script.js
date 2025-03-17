
// fixed budget and incoming expense 
const budget = 100;
let expense = document.getElementById('expenseInput');

 const Spending = {
     budget: budget,
     expense: expense,
 };

   

const getRemaining = function(){
    return document.getElementById('remainingDisplay').innerHTML = "remaining : " + (budget - expense.value);
}



 function addExpense() {
        return document.getElementById('expenseDisplay').innerHTML = 'Expense: ' + "$" + expense.value;
    };
function updateDisplay() {
    document.getElementById('spend').innerHTML = "The total budget is " + budget + ' and the' + addExpense() + " is" + ' Remaining' + ' ' + getremaining();
}
// Adding an event listner to the button for it to be active for invoking
const resultbtn = document.getElementById('myButton');


// Adding all functoins to the event listner for the to be invoke at once
resultbtn.addEventListener('click', 
    function()
    {
        addExpense();
        getRemaining();
        updateDisplay();
    }
)
