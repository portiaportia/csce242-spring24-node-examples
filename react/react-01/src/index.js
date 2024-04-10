import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Gallery from "./Gallery.js";
import Footer from "./Footer.js";
import "./App.css";

const header = ReactDOM.createRoot(document.getElementById("header"));
header.render(<Header />);

const gallery = ReactDOM.createRoot(document.getElementById("gallery"));
gallery.render(<Gallery />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer />);
