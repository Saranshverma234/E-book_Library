// HeroSection component serves as the introductory section of the application
// It includes a title, description, and a search form for users to find books.
import SearchForm from "../SearchForm/SearchForm.jsx";
import libraryImg from "../../images/library-img.jpg"; // Importing the library image

const HeroSection = () => {
  return (
    <section className="relative overflow-auto h-64 flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="absolute z-20 flex flex-col items-center text-center max-w-[770px] px-4">
        {/* Main title of the Hero section */}
        <h1 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">
          Find the book of your choice
        </h1>

        {/* Description paragraph providing context for the application */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
        Welcome to a world where knowledge is always at your fingertips. Our digital library opens the doors to a vast collection of resources, offering a seamless and enriching experience for learners, researchers, and curious minds alike. Forget the constraints of physical shelves and limited hours; here, you can explore a universe of books, journals, articles, and multimedia content from the comfort of your own device, anytime, anywhere.
        </p>

        {/* Align SearchForm in flex column */}
        <SearchForm />
      </div>

      {/* Library image with low opacity */}
      <img
        src={libraryImg} // Source of the library image
        alt="Library Background" // Alt text for accessibility
        className="absolute inset-0 w-full h-full object-cover opacity-60" // Full coverage with low opacity
      />
    </section>
  );
};

export default HeroSection;
