import React from "react";
import "../styles/Header.css";

// Import your profile picture
import profilePic from "../assets/Me.png";

// Import Icons
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdChevronRight,
  MdOutlineWbSunny,
  MdModeNight,
} from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="profile-header">
      {/* This wrapper handles the main flex layout and wrapping */}
      <div className="header-content">
        {/* Column 1: Profile Image */}
        <div className="profile-image-container">
          <img
            src={profilePic}
            alt="Jethro Lagmay"
            className="profile-picture"
          />
        </div>

        {/* Column 2: Info & Primary Actions */}
        <div className="profile-info-container">
          <div className="profile-details">
            <h1>
              Jethro Lagmay <BsFillPatchCheckFill className="verified-icon" />
            </h1>
            <p className="location">
              <IoLocationSharp /> Metro Manila, Philippines
            </p>
            <p className="role">
              BS Computer Science Student <span className="separator">|</span>{" "}
              Software Engineer
            </p>
          </div>
          <div className="profile-primary-actions">
            <button className="action-btn schedule">
              <FaRegCalendarAlt />
              <span>Schedule a Call</span>
              <MdChevronRight />
            </button>
            <a
              href="mailto:lagmay.jethro113@gmail.com"
              className="action-btn email"
            >
              <HiOutlineMail />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Column 3: Secondary Actions & Badges */}
        <div className="profile-secondary-actions">
          <div className="secondary-actions-top">
            <button className="theme-toggle" aria-label="Toggle theme">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider round">
                  {/* 4. Conditionally show sun or moon icon */}
                  {isDarkMode ? (
                    <MdModeNight className="switch-icon" />
                  ) : (
                    <MdOutlineWbSunny className="switch-icon" />
                  )}
                </span>
              </label>
            </button>
          </div>
          <a
            href="https://discord.gg/uPekWkD5Hx"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn community"
          >
            <IoIosPeople />
            <span>Visit my community and join the discussion here!</span>
            <MdChevronRight />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
