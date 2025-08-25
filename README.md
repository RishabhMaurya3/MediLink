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



📁 Project Structure

├── mediLink/
│   ├── admin/
│   │   ├── node_modules/
│   │   ├── public/
│   │   │   └── index.html
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   │   └── ...
│   │   │   ├── components/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── context/
│   │   │   │   ├── AdminContext.jsx
│   │   │   │   ├── AppContext.jsx
│   │   │   │   └── DoctorContext.jsx
│   │   │   ├── pages/
│   │   │   │   ├── Admin/
│   │   │   │   │   ├── AddDoctor.jsx
│   │   │   │   │   ├── AllAppointments.jsx
│   │   │   │   │   ├── Dashboard.jsx
│   │   │   │   │   └── DoctorsList.jsx
│   │   │   │   ├── Doctor/
│   │   │   │   │   ├── DoctorAppointment.jsx
│   │   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   │   └── DoctorProfile.jsx
│   │   │   │   └── Login.jsx
│   │   │   ├── App.jsx
│   │   │   ├── index.css
│   │   │   └── main.jsx
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   ├── backend/
│   │   ├── config/
│   │   │   ├── cloudinary.js
│   │   │   └── mongodb.js
│   │   ├── controllers/
│   │   │   ├── adminController.js
│   │   │   ├── doctorController.js
│   │   │   └── userController.js
│   │   ├── middlewares/
│   │   │   ├── authAdmin.js
│   │   │   ├── authDoctor.js
│   │   │   ├── authUser.js
│   │   │   └── multer.js
│   │   ├── models/
│   │   │   ├── appointmentModel.js
│   │   │   ├── doctorModel.js
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   ├── adminRoute.js
│   │   │   ├── doctorRoute.js
│   │   │   └── userRoute.js
│   │   ├── uploads/
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── server.js
│   │
│   ├── frontend/
│   │   ├── node_modules/
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   └── ...
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   │   └── dp.svg
│   │   │   ├── components/
│   │   │   │   ├── Banner.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── RelatedDoctors.jsx
│   │   │   │   ├── SpecialityMenu.jsx
│   │   │   │   ├── TopDoctors.jsx
│   │   │   │   └── ...
│   │   │   ├── context/
│   │   │   │   └── AppContext.js
│   │   │   ├── pages/
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Appointment.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Doctor.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── MyAppointments.jsx
│   │   │   │   └── MyProfile.jsx
│   │   │   ├── App.jsx
│   │   │   ├── index.css
│   │   │   └── main.jsx
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   └── vite.config.js
│   │
│   ├── .gitignore
│   ├── package.json
│   └── README.md




