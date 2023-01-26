from common import FakeData, QuestionSetsData

geography_data: list[FakeData] = [
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


music_data: list[FakeData] = [
    {
        "question": "Who is the lead singer of the band Queen?",
        "answer": "Freddie Mercury",
        "options": ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
    },
    {
        "question": "Which artist is known as the 'King of Pop'?",
        "answer": "Michael Jackson",
        "options": ["Michael Jackson", "Prince", "Elvis Presley", "Madonna"],
    },
    {
        "question": "What is the name of the band consisting of Bono, The Edge, Adam Clayton and Larry Mullen Jr?",
        "answer": "U2",
        "options": ["U2", "The Beatles", "Rolling Stones", "Led Zeppelin"],
    },
    {
        "question": "Who wrote the opera 'The Barber of Seville'?",
        "answer": "Gioachino Rossini",
        "options": [
            "Gioachino Rossini",
            "Wolfgang Amadeus Mozart",
            "Ludwig van Beethoven",
            "Giuseppe Verdi",
        ],
    },
    {
        "question": "Who wrote the music for the musical Les Miserables?",
        "answer": "Claude-Michel Schönberg",
        "options": [
            "Claude-Michel Schönberg",
            "Andrew Lloyd Webber",
            "Stephen Sondheim",
            "Lin-Manuel Miranda",
        ],
    },
    {
        "question": "What is the name of the band consisting of Axl Rose, Slash, Duff McKagan and Dizzy Reed?",
        "answer": "Guns N' Roses",
        "options": ["Guns N' Roses", "Metallica", "Led Zeppelin", "Aerosmith"],
    },
    {
        "question": "Who wrote the famous opera 'Tosca'?",
        "answer": "Giacomo Puccini",
        "options": [
            "Giacomo Puccini",
            "Vincenzo Bellini",
            "Gioachino Rossini",
            "Giuseppe Verdi",
        ],
    },
    {
        "question": "What is the name of the band consisting of Beyoncé, Kelly Rowland, and Michelle Williams?",
        "answer": "Destiny's Child",
        "options": ["Destiny's Child", "TLC", "En Vogue", "SWV"],
    },
    {
        "question": "Who wrote the music for the musical The Phantom of the Opera?",
        "answer": "Andrew Lloyd Webber",
        "options": [
            "Andrew Lloyd Webber",
            "Claude-Michel Schönberg",
            "Stephen Sondheim",
            "Lin-Manuel Miranda",
        ],
    },
    {
        "question": "What is the name of the band consisting of Freddie Mercury, Brian May, John Deacon and Roger Taylor?",
        "answer": "Queen",
        "options": ["Queen", "Led Zeppelin", "The Beatles", "Rolling Stones"],
    },
    {
        "question": "Who is known as the 'Queen of Soul'?",
        "answer": "Aretha Franklin",
        "options": [
            "Aretha Franklin",
            "Whitney Houston",
            "Stevie Wonder",
            "Michael Jackson",
        ],
    },
    {
        "question": "What is the name of the band consisting of Bono, The Edge, Adam Clayton and Larry Mullen Jr?",
        "answer": "U2",
        "options": ["U2", "The Beatles", "Rolling Stones", "Led Zeppelin"],
    },
    {
        "question": "Who wrote the famous opera 'La Traviata'?",
        "answer": "Giuseppe Verdi",
        "options": [
            "Giuseppe Verdi",
            "Giacomo Puccini",
            "Vincenzo Bellini",
            "Gioachino Rossini",
        ],
    },
    {
        "question": "What is the name of the band consisting of Taylor Hawkins, Dave Grohl, Nate Mendel and Chris Shiflett?",
        "answer": "Foo Fighters",
        "options": ["Foo Fighters", "Nirvana", "Pearl Jam", "Soundgarden"],
    },
    {
        "question": "Who wrote the music for the musical West Side Story?",
        "answer": "Leonard Bernstein",
        "options": [
            "Leonard Bernstein",
            "Stephen Sondheim",
            "Andrew Lloyd Webber",
            "Lin-Manuel Miranda",
        ],
    },
    {
        "question": "What is the name of the band consisting of John Lennon, Paul McCartney, George Harrison and Ringo Starr?",
        "answer": "The Beatles",
        "options": ["The Beatles", "Led Zeppelin", "The Rolling Stones", "Queen"],
    },
]


food_data: list[FakeData] = [
    {
        "question": "Which country is known for its dish 'Paella'?",
        "answer": "Spain",
        "options": ["Spain", "Italy", "France", "Greece"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Pad Thai'?",
        "answer": "Thai",
        "options": ["Thai", "Chinese", "Japanese", "Indian"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Pizza'?",
        "answer": "Italian",
        "options": ["Italian", "Greek", "Spanish", "French"],
    },
    {
        "question": "Which country is known for its dish 'Sushi'?",
        "answer": "Japan",
        "options": ["Japan", "China", "Thailand", "Korea"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Falafel'?",
        "answer": "Middle Eastern",
        "options": ["Middle Eastern", "Italian", "Mexican", "Chinese"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Biryani'?",
        "answer": "Indian",
        "options": ["Indian", "Thai", "Chinese", "Mexican"],
    },
    {
        "question": "Which country is known for its dish 'Fondue'?",
        "answer": "Switzerland",
        "options": ["Switzerland", "France", "Italy", "Germany"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Taco'?",
        "answer": "Mexican",
        "options": ["Mexican", "Chinese", "Japanese", "Italian"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Sauerbraten'?",
        "answer": "German",
        "options": ["German", "Italian", "Chinese", "Mexican"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Pho'?",
        "answer": "Vietnamese",
        "options": ["Vietnamese", "Thai", "Chinese", "Japanese"],
    },
    {
        "question": "Which country is known for its dish 'Croissant'?",
        "answer": "France",
        "options": ["France", "Italy", "Spain", "Germany"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Kung Pao Chicken'?",
        "answer": "Chinese",
        "options": ["Chinese", "Thai", "Japanese", "Indian"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Goulash'?",
        "answer": "Hungarian",
        "options": ["Hungarian", "German", "Polish", "Czech"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Borscht'?",
        "answer": "Eastern European",
        "options": ["Eastern European", "Russian", "German", "Polish"],
    },
    {
        "question": "Which country is known for its dish 'Ceviche'?",
        "answer": "Peru",
        "options": ["Peru", "Colombia", "Ecuador", "Chile"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Bratwurst'?",
        "answer": "German",
        "options": ["German", "Austrian", "Swiss", "Czech"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Biryani'?",
        "answer": "Indian",
        "options": ["Indian", "Pakistani", "Bangladeshi", "Sri Lankan"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Jambalaya'?",
        "answer": "Cajun",
        "options": ["Cajun", "Creole", "Tex-Mex", "Caribbean"],
    },
    {
        "question": "Which country is known for its dish 'Fajitas'?",
        "answer": "Mexico",
        "options": ["Mexico", "Spain", "Argentina", "Uruguay"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Couscous'?",
        "answer": "North African",
        "options": ["North African", "Middle Eastern", "Mediterranean", "Sub-Saharan"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Harira'?",
        "answer": "Moroccan",
        "options": ["Moroccan", "Algerian", "Tunisian", "Libyan"],
    },
    {
        "question": "Which country is known for its dish 'Moussaka'?",
        "answer": "Greece",
        "options": ["Greece", "Turkey", "Bulgaria", "Romania"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Enchiladas'?",
        "answer": "Mexican",
        "options": ["Mexican", "Cuban", "Puerto Rican", "Dominican"],
    },
    {
        "question": "Which type of cuisine is famous for its dish 'Gumbo'?",
        "answer": "Cajun",
        "options": ["Cajun", "Creole", "Caribbean", "Tex-Mex"],
    },
]


sport_data: list[FakeData] = [
    {
        "question": "Which country has won the most FIFA World Cups?",
        "answer": "Brazil",
        "options": ["Brazil", "Germany", "Italy", "Argentina"],
    },
    {
        "question": "Which country has won the most Olympic medals?",
        "answer": "USA",
        "options": ["USA", "Russia", "China", "Germany"],
    },
    {
        "question": "Which player has won the most ATP Tour titles?",
        "answer": "Roger Federer",
        "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    },
    {
        "question": "Which team has won the most Super Bowls?",
        "answer": "Pittsburgh Steelers",
        "options": [
            "Pittsburgh Steelers",
            "New England Patriots",
            "Dallas Cowboys",
            "San Francisco 49ers",
        ],
    },
    {
        "question": "Which driver has won the most Formula 1 World Championships?",
        "answer": "Michael Schumacher",
        "options": [
            "Michael Schumacher",
            "Juan Manuel Fangio",
            "Lewis Hamilton",
            "Ayrton Senna",
        ],
    },
    {
        "question": "Which team has won the most Stanley Cups?",
        "answer": "Montreal Canadiens",
        "options": [
            "Montreal Canadiens",
            "Toronto Maple Leafs",
            "Detroit Red Wings",
            "Boston Bruins",
        ],
    },
    {
        "question": "Which country has won the most Rugby World Cups?",
        "answer": "New Zealand",
        "options": ["New Zealand", "South Africa", "Australia", "England"],
    },
    {
        "question": "Which league has the most Champions League Titles?",
        "answer": "Spain",
        "options": ["Spain", "Italy", "England", "Germany"],
    },
    {
        "question": "Which player has won the most Wimbledon titles in the Open Era?",
        "answer": "Roger Federer",
        "options": ["Roger Federer", "Pete Sampras", "Bjorn Borg", "Novak Djokovic"],
    },
    {
        "question": "Which team has won the most NBA championships?",
        "answer": "Boston Celtics",
        "options": [
            "Boston Celtics",
            "Los Angeles Lakers",
            "Chicago Bulls",
            "San Antonio Spurs",
        ],
    },
]

question_sets_data: QuestionSetsData = {
    "Geography": geography_data,
    "Music": music_data,
    "Food": food_data,
    "Sports": sport_data,
}
