import "./page.css";

import { useState } from "react";

import { UserList } from "@/components/UserList/UserList";

import users from "./../../public/api/users.json";

export const UsersPage = () => {
  return (
    <div className="page">
      <h2 className="title">Users</h2>

      <UserList users={users} />
    </div>
  );
};
