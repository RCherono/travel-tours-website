import { useInView } from "react-intersection-observer";
import safari__img from "../../assets/images/safari.jpeg";
import international__img from "../../assets/images/international.jpeg";
import dayactivities__img from "../../assets/images/bikes.jpeg";
import stay__img from "../../assets/images/stay.jpeg";
import events__img from "../../assets/images/events.jpeg";
import camping__img from "../../assets/images/camping.jpeg";
import roadtrips__img from "../../assets/images/truckparty.jpeg";
import local__img from "../../assets/images/loco.jpeg";
import { Link } from 'react-router-dom';
import "./Internationaltravels.css"; 


import { useEffect } from "react";

const locations = [
  { 
    name: "International travels",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    route: "/international-travels",

    discount: null,
    rate: 5,
    image: international__img,
  },
  {
    name: "Safari tours",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    discount: 35,
    rate: 5,
    image: safari__img,
  },
  {
    name: "local tours",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    discount: 35,
    rate: 5,
    image: local__img,
  },
  {
    name: "Day activities",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    rate: 3,
    image: dayactivities__img,
  },
  {
    name: "Hotels & Airbnb",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    discount: 35,
    rate: 5,
    image: stay__img,
  },
  {    name: "Events",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    discount: null,
    rate: 4,
    image: events__img,
  },
  {
    name: "Camping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    rate: 4,
    image: camping__img,
  },
  {
    name: "road trips",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
    rate: 4,
    image: roadtrips__img,
  },
];

const FeaturedLocations = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("feature");
    }
  }, [inView]);
  return (
    <section ref={ref} className="bg-base-00" id="feature">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">P</span>ackages
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((loc, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure className="max-h-40 lg:max-h-48 xl:max-h-52 h-full relative">
              <img className="h-full w-full" src={loc.image} alt={loc.name} />
              {loc.discount && (
                <span className="badge  badge-error px-3 absolute top-3 left-3 text-primary-content">
                  {loc.discount}%
                </span>
              )}
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-accent lg:text-2xl ">
                {loc.name}
              </h2>
              <p>{loc.desc}</p>
              <div className="flex">
                {[1, 2, 3, 4, 5, 6].map((star, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 ${
                      index < loc.rate ? "fill-orange-500" : "fill-transparent"
                    }  stroke-orange-500 `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>

              <div className="card-actions mt-2 ">
                <button className="btn  btn-accent  text-primary-content">
                  view more!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedLocations;
