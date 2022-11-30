import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import TagManager from 'react-gtm-module'
import { store } from './app/store'
import './index.scss'
import Router from './routes'

const container = document.getElementById('root')!
const root = createRoot(container)

TagManager.initialize({ gtmId: 'G-53S9WGBTN8' })

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
)
