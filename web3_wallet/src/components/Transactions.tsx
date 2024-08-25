import { FC, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


// import dummyData from '../utils/dummyData'
import { TransactionType } from "../utils/types";
import { ShortenAddress } from "../utils/shortenAddress";
import useFetch from "../hook/useFetch";
const TransactionsCard: FC<TransactionType> = ({
    addressFrom
    , addressTo
    , timestamp
    , message
    , amount
    , url,
    keyword
}) => {
    const gitUrl = useFetch({ keyword })
    return (

        <div
            className="bg-[#181918] m-4 rounded-md flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] flex-col p-3 sm:min-w-[270px] sm:max-w-[300px] min-w-full hover:shadow-2xl"
        >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full display-flex justify-start mb-6 p-2">
                    <a href="#" target="_blank" >
                        <p className="text-white text-base">From: {ShortenAddress(addressFrom)}</p>
                    </a>
                    <a href="#" target="_blank" >
                        <p className="text-white text-base">To: {ShortenAddress(addressTo)}</p>
                    </a>
                    <p className="text-white text-base">Amount:{amount} O_ETH</p>

                    <br />
                    <p className="text-white text-base">{message && `Message: ${message}`} </p>

                </div>

                <img alt="nature" src={gitUrl || url} className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover" />
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-body">{timestamp}</p>
                </div>
            </div>

        </div>
    )
}
const Transactions: React.FC = () => {
    // const { CurrentAccount } = useContext(TransactionContext)
    const contextValue = useContext(TransactionContext)
        , CurrentAccount = contextValue?.CurrentAccount
        , transactions = contextValue?.transactions
    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">

                <h3 className="text-white text-3xl font-bold my-2 ">
                    {CurrentAccount &&
                        'Latest Transactions' ||
                        'Please connect your wallet to see your transactions'}
                </h3>


                <div className="flex flex-wrap justify-center items-center mt-10">
                    {
                        [...transactions].reverse().map((item, index) =>
                            <TransactionsCard key={index} {...item} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}


export default Transactions;