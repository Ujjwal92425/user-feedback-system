# User Feedback System

A full-stack application to collect and manage user feedback.

##  Technologies Used

- **Frontend**: React (Vite), Formik, Yup
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## 🗂 Folder Structure

![image](https://github.com/user-attachments/assets/b481ae28-a14e-4503-82ac-e063e044e918)



---

##  How to Run This Project Locally

###  Prerequisites

Make sure you have:
- Node.js installed
- MongoDB installed and running locally (default port: `27017`)

---

### 🔧 Backend Setup

```bash
cd backend
npm install

Create a .env file in the backend folder:
PORT=5000
MONGO_URI=mongodb://localhost:27017/feedbackDB

Start the backend server:
node server.js

Server will run at:
http://localhost:5000

 Frontend Setup
cd Frontend_Feedback
npm install
npm run dev

Frontend will run at:
http://localhost:5173

 Features
Submit feedback (with validation)

Feedback form built using Formik and Yup

See all submitted feedback in a dashboard

Filter by category: Bug Report, Suggestion, Feature Request

Sort by date: Newest or Oldest

Responsive layout (mobile + desktop)

 API Endpoints
| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| POST   | /api/feedback | Submit feedback          |
| GET    | /api/feedback | Get all feedback entries |

 Notes
All code is written from scratch for academic purposes.

Frontend components are located in: Frontend_Feedback/src/components/

Form component: Form.jsx

Dashboard component: Dashboard.jsx


 Author
Made by ["Ujjwal Kumar"]
For assignment only.
```
Snaps

![image](https://github.com/user-attachments/assets/208f2f28-eeb0-419e-b189-87372be81718)


![image](https://github.com/user-attachments/assets/f66fd18f-1496-450a-bcc0-d5f10b1cb835)
![image](https://github.com/user-attachments/assets/28a69da2-af46-434a-a467-7934ea3c0c6a)


