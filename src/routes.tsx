import {
  BrowserRouter,
  Route,
  Routes,
  RedirectFunction,
} from 'react-router-dom'
import NotFoundPageComponent from './app/components/404'
import HomeComponent from './app/components/home'
import PortfolioComponent from './app/components/portfolio'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/work/:id" element={<PortfolioComponent />} />
      <Route path="*" element={<NotFoundPageComponent />} />
    </Routes>
  </BrowserRouter>
)

export default Router
