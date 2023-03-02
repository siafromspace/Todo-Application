import './App.css';
import {
  createBrowserRouter,  
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import ThemeContextProvider from './context/ThemeContext';
import TodoContextProvider from './context/TodoContext';

//pages
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';

//layouts
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<All/>} />
      <Route path="active" element={<Active />} />
      <Route path="completed" element={<Completed />} />
    </Route>
  )
)

function App() {
  return (
    <TodoContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </TodoContextProvider>
  );
}

export default App;
