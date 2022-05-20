import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import avatar from './assets/avatar.jpg';
import netflix from './assets/netflix.svg';
import hulu from './assets/hulu.svg';
import medium from './assets/medium.svg';
import tesla from './assets/tesla.svg';
import weather from './assets/weather.svg';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<div className='grid h-screen md:h-max xl:h-screen content-evenly justify-center bg-neutral-300 dark:bg-[#090909] dark:text-neutral-500  text-zinc-800 select-none  transition-all -mb-2'>
				<div className='leading-none text-[18vw] xl:text-[8vw] ml-[10vw] xl:ml-0 mt-[10vh] xl:mt-[18vh] '>
					Hey! I’m{' '}
					<span className='text-blue-600 dark:text-amber-300'>
						Yusuf
					</span>
					<br />
					Front-end Developer <br /> & UI Designer.
				</div>
				{/* // MOBILE // */}
				<div className='flex items-center xl:hidden  mb-0 xl:mb-6 md:mt-12 ml-[11vw]  space-x-2 md:space-x-4   '>
					<div className='inline-flex flex-col leading-snug space-y-1'>
						<p className='text-[3vw] md:text-[2vw]    text-neutral-500 tracking-widest mb-2'>
							PORTFOLIO
							<div className='-mt-[1vw] xl:mt-1 xl:-ml-[2px] '>
								<a
									target='_blank'
									href='https://github.com/ysfkblt'
									className='text-[4.5vw]  text-blue-600 dark:text-amber-300'
								>
									github
								</a>
							</div>
						</p>
						<p className='text-[3vw] md:text-[2vw] text-neutral-500 tracking-widest'>
							MAIL ME
							<div className='-mt-[1vw] xl:mt-1'>
								<a
									href='mailto:yusufakbulut@live.com?subject=Hi!'
									className='text-[4.5vw]  text-blue-600 dark:text-amber-300'
								>
									yusufakbulut@live.com
								</a>
							</div>
						</p>
					</div>
				</div>
				{/* // DESKTOP // */}
				<div className='hidden xl:inline-flex mb-[4vh] justify-between leading-none'>
					<div className='inline-flex self-start xl:self-end'>
						<p className='text-[1vw] text-neutral-500 tracking-widest'>
							MAIL ME
							<div className=''>
								<a
									href='mailto:yusufakbulut@live.com?subject=Hi!'
									className='text-[2vw] text-blue-600 dark:text-amber-300'
								>
									yusufakbulut@live.com
								</a>
							</div>
						</p>
					</div>

					<div className='inline-flex self-end '>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/ysfkblt'
						>
							<img
								className='h-[8vw] dark:border-[#090909] border-blue-600 border-[2px] rounded-full object-cover'
								src={avatar}
							/>
						</a>
					</div>
				</div>
				<ChevronDownIcon className='hidden xl:block absolute  text-blue-600 dark:text-amber-200 bottom-4 left-1/2 arrowanimation h-[2vh] xl:h-[1.5vw] opacity-70' />
			</div>
			{/* // CASE // */}
			<div className='flex flex-col items-start bg-neutral-300 dark:bg-[#090909] dark:text-neutral-500  text-zinc-800 select-none  transition-all leading-none pl-[11vw] pt-[2vh] md:pt-[8vh] pb-6 xl:pt-24 xl:pb-8 xl:pl-[12vw] text-[11vw] xl:text-[5vw] space-y-4  '>
				<p className='font-bold pb-2 xl:pb-4 '>Projects</p>
				<p>
					Netflix
					<a
						className='inline-flex align-baseline '
						target='_blank'
						rel='noopener noreferrer'
						href='https://ysfkblt.github.io/netflix-clone/'
					>
						<img
							className='h-[9vw] xl:h-[4vw] px-2 xl:px-[1vw]'
							src={netflix}
						/>
					</a>
				</p>
				<p>
					Hulu
					<a
						className='inline-flex align-baseline '
						target='_blank'
						rel='noopener noreferrer'
						href='https://huluwebapp.vercel.app/'
					>
						<img
							className='h-[7vw] xl:h-[3.5vw] px-2 xl:px-[2vw] '
							src={hulu}
						/>
					</a>
				</p>

				<p>
					Medium
					<a
						className='inline-flex align-baseline '
						target='_blank'
						rel='noopener noreferrer'
						href='https://ysfkblt.github.io/Liteum/'
					>
						<img
							className='h-[6vw] xl:h-[3.5vw] px-2 xl:px-[2vw] '
							src={medium}
						/>
					</a>
				</p>
				<p>
					Tesla
					<a
						className='inline-flex align-baseline '
						target='_blank'
						rel='noopener noreferrer'
						href='https://ysfkblt.github.io/tesla_ui/'
					>
						<img
							className='h-[5vw] xl:h-[2.6vw] px-2 xl:px-[2vw] '
							src={tesla}
						/>
					</a>
				</p>
				<p>
					Weather Forecast App
					<a
						className='inline-flex align-baseline '
						target='_blank'
						rel='noopener noreferrer'
						href='https://ysfkblt.github.io/weatherforecastapp/'
					>
						<img
							className='h-[9vw] xl:h-[5vw] px-2 xl:px-[1vw]'
							src={weather}
						/>
					</a>
				</p>
			</div>
		</React.Fragment>
	);
}

export default App;
