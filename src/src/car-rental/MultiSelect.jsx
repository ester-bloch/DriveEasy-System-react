import React, { useState } from "react";

const MultiSelectDropdown = ({ items }) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      <div
        onClick={toggleDropdown}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {selectedCompanies.length > 0
          ? selectedCompanies.join(", ")
          : "Select companies"}
      </div>

      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {items.map((item) => (
            <div key={item.id} style={{ padding: "8px" }}>
              <input
                type="checkbox"
                id={item.company}
                checked={selectedCompanies.includes(item.company)}
                onChange={() => handleCheckboxChange(item.company)}
              />
              <label htmlFor={item.company} style={{ marginLeft: "8px" }}>
                {item.company}
              </label>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "16px" }}>
        <h3>Selected Companies:</h3>
        {selectedCompanies.length > 0 ? (
          <ul>
            {selectedCompanies.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        ) : (
          <p>No companies selected.</p>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
