import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCharacters = createAsyncThunk(
'characters/fetchCharacters',
async () => {
const res = await fetch('https://rickandmortyapi.com/api/character');
const data = await res.json();
return data.results;
}
);


const charactersSlice = createSlice({
name: 'characters',
initialState: {
characters: [],
likedIds: [],
filter: 'all',
loading: false
},
reducers: {
toggleLike: (state, action) => {
const id = action.payload;
state.likedIds = state.likedIds.includes(id)
? state.likedIds.filter(e => e !== id)
: [...state.likedIds, id];
},
setFilter: (state, action) => {
state.filter = action.payload;
}
},
extraReducers: builder => {
builder
.addCase(fetchCharacters.pending, (state) => {
state.loading = true;
})
.addCase(fetchCharacters.fulfilled, (state, action) => {
state.characters = action.payload;
state.loading = false;
});
}
});


export const { toggleLike, setFilter } = charactersSlice.actions;
export const selectFilteredCharacters = state => {
if (state.characters.filter === 'all') return state.characters.characters;
return state.characters.characters.filter(c => c.status.toLowerCase() === state.characters.filter);
};


export const selectLikedCharacters = state =>
state.characters.characters.filter(c => state.characters.likedIds.includes(c.id));


export default charactersSlice.reducer;