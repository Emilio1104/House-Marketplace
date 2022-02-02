import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import homeIcon from "../assets/svg/homeIcon.svg";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* Slider */}
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategoryImage} alt="rent" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img src={sellCategoryImage} alt="sell" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
        <Link className="createListing" to="/create-listing">
          <img src={homeIcon} alt="home" />
          <p>Sell or rent your home</p>
          <img src={arrowRight} alt="arrowRight" />
        </Link>
      </main>
    </div>
  );
}

export default Explore;
