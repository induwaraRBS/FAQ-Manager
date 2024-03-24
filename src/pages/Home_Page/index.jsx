import React from "react";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import "../../styles/Home.css";
import QuestionTable from "../../components/Table";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Home_Content">
        <div className="Search_Section">
          <SearchBar />
        </div>
        <div className="Table_Section">
          <QuestionTable />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
