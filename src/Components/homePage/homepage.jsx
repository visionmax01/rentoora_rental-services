import React, { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";
import { Locate, Search, User } from "lucide-react";
import FacbookIcon from "../../img/facbookIcon.png";
import Footer from "../Footer";

const cities = [
  "Lahan Siraha",
  "Siraha Siraha",
  "Golbazar Siraha",
  "Mirchaiya Siraha",
  "Karjanha Siraha",

  "Kathmandu Kathmandu",
  "Kirtipur Kathmandu",
  "Bhaktapur Kathmandu",
  "Sankhu Kathmandu",
  "Chabahil Kathmandu",

  "Pokhara Kaski",
  "Lekhnath Kaski",
  "Ghandruk Kaski",
  "Sarangkot Kaski",
  "Dhulikhel Kaski",

  "Lalitpur Lalitpur",
  "Patan Lalitpur",
  "Godavari Lalitpur",
  "Bungamati Lalitpur",
  "Lubhu Lalitpur",

  "Biratnagar Morang",
  "Urlabari Morang",
  "Belbari Morang",
  "Rangeli Morang",
  "Pathari Morang",

  "Bharatpur Chitwan",
  "Ratnanagar Chitwan",
  "Madi Chitwan",
  "Kalika Chitwan",
  "Khairahani Chitwan",

  "Birgunj Parsa",
  "Parsa Parsa",
  "Pokhariya Parsa",
  "Bahudarmai Parsa",
  "Thori Parsa",

  "Dharan Sunsari",
  "Inaruwa Sunsari",
  "Itahari Sunsari",
  "Duhabi Sunsari",
  "Jhumka Sunsari",

  "Bhaktapur Bhaktapur",
  "Madhyapur Thimi Bhaktapur",
  "Suryabinayak Bhaktapur",
  "Nagarkot Bhaktapur",
  "Changunarayan Bhaktapur",

  "Butwal Rupandehi",
  "Siddharthanagar Rupandehi",
  "Devdaha Rupandehi",
  "Lumbini Rupandehi",
  "Manigram Rupandehi",

  "Hetauda Makwanpur",
  "Thaha Makwanpur",
  "Bhimfedi Makwanpur",
  "Makwanpurgadhi Makwanpur",
  "Palung Makwanpur",

  "Janakpur Dhanusha",
  "Kamala Dhanusha",
  "Dhalkebar Dhanusha",
  "Bateshwar Dhanusha",
  "Sabaila Dhanusha",

  "Dhangadhi Kailali",
  "Tikapur Kailali",
  "Lamki Kailali",
  "Bhajani Kailali",
  "Joshipur Kailali",

  "Nepalgunj Banke",
  "Kohalpur Banke",
  "Baijanath Banke",
  "Khajura Banke",
  "Narainapur Banke",

  "Itahari Sunsari",
  "Dharan Sunsari",
  "Inaruwa Sunsari",
  "Duhabi Sunsari",
  "Jhumka Sunsari",

  "Siddharthanagar Rupandehi",
  "Butwal Rupandehi",
  "Devdaha Rupandehi",
  "Lumbini Rupandehi",
  "Manigram Rupandehi",

  "Bhimdatta Kanchanpur",
  "Mahendranagar Kanchanpur",
  "Belauri Kanchanpur",
  "Jhalari Pipaladi Kanchanpur",
  "Punarbas Kanchanpur",

  "Damak Jhapa",
  "Birtamod Jhapa",
  "Mechinagar Jhapa",
  "Arjundhara Jhapa",
  "Kankai Jhapa",

  "Tulsipur Dang",
  "Ghorahi Dang",
  "Lamahi Dang",
  "Bhalubang Dang",
  "Rampur Dang",

  "Ghorahi Dang",
  "Tulsipur Dang",
  "Lamahi Dang",
  "Bhalubang Dang",
  "Rampur Dang",

  "Kalaiya Bara",
  "Jitpur Simara Bara",
  "Kolhabi Bara",
  "Nijgadh Bara",
  "Parwanipur Bara",
];

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const suggestionRefs = useRef([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = cities.filter((city) => {
        const [cityName, districtName] = city.toLowerCase().split(" ");
        return (
          cityName.startsWith(value.toLowerCase()) ||
          districtName.startsWith(value.toLowerCase())
        );
      });
      setSuggestions(filteredSuggestions);
      setHighlightedIndex(0);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, suggestions.length - 1);
        suggestionRefs.current[newIndex]?.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        suggestionRefs.current[newIndex]?.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
        return newIndex;
      });
    } else if (e.key === "Enter") {
      if (suggestions.length > 0) {
        setSearchTerm(suggestions[highlightedIndex]);
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative text-white">
      <NavBar />

      {/* section One of HOME page start  */}

      <p className=" px-1 py-1 top-12 r bg-gradient-to-r  from-red-200 to-brand-Colorpurple text-center text-white font-bold font-sans">
        Contact Us : <a href="#">+977-9819931223</a>
      </p>
      <div className="mt-10 md:mt-20">
        <div className="h-96  bg-white opacity-5 absolute top-0  w-full -z-10"></div>
        {/* containt section first  */}
        <div className=" relative w-full  mx-auto text-center opacity-80">
          <p className="text-center text-4xl font-Roboto opacity-75">
            Search for Place
          </p>
          <h2 className="text-md  mt-4 md:text-2xl ">
            An intelligent and effortless way to find{" "}
            <span className="uppercase text-red-200 text-2xl md:text-4xl">
              rooms, apartments, houses
            </span>{" "}
            or any rental property for you!
          </h2>
          <div className="md:block hidden  flex-col absolute -top-1/2 right-0  pr-8 rounded-l-md bg-white py-4 px-2">
            <img
              className="w-8 h-8 opacity-100 cursor-pointer mb-5 "
              src={FacbookIcon}
              alt=""
            />
            <img
              className="w-8 h-8 opacity-100 cursor-pointer mb-5 "
              src={FacbookIcon}
              alt=""
            />
            <img
              className="w-8 h-8 opacity-100 cursor-pointer  "
              src={FacbookIcon}
              alt=""
            />
          </div>
        </div>
        {/* search implementation here  */}
        <div className=" mx-auto  flex flex-col items-center justify-center">
          <div className="w-full flex flex-col    h-64   rounded-lg relative">
            <div className="obsolute flex justify-center w-full  z-20">
              <div className="max-w-fi py-4 ">
                <div className=" searchBox  bg-white bg-opacity-10 flex justify-between items-center p-2 gap-2 rounded-lg">
                  <Locate className="relative opacity-70 w-5 h-5" />
                  <input
                    className="text-white  font-sans text-xl border-none outline-none  w-62 md:w-96  py-1 bg-transparent"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="button"
                    className="bg-brand-light hover:bg-brand-dark bg-opacity-45  py-2 px-2 rounded-md"
                  >
                    <Search />
                  </button>
                </div>
                <div className=" z-20 w-fill relative ">
                  {suggestions.length > 0 && (
                    <ul className="bg-gray-300   w-full pl-2 cursor-pointer rounded-md mt-1 py-4 text-left max-h-48 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          ref={(el) => (suggestionRefs.current[index] = el)}
                          className={`py-1 w-80 text-black text-xl font-semibold px-2 rounded-md ${
                            highlightedIndex === index
                              ? "bg-gradient-to-r from-green-600  to-gray-300"
                              : ""
                          }`}
                          onMouseDown={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="text-black  uppercase  md:text-lg font-bold  text-[12px] absolute z-10 p-4 top-28 h-auto w-full bg-white  flex gap-4 justify-between   items-center flex-wrap md:justify-center md:gap-16">
              <div className="flex flex-col   justify-center items-center w-28 h-28 md:w-40 md-h-40 bg-cyan-400 bg-opacity-75 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out rounded-lg shadow-gray-300 shadow-md">
                {" "}
                <User className="w-12 h-12  mb-2"/>
                 Room Rent
              </div>
              <div className="flex flex-col  md:text-lg justify-center items-center w-28 h-28 md:w-40 md-h-40 bg-cyan-400 bg-opacity-75 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out rounded-lg shadow-gray-300 shadow-md  ">
                <User className="w-12 h-12  mb-2"/>
                 House Rent
              </div>
              <div className="flex flex-col  md:text-lg justify-center items-center w-28 h-28 md:w-40 md-h-40 bg-brand-Colorpurple bg-opacity-75 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out rounded-lg shadow-gray-300 shadow-md  ">
                <User className="w-12 h-12 mb-2 "/>
                 Apartment
              </div>
              <div className="flex flex-col  md:text-lg justify-center items-center w-28 h-28 md:w-40 md-h-40 bg-brand-Colorpurple bg-opacity-75 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out rounded-lg shadow-gray-300 shadow-md  ">
                <User className="w-12 h-12  mb-2"/>
                 For SHope
              </div>
              <div className="flex flex-col  md:text-lg justify-center items-center w-28 h-28 md:w-40 md-h-40 bg-cyan-400 bg-opacity-75 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out rounded-lg shadow-gray-300 shadow-md  ">
                <User className="w-12 h-12  mb-2 "/>
                  Blumber
              </div>
              <div className="flex flex-col  md:text-lg justify-center items-center w-28 h-28 md:w-40 md-h-40 bg-cyan-400 bg-opacity-75 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out rounded-lg shadow-gray-300 shadow-md  ">
                <User className="w-12 h-12  mb-2"/>
                 Electrician
              </div>
            </div>
          </div>
        </div>
        {/* end of search implementations  */}
      </div>
      {/* section One Ended here  */}

      {/* section Two  Started From  here  */}

      <div className="relative   text-white h-96 ">written  by shav raj</div>
      <div className="relative   text-white h-96 ">written  by bhishan sah</div>

      {/* footer section  */}
      <Footer />
    </div>
  );
};

export default Homepage;
