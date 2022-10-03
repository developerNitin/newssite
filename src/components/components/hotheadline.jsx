import { AiOutlineLine } from "react-icons/ai";

export default function HotHeadline({ data }) {
	return (
		<>
			<div className='flex items-center my-[50px] '>
				<span className='mr-[30px] text-[30px] font-bold'>POPULAR HEADING</span>
				<hr className='flex-1 border-[#A2A2A2]' />
			</div>
			<div className='lg:flex '>
				<div className='relative z-10 flex-1 lg:mr-[50px]'>
					<figure
						className=' lg:flex-[90%] h-[55vh] bg-white border border-black relative 
                    before:absolute before:-z-10 before:w-full before:h-full before:top-4 before:left-4 
                    before:bg-transparent before:border before:border-black'
					></figure>
					<div>
						<p className='flex items-center pt-[3.75rem] text-[20px] pb-2'>
							<span className='mr-[20px]'>{data[0].auther1}</span>
							<AiOutlineLine className='mr-[20px]' />
							<span>{data[0].date1}</span>
						</p>
						<p className=' pb-[3.25rem] flex items-center justify-between text-[40px] font-bold uppercase'>
							<a href='/' className='cursor-pointer hover:underline'>
								{data[0].headline1}
							</a>
						</p>
					</div>
				</div>
				<div className='flex lg:block lg:w-[27%]'>
					<div className='relative z-10 mr-[50px] lg:mr-0'>
						<figure
							className=' flex-[90%] h-[30vh] bg-white border border-black relative 
                    before:absolute before:-z-10 before:w-full before:h-full before:top-3 before:left-3 
                    before:bg-transparent before:border before:border-black'
						></figure>
						<div>
							<p className='flex items-center pt-[3.75rem] text-[16px] pb-2'>
								<span className='mr-[20px]'>{data[0].auther2}</span>
								<AiOutlineLine className='mr-[20px]' />
								<span>{data[0].date2}</span>
							</p>
							<p className=' pb-[3.25rem] flex items-center justify-between text-[22px] font-bold uppercase'>
								<a href='/' className='cursor-pointer hover:underline'>
									{data[0].headline2}
								</a>
							</p>
						</div>
					</div>

					<div className='relative z-10'>
						<figure
							className=' flex-[90%] h-[30vh] bg-white border border-black relative 
                    before:absolute before:-z-10 before:w-full before:h-full before:top-3 before:left-3 
                    before:bg-transparent before:border before:border-black'
						></figure>
						<div>
							<p className='flex items-center pt-[3.75rem] text-[16px] pb-2'>
								<span className='mr-[20px]'>{data[0].auther3}</span>
								<AiOutlineLine className='mr-[20px]' />
								<span>{data[0].date3}</span>
							</p>
							<p className='flex items-center justify-between text-[22px] font-bold uppercase'>
								<a href='/' className='cursor-pointer hover:underline'>
									{data[0].headline3}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
