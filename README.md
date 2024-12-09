# AgriTrack

AgriTrack is a crop management system built using the MERN stack (MongoDB, Express, React, Node.js) with **Next.js App Directory** for modern server-side rendering (SSR), client-side rendering (CSR), and API handling.

---

## Features

- **Crop Management**: Add, view, update, and delete crop information.
- **Field Management**: Organize and manage field details such as size, location, and associated crops.
- **Season Planning**: Track planting and harvesting schedules.
- **Reports**: Generate reports on yield, crop health, and production metrics.
- **User Authentication**: Secure user login and registration.

---

## Tech Stack

- **Frontend**: Next.js (App Directory structure).
- **Backend**: Node.js with Express.js (RESTful API).
- **Database**: MongoDB (NoSQL database for flexible data storage).
- **Hosting**: Vercel (Frontend).

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Git

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/don336/agri-track.git
   cd agri-track
   ```

2. **Set Up the Backend**

   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` folder with the following variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/agri-track
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env.local` file in the root directory with the following variables:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:3000/api
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

## API Endpoints

### Crop Management

- `POST /api/crops` - Add a new crop.
- `GET /api/crops` - Fetch all crops.
- `GET /api/crops/:id` - Fetch a single crop.
- `PUT /api/crops/:id` - Update crop details.
- `DELETE /api/crops/:id` - Delete a crop.

### Field Management

- `POST /api/fields` - Add a new field.
- `GET /api/fields` - Fetch all fields.
- `GET /api/fields/:id` - Fetch a single field.
- `PUT /api/fields/:id` - Update field details.
- `DELETE /api/fields/:id` - Delete a field.

### Season Planning

- `POST /api/seasons` - Add a seasonal plan.
- `GET /api/seasons` - Fetch all seasonal plans.
- `DELETE /api/seasons/:id` - Delete a seasonal plan.

### User Management

- `POST /api/users/register` - User registration.
- `POST /api/users/login` - User login.

---

## Database Models

### Crop Model

```js
const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  plantingDate: { type: Date, required: true },
  harvestDate: { type: Date },
  yield: { type: Number },
  field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
});

module.exports = mongoose.model("Crop", cropSchema);
```

### Field Model

```js
const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: Number },
});

module.exports = mongoose.model("Field", fieldSchema);
```

### User Model

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
```

---

## Future Enhancements

- Role-based access control (Admin/User).
- Graphical dashboards with charts and maps.
- Integration with weather APIs for season planning.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---
