import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { conv,tax1,tax2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "דף בית" },
    { href: "#about-us", label: "עלינו" },
    { href: "#products", label: "שירותים" },
    { href: "#contact-us", label: "צור קשר" },
];

export const reviews = [
    {
        thumbnail: conv,
        bigReview: conv,
    },
    {
        thumbnail: tax1,
        bigReview: tax1,
    },
    {
        thumbnail: tax2,
        bigReview: tax2,
    },
];

export const statistics = [
    { value: '30+', label: 'שנות נסיון' },
    { value: '100+', label: 'לקוחות' },
];

export const products = [
    {
        imgURL: conv,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: conv,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: conv,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: conv,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

// export const reviews = [
//     {
//         imgURL: conv,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: conv,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];



