import React from 'react';
import "./page2.css";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
} from '@mui/material';
import ResponsiveAppBar from '../components/Navbarcomponent';  // Import your AppBar component

const blogPosts = [
  {
    title: "How to Use React Effectively",
    excerpt: "React is a powerful tool for building dynamic user interfaces...",
    image: "https://via.placeholder.com/300",
    link: "/blog/how-to-use-react-effectively",
  },
  {
    title: "Understanding JavaScript Closures",
    excerpt: "Closures are an important concept in JavaScript that allow functions to retain access to their scope...",
    image: "https://via.placeholder.com/300",
    link: "/blog/understanding-javascript-closures",
  },
  {
    title: "10 Tips for Writing Clean Code",
    excerpt: "Writing clean code is essential for maintainability, scalability, and collaboration...",
    image: "https://via.placeholder.com/300",
    link: "/blog/10-tips-for-writing-clean-code",
  },
];

const Page2 = () => {
  return (
    <>
<div id="othernavbar"></div>
        <section class="header"></section>
        <section class="kropp">
            <div class="article1"></div>
            <div class="article2"></div>
            <div class="article3"></div>
            <div class="article4"></div>
            <div class="article5"></div>
            <div class="article6"></div>
        </section>
        <section class="footer">
            <footer id="secondfooter"></footer>
        </section>
    </>
  );
};

export default Page2;
