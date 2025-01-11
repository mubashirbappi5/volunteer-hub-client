import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className=" dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center dark:text-gray-300 uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center dark:text-white ">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer dark:text-white focus:underline">What is this volunteer opportunity about?</summary>
				<div className="px-4 pb-4 dark:text-gray-300">
					<p>This volunteer opportunity is focused on brief description of the cause, e.g., helping underprivileged children, cleaning community spaces, organizing events, etc..</p>
				</div>
			</details>
			<details>
				<summary className="py-2 dark:text-white outline-none cursor-pointer focus:underline">How do I apply for this volunteer opportunity? </summary>
				<div className="px-4 dark:text-gray-300 pb-4">
					<p> Simply click on the "Join" button and complete the registration form. Alternatively, you can contact us via [email/phone].</p>
				</div>
			</details>
			<details>
				<summary className="py-2 dark:text-white  outline-none cursor-pointer focus:underline">How does this opportunity benefit the community?</summary>
				<div className="px-4 dark:text-gray-300 pb-4 space-y-2">
					<p>our participation helps [describe the impact, e.g., improving lives, creating awareness, supporting a cause, etc.]</p>
				</div>
			</details>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default Faq;