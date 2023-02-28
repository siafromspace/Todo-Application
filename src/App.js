import './App.css';
import {
  createBrowserRouter,  
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import ThemeContextProvider from './context/ThemeContext';
//pages
import All from './pages/All';

//layouts
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<All/>} />
    </Route>
  )
)

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
