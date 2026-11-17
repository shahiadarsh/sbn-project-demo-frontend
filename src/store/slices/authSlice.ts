import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getApiUrl } from '@/utils/api';

interface AuthState {
    admin: any | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    admin: null,
    token: typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null,
    loading: false,
    error: null,
};

export const loginAdmin = createAsyncThunk(
    'auth/login',
    async (credentials: any, { rejectWithValue }) => {
        try {
            const apiUrl = getApiUrl();
            const response = await axios.post(`${apiUrl}/auth/login`, credentials);
            if (response.data.success) {
                localStorage.setItem('adminToken', response.data.token);
                return response.data;
            }
            return rejectWithValue(response.data.message);
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || 'Login failed');
        }
    }
);

export const fetchMe = createAsyncThunk(
    'auth/fetchMe',
    async (_, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        if (!token) return rejectWithValue('No token');

        try {
            const apiUrl = getApiUrl();
            const response = await axios.get(`${apiUrl}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            localStorage.removeItem('adminToken');
            return rejectWithValue(err.response?.data?.message || 'Session expired');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.admin = null;
            state.token = null;
            localStorage.removeItem('adminToken');
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchMe.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
            })
            .addCase(fetchMe.rejected, (state) => {
                state.loading = false;
                state.admin = null;
                state.token = null;
            });
    },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
