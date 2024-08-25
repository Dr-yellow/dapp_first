// import { ethers } from "hardhat";
const main = async () => {
    try {
        const transactionFactory = await hre.ethers.getContractFactory("TransactionsContract");
        const transactionContract = await transactionFactory.deploy();
        // console.log('transactionContract---', transactionContract)
        // await transactionContract.deployed();
        await transactionContract.waitForDeployment();
        console.log("Transaction deployed to:", transactionContract);
        console.log("Transaction deployed to:", transactionContract.target);
    } catch (error) {
        console.error("Failed to deploy TransactionsContract:", error);
        throw error; // 重新抛出错误以便外部捕获
    }
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error("An error occurred:", error);
        process.exit(1);
    }
};

runMain();