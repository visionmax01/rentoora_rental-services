import React, { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";
import { Locate, Search, User } from "lucide-react";
import RoomIcon from "../../img/Room.png";
import Apartment from "../../img/apartment.png";
import HomeIcon from "../../img/solar-cell.png";
import PlumberIcon from "../../img/plumber.png";
import Electrician from "../../img/electrician.png";
import Socialphone from "../../img/social-marketing.png";
import "./style.css";
import FacbookIcon from "../../img/facbookIcon.png";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import CardScroller from "../RegisterForm/CardScroller";

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
  const navigate = useNavigate();
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
  const HandleRoomRent = () => {
    alert("Service is currently Unavailable !");
  };


  
  return (
    <div className="relative text-white">
      <NavBar />

      {/* section One of HOME page start  */}

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
            <div className="text-black   uppercase rounded-t-3xl md:rounded-none  md:text-lg font-bold  text-[12px] absolute z-10 p-4 top-28 h-auto md:min-h-80 min-h-96  w-full   flex gap-2 justify-around   items-center flex-wrap md:justify-center md:gap-16 bg-gradient-to-r from-gray-700 to-blue-950 bluer-500 ">
              <h1 className="text-center absolute top-2  md:top-4  text-white text-xl md:text-4xl opacity-70">
                Services We Provide
              </h1>

              <div
                onClick={HandleRoomRent}
                className="relative  hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
              >
                <div className="absolute inset-0  bg-blue-300   rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
                <img
                  src={RoomIcon}
                  className="w-12 h-12 md:w-16 md:h-16 z-10 relative "
                  alt=""
                  srcset=""
                />
                <span className="relative text-[14px] mt-2 z-10 break-words">
                  Rent Room
                </span>
              </div>

              <div
                onClick={HandleRoomRent}
                className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
              >
                <div className="absolute inset-0  bg-blue-300    rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
                <img
                  src={Apartment}
                  className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
                  alt=""
                  srcset=""
                />
                <span className="relative z-10 text-[14px] mt-2 ">
                  Apartment
                </span>
              </div>

              <div
                onClick={HandleRoomRent}
                className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
              >
                <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
                <img
                  src={HomeIcon}
                  className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
                  alt=""
                  srcset=""
                />
                <span className="relative z-10 text-[14px] mt-2">
                  Rent Home
                </span>
              </div>

              <div
                onClick={HandleRoomRent}
                className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
              >
                <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
                <img
                  src={PlumberIcon}
                  className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
                  alt=""
                  srcset=""
                />
                <span className="relative z-10 text-[14px] mt-2">Plumber</span>
              </div>

              <div
                onClick={HandleRoomRent}
                className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
              >
                <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
                <img
                  src={Electrician}
                  className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
                  alt=""
                  srcset=""
                />
                <span className="relative z-10 text-[14px] mt-2">
                  Electrician
                </span>
              </div>

              <div
                onClick={HandleRoomRent}
                className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
              >
                <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
                <img
                  src={Socialphone}
                  className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
                  alt=""
                  srcset=""
                />
                <span className="relative z-10 text-[12px] mt-2">
                  Sell your Phone
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* end of search implementations  */}
      </div>
      <div className="text-black bg-red-200  h-60 md:h-44"></div>
      {/* section One Ended here  */}

      {/* section Two  Started From  here  */}
      <div className="text-white relative pb-8  top-4  text-start opacity-85">
        <p className="text-4xl  text-center font-extrabold space-x-4"></p>
        <p className="text-sm  md:text-2xl w-96 md:w-3/4 mx-auto  text-wrap break-words text-center capitalize">
          service to make people life easier and Smart with Technology. you can
          get your rented House, Apartment, Room for Student of Family need in
          differend areas of Nepal.
        </p>
      </div>

      {/* section three  */}
      <section className="relative  mb-5 border-t-4 border-gray-800 mt-5">
        <div className="md:block hidden opacity-25 torch w-8 h-8 rounded-full absolute right-5 top-5 bg-black bg-opacity-50 border-l-4 border-white -rotate-45  "></div>
        <div className="md:block hidden opacity-25 torch w-8 h-8 rounded-full absolute left-5 top-5 bg-black bg-opacity-50 border-l-4 border-white -rotate-[120deg]  "></div>
        <div className="  text-white w-full md:w-[75%] mx-auto min-h-fit flex flex-wrap md:rounded-lg px-8 py-8">
          {/* left side content */}
          <div className="w-[60%] relative md:top-12 break-words">
            <h1 className="md:text-[3rem] text-2xl font-Roboto">Plumber</h1>
            <p className="md:text-2xl  text-sm mt-2  md:mt-5">
              You Can Find best Plumber for your home bathroom, Kitchen, tap,
              etc.. Fitting at your fingertips.
            </p>
          </div>
          {/* right side content */}
          <div className="w-[40%] flex h-auto items-center justify-center">
            <img
              className="glowShadow object-cover md:w-60 md:h-60 opacity-80"
              src={PlumberIcon}
              alt="Plumber Icon"
            />
          </div>
        </div>
      </section>

      <section className="mb-5 border-t-4 border-gray-800 mt-5">
        <div className="relative text-White w-full  md:w-[75%] mx-auto min-h-fit flex flex-wrap md:rounded-lg   px-8 py-8   ">
          {/* left side containt    */}
          <div className="w-[40%] flex h-auto justify-between pr-6">
            <img
              className="glowShadow object-cover md:w-60 md:h-60 opacity-80"
              src={Electrician}
              alt=""
              srcset=""
            />
          </div>
          {/* right side containt    */}
          <div className="w-[60%] relative   md:top-12  break-words">
            <h1 className="md:text-[3rem] text-2xl  font-Roboto ">
              Electrician
            </h1>
            <p className="md:text-2xl  text-sm mt-2  md:mt-5">
              You Can Find best Electrician for your home building anywhere at
              your fingure tips.
            </p>
          </div>
        </div>
      </section>

      <section className="relative  mb-5 border-t-4 border-gray-800 mt-5">
        <div className="  text-white w-full md:w-[75%] mx-auto min-h-fit  flex flex-wrap md:rounded-lg px-8 py-8">
          {/* left side content */}
          <div className="w-[60%] relative mt-6 md:top-12 break-words">
            <h1 className="md:text-[3rem] text-2xl font-Roboto">
              Rent a Property{" "}
            </h1>
            <p className="md:text-2xl  text-sm mt-2  md:mt-5">
              You Can Find best Plumber for your home bathroom, Kitchen, tap,
              etc.. Fitting at your fingertips.
            </p>
          </div>
          {/* right side content */}
          <div className="w-[40%] flex h-auto justify-center">
            <img
              className="glowShadow object-cover md:w-60 md:h-60 opacity-80 ml-6"
              src={Apartment}
              alt="Plumber Icon"
            />
          </div>
        </div>
      </section>

      <section className="mb-5 border-t-4 border-gray-800 mt-5 border-b-4 ">
        <div className="relative text-White w-full  md:w-[75%] mx-auto min-h-fit flex flex-wrap md:rounded-lg   px-8 py-8   ">
          {/* left side containt    */}
          <div className="w-[40%] flex h-auto justify-between pr-6  ">
            <img
              className="glowShadow object-cover  md:w-60 md:h-60 opacity-80"
              src={Socialphone}
              alt=""
              srcset=""
            />
          </div>
          {/* right side containt    */}
          <div className="w-[60%] relative mt-5  md:top-12  break-words">
            <h1 className="   md:text-[3rem] text-2xl  font-Roboto ">
              Sell Your Phone{" "}
            </h1>
            <p className="   md:text-2xl  text-sm mt-2  md:mt-5">
              You Can Find best Electrician for your home building anywhere at
              your fingure tips.
            </p>
          </div>
        </div>
      </section>

      {/* section three ended here   */}

      {/* customer review feadback displayed  section */}
      <section className=" text-white">
      <div className="container mx-auto ">
        <h1 className="text-2xl md:text-5xl font-bold tracking-wider text-center uppercase mb-2">
          Testimonials
        </h1>
        <div className="relative pb-8  text-black">
          <div>
           <CardScroller/>
          </div>
        </div>
      </div>
    </section>
      {/* footer section  */}
      <Footer />
    </div>
  );
};

export default Homepage;
