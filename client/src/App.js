// client/src/App.js (Updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import PageContainer from "./layout/PageContainer";
import AdminReportsPage from "./pages/reports/AdminReportsPage";
import AdminUsersPage from "./pages/users/AdminUsersPage"; // <-- NEW IMPORT

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <PageContainer>
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={<h2>⭐ Welcome to BragBoard Admin Dashboard!</h2>} />

              {/* Reports Page Route */}
              <Route path="/reports" element={<AdminReportsPage />} />

              {/* Users Page Route <-- NEW ROUTE */}
              <Route path="/users" element={<AdminUsersPage />} />

              {/* Catch-All Route */}
              <Route path="*" element={<h3>404 - Page Not Found</h3>} />
            </Routes>
          </PageContainer>
        </div>
      </div>
    </Router>
  );
}

export default App;