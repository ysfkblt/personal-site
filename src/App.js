import avatar from './assets/avatar.jpg';
import def from './assets/default.svg';
import under from './assets/under.svg';
import { shuffle } from 'lodash';
import { useState, useEffect } from 'react';
import gradient from './gradient';

function App() {
	const [background, setBackground] = useState(null);
	useEffect(() => {
		setBackground(shuffle(gradient).pop());
	}, []);

	return (
		<div className=' grid place-items-center h-screen bg-zinc-400 m-0 p-0'>
			<div
				style={{ backgroundImage: background }}
				class=' grid overflow-hidden  grid-cols-3 grid-rows-3 h-screen w-screen  xl:w-[56vw] border-x border-black  select-none text-center m-0 bg-center bg-cover text-7xl font-black text-black p-0'
			>
				<div class='inline-grid row-start-1 row-end-2 col-start-1 col-end-2 border-b border-black'>
					<div className='flex place-self-center '>
						<img
							className='h-32 border-black border rounded-full object-cover'
							src={avatar}
						/>
					</div>
				</div>
				<div class='inline-grid row-start-2 row-end-3 col-start-1 col-end-2 border-b border-black place-content-evenly '>
					<div className='text-lg md:text-3xl'>
						<p>[CONTACT]</p>
						<p className='font-normal leading-tight text-sm md:text-2xl mt-1'>
							yusufakbulut <br /> @live.com
						</p>
						<a
							className='sm:text-3xl text-xl'
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/ysfkblt'
						>
							github
						</a>
					</div>
				</div>
				<div class='inline-grid row-start-3 row-end-4 col-start-1 col-end-2'>
					<div className='flex place-self-center text-[20vh] sm:text-[25vh] '>
						<p>↑</p>
					</div>
				</div>
				<div class='inline-grid row-start-1 row-end-4 col-start-2 col-end-3 border-l border-black  '></div>
				<div class='inline-grid row-start-1 row-end-4  col-start-3 col-end-4 border-l border-black '>
					<img
						className='flex self-start mx-2 md:mx-6 xl:mx-12 mt-16'
						src={under}
					/>
					<img
						className='flex self-end mb-2 mx-5 sm:mx-10 xl:mx-12'
						src={def}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
