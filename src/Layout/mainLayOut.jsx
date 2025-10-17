import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;