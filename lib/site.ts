export const ORDER_URL =
  "https://wa.me/917208654862?text=I%20want%20to%20purchase%20this";
export const HELP_URL = "https://wa.me/917208654862?text=Hi";
export const INSTAGRAM_URL =
  "https://www.instagram.com/kaju.official.store?exln=NGw0bmR6MnFnOTVm&utm_source=qr";
export const PHONE_URL = "tel:+917208654862";
export const PHONE_DISPLAY = "+91 72086 54862";
export const ADDRESS =
  "B6 - 1, Rajhans Society, Best Colony, Pantanagar, Ghatkopar East.";
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export const products = [
  { id: "skin-1kg", name: "Whole Cashews with Skin", image: "/images/cashews-with-skin.png", weight: "1 kg", price: "₹1,200", available: true },
  { id: "skin-2kg", name: "Whole Cashews with Skin", image: "/images/cashews-with-skin.png", weight: "2 kg", price: "₹2,000", available: true },
  { id: "skin-200g", name: "Whole Cashews with Skin", image: "/images/cashews-with-skin.png", weight: "200 g", price: "₹240", available: true },
  { id: "white", name: "Whole Cashews White", image: "/images/cashews-white.png", weight: null, price: null, available: false },
] as const;

export const navigation = [
  { label: "Our Purpose", href: "#purpose" },
  { label: "Our Cashews", href: "#cashews" },
  { label: "From Kokan’s", href: "#story" },
  { label: "Contact Us", href: "#contact" },
] as const;
