const loadLikedTracksFromLocalStorage = () => {
    try {
        const likedTracks = localStorage.getItem('likedTracks');
        if (likedTracks) {
            return JSON.parse(likedTracks);
        }
    } catch (error) {
        console.error(error);
    }
    return [];
};

const initialState = {
    likeSongs: loadLikedTracksFromLocalStorage(),
};

const likedSong = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_LIKED":
            const duplicateOrNot = state.likeSongs.find(track => track.id === action.payload.id);
            if (duplicateOrNot) {
                const newLikeSongs = [...state.likeSongs, action.payload];
                try {
                    localStorage.setItem('likedTracks', JSON.stringify(newLikeSongs));
                } catch (error) {
                    console.error(error);
                }
                return {
                    ...state,
                    likeSongs: newLikeSongs,
                };
            } else {
                return state
            }
        default:
            return state;
    }
};

export default likedSong;