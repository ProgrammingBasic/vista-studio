import React from "react";

const BlogRow = ({
  imageSrc,
  imageAlt,
  title,
  text,
  reverse = false,
  bg = "bg-gray-200",
  contentBg = "bg-white",
}: {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  text: string;
  reverse?: boolean;
  bg?: string;
  contentBg?: string;
}) => (
  <div className={`${bg} w-full flex justify-center`}>
    <div className="max-w-7xl w-full flex flex-col md:flex-row">
      <div className={`w-full md:w-1/2 h-[340px] md:h-[400px] ${reverse ? "order-2" : ""}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div
        className={`w-full md:w-1/2 flex items-center px-10 py-12 h-[340px] md:h-[400px] ${contentBg} ${
          reverse ? "order-1" : ""
        }`}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export const Blog = () => (
  <div className="bg-gray-100 min-h-screen">
    <BlogRow
      imageSrc="https://images.pexels.com/photos/33207999/pexels-photo-33207999.jpeg"
      imageAlt="Cycling tour"
      title={
        <>
          Think of us as your<br />people on the ground,<br />in-destination
        </>
      }
      text="We study your business and combine all the elements necessary to produce a product and service that perfectly reflects your brand."
      bg="bg-gray-200"
      contentBg="bg-gray-200"
    />
    <BlogRow
      imageSrc="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
      imageAlt="Local experience"
      title={
        <>
          We’re here to<br />represent you
        </>
      }
      text="Our goals are aligned – our product creators build itineraries that your passengers love, and our guides generate the kind of customer reviews that you will be proud of."
      reverse
      bg="bg-white"
      contentBg="bg-white"
    />
    <BlogRow
      imageSrc="https://images.pexels.com/photos/19944901/pexels-photo-19944901.jpeg"
      imageAlt="Cycling tour"
      title={
        <>
          With innovative, flexible and seamless travel experiences
        </>
      }
      text="Exceptional travel is what we do. For you, this could mean complicated multi-day, high-touch itineraries curated and managed by local specialists or simply discreet point-to-point airport transfers. We have the infrastructure, expert know-how and local insight to make every aspect of travel inspiring and easy."
      bg="bg-gray-200"
      contentBg="bg-gray-200"
    />
  </div>
);

export default Blog;