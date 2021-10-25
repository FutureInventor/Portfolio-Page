interface IconProps {
	id?: number;
	name: string;
	path: string;
}

const menuBarItems: IconProps[] = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'Work',
		path: '/work',
	},
	{
		id: 3,
		name: 'About',
		path: '/about',
	},
];

export { menuBarItems };
