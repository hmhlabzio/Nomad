import React from 'react';
import { Link } from 'react-router-dom';
import SparkHeader from '../components/SparkHeader'; 

// Image URLs
const tokyoImg = "https://wallpaperaccess.com/full/417584.jpg";
const visaImg = "https://l450v.alamy.com/450v/2k6ck4x/hand-holding-open-passport-with-republic-of-india-visa-in-british-passport-2k6ck4x.jpg";
const productivityImg = "https://thumbs.dreamstime.com/b/minimalist-office-desk-setup-laptop-coffee-plants-341168230.jpg";
const lisbonImg = "https://img.freepik.com/premium-photo/group-friends-laughing-enjoying-meal-together-outdoors-table-lit-by-string-lights_14117-809198.jpg";

const featuredArticle = {
  title: "Tokyo on a Budget: How Our Nomad Score Helps You Plan",
  excerpt:
    "Everyone dreams of Tokyo, but many are deterred by its reputation as an expensive city. But what if you could experience the best of this megacity without breaking the bank? Our in-depth analysis of Tokyo's Nomad Lifestyle Score (Cost: 91/100) shows you how. In this guide, we break down average costs, from accommodation to that perfect bowl of ramen, and share insider tips from our community on how to make your Japanese adventure affordable.",
  image: tokyoImg,
  category: "Destination Guides",
  link: "/blog/tokyo-budget-guide",
};

const latestArticles = [
  {
    id: 1,
    title: "The 2025 Digital Nomad Visa Roundup: 5 New Countries to Add to Your List",
    excerpt:
      "The world is opening its doors to remote workers faster than ever. From the beaches of Brazil to the mountains of Georgia, we explore five new and updated digital nomad visas you need to know about this year.",
    image: visaImg,
    category: "Visa Updates",
    link: "/blog/2025-visa-roundup",
  },
  {
    id: 2,
    title: "Mastering Productivity on the Road: 7 Essential Tools for the Modern Nomad",
    excerpt:
      "Staying focused while the world calls to be explored can be tough. We share our top 7 apps and gadgets that will help you stay on task, manage your projects, and keep your work-life balance in check, no matter your time zone.",
    image: productivityImg,
    category: "Remote Work Tips",
    link: "/blog/productivity-tools-nomads",
  },
  {
    id: 3,
    title: "Community Spotlight: Finding Your Tribe in Lisbon",
    excerpt:
      "Loneliness can be a real challenge for nomads. In our first community spotlight, we talk to three NomadNetwork members about how they built lasting friendships and professional connections in Portugal's vibrant capital.",
    image: lisbonImg,
    category: "Community Stories",
    link: "/blog/nomads-in-lisbon",
  },
];

function BlogPage() {
  return (
    <>
      <SparkHeader /> 

      <div className="bg-white text-gray-800 px-6 md:px-10 lg:px-20 py-12 max-w-[1440px] mx-auto">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
          The Nomad Ledger: <span className="text-blue-600">Your Source for Global Insights</span>
        </h1>

        {/* Featured Article */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <img
            src={featuredArticle.image}
            alt="Tokyo at night"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
          <div>
            <p className="text-sm text-blue-500 uppercase tracking-wide font-semibold mb-2">
              {featuredArticle.category}
            </p>
            <h2 className="text-2xl font-bold mb-4">{featuredArticle.title}</h2>
            <p className="text-gray-700 mb-6">{featuredArticle.excerpt}</p>
            <Link
              to={featuredArticle.link}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Section Title */}
        <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-t-xl" // 🔼 Increased height here for better image visibility
              />
              <div className="p-5">
                <p className="text-xs text-blue-500 font-semibold mb-1">{article.category}</p>
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt.slice(0, 100)}...
                </p>
                <Link
                  to={article.link}
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
