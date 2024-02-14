function createAccount(pin, amount = 0) {
  let accountPin = pin;
  let balance = amount;

  return {
    checkBalance: function(inputPin) {
      if (inputPin !== accountPin) return "Invalid PIN.";
      return `$${balance}`;
    },

    deposit: function(inputPin, depositAmount) {
      if (inputPin !== accountPin) return "Invalid PIN.";
      balance += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
    },

    withdraw: function(inputPin, withdrawAmount) {
      if (inputPin !== accountPin) return "Invalid PIN.";
      if (withdrawAmount > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      balance -= withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`; 
    },

    changePin: function(inputPin, newPin) {
      if (inputPin !== accountPin) return "Invalid PIN.";
      accountPin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
