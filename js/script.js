const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;



  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);


  // calculate balance
  const balance = parseInt(income) - expense;

  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense.toFixed(2);
    document.getElementById("balance").innerText = balance.toFixed(2);
  }


  document.querySelector("#income").value = '';
  document.querySelector("#food").value = '';
  document.querySelector("#rent").value = '';
  document.querySelector("#clothes").value = '';



};

const calculateSavings = () => {
  // calculate saving amount
  const balance = document.getElementById("balance").innerText;
  const savePercentage = document.getElementById("save").value;

  //   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = parseFloat((savePercentage / balance)) * 100;

  // calculate remaining balance
  const remainingBalance = balance - savingAmount;


  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  }
  else {
    // view saving amount and remaining balance
    // TODO COMMENT LINE
    document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
    document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
  }

  document.getElementById("save").value = '';

};
