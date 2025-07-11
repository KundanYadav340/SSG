import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoadingUserData: true,
  userData: {
    user1: [
      {
        userId: "user1",
        userName: "User",
        userEmail: "user@gmail.com",
        userPhone: "+919569505565",
        bankAccountNumber: "123456789012",
        bankIfsc: "SBIN0001234",
        modifiedOn: "2023-10-01T12:00:00Z",
      },
    ],
    user2: [
      {
        userId: "user2",
        userName: "User2",
        userEmail: "user2@gmail.com",
        userPhone: "+919876543210",
        bankAccountNumber: "987654321098",
        bankIfsc: "HDFC0005678",
        modifiedOn: "2023-10-02T12:00:00Z",
      },
      {
        userId: "user2",
        userName: "Kundan2",
        userEmail: "user2@gmail.com",
        userPhone: "+919876543210",
        bankAccountNumber: "987654321098",
        bankIfsc: "HDFC0005678",
        modifiedOn: "2023-10-02T12:00:00Z",
      },
    ],
    user3: [
      {
        userId: "user3",
        userName: "User2",
        userEmail: "user2@gmail.com",
        userPhone: "+919876543210",
        bankAccountNumber: "987654321098",
        bankIfsc: "HDFC0005678",
        modifiedOn: "2023-10-02T12:00:00Z",
      },
    ],
    user4: [
      {
        userId: "user4",
        userName: "User2",
        userEmail: "user2@gmail.com",
        userPhone: "+919876543210",
        bankAccountNumber: "987654321098",
        bankIfsc: "HDFC0005678",
        modifiedOn: "2023-10-02T12:00:00Z",
      },
    ],
    user5: [
      {
        userId: "user5",
        userName: "User2",
        userEmail: "user2@gmail.com",
        userPhone: "+919876543210",
        bankAccountNumber: "987654321098",
        bankIfsc: "HDFC0005678",
        modifiedOn: "2023-10-02T12:00:00Z",
      },
    ],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsLoadingUserData: (state, action) => {
      state.isLoadingUserData = action.payload;
    },
    addNewUser: (state, action) => {
      const {
        userId,
        userName,
        userEmail,
        userPhone,
        bankAccountNumber,
        bankIfsc,
      } = action.payload;
      console.log("Adding new user:", action.payload);
      const newUser = {
        userId,
        userName,
        userEmail,
        userPhone,
        bankAccountNumber,
        bankIfsc,
        modifiedOn: new Date().toISOString(),
      };
      if (!state.userData[userId]) {
        state.userData[userId] = [];
      }
      state.userData[userId].push(newUser);
    },
    updateUser: (state, action) => {
      const { userId, updatedUser } = action.payload;
      const existingUser = state.userData[userId];

      if (!existingUser) {
        console.error(`User with ID ${userId} does not exist.`);
        return;
      }
      if (existingUser.length > 1) {
        const lastIndex = existingUser.length - 1;

        if (lastIndex >= 0) {
          const updatedEntry = {
            ...existingUser[lastIndex],
            ...updatedUser,
            modifiedOn: new Date().toISOString(),
          };
          state.userData[userId] = [
            ...existingUser.slice(0, lastIndex),
            updatedEntry,
          ];
        } else {
          console.error(`No existing user data found for user ID ${userId}.`);
        }
      } else {
        const updatedEntry = {
          ...existingUser[0],
          ...updatedUser,
          modifiedOn: new Date().toISOString(),
        };
        state.userData[userId] = [...existingUser.slice(0, 1), updatedEntry];
      }
    },
  },
});

export const { setIsLoadingUserData, addNewUser, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
