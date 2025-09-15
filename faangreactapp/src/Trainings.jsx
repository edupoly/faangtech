import React from "react";

function Trainings() {
  return (
    <div>
      <section id="trainings" class="py-5 bg-light">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="fw-bold">Upcoming Trainings & Workshops</h2>
            <p class="lead text-muted">
              Join our expert-led sessions to enhance your skills and knowledge.
            </p>
          </div>

          <ul
            class="nav nav-tabs justify-content-center border-0 mb-4"
            id="trainingsTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="upcoming-tab"
                data-bs-toggle="tab"
                data-bs-target="#upcoming"
                type="button"
                role="tab"
                aria-controls="upcoming"
                aria-selected="true"
              >
                Upcoming
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="popular-tab"
                data-bs-toggle="tab"
                data-bs-target="#popular"
                type="button"
                role="tab"
                aria-controls="popular"
                aria-selected="false"
              >
                Popular
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="archived-tab"
                data-bs-toggle="tab"
                data-bs-target="#archived"
                type="button"
                role="tab"
                aria-controls="archived"
                aria-selected="false"
              >
                Archived
              </button>
            </li>
          </ul>

          <div class="tab-content" id="trainingsTabContent">
            <div
              class="tab-pane fade show active"
              id="upcoming"
              role="tabpanel"
              aria-labelledby="upcoming-tab"
            >
              <div class="list-group">
                <div class="list-group-item list-group-item-action p-4 mb-3 training-item">
                  <div class="d-md-flex w-100 justify-content-between align-items-center">
                    <div class="flex-grow-1 mb-3 mb-md-0">
                      <h5 class="mb-1 fw-bold text-primary">
                        Advanced JavaScript Workshop
                      </h5>
                      <div class="training-meta text-muted small mb-2">
                        <span>
                          <i class="bi bi-person-fill"></i> Dr. Anya Sharma
                        </span>
                        <span>
                          <i class="bi bi-calendar-event"></i> September 25,
                          2025
                        </span>
                        <span>
                          <i class="bi bi-clock"></i> 10:00 AM IST
                        </span>
                        <span>
                          <i class="bi bi-camera-video"></i> Online Live
                        </span>
                      </div>
                      <p class="mb-0 d-none d-sm-block">
                        Dive deep into asynchronous JS, modern frameworks, and
                        performance optimization techniques.
                      </p>
                    </div>
                    <div class="ms-md-4">
                      <a href="#" class="btn btn-primary">
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>

                <div class="list-group-item list-group-item-action p-4 mb-3 training-item">
                  <div class="d-md-flex w-100 justify-content-between align-items-center">
                    <div class="flex-grow-1 mb-3 mb-md-0">
                      <h5 class="mb-1 fw-bold text-primary">
                        Introduction to Cloud Computing with AWS
                      </h5>
                      <div class="training-meta text-muted small mb-2">
                        <span>
                          <i class="bi bi-person-fill"></i> Rohan Verma
                        </span>
                        <span>
                          <i class="bi bi-calendar-event"></i> October 05, 2025
                        </span>
                        <span>
                          <i class="bi bi-clock"></i> 2:00 PM IST
                        </span>
                        <span>
                          <i class="bi bi-building"></i> In-Person (Hyderabad)
                        </span>
                      </div>
                      <p class="mb-0 d-none d-sm-block">
                        A beginner-friendly session covering core AWS services
                        like EC2, S3, and RDS.
                      </p>
                    </div>
                    <div class="ms-md-4">
                      <a href="#" class="btn btn-primary">
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="popular"
              role="tabpanel"
              aria-labelledby="popular-tab"
            >
              <div class="list-group">
                <div class="list-group-item list-group-item-action p-4 mb-3 training-item">
                  <div class="d-md-flex w-100 justify-content-between align-items-center">
                    <div class="flex-grow-1 mb-3 mb-md-0">
                      <h5 class="mb-1 fw-bold text-success">
                        Python for Data Analysis
                      </h5>
                      <div class="training-meta text-muted small mb-2">
                        <span>
                          <i class="bi bi-person-fill"></i> Priya Singh
                        </span>
                        <span>
                          <i class="bi bi-star-fill text-warning"></i> Highly
                          Rated
                        </span>
                        <span>
                          <i class="bi bi-camera-video"></i> Self-Paced
                        </span>
                      </div>
                      <p class="mb-0 d-none d-sm-block">
                        Master libraries like Pandas, NumPy, and Matplotlib to
                        process and visualize data effectively.
                      </p>
                    </div>
                    <div class="ms-md-4">
                      <a href="#" class="btn btn-success">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="archived"
              role="tabpanel"
              aria-labelledby="archived-tab"
            >
              <div class="text-center p-5 border rounded bg-white">
                <h5 class="text-muted">No Archived Trainings</h5>
                <p>Past event recordings will be available here soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainings;
