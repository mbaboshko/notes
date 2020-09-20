import React from 'react'

export default function ContentFooter({ editable, onEdit, onSave, onDelete }) {
  return (
    <footer className="content__footer">
      {!editable ? (
        <button className="btn btn--grey" onClick={onEdit}>
          Edit
        </button>
      ) : (
        <button className="btn btn--grey" onClick={onSave}>
          Save
        </button>
      )}
      <button className="btn btn--red" onClick={onDelete}>
        Delete
      </button>
    </footer>
  )
}
