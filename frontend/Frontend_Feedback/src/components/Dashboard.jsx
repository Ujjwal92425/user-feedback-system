import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  // Fetch all feedback
  const fetchFeedback = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/feedback");
      const data = await res.json();
      setFeedbackList(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching feedback:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Filter and sort 
  useEffect(() => {
    let updatedList = [...feedbackList];

    // Filter by category
    if (categoryFilter !== "All") {
      updatedList = updatedList.filter(
        (item) =>
          item.category?.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Sort by date
    updatedList.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredList(updatedList);
  }, [categoryFilter, sortOrder, feedbackList]);

  if (loading) return <p>Loading feedback...</p>;

  return (
    <div>
      <h2>All Feedback</h2>

      {/* Filters */}
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Filter by Category:{" "}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="bug">Bug Report</option>
            <option value="suggestion">Suggestion</option>
            <option value="feature">Feature Request</option>
          </select>
        </label>

        <label style={{ marginLeft: "1rem" }}>
          Sort by Date:{" "}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </label>
      </div>

      {/* Feedback List */}
      {filteredList.length === 0 ? (
        <p>No matching feedback found.</p>
      ) : (
        <ul>
          {filteredList.map((item) => (
            <li key={item._id} style={{ marginBottom: "1rem" }}>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Feedback:</strong> {item.feedback}
              </p>
              {item.category && (
                <p>
                  <strong>Category:</strong> {item.category}
                </p>
              )}
              <p>
                <strong>Date:</strong>{" "}
                {new Date(item.createdAt).toLocaleString()}
              </p>
              <hr/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
