#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let myPin = 2485;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let accountOpetion = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your account type",
            type: "list",
            choices: ["saving account", "current account"]
        }
    ]);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your transaction method",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the amount you want to withdraw",
                type: "number"
            }
        ]);
        //=, -=, +=
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
    if (operationAns.operation === "fast cash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "select any select the amount you want to withdraw",
                choices: [500, 1000, 2000, 5000, 10000, 15000, 20000,],
            },
        ]);
        if (myBalance >= cash.options) {
            myBalance -= cash.options;
            console.log(`your reamining balance is ${myBalance}`);
            console.log("thank you for using ATM");
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`yourbalance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
