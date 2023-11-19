import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'
export const bannerAdd = createAsyncThunk(
    'Banner/add_banner',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        console.log(info)
        try {
            const { data } = await api.post('/banner-add', info, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_banner = createAsyncThunk(
    'Banner/get_banner',
    async ( productId , { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/banner-get/${productId}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const get_banners = createAsyncThunk(
    'Banner/get_banners',
    async ( _, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/banners-get`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const bannerReducer = createSlice({
    name: 'banner',
    initialState: {
        successMessage: '',
        errorMessage: '',
        banner :"",
        loader: false,
        banners: [],
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: {
        [bannerAdd.pending]: (state, _) => {
            state.loader = true
        },
        [bannerAdd.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [bannerAdd.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
            state.banners = payload.banner
        },
        [get_banner.fulfilled]: (state, { payload }) => {
            state.totalBanner = payload.totalBanner
            state.banner = payload.banner
        },
        [get_banners.fulfilled]: (state, { payload }) => {
            state.totalBanner = payload.totalBanner
            state.allBanner = payload.banners
        },
    }

})
export const { messageClear } = bannerReducer.actions
export default bannerReducer.reducer