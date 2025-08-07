import axios from 'axios';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7256/api', 
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Axios Error:', error);
        
        if (error.code === 'ECONNABORTED') {
            Swal.fire({
                icon: 'error',
                title: 'שגיאה!',
                text: 'הבקשה לשרת נכשלה - זמן המתנה פג',
                confirmButtonText: 'אישור'
            });
        } else if (error.code === 'ERR_NETWORK' || !error.response) {
            Swal.fire({
                icon: 'error',
                title: 'שגיאת חיבור!',
                text: 'לא ניתן להתחבר לשרת. אנא בדוק את החיבור לאינטרנט ונסה שוב.',
                confirmButtonText: 'אישור'
            });
        } else if (error.response) {
            const status = error.response.status;
            
            switch (status) {
                case 400:
                    Swal.fire({
                        icon: 'warning',
                        title: 'בקשה שגויה',
                        text: 'הנתונים שנשלחו אינם תקינים',
                        confirmButtonText: 'אישור'
                    });
                    break;
                case 401:
                    Swal.fire({
                        icon: 'warning',
                        title: 'אין הרשאה',
                        text: 'יש להתחבר מחדש למערכת',
                        confirmButtonText: 'אישור'
                    });
                    break;
                case 403:
                    Swal.fire({
                        icon: 'error',
                        title: 'אין הרשאות',
                        text: 'אין לך הרשאה לביצוע פעולה זו',
                        confirmButtonText: 'אישור'
                    });
                    break;
                case 404:
                    Swal.fire({
                        icon: 'error',
                        title: 'לא נמצא',
                        text: 'המשאב המבוקש לא נמצא',
                        confirmButtonText: 'אישור'
                    });
                    break;
                case 500:
                    Swal.fire({
                        icon: 'error',
                        title: 'שגיאת שרת!',
                        text: 'אירעה שגיאה בשרת. אנא נסה שוב מאוחר יותר.',
                        confirmButtonText: 'אישור'
                    });
                    break;
                default:
                    Swal.fire({
                        icon: 'error',
                        title: 'שגיאה!',
                        text: `אירעה שגיאה בשרת (קוד: ${status})`,
                        confirmButtonText: 'אישור'
                    });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'שגיאה!',
                text: 'אירעה שגיאה לא צפויה. אנא נסה שוב.',
                confirmButtonText: 'אישור'
            });
        }
        
        return Promise.resolve({
            data: null,
            status: error.response?.status || 0,
            statusText: error.response?.statusText || 'Error',
            headers: {},
            config: error.config,
            isError: true,
            originalError: error
        });
    }
);

axiosInstance.interceptors.request.use(
    (config) => {
        console.log('Sending request to:', config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
