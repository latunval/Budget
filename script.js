
// fixed budget and incoming expense 
const budget = 100;
let expense = document.getElementById('expenseInput');

 const Spending = {
     budget: budget,
     expense: expense,
 };

   

const getremaining = function(){
    return document.getElementById('remainingDisplay').innerHTML = "remaining : " + (budget - expense.value);
}



 function addExpense() {
        return document.getElementById('expenseDisplay').innerHTML = 'Expense: ' + "$" + expense.value;
    };
function updatedisplay() {
    document.getElementById('spend').innerHTML = "The total budget is " + budget + ' and the' + addExpense() + " is" + ' Remaining' + ' ' + getremaining();
}

const resultbtn = document.getElementById('myButton');

resultbtn.addEventListener('click', 
    function()
    {
        addExpense();
        getremaining();
        updatedisplay();
    }
)
