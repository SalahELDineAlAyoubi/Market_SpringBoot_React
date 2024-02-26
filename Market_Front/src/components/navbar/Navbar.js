import React, { useEffect } from 'react'
import "./Navbar.css";
 
import jquery from 'jquery';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { logout } from '../../redux/actions/AuthAction';

const Navbar = () => {
    const location = useLocation();

  useEffect(() => {
    (function ($) {
      "use strict";

      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
          1 > 2
          /* location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname*/
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 54,
              },
              1000,
              "easeInOutExpo"
            );
            return false;
          }
        }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
        target: "#mainNav",
        offset: 56,
      });

      // Collapse Navbar
      var navbarCollapse = function () {
        if (location.pathname === "/") {
          if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
          } else {
            $("#mainNav").removeClass("navbar-shrink");
          }
        }else{
        $("#mainNav").addClass("navbar-shrink");
        }
      }
      
                   
 
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);

      // Hide navbar when modals trigger
      $(".portfolio-modal").on("show.bs.modal", function (e) {
        $(".navbar").addClass("d-none");
      });
      $(".portfolio-modal").on("hidden.bs.modal", function (e) {
        $(".navbar").removeClass("d-none");
      });
    })(jquery);
  }, [location.pathname]);

  const handleCloseLogout = () => {
     dispatchEvent(logout());
  };
   
  return (
    <div id="top">
      <nav
        className="navbar navbar-expand-md navbar-dark   fixed-top"
        id="mainNav"
      >
        <div className="container  ">
          <Link to={"/"} className="navbar-brand js-scroll-trigger" href="#top">
            Koura Store
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            Menu <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto  ">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link js-scroll-trigger "
                  href="#l"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link js-scroll-trigger">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link js-scroll-trigger">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link js-scroll-trigger">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/login"}
                  onClick={handleCloseLogout}
                  className="nav-link js-scroll-trigger"
                >
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
