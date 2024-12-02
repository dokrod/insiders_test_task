import "./userList.css";

import React from "react";

import { User } from "@/types/user";

interface Props {
  users: User[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <table className="user-table">
      <thead className="user-table-header">
        <tr>
          <th className="user-table-header-cell">Full Name</th>
          <th className="user-table-header-cell">Department</th>
          <th className="user-table-header-cell">Country</th>
          <th className="user-table-header-cell">Status</th>
          <th className="user-table-header-cell"></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.name} className="user-table-row">
            <td className="user-table-cell">{user.name}</td>
            <td className="user-table-cell">{user.department.name}</td>
            <td className="user-table-cell">{user.country.name}</td>
            <td className="user-table-cell">{user.status.name}</td>
            <td className="user-table-cell actions">
              <button className="delete-button">
                <img
                  src="src/img/trash-icon.svg"
                  alt="Delete"
                  className="delete-icon"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
