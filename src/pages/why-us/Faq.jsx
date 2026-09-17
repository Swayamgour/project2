import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';

function FAQ() {

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "FAQ",
    },
  ];

  const hero = {
    eyebrow: "Frequently Asked Questions",

    heading: "The questions you would ask on a call, answered here",

    lede:
      "If a question you care about is not here, submit it from the contact form. We will answer it.",

    primaryCtaText: "Ask us something else",
    primaryCtaLink: "/contact",

    secondaryCtaText: "Read our approach",
    secondaryCtaAnchor: "/approach",

    glance: {
      title: "How to use this page",

      items: [
        "Grouped and can be scrolled by what you are trying to find out",
        "Written as we would answer on a call, not as marketing copy",
        "Includes when we would tell you not to hire us",
        "Ask anything not covered, and we will answer",
      ],
    },
  };

  return (
   <div>
    <h1>FAQ</h1>
   </div>
  );
}

export default FAQ;