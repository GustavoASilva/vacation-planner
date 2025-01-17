import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BudgetPage from "./pages/BudgetPage";
import MiniDrawer from "./components/SideNavBar";
import TestPage from "./pages/TestPage";

const App: React.FC = () => {
  return <MiniDrawer>
    <Router>
     <Routes>
    <Route path='/' element={<BudgetPage/>} />
    <Route path='/test' element={<TestPage/>} />
 </Routes>
 </Router>
</MiniDrawer>;
 


};

export default App;