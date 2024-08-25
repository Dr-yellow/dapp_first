import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

// 导入上下文值的类型定义
import { FormDataType, ProviderPropsType, TransactionContextValue, TransactionType } from '../utils/types'; // 假设这是你定义类型的地方
import { CONTRACT_ABI, contractAddress } from "../utils/constants";
const { ethereum }: any = window;

// // 获取账户信息
const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum),
        signer = provider.getSigner(),
        transactionContract = new ethers.Contract(
            contractAddress,
            CONTRACT_ABI,
            signer
        );
    console.log('transactionContract----', transactionContract);
    return transactionContract;
}

// 定义上下文
export const TransactionContext = createContext<TransactionContextValue | undefined>(undefined);



// TransactionsProvider 组件
export const TransactionsProvider = ({ children }: ProviderPropsType): JSX.Element => {
    // 用户钱包地址
    const [CurrentAccount, setCurrentAccount] = React.useState<string>("")
        //  表格数据
        , [formData, setFormData] = useState<FormDataType>({ addressTo: '', amount: '', keyword: '', message: '' }),
        // 等待
        [isLoading, setIsLoading] = useState<boolean>(false),
        [transactionCount, setTransactionCount] = useState<number>(
            localStorage.getItem("transactionCount") && parseInt(localStorage.getItem("transactionCount")!) || 0
        ),
        [transactions, setTransactions] = useState<TransactionType[]>([]);


    // 判断浏览器是否有钱包插件
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {

                setCurrentAccount(accounts[0]);
                getAllTransaction();
            } else {
                console.log("No accounts found");
            }

            console.log("No accounts----", accounts);

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");

        }
    }
    // 连接钱包获取 地址
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            console.log("accounts:", accounts);
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }
    // 监听表格输入信息
    const handleChange = (e: any, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value
        }))
    }

    const getAllTransaction = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContract(),
                    avaliable = await transactionsContract.getAllTransactions(),
                    structuredData = avaliable.map((transaction: any) => ({
                        addressTo: transaction.receiver,
                        addressFrom: transaction.sender,
                        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                        message: transaction.message,
                        keyword: transaction.keyword,
                        amount: parseInt(transaction.amount._hex) / (10 ** 18),
                    }));
                setTransactions(structuredData);
            } else {
                console.log('No ethereum object');
            }
        } catch (e) {
            console.log(e);

        }

    }
    const checkIfTransactionExists = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContract();
                const transactionCount = await transactionsContract.getTransactionCount();
                window.localStorage.setItem("transactionCount", transactionCount);
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }


    const sendTransaction = async () => {
        try {
            if (ethereum) {
                setIsLoading(true);

                const { addressTo, amount, keyword, message } = formData
                console.log('amount---', amount)
                console.log('amount- type--', typeof amount)

                const transactionsContract =
                    createEthereumContract(),
                    // 将数值转成1e18
                    parsedAmount = ethers.utils.parseEther(amount);
                // parsedAmount = ethers.utils.parseEther('1');
                await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [{
                        from: CurrentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex
                    }]
                });
                const transactionhash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, keyword, message);
                // 等待交易完成
                console.log(`Mining ${transactionhash.hash}`);
                await transactionhash.wait();
                console.log(`Mined -- ${transactionhash.hash}`);
                setIsLoading(false);

                const transcCount = await transactionsContract.getTransactionCount();
                setTransactionCount(transcCount.toNumber());
                window.location.reload();

            } else {
                console.log("No ethereum object");
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            console.error("There was an error sending the transaction");
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionExists();
    }, [transactionCount]);

    const contextValue: TransactionContextValue = {
        // 这里假设value是你需要传递的上下文数据
        CurrentAccount, sendTransaction, isLoading,
        connectWallet, handleChange, formData, transactionCount, transactions
    };
    return (
        <TransactionContext.Provider value={contextValue}>
            {children}
        </TransactionContext.Provider>
    );
};

