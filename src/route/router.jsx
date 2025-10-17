import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayOut from "../Layout/mainLayOut";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/Errorpage";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
import AdditionalSkills from "../pages/AdditionalSkills";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> },
      { path: "skills", element: <Skills /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Project /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "blogs", element: <Blogs /> },
      { path: "academics", element: <AdditionalSkills /> },
    ],
  },
]);
