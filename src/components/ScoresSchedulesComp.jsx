import React from "react";
import "../css/ComponentsCSS/ScoresScheduleComp.css";

function ScoresSchedulescomp() {
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-25-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-25"
            type="button"
            role="tab"
            aria-controls="pills-25"
            aria-selected="true"
          >
            Mar 25
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-26-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-26"
            type="button"
            role="tab"
            aria-controls="pills-26"
            aria-selected="false"
          >
            Mar 26
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-27-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-27"
            type="button"
            role="tab"
            aria-controls="pills-27"
            aria-selected="false"
          >
            Mar 27
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-28-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-28"
            type="button"
            role="tab"
            aria-controls="pills-28"
            aria-selected="false"
          >
            Mar 28
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-29-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-29"
            type="button"
            role="tab"
            aria-controls="pills-29"
            aria-selected="false"
          >
            Mar 29
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-25"
          role="tabpanel"
          aria-labelledby="pills-25-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-26"
          role="tabpanel"
          aria-labelledby="pills-26-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-27"
          role="tabpanel"
          aria-labelledby="pills-27-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-28"
          role="tabpanel"
          aria-labelledby="pills-28-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-29"
          role="tabpanel"
          aria-labelledby="pills-29-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default ScoresSchedulescomp;
