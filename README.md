# Bellcorp Event Management – Backend

Backend API for the Bellcorp Event Management Application.

Deployed on Render:
https://server-bellcrop-backend.onrender.com/

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Render (Deployment)

---

##  Project Structure

```
server/
│
├── models/
├── routes/
├── middleware/
├── server.js
├── package.json
└── .env
```

---

##  Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

 Never push `.env` to GitHub.

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/umaGannamani/server-bellcrop-backend.git
cd server
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm server
```

Server runs on:

```
http://localhost:5000
```

---

##  API Endpoints

###  Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

###  Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/events | Get all events |
| GET | /api/events/:id | Get single event |

---

###  Registrations

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/registrations/:eventId | Register for event |
| GET | /api/registrations/my-events | Get user registered events |
| DELETE | /api/registrations/:eventId | Cancel registration |

---

##  Seat Logic

- `capacity` → total seats
- `availableSeats` → remaining seats
- When user registers → `availableSeats--`
- When user cancels → `availableSeats++`
- If `availableSeats === 0` → Event is **Sold Out**

---

##  Deployment (Render)

1. Push code to GitHub
2. Create Web Service on Render
3. Add environment variables
4. Deploy

Live Backend URL:

```
https://server-bellcrop-backend.onrender.com/
```

---

##  Security

- JWT-based authentication
- Protected routes using middleware
- Environment variables for secrets
- `.env` file ignored via `.gitignore`

---

##  Author

Bellcorp Event Management Project
