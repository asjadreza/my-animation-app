"use client";

import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

export default function PracticeApp() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParam, setSearchParam] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const USERS_PER_PAGE = 5;

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  //   useEffect: api call on mount using useEffect(CSR)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // debounced function
  const debouncedSearchHandler = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
        setCurrentPage(1);
      }, 400),
    []
  );

  //   cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearchHandler.cancel();
    };
  }, [debouncedSearchHandler]);

  //   Filter user handler for simple search by name
    const filteredUsers = useMemo(() => {
      return users.filter((user) =>
        user.name.toLowerCase().includes(searchParam.toLocaleLowerCase())
      );
    }, [users, searchParam]);

  // filter user handler for debounced search
//   const filteredUsers = useMemo(() => {
//     return users.filter((user) =>
//       user.name.toLowerCase().includes(debouncedSearch.toLocaleLowerCase())
//     );
//   }, [users, debouncedSearch]);

  //   pagination logic
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    console.log(startIndex)
    return filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  console.log("users", users);

  return (
    <div className="container">
      <h1>This is simple counter app</h1>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>Count: {count}</h1>
        <div>
          <div className="d-flex align-items-center gap-3">
            <button onClick={handleIncrease} className="btn btn-primary">
              Increase
            </button>
            <button onClick={handleDecrease} className="btn btn-secondary">
              Decrease
            </button>
            <button onClick={reset} className="btn btn-light">
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="p-1">
        <h2>Users List</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name..."
            value={searchParam}
            // simple search onchange
            onChange={(e) => {
              setSearchParam(e.target.value);
              setCurrentPage(1);
            }}
          // onChange={(e) => debouncedSearchHandler(e.target.value)}
        />

        {/* <table
          border={1}
          cellPadding="10"
          cellSpacing="0"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        {/* Header Row */}
        <div className="row fw-bold border-bottom py-2">
          <div className="col-1">ID</div>
          <div className="col-2">Name</div>
          <div className="col-2">Username</div>
          <div className="col-3">Email</div>
          <div className="col-2">City</div>
          <div className="col-2">Company</div>
        </div>

        {/* Data Rows */}

        {currentUsers?.map((user) => (
          <div
            key={user.id}
            className="row py-2 border-bottom align-items-center"
          >
            <div className="col-1">{user.id}</div>
            <div className="col-2">{user.name}</div>
            <div className="col-2">{user.username}</div>
            <div className="col-3">{user.email}</div>
            <div className="col-2">{user.address.city}</div>
            <div className="col-2">{user.company.name}</div>
          </div>
        ))}

        {/* pagination controls  */}

        <div className="d-flex justify-content-center gap-2 align-items-center mt-3">
          <button
            className="btn btn-secondary cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

        <p className="mt-3 text-muted text-center">
          Showing {currentUsers.length} of {users.length} users
        </p>
      </div>
    </div>
  );
}
