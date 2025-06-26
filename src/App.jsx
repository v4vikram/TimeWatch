import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { HomePage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Add more nested routes here */}
      </Route>
    </Routes>
  );
};

export default App;
