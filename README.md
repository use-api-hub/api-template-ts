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

Requests to the API endpoints (prefixed with `/api`) require an API key to be included in the request headers.

Use the `x-api-key` header to send your API key:

```
x-api-key: YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual API key. For development purposes, you can use the key `test_token` (defined in `src/middleware/apiKeyAuth.ts`).
