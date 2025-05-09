import { Link } from "react-router-dom"; // Importing Link component for navigation

// Book component to display individual book details
const Book = (book) => {
  return (
    <Link
      to={`/book/${book.id || "#"}`} // Navigates to the book details page using the book's ID
      className="bg- rounded-lg shadow-md shadow-gray-700 overflow-hidden transition-transform transform hover:shadow-lg hover:scale-110 p-3 max-w-xs mx-auto" // Styling for the book card with hover effects
    >
      <div className="book-item-img">
        <img
          src={book.cover_img || "#"}
          alt="cover"
          className="w-full h-60 md:h-80 object-cover mb-4" // Adjusted height for portrait style and made it responsive
        />
      </div>
      <div className="text-center">
        <h3 className="text-base md:text-lg font-semibold text-blue-950 hover:text-blue-700 transition-colors">
          {book.title || "Unknown title"}
        </h3>

        <div className="text-blue-950 mt-2">
          <span className="font-medium">Author: </span>
          <span>{book.author.join(", ") || "Unknown author"}</span>
        </div>

        <div className="text-blue-950 mt-1">
          <span className="font-medium">Total Editions: </span>
          <span>{book.edition_count || "N/A"}</span>
        </div>

        <div className="text-blue-950 mt-1">
          <span className="font-medium">First Publish Year: </span>
          <span>{book.first_publish_year || "N/A"}</span>
        </div>
      </div>
    </Link>
  );
};

// Exporting the Book component for use in other parts of the application
export default Book;
