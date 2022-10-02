export interface Movie {
    src: string,
    title: string,
    main:string,
    runtime:string
}

export const movieData : Movie[] = [
    {
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg',
		title: 'Batman Begins',
		main: 'Christian Bale',
		runtime: '120m'
	},
	{ src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/dune.jpg', title: 'Dune', main: 'Timothée Chalamet', runtime: '120m' },
	{ src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/sing_2.jpg', title: 'Sing 2', main: 'Matthew McConaughey', runtime: '120m' },
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/spider_man.jpg',
		title: 'Spider-Man: No Way Home',
		main: 'Tom Holland',
		runtime: '120m'
	},
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/the_dark_knight.jpg',
		title: 'The Dark Knight Rises',
		main: 'Christian Bale',
		runtime: '120m'
	},
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/the_dark_knight_rises.jpg',
		title: 'The Dark Knight',
		main: 'Christian Bale',
		runtime: '120m'
	}
]