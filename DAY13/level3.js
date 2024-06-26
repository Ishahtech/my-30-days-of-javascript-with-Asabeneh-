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
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//     const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp 
// which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.