# CarRental-Pro 🚗

Modern car rental management system built with React and Redux. A comprehensive platform for managing vehicle inventory, user authentication, booking system, and administrative operations.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

## 🎯 Project Overview

CarRental-Pro is a full-stack car rental management system designed for modern rental businesses. The platform provides comprehensive tools for inventory management, customer relations, booking operations, and administrative oversight.

### Key Features

- 🔐 **User Authentication** - Secure login/registration system
- 🚙 **Vehicle Management** - Complete inventory control with detailed specifications
- 📅 **Booking System** - Real-time availability and reservation management  
- 👥 **User Management** - Customer profiles and rental history
- 📊 **Admin Dashboard** - Comprehensive management tools for operators
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🔄 **Real-time Updates** - Live data synchronization
- 🚨 **Error Handling** - Robust error management with user-friendly alerts

## 🛠️ Tech Stack

**Frontend:**
- **React 18** - Modern UI library with hooks
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Material-UI** - Component library
- **Bootstrap** - Responsive framework
- **Axios** - HTTP client with interceptors
- **SweetAlert2** - Enhanced user notifications

**Development:**
- **ES6+** - Modern JavaScript features
- **Custom Hooks** - Reusable logic components
- **Styled Components** - Dynamic styling

## 📁 Project Structure

```
src/
├── project/
│   ├── Components/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Login.jsx             # Authentication
│   │   ├── Register.jsx          # User registration
│   │   ├── Cars.jsx              # Vehicle catalog
│   │   ├── CarDetails.jsx        # Individual car details
│   │   ├── Lend.jsx              # Rental process
│   │   ├── Manager.jsx           # Admin panel
│   │   └── ManagerSet/           # Admin management tools
│   ├── Data-Redux/
│   │   ├── store.js              # Redux store configuration
│   │   ├── reducer.jsx           # State reducers
│   │   └── api.js                # API endpoints
│   ├── routing/
│   │   ├── Routing.jsx           # Route definitions
│   │   └── Nav.jsx               # Navigation component
│   └── utils/
│       └── axiosInterceptor.js   # HTTP error handling
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 14.0 or higher
- **npm** or **yarn**
- **Modern web browser**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ester-bloch/DriveEasy-System-react.git
cd DriveEasy-System-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server with hot reload |
| `npm test` | Launches test runner in interactive mode |
| `npm run build` | Creates production build |
| `npm run eject` | ⚠️ One-way operation to customize configuration |

## 🎨 Features in Detail

### User Interface
- Clean, modern design with Material-UI components
- Responsive layout for all device sizes
- Intuitive navigation and user experience
- Real-time feedback and loading states

### Vehicle Management
- Comprehensive car inventory with detailed specifications
- Advanced filtering and search capabilities
- Image gallery and detailed descriptions
- Availability tracking and status updates

### Booking System
- Real-time availability checking
- Streamlined reservation process
- Booking history and management
- Automated confirmations and notifications

### Administrative Tools
- Complete dashboard for rental operations
- User management and permissions
- Analytics and reporting features
- System configuration and settings

## 🔧 Configuration

### API Configuration
Update the base URL in `src/project/utils/axiosInterceptor.js`:
```javascript
baseURL: 'https://your-api-url.com/api'
```

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_ENV=development
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support and questions:
- Create an [Issue](https://github.com/ester-bloch/DriveEasy-System-react/issues)
- Contact: [esterbloch846@gmail.com]

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- UI components by [Material-UI](https://mui.com/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)

---

**CarRental-Pro** - Driving the future of rental management 🚗✨
