import React from 'react';
import axiosInstance from '../utils/axiosInterceptor';

export const TestInterceptor = () => {
    
    const testServerError = async () => {
        try {
            const response = await axiosInstance.get('/NonExistentEndpoint');
            console.log('Response after error:', response);
            
            if (response.isError) {
                console.log('Error handled by interceptor, continuing...');
            } else {
                console.log('Normal response:', response.data);
            }
        } catch (error) {
            console.log('This should not happen anymore:', error);
        }
    };

    const testNetworkError = async () => {
        try {
            const response = await axiosInstance.get('http://fake-url-that-does-not-exist.com/api/test');
            console.log('Response after network error:', response);
            
            if (response.isError) {
                console.log('Network error handled, app continues to run');
            }
        } catch (error) {
            console.log('This should not happen anymore:', error);
        }
    };

    const testTimeout = async () => {
        try {
            const response = await axiosInstance.get('/Cars', { timeout: 1 }); // 1ms timeout
            console.log('Response after timeout:', response);
            
            if (response.isError) {
                console.log('Timeout error handled, screen did not crash');
            }
        } catch (error) {
            console.log('This should not happen anymore:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>בדיקת Axios Interceptor</h3>
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', maxWidth: '300px' }}>
                <button onClick={testServerError} style={{ padding: '10px' }}>
                    בדיקת שגיאת שרת (500)
                </button>
                <button onClick={testNetworkError} style={{ padding: '10px' }}>
                    בדיקת שגיאת רשת
                </button>
                <button onClick={testTimeout} style={{ padding: '10px' }}>
                    בדיקת Timeout
                </button>
            </div>
        </div>
    );
};
