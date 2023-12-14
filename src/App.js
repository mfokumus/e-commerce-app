import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
