# Playwright OrangeHRM Automation Framework

## Project Overview

This repository contains an end-to-end UI automation framework built using Playwright with JavaScript for the OrangeHRM application.

The framework follows the **Page Object Model (POM)** design pattern and incorporates reusable fixtures, centralized test data management, and GitHub Actions for Continuous Integration (CI).

It automates key business workflows such as authentication, dashboard validation, employee management, and leave management while following industry-standard automation practices.

## Tech Stack

| Category | Technology |
|----------|------------|
| Programming Language | JavaScript |
| Automation Tool | Playwright |
| Design Pattern | Page Object Model (POM) |
| Test Runner | Playwright Test |
| Version Control | Git |
| Repository | GitHub |
| CI/CD | GitHub Actions |
| IDE | Visual Studio Code |
| Reporting | Playwright HTML Report |

## Supported Browsers

- Chromium
- Firefox
- WebKit

## Project Structure

```text
playwright-orangehrm-automation-framework
│
├── .github/
│   └── workflows/
├── fixtures/
├── pages/
├── test-data/
├── tests/
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Automated Test Coverage

### Login
- Valid Login
- Invalid Login
- Required Field Validation

### Dashboard
- Dashboard Page Verification
- Quick Launch Navigation
- Side Menu Verification
- Profile Menu Verification

### Employee Management (PIM)
- Add Employee
- Search Employee
- Edit Employee Personal Details
- Delete Employee

### Leave Management
- Add Leave Entitlement
- Apply Leave

## Framework Design

The framework is designed with maintainability, reusability, and scalability in mind.

### Key Design Principles

- Page Object Model (POM) for better code organization and maintainability
- Custom Playwright fixtures for reusable page initialization and login setup
- Centralized test data management using dedicated test-data files
- Reusable page methods to reduce code duplication
- Dynamic test data generation for employee creation
- Cross-browser execution using Playwright projects
- HTML reporting for test execution results
- GitHub Actions workflow for Continuous Integration (CI)

## Installation

Clone the repository:

```bash
git clone https://github.com/mariyastellamca-crypto/playwright-orangehrm-automation-framework.git
```

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

View the HTML report:

```bash
npx playwright show-report
```

## Test Reports

The framework uses the built-in Playwright HTML Reporter to generate detailed execution reports.

The report includes:

- Test execution summary
- Passed and failed test details
- Error stack traces
- Screenshots (when configured)
- Execution duration

## Continuous Integration

GitHub Actions is configured to execute the Playwright automation suite automatically.

The workflow includes:

- Installing project dependencies
- Installing Playwright browsers
- Executing the test suite
- Publishing the Playwright HTML report as an artifact

## Future Enhancements

- API automation using Playwright APIRequestContext
- Environment-based configuration
- Data-driven testing using external files
- Azure DevOps pipeline integration
- Allure reporting

## Author

**Anantha Mariya Stella A**

QA Test Lead | Playwright | JavaScript | UI Automation | Manual Testing