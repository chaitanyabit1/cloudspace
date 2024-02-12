import influencer from "../assets/images/social-media-influencer.webp";
import brandstrategy from "../assets/images/brand-strategy.webp";
import contentmarketing from "../assets/images/content-marketing.webp";
import businessanalytic from "../assets/images/business-analytic.webp";

export const ServicesData = [
  {
    id: 1,
    img: influencer,
    title: "Social Media Influencer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: brandstrategy,
    title: "Brand Strategy",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: "300",
  },
  {
    id: 3,
    img: contentmarketing,
    title: "Brand Strategy",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: "500",
  },
  {
    id: 4,
    img: businessanalytic,
    title: "Business Analytic",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: "700",
  },
];

export const PricingData = [
    {
      id: 1,
      pricing: "35",
      plans: "Social Media Influencer",
      description: "Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh.",
      plansfeatures: [
        {
            list:"Branding Strategy",
            recommended: true,
        },
        {
            list:"Content Marketing",
            recommended: true,
        },
        {
            list:"SEO Optimization",
            recommended: true,
        },
        {
            list:"-",
            recommended: false,
        },
        {
            list:"-",
            recommended: false,
        },
        {
            list:"-",
            recommended: false,
        },
        
      ],   
      aosDelay: "0",
          
    },
    {
        id: 2,
        pricing: "89",
        plans: "Essentials",
        description:
          "Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh.",
        plansfeatures: [
          {
              list:"Branding Strategy",
              recommended: true,
          },
          {
              list:"Content Marketing",
              recommended: true,
          },
          {
              list:"SEO Optimization",
              recommended: true,
          },
          {
              list:"Social Media Influencer",
              recommended: true,
          },
          {
            list:"-",
            recommended: false,
        },
        {
            list:"-",
            recommended: false,
        },
          
        ],   
        aosDelay: "300",
            
      },
      {
        id: 3,
        pricing: "143",
        plans: "Premium",
        description:
          "Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh.",
        plansfeatures: [
          {
              list:"Branding Strategy",
              recommended: true,
          },
          {
              list:"Content Marketing",
              recommended: true,
          },
          {
              list:"SEO Optimization",
              recommended: true,
          },
          {
              list:"Social Media Influencer",
              recommended: true,
          },
          {
            list:"Product Development",
            recommended: true,
          },
          {
            list:"Content Ideas",
            recommended: true,
          },
          
        ],  
        aosDelay: "500", 
            
      },
  ];


  export const TestimonilContent = [
    {
      id: 1,
      desc: `Dolor eget sit maecenas tincidunt tristique mauris nibh massa sit. Leo mattis semper commodo felis. Erat ultrices eu ornare ipsum. Proin vel magna quisque tincidunt facilisi. Pharetra facilisis at at in sodales nec velit. Proin ut pharetra quis fames dui. Pellentesque est nibh phasellus turpis cum dictum aliquet. At elementum quisque mattis risus lacus nulla. Ultrices tempor donec pharetra purus id justo posuere tellus.`,
      author: "Maria Strovska",
      designation: "Business Owner",
    },
    {
      id:2,
      desc: `Dolor eget sit maecenas tincidunt tristique mauris nibh massa sit. Leo mattis semper commodo felis. Erat ultrices eu ornare ipsum. Proin vel magna quisque tincidunt facilisi.`,
      author: "Bostami Hasan",
      designation: "Front-end Engineer",
    },
  ];


 export const CounterUpContent = [
    {
      id:1,
      startCount: "0",
      endCount: "600",
      endPointText: "+",
      meta: "Project Completed",
    },
    {
      id:2,
      startCount: "0",
      endCount: "10",
      endPointText: "+",
      meta: "Years Experience",
    }, 
    {
      id:3,
      startCount: "0",
      endCount: "25",
      endPointText: "+",
      meta: "Professional Team",
    },
  ];

export const InfoLinks = [
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Service",
      link: "/#service",
    },
    {
      title: "Pricing",
      link: "/#pricing",
    },
    {
      title: "FAQ",
      link: "/#faq",
    },
  ];
export const SpecialLinks = [
    {
      title: "Partnership",
      link: "/#partnership",
    },
    {
      title: "Features",
      link: "/#features",
    },
    {
      title: "Team",
      link: "/#team",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

export default {ServicesData, PricingData, TestimonilContent, CounterUpContent, InfoLinks, SpecialLinks}

