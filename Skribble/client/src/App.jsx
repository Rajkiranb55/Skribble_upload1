import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/signuppage/SignUpPage";
import HomePage from "./pages/homepage/HomePage";
import BlogPage from "./pages/blogdetailpage/BlogPage";
import EditBlogPage from "./pages/editblogpage/EditBlogPage";
import CreateBlog from "./pages/createblog/CreateBlog";
import { useState } from "react";
import AboutPage from "./pages/aboutpage/AboutPage";
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Outlet />{" "}
    </>
  ) : (
    <Navigate replace to="/" />
  );
};
const App = () => {
  const [isAuthenticated, isUserAUthenticated] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SignUpPage isUserAUthenticated={isUserAUthenticated} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route
            path="/home"
            element={<HomePage isAuthenticated={isAuthenticated} />}
          />
        </Route>

        <Route path="/blogdata/:id" element={<BlogPage />} />
        <Route path="/updatepost/:id" element={<EditBlogPage />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
