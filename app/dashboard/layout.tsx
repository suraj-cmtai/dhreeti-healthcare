import React from 'react';
import AdminHeader from '@/components/layout/AdminHeader';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AdminHeader />
            {children}
        </div>
    );
};

export default DashboardLayout;