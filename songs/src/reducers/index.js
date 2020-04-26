import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Lean On', duration: '2:58'},
        {title: 'Hymn For The Weekend', duration: '4:20'},
        {title: 'Titanium', duration: '4:05'},
        {title: 'Faded', duration: '3:33'},
        {title: 'Girls like you', duration: '4:31'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});