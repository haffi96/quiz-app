from typing import TypedDict


# QUESTION_SETS = ["physics", "english", "maths"]
QUESTION_SETS = ["geography"]


class FakeData(TypedDict):
    question: str
    answer: str
    options: list[str]


mock_data: list[FakeData] = [
    {
        "question": "What is the capital of France?",
        "answer": "Paris",
        "options": ["Paris", "Berlin", "Rome", "Madrid"],
    },
    {
        "question": "What is the largest ocean in the world?",
        "answer": "Pacific Ocean",
        "options": [
            "Atlantic Ocean",
            "Indian Ocean",
            "Southern Ocean",
            "Pacific Ocean",
        ],
    },
    {
        "question": "What is the highest mountain peak in the world?",
        "answer": "Mount Everest",
        "options": ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    },
    {
        "question": "Which river flows through London?",
        "answer": "Thames",
        "options": ["Thames", "Seine", "Rhine", "Danube"],
    },
    {
        "question": "Which country is the largest by area?",
        "answer": "Russia",
        "options": ["China", "USA", "Canada", "Russia"],
    },
    {
        "question": "What is the capital of Italy?",
        "answer": "Rome",
        "options": ["Paris", "Rome", "Madrid", "Berlin"],
    },
    {
        "question": "What is the capital of Australia?",
        "answer": "Canberra",
        "options": ["Sydney", "Melbourne", "Perth", "Canberra"],
    },
    {
        "question": "What is the largest desert in the world?",
        "answer": "Antarctic Desert",
        "options": [
            "Sahara Desert",
            "Arabian Desert",
            "Gobi Desert",
            "Antarctic Desert",
        ],
    },
    {
        "question": "Which river is the longest in the world?",
        "answer": "Nile",
        "options": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    },
    {
        "question": "Which country is the smallest by area?",
        "answer": "Vatican City",
        "options": ["Monaco", "Nauru", "Tuvalu", "Vatican City"],
    },
    {
        "question": "What is the capital of Canada?",
        "answer": "Ottawa",
        "options": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    },
    {
        "question": "What is the highest waterfall in the world?",
        "answer": "Angel Falls",
        "options": ["Niagara Falls", "Victoria Falls", "Iguazu Falls", "Angel Falls"],
    },
    {
        "question": "Which country is the most populous?",
        "answer": "China",
        "options": ["India", "USA", "China", "Indonesia"],
    },
    {
        "question": "Which ocean is the smallest in the world?",
        "answer": "Arctic Ocean",
        "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Arctic Ocean"],
    },
    {
        "question": "What is the capital of Brazil?",
        "answer": "Brasília",
        "options": ["São Paulo", "Rio de Janeiro", "Recife", "Brasília"],
    },
    {
        "question": "What is the capital of South Africa?",
        "answer": "Pretoria",
        "options": ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
    },
    {
        "question": "Which river is the longest in Africa?",
        "answer": "Nile",
        "options": ["Nile", "Congo", "Niger", "Zambezi"],
    },
    {
        "question": "Which country is the highest by elevation?",
        "answer": "Bhutan",
        "options": ["Nepal", "Tibet", "Afghanistan", "Bhutan"],
    },
    {
        "question": "What is the capital of Japan?",
        "answer": "Tokyo",
        "options": ["Osaka", "Kyoto", "Fukuoka", "Tokyo"],
    },
    {
        "question": "What is the largest island in the world?",
        "answer": "Greenland",
        "options": ["Borneo", "Madagascar", "New Guinea", "Greenland"],
    },
    {
        "question": "Which river is the longest in Asia?",
        "answer": "Yangtze",
        "options": ["Ganges", "Indus", "Yellow", "Yangtze"],
    },
    {
        "question": "Which country is the smallest by population?",
        "answer": "Vatican City",
        "options": ["Monaco", "Nauru", "Tuvalu", "Vatican City"],
    },
    {
        "question": "What is the capital of Mexico?",
        "answer": "Mexico City",
        "options": ["Guadalajara", "Monterrey", "Puebla", "Mexico City"],
    },
    {
        "question": "What is the highest volcano in the world?",
        "answer": "Ojos del Salado",
        "options": ["Mount Everest", "Kilimanjaro", "Aconcagua", "Ojos del Salado"],
    },
    {
        "question": "Which country has the most number of time zones?",
        "answer": "France",
        "options": ["USA", "France", "Russia", "Australia"],
    },
    {
        "question": "What is the capital of Russia?",
        "answer": "Moscow",
        "options": ["Saint Petersburg", "Kazan", "Novosibirsk", "Moscow"],
    },
    {
        "question": "What is the largest lake in the world?",
        "answer": "Caspian Sea",
        "options": ["Superior", "Victoria", "Tanganyika", "Caspian Sea"],
    },
    {
        "question": "Which river is the longest in Europe?",
        "answer": "Volga",
        "options": ["Danube", "Rhine", "Seine", "Volga"],
    },
    {
        "question": "Which country is the largest by population?",
        "answer": "China",
        "options": ["India", "USA", "China", "Indonesia"],
    },
    {
        "question": "What is the capital of Argentina?",
        "answer": "Buenos Aires",
        "options": ["Buenos Aires", "Santiago", "Montevideo", "Lima"],
    },
    {
        "question": "What is the capital of Chile?",
        "answer": "Santiago",
        "options": ["Santiago", "Buenos Aires", "Montevideo", "Lima"],
    },
    {
        "question": "What is the capital of Peru?",
        "answer": "Lima",
        "options": ["Lima", "Santiago", "Buenos Aires", "Montevideo"],
    },
    {
        "question": "What is the capital of Colombia?",
        "answer": "Bogotá",
        "options": ["Bogotá", "Medellín", "Cali", "Barranquilla"],
    },
    {
        "question": "What is the capital of Ecuador?",
        "answer": "Quito",
        "options": ["Quito", "Guayaquil", "Cuenca", "Ambato"],
    },
    {
        "question": "What is the capital of Venezuela?",
        "answer": "Caracas",
        "options": ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"],
    },
    {
        "question": "What is the capital of Panama?",
        "answer": "Panama City",
        "options": ["Panama City", "David", "Colon", "Santiago"],
    },
    {
        "question": "What is the capital of Costa Rica?",
        "answer": "San José",
        "options": ["San José", "San Juan", "San Miguel", "San Carlos"],
    },
    {
        "question": "What is the capital of Honduras?",
        "answer": "Tegucigalpa",
        "options": ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Comayagua"],
    },
    {
        "question": "What is the capital of Nicaragua?",
        "answer": "Managua",
        "options": ["Managua", "Granada", "León", "Masaya"],
    },
    {
        "question": "What is the capital of El Salvador?",
        "answer": "San Salvador",
        "options": ["San Salvador", "Santa Ana", "Sonsonate", "San Miguel"],
    },
    {
        "question": "What is the capital of Guatemala?",
        "answer": "Guatemala City",
        "options": ["Guatemala City", "Antigua", "Quetzaltenango", "Huehuetenango"],
    },
    {
        "question": "What is the capital of Belize?",
        "answer": "Belmopan",
        "options": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk"],
    },
    {
        "question": "What is the capital of Jamaica?",
        "answer": "Kingston",
        "options": ["Kingston", "Montego Bay", "Ocho Rios", "Port Antonio"],
    },
    {
        "question": "What is the capital of Cuba?",
        "answer": "Havana",
        "options": ["Havana", "Santiago", "Camagüey", "Holguín"],
    },
    {
        "question": "What is the capital of Haiti?",
        "answer": "Port-au-Prince",
        "options": ["Port-au-Prince", "Cap-Haïtien", "Jacmel", "Les Cayes"],
    },
]
