import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:category" element={<BooksPage />} />
        <Route path="/books/:category/:book_id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
