
import { FC } from 'react';

import { CardServicesTypeList } from '../utils/types';

const ServicesCard: FC<CardServicesTypeList> = ({ color, title, description, icon }) =>
    <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        {/* icon图标 */}
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h3 className='mt-2 text-white text-lg'>{title}</h3>
            <p className='mt-1 text-white text-sm md:w-9/12 '>{description}</p>
        </div>
    </div>


export default ServicesCard