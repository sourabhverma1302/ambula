import { createSlice } from '@reduxjs/toolkit';


var key_index=0;

const CreateData=createSlice({
    name:'tododata',
    initialState:{
        data:[]
    },
    reducers:{
        createtododata:(state,action)=>{
            key_index++;
            const newdata={
            item:action.payload,
            id:key_index
            }
            state.data.push(newdata);
        },
        erasedata:(state,action)=>{
            const todoId=action.payload;
            console.log("ID",action.payload);
            state.data=state.data.filter(item=>item.id !== todoId);
        }
    }
})

export const{createtododata,erasedata} =CreateData.actions;
export default CreateData.reducer;