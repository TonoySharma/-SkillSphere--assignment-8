import LoginPage from '@/components/logIn/LogIn';
import React from 'react';

export const metadata = {
  title: "Login | SkillSphere",
  description:
    "Login to your SkillSphere account to access your courses, track progress, and continue learning anytime.",
};

const page = () => {
    return (
        <div>
            <LoginPage></LoginPage>
        </div>
    );
};

export default page;