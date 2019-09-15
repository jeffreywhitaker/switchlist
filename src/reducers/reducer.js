import {
    FETCHING_GAMES_START,
    FETCHING_GAMES_SUCCESS,
    FETCHING_GAMES_FAILURE
} from '../actions/actions'


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
            caseImg: 'https://www.mobygames.com/images/covers/l/498109-dead-cells-xbox-one-front-cover.jpg',
            hdRumber: false,
            multiplayer: false,
            genres: [
                'roguelike',
                'metroidvania'
            ]
        },
        {
            name: 'Fire Emblem: Three Houses',
            releaseDate: '06-26-2019',
            publisher: 'Nintendo',
            developer: 'Intelligent Systems',
            caseImg: 'https://upload.wikimedia.org/wikipedia/en/1/16/Fire_Emblem_Three_Houses.jpg',
            hdRumber: true,
            multiplayer: false,
            genres: [
                'tactical role-playing'
            ]
        },
    ],
    users: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCHING_GAMES_START:
        //     return {
        //         ...state,
        //         games: [
        //             ...state
        //         ],
        //         isFetching: true,
        //         error: ''
        //     }
        // case FETCHING_GAMES_SUCCESS:
        //     return {
        //         ...state,
        //         games: [
        //             ...state
        //         ],
        //         isFetching: false,
        //         games: action.payload
        //     }
        // case FETCHING_GAMES_FAILURE:
        //     return {
        //         ...state,
        //         games: [
        //             ...state
        //         ],
        //         isFetching: false,
        //         error: `Unable to load games: ${action.payload}`
        //     }
        default:
            return state
    }
}