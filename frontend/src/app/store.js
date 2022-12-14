import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import UIReducer from "../features/ui/UISlice";
import programmerReducer from "../features/programmer/programmerSlice";
import projectsReducer from "../features/projects/projectsSlice";
import skillsReducer from "../features/skills/skillsSlice";

import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  programmers: programmerReducer,
  projects: projectsReducer,
  skills: skillsReducer,
  UI: UIReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
