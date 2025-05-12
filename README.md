# API Template

A RESTful API template to be able to integrate your API with API HUB.

## Base URL

The API is available at:

- Development: `http://localhost:3005`

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd api-template
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Project

**Development Mode (with hot-reloading):**

```bash
pnpm run dev
```

The API will be available at `http://localhost:3005`. Nodemon will automatically restart the server when you make changes to the source code.

**Production Mode:**

1. Build the TypeScript code:

   ```bash
   pnpm run build
   ```

2. Start the server:
   ```bash
   pnpm start
   ```
   The API will be available at `http://localhost:3005`.

## Authentication

Requests to the API endpoints (prefixed with `/api`) require a Bearer token to be included in the request headers.

Use the `Authorization` header with the Bearer scheme to send your token:

```
Authorization: Bearer YOUR_TOKEN
```

Replace `YOUR_TOKEN` with your actual API token. The valid tokens are configured through the `API_KEYS` environment variable.

### Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
API_KEYS=your_token_here,another_token_here
```

You can add multiple tokens by separating them with commas. For development purposes, you can use the example tokens provided in `.env.example`.
