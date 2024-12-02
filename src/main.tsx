import "./main.css";

import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { EditPage } from "./pages/EditPage";
import { UsersPage } from "./pages/UsersPage";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="edit" element={<EditPage />} />

          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

root.render(<Root />);
