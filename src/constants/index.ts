import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { tax1,tax2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "דף בית" },
    { href: "#leave-info", label: "השאר פרטים" },
    { href: "#about-us", label: "עלינו" },
    { href: "#products", label: "שירותים" },
    { href: "#contact-us", label: "צור קשר" },
];

export const reviews = [
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

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];




