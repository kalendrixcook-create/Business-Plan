// Kalendrix Consulting Services — site behavior

// Site settings: fill these in once they exist.
// CONTACT_EMAIL: the business inbox the contact form sends to (shown on the page when set).
// SCHEDULING_URL: a Calendly (or similar) link; "Book a Discovery Call" buttons open it when set.
const CONTACT_EMAIL = "";
const SCHEDULING_URL = "";
const PHONE_DISPLAY = "(254) 768-3767";

// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  nav.classList.toggle("open", !open);
});

nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("open");
  }
});

// Scheduling link
if (SCHEDULING_URL) {
  document.querySelectorAll(".js-discovery").forEach((a) => {
    a.href = SCHEDULING_URL;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// Email row
if (CONTACT_EMAIL) {
  document.querySelector(".js-email-row").hidden = false;
  const link = document.querySelector(".js-email-link");
  link.href = "mailto:" + CONTACT_EMAIL;
  link.textContent = CONTACT_EMAIL;
}

// Contact form: validates, then opens the visitor's email client with the message filled in.
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.classList.remove("error");

  let firstInvalid = null;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.value.trim() !== "" && field.checkValidity();
    field.classList.toggle("invalid", !ok);
    field.setAttribute("aria-invalid", String(!ok));
    if (!ok && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    status.textContent = "Please fill in your name, a valid email, and a short message.";
    status.classList.add("error");
    firstInvalid.focus();
    return;
  }

  if (!CONTACT_EMAIL) {
    status.textContent = `Our email inbox is being set up. Please call ${PHONE_DISPLAY} to book your discovery call.`;
    return;
  }

  const data = new FormData(form);
  const subject = `Discovery call request: ${data.get("service")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Company: ${data.get("company") || "(not provided)"}`,
    `Email: ${data.get("email")}`,
    `Interested in: ${data.get("service")}`,
    "",
    data.get("message"),
  ].join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Opening your email app. If nothing happens, email us directly at " + CONTACT_EMAIL + ".";
});

document.getElementById("year").textContent = new Date().getFullYear();
