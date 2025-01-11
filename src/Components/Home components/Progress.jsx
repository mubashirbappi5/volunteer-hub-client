import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';
import { TfiWorld } from 'react-icons/tfi';

const Progress = () => {
    return (
        <div className='w-11/12 mx-auto'>
          
           <section className="p-6 my-6 bg-gray-100 dark:text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-orange-200 dark:bg-violet-600">
            <MdOutlineVolunteerActivism className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">500+</p>
				<p className="capitalize">Volunteers Engaged</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-orange-200 dark:bg-violet-600">
            <TfiWorld className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">20+</p>
				<p className="capitalize">Countries</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-orange-200 dark:bg-violet-600">
            <BiSupport className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">24/7</p>
				<p className="capitalize">Support</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-orange-200 dark:bg-violet-600">
            <SiGithubsponsors className="text-5xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">50+</p>
				<p className="capitalize">Partners</p>
			</div>
		</div>
	</div>
</section>

            
        </div>
    );
};

export default Progress;