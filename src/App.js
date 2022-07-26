import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Main from "./Components/Main"
const App= (props)=> {
 
  return (
    <Router>
      {
        // console.log(2)
      }
      <Routes>
        <Route path="*" element={<Main></Main>}></Route>
        <Route path="/hihi" element={<div>Hello World</div>}></Route>
      </Routes>
    </Router>
  )
}

export default App