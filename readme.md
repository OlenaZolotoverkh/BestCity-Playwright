# BestCity Playwright Smoke Tests

This repository contains a small Playwright-based smoke test suite for the **BestCity** web application.

The goal of this project is to demonstrate a clean and maintainable approach to UI smoke testing, focusing on **business-critical content** rather than implementation details.

---

## 🔧 Tech Stack

- Playwright
- JavaScript
- Node.js

---

## 📂 Project Structure

BestCity-Playwright
├── steps
│ ├── home.steps.js
│ ├── navigation.steps.js
│ └── properties.steps.js
├── tests
│ ├── home.spec.js
│ └── properties.spec.js
├── playwright.config.js
├── package.json
└── README.md


### Structure explanation
- **steps/** – reusable UI actions and verifications (Page Object–like approach)
- **tests/** – test scenarios composed from reusable steps
- **tests are intentionally lightweight** and focused on smoke coverage

---

## 🧪 Test Coverage

### Home Page Smoke
- Hero section (value proposition)
- Featured Investment Opportunities (3 property cards)
- Blog preview section (Latest Insights)
- FAQ section presence

### Properties Flow Smoke
- Properties list page loads
- Navigation to Property Details
- Presence of core investment information:
    - Property Details section
    - Financial Overview
    - Token Information
    - CTAs (View 3D, Connect Wallet)

---

## ▶️ How to Run Tests

### Prerequisites
- Node.js 18+
- BestCity application running locally at:
### Structure explanation
- **steps/** – reusable UI actions and verifications (Page Object–like approach)
- **tests/** – test scenarios composed from reusable steps
- **tests are intentionally lightweight** and focused on smoke coverage

---

## 🧪 Test Coverage

### Home Page Smoke
- Hero section (value proposition)
- Featured Investment Opportunities (3 property cards)
- Blog preview section (Latest Insights)
- FAQ section presence

### Properties Flow Smoke
- Properties list page loads
- Navigation to Property Details
- Presence of core investment information:
    - Property Details section
    - Financial Overview
    - Token Information
    - CTAs (View 3D, Connect Wallet)

---

## ▶️ How to Run Tests

### Prerequisites
- Node.js 18+
- BestCity application running locally at:
  http://localhost:3000

### Install dependencies
```bash
npm install

### Run tests (headless)
npx playwright test

### Run tests with browser UI
npx playwright test --headed

### View HTML report
npx playwright show-report

## 📌 Disclaimer
This project was created as part of a technical assessment and uses a limited test scope by design.



