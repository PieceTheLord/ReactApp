import { createApi } from "@reduxjs/toolkit/query/react";
import { User } from "../../entities/user/types/User";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: () => ({ data: {} }),
  endpoints: (builder) => ({
    auth: builder.query<User, void>({
      query: () => "auth",
    }),
  }),
});
