import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';
import Lottie from 'lottie-react';
import registerlottie from '../assets/Animation - 1734850071311.json'
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
	const {usersregister,Userupdateinfo,pagetitle,setpageTitle} = useContext(Authcontext)
	const handleregister = (e)=>{
		e.preventDefault()
		const form = e.target
        const name = form.name.value
        const email = form.email.value
		const photourl = form.photoURL.value
		const password = form.password.value

		const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
		if (!passwordRegex.test(password)){
			toast.error("Invalid password. Must include at least one uppercase letter, one lowercase letter, and be 6+ characters long.")
			return

		}
		usersregister(email,password)
		.then(res=>{
			console.log(res.user)
			const profile = {
				displayName:name,
				photoURL:photourl,
			}
			Userupdateinfo(profile)
			.then(res=>{
				
			})
			.catch(error=>{
				console.log(error)
			})
			Navigate('/')
				toast.success('Welcome to the Volunteer-Hub!');

		})
		.catch(error=>{
			toast.error(error.message);
			form.reset()
		})
	}
    return (
        <div>
		
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl text-center font-bold leading-tight md:text-left lg:text-5xl">Welcome Aboard!</h2>
			<div className="dark:text-gray-600  text-center  md:text-left">Your journey begins with a simple registration.</div>
		</div>
		<Lottie animationData={registerlottie}></Lottie>
	</div>
	<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 ">
		<h1 className="my-3 text-xl font-bold">Register</h1>
	
	</div>
	<form onSubmit={handleregister}  className="space-y-12">
		<div className="space-y-4">
			<div>
				<label  className="block mb-2 text-sm">Name</label>
				<input type="text" name="name"  placeholder="Enter Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label  className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email"  placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label  className="block mb-2 text-sm">PhotoURL</label>
				<input type="url" name="photoURL"  placeholder="Enter photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label  className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<input type="submit" value={'Register'} className=" btn w-full px-8 py-3 font-semibold text-white rounded-md dark:bg-violet-600 dark:text-gray-50 bg-orange-400"/>
			</div>
            <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<Link to={'/login'} onClick={(e)=>{setpageTitle(" | Login"),
					e.preventDefault()}}
				 className="hover:underline dark:text-violet-600 text-orange-400">Login</Link>.
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

export default RegisterPage;