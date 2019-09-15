// import {
//     FETCHING_GAMES_START,
//     FETCHING_GAMES_SUCCESS,
//     FETCHING_GAMES_FAILURE
// } from '../actions/actions'


const initialState = {
    games: [
        {
            name: 'Super Mario Odyssey',
            releaseDate: '10-27-2017',
            series: 'Super Mario',
            publisher: 'Nintendo',
            developer: 'Nintendo EPD',
            directors: [
                'Kenta Motokura'
            ],
            composers: [
                'Naoto Kubo',
                'Shiho Fujii',
                'Koji Kondo',
            ],
            caseImg: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
            hdRumble: true,
            multiplayer: true,
            cloudSaves: true,
            genres: [
                'platform',
                'action-adventure'
            ]
        },
        {
            name: 'Dead Cells',
            releaseDate: '08-07-2018',
            series: null,
            publisher: 'Motion Twin',
            developer: 'Motion Twin',
            directors: [],
            composers: [
                'Yoann Laulan',
            ],
            caseImg: 'https://www.mobygames.com/images/covers/l/498109-dead-cells-xbox-one-front-cover.jpg',
            hdRumble: false,
            multiplayer: false,
            couldSaves: true,
            genres: [
                'roguelike',
                'metroidvania'
            ]
        },
        {
            name: 'Fire Emblem: Three Houses',
            releaseDate: '06-26-2019',
            series: 'Fire Emblem',
            publisher: 'Nintendo',
            developer: 'Intelligent Systems',
            directors: [
                'Toshiyuki Kusakihara',
                'Genki Yokota',
            ],
            composers: [
                'Takeru Kanazaki',
                'Hiroki Morishita',
                'Rei Kondoh',
            ],
            caseImg: 'https://upload.wikimedia.org/wikipedia/en/1/16/Fire_Emblem_Three_Houses.jpg',
            hdRumble: true,
            multiplayer: false,
            cloudSaves: true,
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