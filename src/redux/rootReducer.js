import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import appReducer from "./slices/app";

// slices
const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    //   whitelist: [],
    //   blacklist: [],
  };
 
  const rootReducer = combineReducers({
    app: appReducer,
    // auth: authReducer   , 
    // conversation: conversationReducer,
    // audioCall: audioCallReducer,
    // videoCall: videoCallReducer,
  });
  
  export { rootPersistConfig, rootReducer };  


  // just for fun vjvhvuhv
  // xyrtdtdtrhvjvjv