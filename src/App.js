import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './components/Title';
import FirstRequest from './final/examples/1-first-request';
import SingleProduct from './final/examples/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Title />} />
        <Route path='/product' element={<FirstRequest />} />
        <Route path=':productId' element={<SingleProduct />} /> */}


        <Route path='products' element={<Title />}>
          <Route index element={<FirstRequest />} />
          <Route path=':productId' element={<SingleProduct />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
