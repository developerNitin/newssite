import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu as GiHamburgerMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NavItems = [
	{ _id: "-nav-item-1", name: "News", href: "/" },
	{ _id: "-nav-item-2", name: "Sports", href: "/sports" },
	{ _id: "-nav-item-3", name: "Entertainment", href: "/entertaiment" },
	{ _id: "-nav-item-4", name: "Life", href: "/life" },
	{ _id: "-nav-item-5", name: "Money", href: "/money" },
	{ _id: "-nav-item-6", name: "Tech", href: "/tech" },
	{ _id: "-nav-item-7", name: "Travel", href: "/travel" },
];

export default function Header() {
	return (
		<header className='px-[50px]'>
			<div className='flex py-[50px] gap-[90px] items-center'>
				<div className='text-[50px] cursor-pointer'>
					<figure>
						<GiHamburgerMenu />
					</figure>
				</div>
				<div className='flex-[1.5] relative group'>
					<figure className='absolute -left-10 -top-2 text-[30px]'>
						<button>
							<FiSearch />
						</button>
					</figure>
					<input
						className='w-full outline-none'
						aria-label='Search'
						type='text'
						placeholder='SEARCH...'
					/>
				</div>
				<div className='text-6xl italic flex-[3]'>LOREM IPSUM</div>
				<div className='flex-[2] flex items-center justify-end'>
					<button className='mr-8 uppercase text-sm'>Sign in</button>
					<div className='relative inline-block group hover:cursor-pointer w-32 h-12 uppercase text-sm'>
						<div
							className='border-2 border-black group-hover:subscribe-transition transition-all 
                            duration-200 absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center'
							style={{ zIndex: "999" }}
						>
							Subscribe Now
						</div>
						<div className='absolute w-full h-full bg-black top-1 left-1' />
					</div>
				</div>
			</div>
			<nav className='flex justify-center gap-6 border-b-black uppercase text-xs'>
				{NavItems.map(({ _id, name, href }) => (
					<Link
						to={href}
						key={_id}
						className={`block ${
							_id === "-nav-item-1" && "border-b-4 border-b-black pb-2"
						}`}
					>
						{name}
					</Link>
				))}
			</nav>
			<div className='w-full h-[1px] bg-black -translate-y-[2px]' />
		</header>
	);
}
