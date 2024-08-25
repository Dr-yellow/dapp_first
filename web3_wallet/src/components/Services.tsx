
import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import { CardServicesTypeList } from '../utils/types';
import { ServicesCard } from '.'

const CardArray: CardServicesTypeList[] = [
    {
        color: 'bg-[#2952e3]',
        title: 'Search 12356',
        description: 'The best choice for buying and selling your crypto assets.',
        icon: <BsShieldCheck className='text-white text-3xl' fontSize={21} />
    },
    {
        color: 'bg-[#f84550]',
        title: 'Search 12356',
        description: 'The best choice for buying and selling your crypto assets.',
        icon: <BiSearchAlt className='text-white text-3xl' fontSize={21} />
    },
    {
        color: 'bg-[#8945f8]',
        title: 'Search 12356',
        description: 'The best choice for buying and selling your crypto assets.',
        icon: <RiHeart2Fill className='text-white text-3xl' fontSize={21} />
    },

]

const Services = () => <div className='flex w-full  justify-center items-center gradient-bg-services'>
    <div className='flex mf:flex-row flex-col items-center  justify-between  md:p-20 py-12 px-4'>
        {/* 适配 */}
        <div className='flex-1 flex flex-col justify-start items-start'>
            <h1 className='text-white text-3xl sm:text-5xl font-bold py-2 text-gradient'>Services that we <br /> continue to improve</h1>
            <p className='text-white text-base md:w-9/12 w-11/12 text-left my-2 font-light'>
                The best choice for buying and selling your crypto assets.with the varous super friendly services we offer
            </p>
        </div>
        <div className='flex-1 justify-start flex-col flex  items-center '>
            {/* 卡片 */}
            {CardArray.map((item, index) =>
                <ServicesCard key={index} {...item} />
            )}
        </div>
    </div>

</div>


export default Services;