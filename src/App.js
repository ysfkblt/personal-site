import avatar from './assets/avatar.jpg';

function App() {
	return (
		<div className='grid h-screen place-items-center bg-[#090909] select-none text-neutral-500'>
			<div className='inline-grid h-screen xl:items-end'>
				<p className='leading-none text-[18vw] xl:text-[8vw] ml-[10vw] xl:ml-0 mt-[7vh] xl:mt-0 '>
					Hey! I’m <span className='text-amber-300'>Yusuf</span>
					<br />
					Front-end Developer <br /> & UI Designer.
				</p>
				<div className='inline-flex mb-[10vh] xl:mb-[5vh] justify-between mx-[10vw] xl:mx-0 '>
					<div className='inline-flex self-end'>
						<p className='text-[.5rem] xl:text-xs text-gray-400 tracking-widest'>
							MAIL ME
							<div className='-mt-[1vw] xl:mt-1'>
								<a
									href='mailto:yusufakbulut@live.com?subject=Hi!'
									className='text-[4.5vw] xl:text-[2vw] text-amber-300'
								>
									yusufakbulut@live.com
								</a>
							</div>
						</p>
					</div>
					<div className='inline-flex self-end mb-1 xl:mb-0'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/ysfkblt'
						>
							<img
								className='h-[14vw] xl:h-[8vw] border-black border rounded-full object-cover'
								src={avatar}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
