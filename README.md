# MediLink 🩺

MediLink is a full-stack medical appointment booking platform designed to streamline interactions between patients, doctors, and administrators.
Built with the MERN stack, it enables online consultations, doctor discovery, real-time appointment tracking, and admin-level controls.

## 🚀 Features

### 👤 Patient Portal
- Browse doctors by specialization and fee
- Book appointments with preferred doctors
- Secure online payments via Razorpay
- Track appointment status in real-time

### 🩺 Doctor Dashboard
- Approve or reject patient appointment requests
- View schedule and patient list
- Track earnings and history

### 🔐 Admin Panel
- Add and manage doctor accounts
- Cancel or reschedule appointments
- Monitor doctor earnings and activity

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** jwt
- **Payments:** Razorpay
- **Cloud Storage:** Cloudinary

## 📁 Project Structure

├── medilink/
│
│ ├── admin/ # Admin dashboard (React + Vite)
│ │ ├── public/
│ │ │ └── index.html
│ │ ├── src/
│ │ │ ├── assets/ # Static assets (icons, images, etc.)
│ │ │ ├── components/ # Reusable components for Admin
│ │ │ │ ├── Navbar.jsx
│ │ │ │ └── Sidebar.jsx
│ │ │ ├── context/ # React Context API
│ │ │ │ ├── AdminContext.jsx
│ │ │ │ ├── AppContext.jsx
│ │ │ │ └── DoctorContext.jsx
│ │ │ ├── pages/
│ │ │ │ ├── Admin/ # Admin pages
│ │ │ │ │ ├── AddDoctor.jsx
│ │ │ │ │ ├── AllAppointments.jsx
│ │ │ │ │ ├── Dashboard.jsx
│ │ │ │ │ └── DoctorsList.jsx
│ │ │ │ ├── Doctor/ # Doctor pages (inside admin panel)
│ │ │ │ │ ├── DoctorAppointment.jsx
│ │ │ │ │ ├── DoctorDashboard.jsx
│ │ │ │ │ └── DoctorProfile.jsx
│ │ │ │ └── Login.jsx # Admin/Doctor login page
│ │ │ ├── App.jsx # App root component
│ │ │ ├── index.css # Global styles
│ │ │ └── main.jsx # React entry point
│ │ ├── .env
│ │ ├── package.json
│ │ └── vite.config.js
│
│ ├── backend/ # Node.js + Express backend
│ │ ├── config/ # Configuration files
│ │ │ ├── cloudinary.js
│ │ │ └── mongodb.js
│ │ ├── controllers/ # Controllers for APIs
│ │ │ ├── adminController.js
│ │ │ ├── doctorController.js
│ │ │ └── userController.js
│ │ ├── middlewares/ # Middleware for authentication & uploads
│ │ │ ├── authAdmin.js
│ │ │ ├── authDoctor.js
│ │ │ ├── authUser.js
│ │ │ └── multer.js
│ │ ├── models/ # Mongoose models
│ │ │ ├── appointmentModel.js
│ │ │ ├── doctorModel.js
│ │ │ └── userModel.js
│ │ ├── routes/ # Express routes
│ │ │ ├── adminRoute.js
│ │ │ ├── doctorRoute.js
│ │ │ └── userRoute.js
│ │ ├── uploads/ # Uploaded files (images, documents, etc.)
│ │ ├── server.js # Main server entry point
│ │ ├── .env
│ │ └── package.json
│
│ ├── frontend/ # Client-side (React + Vite + Tailwind)
│ │ ├── public/
│ │ │ └── index.html
│ │ ├── src/
│ │ │ ├── assets/ # Static assets
│ │ │ │ └── dp.svg
│ │ │ ├── components/ # UI Components
│ │ │ │ ├── Banner.jsx
│ │ │ │ ├── Footer.jsx
│ │ │ │ ├── Header.jsx
│ │ │ │ ├── Navbar.jsx
│ │ │ │ ├── RelatedDoctors.jsx
│ │ │ │ ├── SpecialityMenu.jsx
│ │ │ │ ├── TopDoctors.jsx
│ │ │ │ └── ... (other UI components)
│ │ │ ├── context/ # Global Context
│ │ │ │ └── AppContext.js
│ │ │ ├── pages/ # Application pages
│ │ │ │ ├── About.jsx
│ │ │ │ ├── Appointment.jsx
│ │ │ │ ├── Contact.jsx
│ │ │ │ ├── Doctor.jsx
│ │ │ │ ├── Home.jsx
│ │ │ │ ├── Login.jsx
│ │ │ │ ├── MyAppointments.jsx
│ │ │ │ └── MyProfile.jsx
│ │ │ ├── App.jsx # App root
│ │ │ ├── index.css # Global styles
│ │ │ └── main.jsx # React entry point
│ │ ├── .env
│ │ ├── package.json
│ │ ├── tailwind.config.js
│ │ └── vite.config.js
│
│ ├── .gitignore
│ ├── package.json # Root package.json
│ └── README.md

