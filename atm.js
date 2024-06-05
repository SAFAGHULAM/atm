#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 6876;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    //If user select withdraw
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else {
            console.log(`You have insufficient balance`);
        }
    }
    //If user select fast cash
    else if (operationAns.operations === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000", "20000"],
            },
        ]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`The remaining balance is ${balance2}`);
        }
        else {
            console.log(`You have insufficient amount`);
        }
    }
    else if (operationAns.operations === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("your pin is incorrect");
}
