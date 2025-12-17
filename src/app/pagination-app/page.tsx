"use client";

import { useEffect, useMemo, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

export default function Pagination() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const USERS_PER_PAGE = 5;

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));
    fetchUsers();
  }, []);

  // console.log(users);
  // const filteredUser = useMemo(() => {
  //   return users.filter((user) => {
  //     user.name.toLowerCase().includes(search.toLowerCase());
  //   });
  // }, [users, search]);

// const filteredUser = useMemo(() => {
//   return users.filter((user) => 
//     user.name.toLowerCase().includes(search.toLowerCase())
//   )
// }, [users, search])

// if we want both username and name search 
const filteredUser = useMemo(() => {
  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
    )
  })
}, [users, search])

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const currentUsers = useMemo(() => {
    const startIndex = Math.ceil(currentPage - 1) * USERS_PER_PAGE;
    return filteredUser.slice(startIndex, startIndex + USERS_PER_PAGE);
  }, [filteredUser, currentPage]);

  console.log("curr", currentUsers)

  return (
    <div className="container">
      <h2>Users List</h2>
      <input
        className="form-control mb-3"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
      <div className="p-1">
        {/* header row */}

        <div className="row fw-bold border-bottom py-2">
          <div className="col-1">ID</div>
          <div className="col-2">Name</div>
          <div className="col-2">Username</div>
          <div className="col-3">Email</div>
          <div className="col-2">Company</div>
          <div className="col-2">City</div>
        </div>

        {currentUsers.length > 0 &&
          currentUsers.map((user) => (
            <div className="row py-2 border-bottom align-items-center">
              <div className="col-1">{user.id}</div>
              <div className="col-2">{user.name}</div>
              <div className="col-2">{user.username}</div>
              <div className="col-3">{user.email}</div>
              <div className="col-2">{user.company.name}</div>
              <div className="col-2">{user.address.city}</div>
            </div>
          ))}

        {/* pagination controls */}

        <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
          <button
            className="btn btn-secondary cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary cursor-pointer"
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
