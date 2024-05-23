import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
      Welcome to SnapBuy Your One-stop Shop/Specialist Provider for trendy products!

Founded in 2024 by Seenu,SnapBuy began with a simple mission: to Everyone where trendy cloths and shoes . Our journey started in indore  inspired by we inspired by bonkconner , and since then, we have grown into  100000+ people trusted name in our industry, serving thousands of customers nationwide.

Our Products
At SnapBuy, we believe in this website every product is nature friendly and 100% ecofriendly the power of natural ingredients and transparent manufacturing. Each of our products is carefully crafted with the finest locally sourced materials. We specialize in list product types or categories, cloths,shoes and etc.

Our Promise
We are committed to unparalleled quality and customer satisfaction. We stand behind every item we sell and strive to deliver the best possible shopping experience. With a focus on eco-friendliness, community support, etc., we aim to not only meet but exceed your expectations.

Our Community
SnapBuy is more than just a store; we are a community of like-minded individuals who value sustainability and innovative design and trend. We regularly engage with our customers through social media, blogs, or events, and we cherish the feedback that helps us grow and improve.

Join Us
We invite you to browse our collection and discover why SnapBuy is the preferred choice for fashion-forward individuals looking for sustainable clothing options. For any inquiries or feedback, feel free to reach out through our contact customer service xxxxxxxxxx.

Thank you for choosing SnapBuy. We look forward to serving you and providing an exceptional shopping experience.


      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
