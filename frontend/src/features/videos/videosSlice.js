import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';

export const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

// async function to fetch videos from the backend
export const fetchVideos = createAsyncThunk('/videos/fetchVideos', 
    async () => {
        const vidoes = await getVideos()
        return vidoes
    }
)

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchVideos.pending, (state) => {
            state.isError = false
            state.isLoading = true
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false
            state.videos = action.payload
        })
        .addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false
            state.videos = []
            state.isError = true
            state.error = action.error?.message
        })
    }
})

export default videoSlice.reducer