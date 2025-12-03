// CTPBox.jsx
import React from "react";
import "./CTPbox.css";

const CTPBox = ({ type, name, content, onEdit, onDelete }) => {
  return (
    <div className="ctp-box">

      {/* EDIT BUTTON */}
      <div className="edit-wrapper">
        <button className="edit-btn" onClick={onEdit}>
          ✏️ Edit
        </button>
      </div>

      {/* SELECTION + NAME */}
      <div className="row">
        <div className="col">
          <label>Selection Type</label>
          <div className="input-wrapper">
            <select defaultValue={type}>
              <option>Category</option>
              <option>Pages</option>
              <option>Tags</option>
            </select>
          </div>
        </div>

        <div className="col">
          <label>Name</label>
          <div className="input-wrapper">
            <input type="text" defaultValue={name} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <label className="content-label">Content</label>
      <div className="textarea-wrapper">
        <textarea defaultValue={content}></textarea>

        {/* Icons */}
        <div className="icons">
          <span>📎</span>
          <span>🔗</span>
          <span>📄</span>
        </div>
      </div>

      {/* DELETE BUTTON */}
      <div className="delete-wrapper">
        <button className="delete-btn" onClick={onDelete}>
          Delete category
        </button>
      </div>

    </div>
  );
};

export default CTPBox;
