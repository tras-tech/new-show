document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const page = document.body.dataset.page || "about";
    const name = "Humble David Global Logistics Limited";
    const navigation = `
    <header class="site-header internal-header">
        <nav aria-label="Primary navigation">
            <a href="index.html#home" class="logo" aria-label="${name} home"><img src="Humble logo latest.png" alt="${name} logo"></a>
            <a class="brand-name" href="index.html#home">HUMBLE DAVID<span>GLOBAL LOGISTICS LIMITED</span></a>
            <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-menu"><span></span><span></span><span></span></button>
            <ul class="nav-links" id="primary-menu">
                <li><a href="index.html#home">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="cars.html">Vehicles</a></li>
                <li><a href="vehicle-log.html">Vehicle Log</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a class="nav-cta" href="contact.html#quote-form">Request a Quote</a></li>
            </ul>
        </nav>
    </header>`;

    const footer = `
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <img src="Humble logo latest.png" alt="${name} logo">
                <h3>${name}</h3>
                <p>Professional service, reliable communication and dependable coordination for vehicle sourcing, freight and logistics.</p>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <a href="index.html#home">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="cars.html">Vehicles</a>
                <a href="vehicle-log.html">Vehicle Log</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="footer-links">
                <h4>Services</h4>
                <a href="services.html">Global Logistics</a>
                <a href="services.html">Freight &amp; Shipping</a>
                <a href="services.html">Transportation</a>
                <a href="services.html">Import &amp; Export</a>
                <a href="services.html">Clearing &amp; Forwarding</a>
                <a href="services.html">Automobile Dealership</a>
            </div>
            <div class="footer-contact">
                <h4>Contact</h4>
                <p><a href="tel:+2348033969149">08033969149</a></p>
                <p><a href="https://wa.me/2348033969149" target="_blank" rel="noopener">+2348033969149</a></p>
                <p><a href="mailto:Humbledavidglobal@gmail.com">Humbledavidglobal@gmail.com</a></p>
                <p>537 Agege Motor Road, Oshodi-Isolo, Lagos State, Nigeria</p>
                <p>RC1609059</p>
            </div>
        </div>
        <div class="footer-bottom"><p>© 2026 ${name}. All Rights Reserved.</p></div>
    </footer>`;

    function aboutPage() {
        return `
        <main id="main-content">
            <section class="page-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">About</p>
                    <h1>Humble David Global Logistics Limited</h1>
                    <p>Global logistics, freight forwarding, transportation, import/export support and imported foreign vehicle solutions.</p>
                </div>
                <img src="CARGO.jpeg" alt="Global logistics and cargo operations">
            </section>
            <section class="page-section">
                <div class="about-intro-grid">
                    <div class="card-panel">
                        <p class="eyebrow gold">Company Overview</p>
                        <h2>Professional movement for vehicles, goods and cargo.</h2>
                        <p>Humble David Global Logistics Limited provides logistics, freight, transportation, clearing &amp; forwarding, import/export and imported foreign vehicle solutions. Our service model is built around professional coordination, transparent communication and dependable support throughout the movement process.</p>
                        <p>We work with individuals and businesses that need practical support with vehicle sourcing, shipping coordination, documentation and reliable movement of cargo and imported vehicles.</p>
                    </div>
                    <div class="mini-card-stack">
                        <div class="mini-card"><span>Company</span><strong>Humble David Global Logistics Limited</strong></div>
                        <div class="mini-card"><span>RC</span><strong>RC1609059</strong></div>
                        <div class="mini-card"><span>Address</span><strong>537 Agege Motor Road, Oshodi-Isolo, Lagos State, Nigeria</strong></div>
                    </div>
                </div>
            </section>
        </main>`;
    }

    function servicesPage() {
        return `
        <main id="main-content">
            <section class="page-banner compact-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">Services</p>
                    <h1>Global logistics and vehicle support.</h1>
                    <p>Professional service for import/export support, vehicle sourcing, freight coordination and transport arrangements.</p>
                </div>
            </section>
            <section class="page-section">
                <div class="service-grid internal-service-grid">
                    <article class="service-card"><span class="service-count">01</span><h3>Global Logistics</h3><p>Professional coordination of international logistics and cargo movement.</p></article>
                    <article class="service-card"><span class="service-count">02</span><h3>Freight &amp; Shipping</h3><p>International freight and shipping solutions.</p></article>
                    <article class="service-card"><span class="service-count">03</span><h3>Transportation</h3><p>Reliable transportation and movement of vehicles and cargo.</p></article>
                    <article class="service-card"><span class="service-count">04</span><h3>Import &amp; Export</h3><p>Support for international trade and shipment coordination.</p></article>
                    <article class="service-card"><span class="service-count">05</span><h3>Clearing &amp; Forwarding</h3><p>Professional coordination of customs clearance and forwarding processes.</p></article>
                    <article class="service-card"><span class="service-count">06</span><h3>Automobile Dealership</h3><p>Imported foreign vehicles and vehicle sourcing solutions.</p></article>
                </div>
            </section>
        </main>`;
    }

    function teamPage() {
        return `
        <main id="main-content">
            <section class="page-banner compact-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">Leadership &amp; Team</p>
                    <h1>People behind the service.</h1>
                    <p>Experienced leadership and operational support guiding our logistics and vehicle sourcing work.</p>
                </div>
            </section>
            <section class="page-section">
                <div class="team-grid internal-team-grid">
                    <article class="team-card">
                        <img src="ceo.jpeg.jpeg" alt="Owosho Boluwaji David, Chief Executive Officer">
                        <div class="team-info"><h3>OWOSHO BOLUWAJI DAVID</h3><p>Chief Executive Officer</p></div>
                    </article>
                    <article class="team-card">
                        <img src="OWOSHO OLADUNNI AJOKE.jpeg" alt="Owosho Oladunni Ajoke, Director">
                        <div class="team-info"><h3>OWOSHO OLADUNNI AJOKE</h3><p>Director</p></div>
                    </article>
                    <article class="team-card">
                        <img src="AGBOOLA ABANIKANDA.jpeg" alt="Agboola Abanikanda, Field Manager">
                        <div class="team-info"><h3>AGBOOLA ABANIKANDA</h3><p>Field Manager</p></div>
                    </article>
                    <article class="team-card">
                        <img src="OLAITAN BOLATITO GANIYAT.jpeg" alt="Olaitan Bolatito Ganiyat, Sales Representative">
                        <div class="team-info"><h3>OLAITAN BOLATITO GANIYAT</h3><p>Sales Representative</p></div>
                    </article>
                </div>
            </section>
        </main>`;
    }

    function partnersPage() {
        return `
        <main id="main-content">
            <section class="page-banner compact-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">Our Partners</p>
                    <h1>Trusted commercial relationships.</h1>
                    <p>Our network supports reliable movement and practical coordination across key logistics and automobile activity.</p>
                </div>
            </section>
            <section class="page-section">
                <div class="partner-grid internal-partner-grid">
                    <figure class="partner-card"><img src="Our Partners.jpeg" alt="Humble David partner relationship image"></figure>
                    <figure class="partner-card"><img src="Our Partners 2.jpeg" alt="Humble David partnership image"></figure>
                    <figure class="partner-card"><img src="assets/images/Our Partners.jpeg" alt="Additional partner image"></figure>
                </div>
            </section>
        </main>`;
    }

    function contactPage() {
        return `
        <main id="main-content">
            <section class="page-banner compact-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">Contact</p>
                    <h1>Let’s talk about your shipment or vehicle requirement.</h1>
                    <p>Speak with Humble David Global Logistics Limited for logistics, freight and imported vehicle enquiries.</p>
                </div>
            </section>
            <section class="page-section">
                <div class="contact-layout">
                    <div class="contact-card">
                        <h3>Humble David Global Logistics Limited</h3>
                        <p><strong>Address:</strong> 537 Agege Motor Road, Oshodi-Isolo, Lagos State, Nigeria</p>
                        <p><strong>Phone:</strong> <a href="tel:+2348033969149">08033969149</a></p>
                        <p><strong>WhatsApp:</strong> <a href="https://wa.me/2348033969149" target="_blank" rel="noopener">+2348033969149</a></p>
                        <p><strong>Email:</strong> <a href="mailto:Humbledavidglobal@gmail.com">Humbledavidglobal@gmail.com</a></p>
                        <p><strong>RC:</strong> RC1609059</p>
                    </div>
                    <form class="quote-form contact-form-panel" id="quote-form">
                        <label>Full Name<input type="text" name="full_name" placeholder="Full name" required></label>
                        <label>Phone/WhatsApp<input type="tel" name="phone" placeholder="Phone or WhatsApp" required></label>
                        <label>Vehicle Make<input type="text" name="vehicle_make" placeholder="Vehicle make"></label>
                        <label>Model<input type="text" name="vehicle_model" placeholder="Vehicle model"></label>
                        <label>Preferred Year<input type="text" name="preferred_year" placeholder="Preferred year"></label>
                        <label>Budget<input type="text" name="budget" placeholder="Budget"></label>
                        <label>Preferred Specification<input type="text" name="preferred_specification" placeholder="Preferred specification"></label>
                        <label>Message<textarea name="message" placeholder="Tell us what you need" rows="5"></textarea></label>
                        <button class="btn btn-gold" type="submit">Submit Vehicle Request</button>
                    </form>
                </div>
            </section>
        </main>`;
    }

    function profilePage() {
        return `
        <main id="main-content">
            <section class="page-banner compact-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">Company Profile</p>
                    <h1>Official company details.</h1>
                    <p>Humble David Global Logistics Limited provides logistics, freight, transportation and imported vehicle solutions.</p>
                </div>
            </section>
            <section class="page-section">
                <div class="profile-layout">
                    <div class="card-panel">
                        <p class="eyebrow gold">Company Information</p>
                        <h2>Humble David Global Logistics Limited</h2>
                        <ul class="profile-list">
                            <li><strong>Company:</strong> Humble David Global Logistics Limited</li>
                            <li><strong>RC:</strong> RC1609059</li>
                            <li><strong>Address:</strong> 537 Agege Motor Road, Oshodi-Isolo, Lagos State, Nigeria</li>
                            <li><strong>Phone:</strong> <a href="tel:+2348033969149">08033969149</a></li>
                            <li><strong>WhatsApp:</strong> <a href="https://wa.me/2348033969149" target="_blank" rel="noopener">+2348033969149</a></li>
                            <li><strong>Email:</strong> <a href="mailto:Humbledavidglobal@gmail.com">Humbledavidglobal@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="card-panel">
                        <p class="eyebrow gold">Scope</p>
                        <h2>Logistics, trade and imported vehicles.</h2>
                        <p>We support practical movement of goods and vehicles through professional logistics coordination, international shipping support, clearing and forwarding, and imported automobile sourcing.</p>
                    </div>
                </div>
            </section>
        </main>`;
    }

    function portPage() {
        return `
        <main id="main-content">
            <section class="page-banner compact-banner">
                <div class="page-banner-content">
                    <p class="eyebrow gold">Port &amp; Cargo</p>
                    <h1>From port to destination.</h1>
                    <p>Container and port-arrival records for imported vehicles handled through our process.</p>
                </div>
            </section>
            <section class="page-section">
                <div id="port-gallery" class="port-gallery page-port-gallery"></div>
            </section>
        </main>`;
    }

    function defaultPage() {
        return aboutPage();
    }

    const pages = {
        about: aboutPage,
        services: servicesPage,
        team: teamPage,
        partners: partnersPage,
        contact: contactPage,
        profile: profilePage,
        port: portPage
    };

    document.body.innerHTML = `${navigation}${pages[page] ? pages[page]() : defaultPage()}${footer}`;

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const open = !navLinks.classList.contains("active");
            navLinks.classList.toggle("active", open);
            menuToggle.classList.toggle("active", open);
            menuToggle.setAttribute("aria-expanded", String(open));
        });
    }

    const portGallery = document.getElementById("port-gallery");
    if (portGallery && Array.isArray(window.vehicleLogEntries) && window.vehicleLogEntries.length) {
        portGallery.innerHTML = window.vehicleLogEntries.map(function (entry) {
            return `<figure class="gallery-card"><img src="${entry.image}" alt="${entry.name || entry.ref}" loading="lazy"><figcaption><h3>${entry.ref}</h3><p>${entry.description}</p></figcaption></figure>`;
        }).join("");
    }

    const quoteForm = document.getElementById("quote-form");
    if (quoteForm) {
        quoteForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const data = new FormData(quoteForm);
            const entries = [];
            data.forEach(function (value, key) {
                if (typeof value === "string" && value.trim()) {
                    entries.push(key + ": " + value.trim());
                }
            });
            const message = encodeURIComponent((entries.length ? entries.join("\n") : "I would like to request a quote.") + "\n\nHumble David Global Logistics Limited");
            window.open("https://wa.me/2348033969149?text=" + message, "_blank", "noopener,noreferrer");
        });
    }
});
