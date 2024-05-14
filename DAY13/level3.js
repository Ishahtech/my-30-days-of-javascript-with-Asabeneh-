const personAccount = {
    firstName: 'Tobi', 
    lastName: 'Adesua', 
    incomes: [], 
    expenses: [],

    addIncome: function(description, amount) {
        this.incomes.push({description, amount});
    },
    addExpenses: function(description, amount) {
        this.expenses.push({description, amount});
    },
    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
      },
      
    accountInfo: function() {
        return `Account Information:\nName: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
      },
      accountBalance: function() {
        const balance = this.totalIncome() - this.totalExpense();
        return `Account Balance: ${balance}`;
      }
    };
    
    // Example usage:
    personAccount.addIncome('Salary', 3000);
    personAccount.addIncome('Freelancing', 1000);
    console.log(personAccount.accountInfo());
    console.log(personAccount.accountBalance());
    


/*
    const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [],
  expenses: [],
  
  addIncome: function(description, amount) {
    this.incomes.push({ description, amount });
  },
  
  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },
  
  totalIncome: function() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  
  totalExpense: function() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  
  accountInfo: function() {
    return `Account Information:\nName: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
  },
  
  accountBalance: function() {
    const balance = this.totalIncome() - this.totalExpense();
    return `Account Balance: ${balance}`;
  }
};

// Example usage:
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelancing', 1000);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 200);
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

*/