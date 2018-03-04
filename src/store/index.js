import configureStore from 'store/configureStore'
import initialStore from 'store/initialStore'

import { persistStore } from 'redux-persist'
import persistConfig from 'utils/persist'

const store = configureStore(initialStore)

persistStore(store, persistConfig)

export default store