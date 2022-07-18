import "./assets/scss/style.scss";

import { Loader } from "@googlemaps/js-api-loader";
import Swiper, { Navigation } from "swiper";
import lightningbox from "lightningbox";

const cover = new Swiper(".swiper", {
  modules: [Navigation],
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const displayResponsiveNav = () => {
  const menu = document.querySelector(".mobile-nav");
  menu.classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      document.documentElement.style.overflowY = "hidden";

      setTimeout(() => {
        const closeModalButton = document.querySelector(".lb-modal-close");

        closeModalButton.addEventListener("click", () => {
          document.documentElement.style.overflowY = "auto";
        });
      }, 1000);
    });
  });

  lightningbox(".gallery > a");

  const center = {
    lat: parseFloat(44.014852284600266),
    lng: parseFloat(20.913090546027835),
  };

  Object.assign(mapOptions, { center });

  loader
    .load()
    .then((google) => {
      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
    })
    .catch((e) => {
      console.log(e);
    });
});

const loader = new Loader({
  apiKey: "AIzaSyBFgW7nlikqF2g-iO9J2y-iy7L5K0Yf1YU",
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  styles: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ],
  zoom: 18,
};
