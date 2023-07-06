export interface TaskI {
	name: string
	id: string
	layerIndex: string
	childs: TaskI[]
}


export const mock: TaskI[] = [
	{
		name: 'task1',
		id: '1',
		layerIndex: '1',
		childs: [
			{
				name: 'task1.1',
				id: '1.1',
				layerIndex: '2',
				childs: [
					{
						name: 'task1.1.1',
						id: '1.1.1',
						layerIndex: '3',
						childs: []
					},
					{
						name: 'task1.1.2',
						id: '1.1.2',
						layerIndex: '3',
						childs: []
					},
					{
						name: 'task1.1.3',
						id: '1.1.3',
						layerIndex: '3',
						childs: [
							{
								name: 'task1.1.3.1',
								id: '1.1.3.1',
								layerIndex: '4',
								childs: []
							},
							{
								name: 'task1.1.3.2',
								id: '1.1.3.2',
								layerIndex: '4',
								childs: []
							}
						]
					},
				]
			},
			{
				name: 'task1.2',
				id: '1.2',
				layerIndex: '2',
				childs: []
			}
		]
	},
	{
		name: 'task2',
		id: '2',
		layerIndex: '1',
		childs: []
	},
	{
		name: 'task3',
		id: '3',
		layerIndex: '1',
		childs: [
			{
				name: 'task3.1',
				id: '3.1',
				layerIndex: '2',
				childs: []
			},
			{
				name: 'task3.2',
				id: '3.2',
				layerIndex: '2',
				childs: [
					{
						name: 'task3.2.1',
						id: '3.2.1',
						layerIndex: '3',
						childs: []
					},
					{
						name: 'task3.2.2',
						id: '3.2.2',
						layerIndex: '3',
						childs: []
					},
				]
			},
			{
				name: 'task3.3',
				id: '3.3',
				layerIndex: '2',
				childs: []
			},
		]
	},
]

