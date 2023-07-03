import Report from "./Report"
import './App.css'
import Outlet from './Outlet'
import RenderEcharts from './RenderEcharts'
import { BrowserRouter, Routes, Route ,Switch,RouterProvider,createBrowserRouter} from "react-router-dom";
import phantom from 'phantomjs-prebuilt';


function App(){
  
  const route=createBrowserRouter(
    [
      {
        path:'/report',
        element:<Report/>
      },
      {
        path:'/outlet',
        element:<Outlet/>
      }

    ]
  )
  return(
      <>
      
        {/* <BrowserRouter>
          
            <Routes>
              <Route exact path='/' element={<Report/>}></Route>
              <Route exact path='/lead' element={<Summa/>}></Route>
              
            </Routes>
            
            </BrowserRouter>
            
            <Report/> */}
            
              <RouterProvider router={route}/>
              {/* <RenderEcharts type={'funnel'} data={fun} /> */}
      
      </>
  )
}

export default App


