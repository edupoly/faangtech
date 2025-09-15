import React from "react";

function OurProducts() {
  return (
    <div>
      OurProducts
      <section id="portfolio" class="py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="fw-bold">Our Product Portfolio</h2>
            <p class="lead text-muted">
              A curated selection of our best programs and learning platforms.
            </p>
          </div>

          <ul
            class="nav nav-pills justify-content-center mb-4"
            id="portfolio-filters"
          >
            <li class="nav-item">
              <button class="nav-link active" data-filter="all">
                All
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" data-filter="pro-dev">
                Professional Development
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" data-filter="higher-ed">
                Higher Education
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" data-filter="k12">
                K-12
              </button>
            </li>
          </ul>

          <div class="row g-4">
            <div class="col-lg-4 col-md-6 portfolio-item pro-dev">
              <div class="card h-100 border-0 shadow-sm portfolio-card">
                <img
                  src="https://placehold.co/600x400/007BFF/FFFFFF?text=Data+Science"
                  class="card-img-top"
                  alt="Data Science Mastery"
                />
                <div class="card-body d-flex flex-column">
                  <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill align-self-start mb-2">
                    Professional Development
                  </span>
                  <h5 class="card-title fw-bold">Data Science Mastery</h5>
                  <p class="card-text text-muted">
                    From Python basics to advanced machine learning models,
                    become a job-ready data scientist.
                  </p>
                  <a href="#" class="btn btn-primary mt-auto align-self-start">
                    View Program <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item k12">
              <div class="card h-100 border-0 shadow-sm portfolio-card">
                <img
                  src="https://placehold.co/600x400/28A745/FFFFFF?text=PolyVerse"
                  class="card-img-top"
                  alt="PolyVerse Kids"
                />
                <div class="card-body d-flex flex-column">
                  <span class="badge bg-success-subtle text-success-emphasis rounded-pill align-self-start mb-2">
                    K-12
                  </span>
                  <h5 class="card-title fw-bold">PolyVerse for Kids</h5>
                  <p class="card-text text-muted">
                    A safe and fun gamified learning platform for kids ages 6-12
                    to explore coding and math.
                  </p>
                  <a href="#" class="btn btn-success mt-auto align-self-start">
                    Explore <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item pro-dev">
              <div class="card h-100 border-0 shadow-sm portfolio-card">
                <img
                  src="https://placehold.co/600x400/6F42C1/FFFFFF?text=AI+Leadership"
                  class="card-img-top"
                  alt="AI for Business Leaders"
                />
                <div class="card-body d-flex flex-column">
                  <span class="badge bg-purple-subtle text-purple-emphasis rounded-pill align-self-start mb-2">
                    Professional Development
                  </span>
                  <h5 class="card-title fw-bold">AI for Business Leaders</h5>
                  <p class="card-text text-muted">
                    Understand AI's impact and learn to implement strategic AI
                    initiatives within your organization.
                  </p>
                  <a href="#" class="btn btn-purple mt-auto align-self-start">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item higher-ed">
              <div class="card h-100 border-0 shadow-sm portfolio-card">
                <img
                  src="https://placehold.co/600x400/FFC107/FFFFFF?text=UniPrep"
                  class="card-img-top"
                  alt="University Prep Suite"
                />
                <div class="card-body d-flex flex-column">
                  <span class="badge bg-warning-subtle text-warning-emphasis rounded-pill align-self-start mb-2">
                    Higher Education
                  </span>
                  <h5 class="card-title fw-bold">University Prep Suite</h5>
                  <p class="card-text text-muted">
                    Comprehensive test prep, essay reviews, and application
                    guidance for prospective university students.
                  </p>
                  <a href="#" class="btn btn-warning mt-auto align-self-start">
                    Get Started <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item higher-ed">
              <div class="card h-100 border-0 shadow-sm portfolio-card">
                <img
                  src="https://placehold.co/600x400/17A2B8/FFFFFF?text=Research+Hub"
                  class="card-img-top"
                  alt="Academic Research Hub"
                />
                <div class="card-body d-flex flex-column">
                  <span class="badge bg-info-subtle text-info-emphasis rounded-pill align-self-start mb-2">
                    Higher Education
                  </span>
                  <h5 class="card-title fw-bold">Academic Research Hub</h5>
                  <p class="card-text text-muted">
                    Access a vast library of academic papers, collaboration
                    tools, and citation management software.
                  </p>
                  <a href="#" class="btn btn-info mt-auto align-self-start">
                    Access Hub <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item k12">
              <div class="card h-100 border-0 shadow-sm portfolio-card">
                <img
                  src="https://placehold.co/600x400/DC3545/FFFFFF?text=Math+Whiz"
                  class="card-img-top"
                  alt="Math Whiz Challenge"
                />
                <div class="card-body d-flex flex-column">
                  <span class="badge bg-danger-subtle text-danger-emphasis rounded-pill align-self-start mb-2">
                    K-12
                  </span>
                  <h5 class="card-title fw-bold">Math Whiz Challenge</h5>
                  <p class="card-text text-muted">
                    An interactive platform that makes learning math fun through
                    competitive challenges and puzzles.
                  </p>
                  <a href="#" class="btn btn-danger mt-auto align-self-start">
                    Take Challenge <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurProducts;
