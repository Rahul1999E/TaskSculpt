import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    user: [],
    //  id : nanoid(),
    loading: false,
    error: null,
    searchContainer:[]
}


// create Action
export const createAction = createAsyncThunk('sendAction', async (data) => {
    try {
        const response = await axios.post("https://6592b4ddbb129707198ff64c.mockapi.io/study", data);
        // const result = await response.json();101101
        console.log(response);
        return response.data;
    }

    catch (error) {
        console.log("this is the error", error);

        throw error(error);
    }
})


// update action 
export const updateAction = createAsyncThunk('updateAction', async (data) => {
    console.log("updateAction", data);
    try {
        const response = await axios.put(`https://6592b4ddbb129707198ff64c.mockapi.io/study/${data.id}`, data);
        // const result = await response.json();101101
        console.log(response);
        return response.data;
    }

    catch (error) {
        console.log("this is the error", error);
        throw error(error);
    }
})

// show action
export const showAction = createAsyncThunk('showAction', async (data) => {
    try {
        const response = await axios.get("https://6592b4ddbb129707198ff64c.mockapi.io/study", data);
        // const result = await response.json();101101
        // console.log(response);
        return response.data;
    }

    catch (error) {
        console.log("this is the error", error);

        throw error(error);
    }
})


// delete action
export const deleteAction = createAsyncThunk('deleteAction', async (id) => {
    console.log("lllllllllllllllllllllllllllllllllllll");
    try {
        const response = await axios.delete(`https://6592b4ddbb129707198ff64c.mockapi.io/study/${id}`);
        // const result = await response.json();      
        return response.data;
    }

    catch (error) {
        console.log("this is the error", error);

        throw error(error);
    }
})

export const userData = createSlice({
    name: "CRUDApp",
    initialState,
    reducers : {
        searchUser : (state,action)=>{
            state.searchContainer = action.payload;
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAction.pending, (state) => {
                state.loading = true;

            })
            .addCase(createAction.fulfilled, (state, action) => {
                state.loading = false;

                state.user.push(action.payload)
                console.log("Fulfilled:", action.payload);

            })
            .addCase(createAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload

            })


            //////////

            .addCase(showAction.pending, (state) => {
                state.loading = true;

            })
            .addCase(showAction.fulfilled, (state, action) => {
                state.loading = false;

                state.user = action.payload
                // console.log("Fulfilled:", action.payload);

            })
            .addCase(showAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload

            })



            //////////// delete 

            .addCase(deleteAction.pending, (state) => {
                state.loading = true;

            })
            .addCase(deleteAction.fulfilled, (state, action) => {
                state.loading = false;
                state.user = state.user.filter((item) => item.id !== action.payload)
                console.log("Fulfilled:", action.payload);
                window.location.reload();


            })
            .addCase(deleteAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })


            // update action
            .addCase(updateAction.pending, (state) => {
                state.loading = true;

            })
            .addCase(updateAction.fulfilled, (state, action) => {
                state.loading = false;

                // state.user.push(action.payload)
                state.user = state.user.map((elem)=>(
                    elem.id === action.payload.id ? action.payload : elem
                ))
             console.log("Fulfilled:", state.user);


            })
            .addCase(updateAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload

            })
        
        }

})

export default userData.reducer;
export const { searchUser } = userData.actions;

