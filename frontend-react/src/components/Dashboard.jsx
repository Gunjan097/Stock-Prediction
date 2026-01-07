import React, { useEffect } from 'react'
import axiosInstance from '../axiosinstance';
const Dashboard = () => {

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const respone = await axiosInstance.get('/protected/');
                const data = await respone.data;
                console.log(data);
            }
            catch (error) {
                console.error('Error fetching protected data:', error);
            }
        }
        fetchProtectedData();
    }, [])


    return (
        <div>
            Dashboard Page - Protected Content
        </div>
    )
}

export default Dashboard
