import React from 'react';
import { ThemeContext } from './ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function Toggle() {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className='transition duration-500 ease-in-out rounded-full p-2 absolute right-0 top-0 mr-3 mt-3 md:mr-6 md:mt-6 '>
			{theme === 'dark' ? (
				<SunIcon
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
					className='text-amber-300 h-[3vh] xl:h-[2vw] cursor-pointer'
				/>
			) : (
				<MoonIcon
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
					className='text-blue-600 text h-[3vh] xl:h-[2vw] cursor-pointer'
				/>
			)}
		</div>
	);
}
