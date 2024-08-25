// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract TransactionsContract {
    uint256 transactionCount;

    event Transfer(
        address indexed from,
        address indexed receiver,
        uint256 amount,
        uint256 timestamp,
        string message,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
        string message;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint256 amount, string memory message, string memory keyword)
        public
    {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, block.timestamp, message, keyword));

        emit Transfer(msg.sender, receiver, amount, block.timestamp, message, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
