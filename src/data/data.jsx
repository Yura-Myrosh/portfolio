import weatherqr from "../assets/weather-qr.svg";
import portfolioqr from "../assets/portfolio-qr.svg";
import WeatherImage from "../assets/WeatherTrack.png";
import PortfolioImage from "../assets/Portfolio.png";
import ExchangeRateImage from "../assets/MagicExchange.png";
import bookingqr from "../assets/booking-qr.svg";
import exchangeqr from "../assets/exchangerate-qr.svg";
import Booking from "../assets/Booking.png";
import bluredbg from "../assets/blurred-bg.webp";

export const data = [
  {
    image: WeatherImage,
    title: "WeatherTrack",
    description:
      "Weather website that enables users to pull weather data from their location or any city by gathering real-time data via an API.",
    techStack: "// React, JS, SCSS, DayJs, Axios, Jest, Netlify",
    liveLink: "https://weathertrack-forecast.netlify.app/",
    codeLink: "https://github.com/WinehouseD/weather-website",
    qrCode: weatherqr,
  },
  {
    image: Booking,
    title: "Booking",
    description:
      "Booking is a modern web application designed to streamline the reservation process.",
    credentials: "Login: demo@gmail.com Password: demoPassword",
    techStack: "// React, JS, Tailwind CSS, RadixUI, Zod, Jose, Redux, RTK, Vercel",
    codeLink: "",
    liveLink: "https://airbnb-type-project.vercel.app/",
    qrCode: bookingqr,
  },
  {
    image: ExchangeRateImage,
    title: "Magic Exchange",
    description:
      "Exchange rate app converts currencies, displays chart with historical rates, and provides an updated list of the latest exchange rates.",
    techStack: "// React, TS, MUI, Axios, ChartJS, Toastify, Jest, Vercel",
    codeLink: "https://github.com/WinehouseD/exchange-rate-app",
    liveLink: "https://exchange-rate-apps.vercel.app/",
    qrCode: exchangeqr,
  },
  {
    image: PortfolioImage,
    title: "Portfolio",
    description:
      "Sleek and responsive portfolio website to showcase my skills, achievements, and projects.",
    techStack: "// React, JS, Tailwind CSS, Formik/Yup, Jest, EmailJS, GitHub Pages",
    codeLink: "https://github.com/WinehouseD/portfolio",
    liveLink: "http://WinehouseD.github.io/portfolio",
    qrCode: portfolioqr,
  },
  {
    image: bluredbg,
    title: "Banking App",
    description:
      "Coming soon...",
    techStack: "// NextJS, TS, Tailwind CSS, RadixUI, Zod, ChartJS",
  },
];
