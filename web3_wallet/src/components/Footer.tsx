
import logoPng from "../assets/images/logo.png";


const LinkArr = [
    'Home', "Market", "Exchange", "Tutorials"
]

const Footer: React.FC = () =>
    <div className="w-full flex items-center md:justify-center justify-between flex-col p-4 gradient-bg-footer" >

        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            {/* logo图 */}
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logoPng} alt="logo" className="w-32" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                {
                    LinkArr.map((item, index) =>
                        <p className="text-white text-base text-center mx-2 cursor-pointer" key={index}>{item}</p>
                    )
                }
            </div>
        </div>

        <div className="flex justify-center flex-col items-center mt-6">
            <p className="text-white text-sm font-normal">
                All rights reserved. © {new Date().getFullYear()}
            </p>
            <p className="text-white text-sm font-normal mt-2">
                Made with ❤️ by <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gradient underline font-medium cursor-pointer"> Dr.Future</a>
            </p>
        </div>
        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-xs font-normal">
                welcome to Web3
            </p>
            <p className="text-white text-xs font-normal">

                All rights reserved
            </p>
        </div>

    </div>


export default Footer;