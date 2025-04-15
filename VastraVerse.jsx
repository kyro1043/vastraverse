import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function VastraVerse() {
  const phoneNumber = "91XXXXXXXXXX"; // Replace with your WhatsApp number

  const products = [
    { name: "Lavender Kurti", price: "₹1,499" },
    { name: "Embroidered Saree", price: "₹2,299" },
    { name: "Floral Anarkali", price: "₹1,999" },
    { name: "Chikankari Suit", price: "₹1,899" },
    { name: "Indo-Western Dress", price: "₹2,499" },
    { name: "Elegant Lehenga", price: "₹3,999" },
  ];

  const generateWhatsAppLink = (name, price) => {
    const message = encodeURIComponent(`Hello, I'm interested in the product: ${name} priced at ${price}.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4 sm:p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-800">VastraVerse</h1>
        <p className="text-purple-600 mt-2 text-sm sm:text-base">Elegance Woven With Tradition</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg bg-white"
          >
            <Card>
              <CardContent className="p-4">
                <div className="h-40 sm:h-48 bg-purple-200 rounded-xl mb-4"></div>
                <h2 className="text-lg sm:text-xl font-semibold text-purple-700">{product.name}</h2>
                <p className="text-purple-500 mt-1 text-sm sm:text-base">{product.price}</p>
                <a href={generateWhatsAppLink(product.name, product.price)} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full bg-purple-400 hover:bg-purple-500 text-white text-sm sm:text-base">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="text-center mt-16">
        <p className="text-purple-500 text-sm sm:text-base">Have questions or want to place a custom order?</p>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-4 bg-purple-300 hover:bg-purple-400 text-white text-sm sm:text-base">
            <PhoneCall className="mr-2 h-4 w-4" /> DM on WhatsApp
          </Button>
        </a>
      </footer>
    </div>
  );
}
