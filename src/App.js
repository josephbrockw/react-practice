import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
	{
		title: 'What is React?',
		content: 'React is a frontend javascript framework.'
	},
	{
		title: 'Why use React?',
		content: 'React is easy to use.'
	},
	{
		title: 'How do you use React?',
		content: 'Build components.'
	}
]

const options = [
	{
		label: 'Red',
		value: 'red'
	},
	{
		label: 'Green',
		value: 'green'
	},
	{
		label: 'Blue',
		value: 'blue'
	}
]

export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<h1>Widgets App</h1>
			<Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
			{/* <Search /> */}
			{/* <Accordion items={items} /> */}
		</div>
	)
}