import React from "react";

function OurServices() {
  return (
    <div>
      <h1>OurServices</h1>
      <section id="services" class="py-5 bg-light">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="fw-bold">Explore Our Services</h2>
            <p class="lead text-muted">
              Empowering learners with cutting-edge tools and personalized
              guidance.
            </p>
          </div>

          <div class="row g-4 justify-content-center">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                <div class="card-body">
                  <div class="mb-4">
                    <i class="bi bi-laptop service-icon text-primary"></i>
                  </div>
                  <h5 class="card-title fw-bold">Interactive Courses</h5>
                  <p class="card-text">
                    Engage with our rich multimedia courses featuring quizzes,
                    projects, and hands-on exercises designed for deep learning.
                  </p>
                  <a href="#" class="btn btn-outline-primary mt-auto">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                <div class="card-body">
                  <div class="mb-4">
                    <i class="bi bi-person-video3 service-icon text-success"></i>
                  </div>
                  <h5 class="card-title fw-bold">1-on-1 Live Tutoring</h5>
                  <p class="card-text">
                    Get personalized help from expert tutors in real-time.
                    Schedule sessions that fit your busy life and master
                    difficult concepts.
                  </p>
                  <a href="#" class="btn btn-outline-success mt-auto">
                    Book a Session
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                <div class="card-body">
                  <div class="mb-4">
                    <i class="bi bi-compass service-icon text-danger"></i>
                  </div>
                  <h5 class="card-title fw-bold">
                    Personalized Learning Paths
                  </h5>
                  <p class="card-text">
                    Our AI-powered platform analyzes your skills and goals to
                    create a unique learning journey just for you.
                  </p>
                  <a href="#" class="btn btn-outline-danger mt-auto">
                    Discover Your Path
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                <div class="card-body">
                  <div class="mb-4">
                    <i class="bi bi-patch-check-fill service-icon text-info"></i>
                  </div>
                  <h5 class="card-title fw-bold">Certification Programs</h5>
                  <p class="card-text">
                    Earn industry-recognized certificates to validate your
                    skills and boost your resume for your dream career.
                  </p>
                  <a href="#" class="btn btn-outline-info mt-auto">
                    View Programs
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                <div class="card-body">
                  <div class="mb-4">
                    <i class="bi bi-briefcase service-icon text-warning"></i>
                  </div>
                  <h5 class="card-title fw-bold">Career Guidance</h5>
                  <p class="card-text">
                    Connect with career counselors, get resume reviews, and
                    participate in mock interviews to land your next job.
                  </p>
                  <a href="#" class="btn btn-outline-warning mt-auto">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                <div class="card-body">
                  <div class="mb-4">
                    <i class="bi bi-building-gear service-icon text-secondary"></i>
                  </div>
                  <h5 class="card-title fw-bold">Corporate Training</h5>
                  <p class="card-text">
                    Upskill your workforce with our tailored corporate training
                    solutions designed to drive business growth and innovation.
                  </p>
                  <a href="#" class="btn btn-outline-secondary mt-auto">
                    For Teams
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

export default OurServices;
