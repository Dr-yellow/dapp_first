
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from '.'
    ;
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { ShortenAddress } from "../utils/shortenAddress";
interface NavBarItemProps {
    placeholder: string;
    name: string;
    type: string;
    value?: number | string;
    handleChange: (e: any, name?: string) => void;
}


// "text-sm text-white font-light px-2 py-1 border-[1px] border-[#ffffff] rounded-full"
const companyCommonStyles =
    "text-sm text-white font-light sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 min-h-[70px]";

const InputCompemtn: React.FC<NavBarItemProps> = ({ placeholder, name, type, value, handleChange }) => <input
    placeholder={placeholder}
    value={value}
    type={type}
    step="0.0001"
    onChange={(e) => handleChange(e, name)}

    className="my-2 w-full rounded-sm p-2 outline-none bg-[#f2f2f2] text-sm white-glassmorphism"
/>


const Welcome: React.FC = () => {
    const { CurrentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading, transactionCount } = useContext(TransactionContext);



    const handelSubmit = (e: any) => {
        // console.log('ee----', e)
        console.log('formData----', formData)
        const { addressTo, amount, keyword, message } = formData
        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction()
    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                {/* 左边 */}
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        The Best <br />
                        <span className="text-5xl sm:text-6xl text-[#00df5e]">Web3.0</span>
                    </h1>
                    <p className="text-left text-white font-light md:w-9/12 w-11/12 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quibusdam, quia, quae
                    </p>
                    {
                        !CurrentAccount && (
                            <button
                                type="button"
                                className="flex flex-row justify-center items-center my-5 bg-[#00df5e] p-3 rounded-full cursor-pointer hover:bg-[#01b561]"
                                onClick={connectWallet}  >
                                <AiFillPlayCircle className="text-white mr-2" />
                                <span className="text-white text-base font-semibold">Connect Wallet</span>
                            </button>
                        )}


                    {/* 表格 */}
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                            Reliability
                        </div>
                        <div className={`${companyCommonStyles}`}>
                            Security
                        </div>
                        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                            Reliability
                        </div>

                        <div className={`rounded-bl-2xl ${companyCommonStyles}`}>
                            Web3.0
                        </div>
                        <div className={`${companyCommonStyles}`}>
                            Low fees
                        </div>
                        <div className={`sm:rounded-br-2xl ${companyCommonStyles}`}>
                            Blockchain
                        </div>
                    </div>

                </div>

                {/* 右边 */}
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>

                            <div>
                                <p className="text-white font-light text-sm">
                                    Address
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    {ShortenAddress(CurrentAccount)}

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        {/* 表格 */}
                        <InputCompemtn placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <InputCompemtn placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <InputCompemtn placeholder="Keyword (GIF)" name="keyword" type='text'
                            handleChange={handleChange} />
                        <InputCompemtn placeholder="Enter message" name="message" type='text'
                            handleChange={handleChange} />

                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {isLoading ? <Loader /> :
                            (
                                <button
                                    type="button"
                                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                                    onClick={handelSubmit}
                                >
                                    Send Now
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Welcome;