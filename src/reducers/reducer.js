
const initialState = {
    games: [
        {
            name: 'Super Mario Odyssey',
            releaseDate: '10-27-2017',
            publisher: 'Nintendo',
            developer: 'Nintendo EPD',
            caseImg: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
            hdRumber: true,
            multiplayer: true,
            genres: [
                'platform',
                'action-adventure'
            ]
        },
        {
            name: 'Dead Cells',
            releaseDate: '08-07-2018',
            publisher: 'Motion Twin',
            developer: 'Motion Twin',
            caseImg: null,
            hdRumber: false,
            multiplayer: false,
            genres: [
                'roguelike',
                'metroidvania'
            ]
        }
    ],
    users: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}