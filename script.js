document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector("nav");
  if (nav) {
    const updateNav = function () {
      nav.classList.toggle("nav-scrolled", window.scrollY > 20);
    };
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = !navLinks.classList.contains("active");
      navLinks.classList.toggle("active", isOpen);
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest("nav")) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const trackingForm = document.getElementById("tracking-form");
  const trackingStatus = document.getElementById("tracking-status");
  const trackingSteps = Array.from(document.querySelectorAll(".progress-steps span"));

  function setTrackingStatus(value) {
    if (!trackingStatus || !trackingSteps.length) return;
    if (!value || !value.trim()) {
      trackingStatus.textContent = "Awaiting shipment reference.";
      trackingSteps.forEach(function (item) { item.classList.remove("is-current"); });
      return;
    }

    trackingStatus.textContent = "Tracking reference: " + value.trim();
    trackingSteps.forEach(function (item, index) {
      item.classList.toggle("is-current", index === 0);
    });
  }

  if (trackingForm) {
    trackingForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const input = document.getElementById("tracking-number");
      if (input) setTrackingStatus(input.value);
    });
  }

  const fallbackInventory = [
    { id: "range-rover-sport", make: "Land Rover", model: "Range Rover Sport", year: "Not confirmed", price: 0, priceText: "Price on request", condition: "Imported premium SUV", location: "Lagos, Nigeria", images: ["Vehicle log/c 17.jpeg"], description: "Range Rover Sport recorded during original import handling and available on enquiry.", availability: "AVAILABLE", whatsapp: "2348033969149" },
    { id: "jaguar-xe-p250", make: "Jaguar", model: "XE P250", year: "Not confirmed", price: 0, priceText: "Price on request", condition: "Imported luxury sedan", location: "Lagos, Nigeria", images: ["Vehicle log/c 3.jpeg"], description: "Jaguar XE P250 documented during container arrival handling and available on enquiry.", availability: "AVAILABLE", whatsapp: "2348033969149" },
    { id: "mercedes-s-class", make: "Mercedes-Benz", model: "S-Class", year: "Not confirmed", price: 0, priceText: "Price on request", condition: "Imported luxury vehicle", location: "Lagos, Nigeria", images: ["Vehicle log/c 16.jpeg"], description: "Mercedes-Benz S-Class documentation available for current confirmation and pricing.", availability: "AVAILABLE", whatsapp: "2348033969149" },
    { id: "toyota-hiace", make: "Toyota", model: "Hiace", year: "Not confirmed", price: 0, priceText: "Price on request", condition: "Imported commercial vehicle", location: "Lagos, Nigeria", images: ["Vehicle log/c 5.jpeg"], description: "Toyota Hiace commercial vehicle noted in original container arrival documentation.", availability: "AVAILABLE", whatsapp: "2348033969149" }
  ];

  const inventory = Array.isArray(window.CAR_INVENTORY) && window.CAR_INVENTORY.length ? window.CAR_INVENTORY : fallbackInventory;
  const featuredCars = document.getElementById("featured-cars");

  function formatPrice(value) {
    const numeric = Number(value);
    if (Number.isFinite(numeric) && numeric > 0) {
      return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(numeric);
    }
    return value && value.priceText ? value.priceText : "Price on request";
  }

  function vehicleSpec(car) {
    const parts = [
      car.condition || "Condition available on request",
      car.year || "Year available on request",
      car.location || "Location available on request"
    ];
    return parts.join(" • ");
  }

  if (featuredCars) {
    featuredCars.innerHTML = inventory.slice(0, 4).map(function (car) {
      const sold = String(car.availability || "AVAILABLE").toUpperCase() === "SOLD";
      const image = Array.isArray(car.images) && car.images.length ? car.images[0] : "";
      return '<article class="vehicle-card">' +
        '<div class="vehicle-image"><img src="' + image + '" alt="' + (car.make || "Vehicle") + ' ' + (car.model || "") + '" loading="lazy"><span class="vehicle-status ' + (sold ? 'status-sold' : 'status-available') + '">' + (sold ? 'Sold' : 'Available') + '</span></div>' +
        '<div class="vehicle-content"><h3>' + (car.year || "Year") + ' ' + (car.make || "Vehicle") + ' ' + (car.model || "") + '</h3>' +
        '<p class="vehicle-price">' + formatPrice(car) + '</p>' +
        '<p class="vehicle-meta">' + vehicleSpec(car) + '</p>' +
        '<div class="vehicle-actions"><a href="vehicle-shipping.html">View Details</a><a href="https://wa.me/2348033969149?text=' + encodeURIComponent("Hello Humble David Global Logistics Limited, I am interested in the " + (car.year || "") + " " + (car.make || "") + " " + (car.model || "") + ".") + '" target="_blank" rel="noopener">WhatsApp</a></div>' +
      '</div></article>';
    }).join("");
  }

  const portGallery = document.getElementById("port-gallery");
  const portEntries = Array.isArray(window.vehicleLogEntries) ? window.vehicleLogEntries : [];
  if (portGallery) {
    const galleryItems = portEntries.length ? portEntries.slice(0, 8) : [
      { ref: "C1", image: "./Vehicle log/c 1.jpeg", name: "Multiple vehicles - Corvette C8 and Chrysler 300 visible", description: "Original container-arrival record showing multiple vehicles secured in a shipping container." },
      { ref: "C2", image: "./Vehicle log/c 2.jpeg", name: "Cadillac CTS - visible vehicle", description: "A Cadillac CTS is visible in a stacked container-arrival record." },
      { ref: "C3", image: "./Vehicle log/c 3.jpeg", name: "Jaguar XE P250 - visible vehicle", description: "A Jaguar XE P250 is visible in the original arrival photograph." },
      { ref: "C4", image: "./Vehicle log/c 4.jpeg", name: "Ford pickup truck - model verification required", description: "Ford pickup secured in container. Model confirmation is required through enquiry." },
      { ref: "C5", image: "./Vehicle log/c 5.jpeg", name: "Toyota Hiace van - visible vehicle", description: "Commercial van arrival documented during import handling." },
      { ref: "C6", image: "./Vehicle log/c 6.jpeg", name: "Mercedes-Benz S-Class - visible vehicle", description: "Luxury sedan documented during container handling." },
      { ref: "C7", image: "./Vehicle log/c 7.jpeg", name: "Lexus RX 350 - visible vehicle", description: "Premium SUV recorded in the shipping documentation." },
      { ref: "C8", image: "./Vehicle log/c 8.jpeg", name: "BMW i3 - visible vehicle", description: "BMW i3 visible in a container-arrival record." }
    ];

    portGallery.innerHTML = galleryItems.map(function (item) {
      return '<figure class="gallery-card"><img src="' + item.image + '" alt="' + (item.name || item.ref) + '" loading="lazy"><figcaption><h3>' + item.ref + '</h3><p>' + (item.description || item.name || 'Vehicle record documentation.') + '</p></figcaption></figure>';
    }).join("");
  }

  const quoteForms = document.querySelectorAll(".quote-form");
  quoteForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const entries = [];
      data.forEach(function (value, key) {
        if (typeof value === "string" && value.trim()) {
          entries.push(key + ": " + value.trim());
        }
      });
      const message = encodeURIComponent((entries.length ? entries.join("\n") : "I would like to request a quote.") + "\n\nHumble David Global Logistics Limited");
      window.open("https://wa.me/2348033969149?text=" + message, "_blank", "noopener,noreferrer");
    });
  });
});
