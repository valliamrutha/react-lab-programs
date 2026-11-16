# Program 10: Express Middleware

Demonstrates the implementation of Express.js middleware types in a RESTful API:
1. **Application-level Middleware**: Global request logging and timestamp injection.
2. **Built-in Middleware**: `express.json()` and `express.urlencoded()`.
3. **Third-party Middleware**: `cors` and `morgan`.
4. **Route-specific Middleware**: Validation middleware for patient payload before reaching controller.
5. **404 Catch-All Middleware**: Handles unregistered routes.
6. **Error-Handling Middleware**: Centralized error management using 4-parameter `(err, req, res, next)` function.

## Endpoints

- `GET /api/v1/patients` - Fetch all patients (optional: `?ward=A`)
- `GET /api/v1/patients/:id` - Fetch single patient
- `POST /api/v1/patients` - Register a patient (validated)
- `PUT /api/v1/patients/:id` - Update patient details (validated)
- `DELETE /api/v1/patients/:id` - Remove patient

## Running Locally

```bash
npm install
npm start
```
