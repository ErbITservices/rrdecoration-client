import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mainbackground from "../assets/download.jpeg";
import background from "../assets/IMG_7600.PNG";
import React from "react";

function Services() {
  return (
    <>
      <div
        className="backimg"
        style={{ backgroundImage: `url(${mainbackground})` }}
      >
        <Navbar />
        <div className="service-container">
          <h3>Our Services</h3>
          <div className="service-item">
            <h1>Website Design and Development</h1>
            <p>
              Our website developers provide expert web application development
              and web design services to our clients. Appnovation offers a
              variety of website design and development services, from creating
              mobile web development solutions and responsive website designs,
              to building custom e-commerce and intranet experiences using the
              latest and proven web technologies.
            </p>
          </div>
          <div className="service-item">
            <h1>Mobile Application Development</h1>
            <p>
              Whether looking to create a mobile application for smartphones,
              tablets or both, Appnovation has your organization covered no
              matter the platform it is to be built on or device it is to be
              used in conjunction with. As experts at HTML5 development,
              Appnovation can also build cross-platform mobile applications that
              will work on any device or platform.
            </p>
          </div>
          <div className="service-item">
            <h1>Data Entry Services</h1>
            <p>
              Data Entry Service based in India offers a wide range of back
              office and Information Technology Enabled Services namely data
              entry, data processing and data conversion that are equivalent to
              global standards in terms of efficiency and accuracy. In the
              modern world, data entry is the fundamental and most indispensable
              internal function of every business firms, organizations and
              service providers.
            </p>
          </div>
          <div className="service-item">
            <h1>Document Scanning</h1>
            <p>
              Document scanning is the practice of using scanners to convert
              paper documents into digital images. More businesses are scanning
              documents as a way to cut costs, increase productivity and improve
              access to their information. And in this blog post we discuss the
              benefits of document scanning and offer tips for digitizing your
              hard copy records
            </p>
          </div>
          <div className="service-item">
            <h1>Annual Maintenance Contract</h1>
            <p>
              Annual maintenance services can apply to buildings, landscaping,
              computers, machinery, technically-enhanced furniture, and any
              other technology or business systems that require post-purchase
              service and maintenance. In specific industries, AMCs are
              certainly more prevalent than others.
            </p>
          </div>
          <div className="service-item">
            <h1>Library Automation</h1>
            <p>
              In library, automation we can store all information consists of
              book numbers, author name, rack detail, book titles and much more.
              It makes issue and returning process easy. It provides the search
              function which helps the students in searching of any book in the
              library.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Services;
