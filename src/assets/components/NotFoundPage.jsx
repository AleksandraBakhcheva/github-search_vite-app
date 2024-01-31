import "../styles/NotFoundPage.scss";
import error_404 from "../images/error_404.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  return (
    <div className="notFound-box">
      <h1>Ooops!</h1>
      <h3>Error 404 - PAGE NOT FOUND</h3>
      <p>The page you are looking for might have been removed</p>
      <p>had its name changed or is temporarily unavailable.</p>
      <img src={error_404} alt="error-404" />
      <div>
        <Link to="/">
          <motion.button
            className="notFound-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
          >
            HOMEPAGE
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
