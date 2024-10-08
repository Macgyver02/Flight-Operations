# Flight Operations


![License](https://img.shields.io/github/license/Macgyver02/Flight-Operations)
![Version](https://img.shields.io/github/package-json/v/Macgyver02/Flight-Operations)
![Build Status](https://img.shields.io/github/actions/workflow/status/Macgyver02/Flight-Operations/ci.yml)
![Issues](https://img.shields.io/github/issues/Macgyver02/Flight-Operations)
![Contributors](https://img.shields.io/github/contributors/Macgyver02/Flight-Operations)
![Last Commit](https://img.shields.io/github/last-commit/Macgyver02/Flight-Operations)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
  - [Endpoints](#endpoints)
  - [Error Handling](#error-handling)
- [Testing](#testing)
- [CI/CD Integration](#cicd-integration)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)

## Introduction

Flight Operations is a scalable, microservices-based flight management system designed for airlines, air traffic controllers, and ground staff to manage operations, such as flight scheduling, crew assignments, aircraft tracking, and airport logistics. This system is built to ensure smooth and efficient management of all facets of flight operations.

## Features

- **Flight Scheduling:** Manage and optimize flight schedules across various time zones.
- **Crew Management:** Assign flight crew and handle scheduling conflicts automatically.
- **Real-Time Aircraft Tracking:** Monitor flights in real time with integrated aircraft tracking services.
- **Ground Operations:** Oversee airport operations including baggage handling, fuel management, and maintenance schedules.
- **Flight Status Notifications:** Real-time alerts and notifications for flight changes.
- **Admin Dashboard:** A role-based admin panel to manage users, flight operations, and notifications.

## Tech Stack

**Backend:**

- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **PostgreSQL** (Relational database)
- **Redis** (Caching)
- **RabbitMQ** (Message queue for async tasks)
- **RESTful API** (for external communication)
  
**Frontend:**

- **React.js** (User Interface)
- **Redux** (State Management)
- **Tailwind CSS** (UI Styling)

**DevOps:**

- **Docker** (Containerization)
- **Kubernetes** (Container Orchestration)
- **Jenkins** (CI/CD)
- **AWS** (Cloud infrastructure, including EC2, S3, and RDS)

## Architecture

Flight Operations is structured with a microservices architecture to ensure high scalability, modularity, and fault tolerance. Services are decoupled and communicate either via HTTP/REST or message queues (RabbitMQ).

- **Flight Service:** Manages flight schedules, real-time availability, and routes.
- **Crew Service:** Manages crew availability, assignment, and scheduling.
- **Operations Service:** Handles ground operations, including aircraft maintenance, fuel management, and airport logistics.
- **Tracking Service:** Integrates with third-party services to monitor real-time flight progress and aircraft status.
- **Notification Service:** Sends real-time alerts and updates via email/SMS regarding flight status and crew scheduling.

![System Architecture](https://github.com/Macgyver02/Flight-Operations/docs/architecture.png)

## Installation

### Prerequisites

- **Node.js** (v14.x or higher)
- **PostgreSQL** (v12.x or higher)
- **Redis** (optional for caching)
- **RabbitMQ** (optional for async tasks)
- **Docker** (optional for containerization)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Macgyver02/Flight-Operations.git
    cd Flight-Operations
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up PostgreSQL**:

    Run PostgreSQL locally or configure it to connect to a cloud instance. Create a new database for the service:

    ```bash
    createdb flight_operations
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

## Configuration

Create a `.env` file in the root directory to configure environment variables:

```bash
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=flight_operations
DB_USER=yourusername
DB_PASS=yourpassword
JWT_SECRET=<your-jwt-secret>
REDIS_URL=redis://localhost:6379
RABBITMQ_URL=amqp://localhost
NOTIFICATION_API_KEY=<your-notification-api-key>
```

## API Documentation

The API is versioned under `/api/v1`. Here are some core API endpoints:

### Authentication

- **POST /api/v1/auth/login:** User login and token issuance.
- **POST /api/v1/auth/register:** Register a new user.

### Endpoints

- **GET /api/v1/flights/search:** Search available flights and schedules.
- **POST /api/v1/crew/assign:** Assign crew members to specific flights.
- **GET /api/v1/operations/status/:flightId:** Get real-time flight status and airport operations.
- **POST /api/v1/flights/cancel:** Cancel an existing flight schedule.

### Error Handling

Standard error response structure:

```json
{
  "error": true,
  "message": "Invalid input",
  "statusCode": 400
}
```

Errors are categorized using HTTP status codes, with 4xx for client errors and 5xx for server-side issues.

## Testing

This project uses **Jest** and **Supertest** for unit and integration testing.

1. **Run unit tests:**

    ```bash
    npm test
    ```

2. **Run integration tests:**

    ```bash
    npm run test:integration
    ```

Tests cover all API endpoints, business logic, and error handling. We aim for a minimum of 90% code coverage.

## CI/CD Integration

This project uses Jenkins for continuous integration and delivery. The Jenkins pipeline automates testing and deployment to AWS.

- **Build:** Triggered on commits or pull requests.
- **Test:** Automatically runs unit and integration tests.
- **Deploy:** Deploys to AWS ECS for both staging and production environments.

Check the `.jenkinsfile` for pipeline configuration details.

## Contributing

We follow **Gitflow** for managing branches. All feature development is done in branches, and pull requests must be reviewed and approved before merging.

### Steps to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Open a pull request.

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Roadmap

- **Phase 1:** Complete the flight scheduling, real-time tracking, and crew management modules.
- **Phase 2:** Implement advanced analytics for flight performance and operational efficiency.
- **Phase 3:** Integrate with external flight data providers for global tracking.
- **Phase 4:** Develop a mobile application for real-time updates and notifications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```

### Summary:
- **Complete Structure:** This README includes details for professional developers, covering architecture, API documentation, configuration, CI/CD, and more.
- **API Documentation:** Provides a clear breakdown of the available endpoints and how to handle errors.
- **Tech Stack & Features:** Clear explanation of the technologies used and the features provided by the system.
