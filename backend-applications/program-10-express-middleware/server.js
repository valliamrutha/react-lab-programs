import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Third-party Middleware
app.use(cors());
app.use(morgan("dev"));

// 2. Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Application-Level Custom Middleware (Logger & Timestamp)
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`[${req.requestTime}] ${req.method} ${req.originalUrl}`);
  next();
});

// In-memory Patients Dataset
let patients = [
  { id: 1, name: "John Doe", age: 30, gender: "male", ward: "A" },
  { id: 2, name: "Jane Smith", age: 25, gender: "female", ward: "B" },
  { id: 3, name: "Alice Johnson", age: 40, gender: "female", ward: "C" },
];

// 4. Route-Specific Middleware: Validation
const validatePatient = (req, res, next) => {
  const { name, age, gender, ward } = req.body;
  if (!name || age === undefined || !gender || !ward) {
    const error = new Error("Validation Error: 'name', 'age', 'gender', and 'ward' are required.");
    error.status = 400;
    return next(error);
  }
  if (typeof age !== "number" || age <= 0) {
    const error = new Error("Validation Error: 'age' must be a positive number.");
    error.status = 400;
    return next(error);
  }
  next();
};

// Route-Specific Middleware: Sample Auth Header Check (optional check)
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Auth middleware executed. Authorization header:", authHeader || "None");
  next();
};

// --- Routes ---
app.get("/", (req, res) => {
  res.json({
    message: "Express Middleware API is running",
    endpoints: {
      getPatients: "GET /api/v1/patients",
      getPatientById: "GET /api/v1/patients/:id",
      createPatient: "POST /api/v1/patients",
      updatePatient: "PUT /api/v1/patients/:id",
      deletePatient: "DELETE /api/v1/patients/:id",
    },
  });
});

// GET /api/v1/patients (supports query: ?ward=A)
app.get("/api/v1/patients", authMiddleware, (req, res) => {
  const { ward } = req.query;
  let result = patients;
  if (ward) {
    result = patients.filter((p) => p.ward.toLowerCase() === ward.toLowerCase());
  }
  res.status(200).json({
    message: "Patients fetched successfully",
    count: result.length,
    data: result,
  });
});

// GET /api/v1/patients/:id
app.get("/api/v1/patients/:id", (req, res, next) => {
  const patient = patients.find((p) => p.id === Number(req.params.id));
  if (!patient) {
    const err = new Error(`Patient with ID ${req.params.id} not found.`);
    err.status = 404;
    return next(err);
  }
  res.status(200).json({ message: "Patient details fetched", data: patient });
});

// POST /api/v1/patients (uses validatePatient middleware)
app.post("/api/v1/patients", validatePatient, (req, res) => {
  const { name, age, gender, ward } = req.body;
  const newId = patients.length > 0 ? Math.max(...patients.map((p) => p.id)) + 1 : 1;
  const newPatient = { id: newId, name, age, gender, ward };
  patients.push(newPatient);
  res.status(201).json({
    message: "Patient registered successfully",
    data: newPatient,
  });
});

// PUT /api/v1/patients/:id (uses validatePatient middleware)
app.put("/api/v1/patients/:id", validatePatient, (req, res, next) => {
  const index = patients.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) {
    const err = new Error(`Patient with ID ${req.params.id} not found.`);
    err.status = 404;
    return next(err);
  }
  const { name, age, gender, ward } = req.body;
  patients[index] = { id: Number(req.params.id), name, age, gender, ward };
  res.status(200).json({
    message: "Patient updated successfully",
    data: patients[index],
  });
});

// DELETE /api/v1/patients/:id
app.delete("/api/v1/patients/:id", (req, res, next) => {
  const index = patients.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) {
    const err = new Error(`Patient with ID ${req.params.id} not found.`);
    err.status = 404;
    return next(err);
  }
  const deleted = patients.splice(index, 1)[0];
  res.status(200).json({
    message: "Patient removed successfully",
    data: deleted,
  });
});

// 5. 404 Route Not Found Middleware
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// 6. Error-Handling Middleware (4 parameters)
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error("Error occurred:", err.message);
  res.status(statusCode).json({
    error: true,
    status: statusCode,
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
