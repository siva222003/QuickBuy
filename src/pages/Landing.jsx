import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Landing = () => {
  const callouts = [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];

  return (
    <div>
      <motion.div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <motion.h1
                initial={{ x: -80 }}
                animate={{ x: 0 }}
                exit={{ x: -80 }}
                 transition={{ type: "spring", stiffness: 100 }}

                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Summer styles are finally here
              </motion.h1>
              <motion.p
                initial={{ x: -80 }}
                animate={{ x: 0 }}
                exit={{ x: -80 }}
                 transition={{ type: "spring", stiffness: 100 }}
                
                className="mt-4 text-xl text-gray-500"
              >
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </motion.p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ y: 80 }}
                          animate={{ y: 0 }}
                          exit={{ y: 80 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ x: -80 }}
                  animate={{ x: 0 }}
                  exit={{ x: -80 }}
                   transition={{ type: "spring", stiffness: 100 }}
                >
                  <Link
                    to="/home"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 lg:max-w-none ">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <Link to='/home'>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <Link to='/home'>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
