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
		<header className='px-[50px] bg-gray-100'>
			<div className='flex py-[50px] gap-[90px] items-center'>
				<div className='text-[50px] cursor-pointer'>
					<figure>
						<GiHamburgerMenu />
					</figure>
				</div>
				<div className='flex-[1.5] relative group'>
					<figure className='absolute -left-10 -top-1.5 text-[30px]'>
						<button>
							<FiSearch />
						</button>
					</figure>
					<input
						className='w-full outline-none bg-transparent'
						aria-label='Search'
						type='text'
						placeholder='SEARCH...'
					/>
				</div>
				<div className='text-6xl italic flex-[3]'>LOREM IPSUM</div>
				<div className='flex-[2] flex items-center justify-end'>
					<button className='mr-8 uppercase'>Sign in</button>
					<div className='button-styling-before'>
						<div
							className='button-styling'
						>
							Subscribe Now
						</div>
						{/* <div className='button-styling-back'>Subscribe Now</div> */}
					</div>
				</div>
			</div>
			<nav className='flex justify-center gap-6 border-b-black uppercase text-sm'>
				{NavItems.map(({ _id, name, href }) => (
					<Link
						to={href}
						key={_id}
						className={`block ${
							_id === "-nav-item-1" && "border-b-[6px] border-b-black pb-2"
						}`}
					>
						{name}
					</Link>
				))}
			</nav>
			<div className='w-full h-[1px] bg-black -translate-y-[3.5px]' />
		</header>
	);
}
