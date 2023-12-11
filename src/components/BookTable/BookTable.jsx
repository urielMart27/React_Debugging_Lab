import React from "react";
import "./BookTable.css";
import BookRow from "../BookRow/BookRow";

// The BookList component is responsible for rendering the array of book objects
// stored in the App component's state.
// How can you give BookTable access to that books array?

const BookTable = ({ books = [] }) => {
  const bookItems = books.map((book, index) => (
    <BookRow key={index} title={book.title} />
  ));

  return (
    <div>
      <h2>Book Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date Published</th>
            <th>Pages</th>
          </tr>
        </thead>
        <tbody>{bookItems}</tbody>
      </table>
    </div>
  );
};

export default BookTable;
