import React, { useMemo, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import aboutustile9 from "../assets/about-us-tile-9.jpg";

import gallery1 from "../assets/about-us-tile-1.jpg";
import gallery2 from "../assets/about-us-tile-3.jpg";
import gallery3 from "../assets/about-us-tile-5.jpg";
import gallery4 from "../assets/hero-2.jpg";
import gallery5 from "../assets/hero-3.jpg";
import gallery6 from "../assets/hero-4.jpg";
import gallery7 from "../assets/hero-5.jpg";
import gallery8 from "../assets/tutor-1.jpg";
import gallery9 from "../assets/tutor-2.jpg";
import gallery10 from "../assets/tutor-3.jpg";
import gallery11 from "../assets/hero-1.jpg";
import gallery12 from "../assets/hero-2.jpg";

const galleryItems = [
  {
    id: 1,
    image: gallery1,
    title: "Classroom Learning",
    category: "Academics",
    alt: "Learners in class",
  },
  {
    id: 2,
    image: gallery2,
    title: "Academic Support Session",
    category: "Support",
    alt: "Students receiving academic support",
  },
  {
    id: 3,
    image: gallery3,
    title: "Collaborative Study",
    category: "Academics",
    alt: "Students studying together",
  },
  {
    id: 4,
    image: gallery4,
    title: "Focused Revision",
    category: "Academics",
    alt: "Learners revising in class",
  },
  {
    id: 5,
    image: gallery5,
    title: "School Activities",
    category: "Activities",
    alt: "Learners during a school activity",
  },
  {
    id: 6,
    image: gallery6,
    title: "Supportive Environment",
    category: "Support",
    alt: "Learners in a supportive learning environment",
  },
  {
    id: 7,
    image: gallery7,
    title: "Learning Growth",
    category: "Academics",
    alt: "Learners engaging with lesson work",
  },
  {
    id: 8,
    image: gallery8,
    title: "Tutor Guidance",
    category: "Team",
    alt: "Tutor supporting a learner",
  },
  {
    id: 9,
    image: gallery9,
    title: "Subject Assistance",
    category: "Team",
    alt: "Tutor portrait",
  },
  {
    id: 10,
    image: gallery10,
    title: "Class Activity",
    category: "Activities",
    alt: "Learners during a class activity",
  },
  {
    id: 11,
    image: gallery11,
    title: "Learning Focus",
    category: "Academics",
    alt: "Learners focused on academic work",
  },
  {
    id: 12,
    image: gallery12,
    title: "School Support",
    category: "Support",
    alt: "Learners receiving support",
  },
];

const filters = ["All", "Academics", "Support", "Activities", "Team"];
const ITEMS_PER_PAGE = 9;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  function handleFilterChange(filter) {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-white text-secondary">
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutustile9})` }}
        >
          <div className="absolute inset-0 bg-[#0f3d5c]/75" />

          <div className="relative mx-auto max-w-4xl px-5 pt-24 pb-14 text-center text-white md:px-8 md:pt-28 md:pb-16">
            <AnimatedSection>
              <p className="font-poppins text-[11px] uppercase tracking-[0.25em] text-white/70">
                Our Gallery
              </p>

              <h1 className="mt-3 font-zuume text-3xl leading-tight md:text-4xl">
                Moments of Learning and Growth
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto px-5 md:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-poppins text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  Explore moments from our classrooms, learning support
                  sessions, school activities, and the environment that helps
                  learners grow in confidence and academic performance.
                </p>
              </div>
            </AnimatedSection>

            {/* Filters */}
            <AnimatedSection>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => handleFilterChange(filter)}
                      className={`rounded-full px-5 py-2.5 font-poppins text-sm transition ${
                        isActive
                          ? "bg-secondary text-white shadow-sm"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-secondary/30 hover:text-secondary"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Gallery Grid */}
            <AnimatedSection>
              <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
                {paginatedItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="group aspect-square overflow-hidden border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                    aria-label={`Open image ${item.id}`}
                  >
                    <div className="h-full w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Pagination */}
            {totalPages > 1 && (
              <AnimatedSection>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`rounded-full px-4 py-2 font-poppins text-sm transition ${
                      currentPage === 1
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-secondary/30 hover:text-secondary"
                    }`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const isActive = currentPage === page;

                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`h-10 min-w-[40px] rounded-full px-3 font-poppins text-sm transition ${
                          isActive
                            ? "bg-secondary text-white shadow-sm"
                            : "border border-slate-200 bg-white text-slate-600 hover:border-secondary/30 hover:text-secondary"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`rounded-full px-4 py-2 font-poppins text-sm transition ${
                      currentPage === totalPages
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-secondary/30 hover:text-secondary"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8">
            <div className="relative w-full max-w-5xl">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-700 shadow-md transition hover:bg-white"
                aria-label="Close image preview"
              >
                ×
              </button>

              <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="max-h-[75vh] w-full object-contain bg-slate-50"
                />

                <div className="border-t border-slate-200 px-5 py-4 md:px-6">
                  <p className="font-poppins text-[10px] uppercase tracking-[0.2em] text-secondary/60">
                    {selectedImage.category}
                  </p>
                  <h3 className="mt-1 font-zuume text-2xl text-secondary">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 -z-10"
              aria-label="Close lightbox backdrop"
            />
          </div>
        )}
      </main>
    </div>
  );
}
