export default function Footer() {
	const footerdata = [
		{
			title: "Categories",
			item: ["Home", "Sports", "Entertainment", "Life", "Money", "Travel"],
		},
		{
			title: "About",
			item: ["About Us", "Privacy Policy", "Terms of Service"],
		},
		{
			title: "Support",
			item: ["Help & Support", "Trust & Safety"],
		},
		{
			title: "about",
			item: ["Home", "Sports", "Entertainment"],
		},
		{
			title: "More",
			item: ["Home", "Sports", "Entertainment", "Life", "Money", "Travel"],
		},
		{
			title: "More",
			item: ["Home", "Sports", "Entertainment", "Life", "Money", "Travel"],
		},
	];

	return (
		<div className='max-w-[1920px] border-t-[1px] border-[#A2A2A2] mt-[50px]'>
			<div className='px-[30px] sm:px-[50px] lg:px-[70px]'>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-20 w-[100%] mb-[50px] mt-[50px]'>
					{footerdata.map((i, idx) => (
						<div className='text-[16px]' key={idx}>
							<h1 className=' font-bold mb-[15px] italic '>{i.title}</h1>
							{i.item.map((i, idx) => (
								<div key={idx} className=' flex-col mb-[15px] last:mb-0 '>
									<a className='cursor-pointer hover:underline' href='/'>
										{i}
									</a>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<hr className='border-[#A2A2A2] mx-[50px]'></hr>
			<div className='flex  px-[50px] justify-between w-[100%] py-[40px] items-center '>
				<p className=' italic text-[26px] '> LOREM IPSUM</p>
				<p className='text-[16px]'>© Newspaper International Ltd. 2022</p>
			</div>
		</div>
	);
}
