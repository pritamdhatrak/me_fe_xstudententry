import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", age: "", grade: "" });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.grade) {
      setStudents((prev) => [...prev, formData]);
      setFormData({ name: "", age: "", grade: "" });
    }
  };

  const handleClear = () => {
    setFormData({ name: "", age: "", grade: "" });
  };

  const handleRemove = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: "#f7f8fa", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ backgroundColor: "white", padding: "20px 30px", borderRadius: "10px", boxShadow: "0 0 10px #ccc", width: "450px" }}>
        <h2 style={{ textAlign: "center", fontWeight: "700", marginBottom: "20px" }}>Student Entry Form</h2>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>Add students and review the list below.</p>
        <form onSubmit={handleAddStudent} style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label htmlFor="name" style={{ fontWeight: "600", marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. MS Dhoni"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label htmlFor="age" style={{ fontWeight: "600", marginBottom: "5px" }}>Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="e.g. 14"
              value={formData.age}
              onChange={handleChange}
              style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label htmlFor="grade" style={{ fontWeight: "600", marginBottom: "5px" }}>Grade</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc" }}
            >
              <option value="">Select grade</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
            </select>
          </div>
        </form>
        <div style={{ marginBottom: "15px" }}>
          <button onClick={handleAddStudent} style={{ backgroundColor: "#2563eb", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}>
            Add Student
          </button>
          <button onClick={handleClear} style={{ padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
            Clear
          </button>
        </div>
        <div style={{ border: "1px solid #ddd", borderRadius: "4px", minHeight: "40px", padding: "10px", fontSize: "14px", color: "#555" }}>
          {students.length === 0 ? (
            <p style={{ margin: 0, textAlign: "center" }}>No students added yet.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Age</th>
                  <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Grade</th>
                  <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}> </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{student.name}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{student.age}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{student.grade}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                      <button
                        onClick={() => handleRemove(index)}
                        style={{ backgroundColor: "#fca5a5", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer", color: "#b91c1c" }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
