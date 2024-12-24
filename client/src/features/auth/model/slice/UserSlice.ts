import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../../../entities/user/types/User"

const initialState: User = {
  name: "",
  email: "",
  password: "",
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    auth: (state, { payload }: PayloadAction<User>) => {
      
    }
  }
}) 