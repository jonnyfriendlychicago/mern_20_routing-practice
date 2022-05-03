import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import HomeCmp from './components/HomeCmp';
import ResponseCmp from './components/ResponseCmp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeCmp />}/>
        <Route path="/:charSet" element={<ResponseCmp />} />
        <Route path=":charSet/:fontyColor" element={<ResponseCmp />} />
        <Route path=":charSet/:fontyColor/:backColor" element={<ResponseCmp />} />
      </Routes>
      
    </div>
  );
}

export default App;
