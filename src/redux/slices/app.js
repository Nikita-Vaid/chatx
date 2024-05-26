
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // can be CONTACT, STARRED, SHARED
    },

    snackbar: {
        open: false,
        message: null,
        severity: null,
    },

    users: [], // all users of app who are not friends and not requested yet
    friends: [], // all friends
    friendRequests: [], // all friend requests

}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // Toggle Sidebar
        toggleSideBar(state) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSideBarType(state, action) {
            state.sidebar.type = action.payload.type;
        },

        openSnackBar(state, action) {
            console.log(action.payload);
            state.snackbar.open = true;
            state.snackbar.severity = action.payload.severity;
            state.snackbar.message = action.payload.message;
        },

        closeSnackBar(state) {
            state.snackbar.open = false;
            state.snackbar.severity = null;
            state.snackbar.message = null;
        },

        updateUsers(state, action) {
            state.users = action.payload.users;
        },

        updateFriends(state, action) {
            state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
            state.friendRequests = action.payload.requests;
        },
    },

});

//   Reducer
export default slice.reducer;

// for toggle main avatar
export function ToggleSidebar() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSideBar());
    };
}

export function UpdateSidebarType(type) {
    return async (dispatch, getState) => {
        dispatch(
            slice.actions.updateSideBarType({
                type
            }));
    };
}

export function showSnackbar({ severity, message }) {
    return async (dispatch, getState) => {
        dispatch(
            slice.actions.openSnackBar({
                message,
                severity,
            })
        );

        setTimeout(() => {
            dispatch(slice.actions.closeSnackBar());
        }, 4000);
    };
}

export const closeSnackBar = () => async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackBar());
};

export const FetchUsers = () => {
    return async (dispatch, getState) => {
        await axios
            .get(
                "/user/get-users",

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getState().auth.token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(slice.actions.updateUsers({ users: response.data.data }));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export const FetchFriends = () => {
    return async (dispatch, getState) => {
        await axios
            .get(
                "/user/get-friends",

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getState().auth.token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(slice.actions.updateFriends({ friends: response.data.data }));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
export const FetchFriendRequests = () => {
    return async (dispatch, getState) => {
        await axios
            .get(
                "/user/get-requests",

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getState().auth.token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(
                    slice.actions.updateFriendRequests({ requests: response.data.data })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };
}