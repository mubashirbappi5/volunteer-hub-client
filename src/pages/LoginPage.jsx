import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';

const LoginPage = () => {
    return (
        <div>
         <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl text-center font-bold leading-tight md:text-left lg:text-5xl">Welcome Back!</h2>
			<div className="dark:text-gray-600  text-center  md:text-left">Login to access your account.</div>
		</div>
		<img src="https://i.ibb.co.com/dB6qxPP/rb-7863.png" alt="" className="p-6 " />
	</div>
	<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 ">
		<h1 className="my-3 text-xl font-bold">Login</h1>
	
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className=" btn w-full px-8 py-3 font-semibold text-white rounded-md dark:bg-violet-600 dark:text-gray-50 bg-orange-400">Log in</button>
			</div>
            <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<Link to={'/register'} className="hover:underline dark:text-violet-600 text-orange-400">Register</Link>.
			</p>
            <div className="divider  p-4">OR</div>
            <div className='flex my-5 justify-center'>
            <SocialLogin/>
            </div>
			
		</div>
	</form>
</div>

</div>
        </div>
    );
};

export default LoginPage;