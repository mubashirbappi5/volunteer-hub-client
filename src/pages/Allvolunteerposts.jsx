import React from 'react';

const Allvolunteerposts = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <div className=' flex flex-col md:flex-row items-center  border border-orange-500   rounded-2xl md:rounded-full  p-6'>
            <div>
               <div className='rounded-full  relative'>
               <img className='rounded-full w-96' src="https://i.ibb.co.com/vY4Gnpm/portrait-young-man-wearing-volunteer-t-shirt-removebg-preview.png" alt="" />
               </div>
           <div className='absolute top-36  hidden md:flex  left-32 -z-10'>
           <svg className='w-72' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FDBD91" d="M59.2,-41.5C73.6,-29.3,79.8,-4.8,72.7,12.7C65.6,30.2,45.1,40.7,25.4,48.5C5.8,56.3,-13.1,61.4,-27.6,55.2C-42.1,49,-52.1,31.6,-58.1,11.5C-64.1,-8.6,-66.1,-31.4,-55.7,-42.7C-45.3,-54,-22.7,-53.9,-0.1,-53.8C22.5,-53.7,44.9,-53.7,59.2,-41.5Z" transform="translate(100 100)" />
</svg>

           </div>
            </div>
            <div className='border border-orange-300 p-10 rounded-3xl bg-orange-300'>
                <h1 className='text-2xl font-bold'>Volunteer Opportunities</h1>
                <p>Discover and Support Causes That Matter to You</p>

            </div>
            <div className=' absolute right-2 w-40'>
            <svg className='w-20' xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path fill="rgba(203, 126, 126, 1)" d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"></path></svg>
            </div>
           
           </div>
           <div className=' my-10 space-y-5 p-5 '>
            <h1 className='text-2xl font-semibold text-center'>All volunteer need posts</h1>
           <fieldset className="w-full flex justify-center space-y-1 dark:text-gray-800">
	<label htmlFor="Search" className="hidden">Search</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
	</div>
</fieldset>

           </div>
          
            
        </div>
    );
};

export default Allvolunteerposts;