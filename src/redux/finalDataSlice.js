import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    studentData : []
}

const finalDataSlice = createSlice({
    name : "studentData",
    initialState,
    reducers : {
        addStudentData : (state, action) => {
            state.studentData.push(action.payload);
        }
    }

});

export default finalDataSlice.reducer;
export const { addStudentData } = finalDataSlice.actions;
