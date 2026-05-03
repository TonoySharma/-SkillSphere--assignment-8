import ProfilePage from '@/components/profile/Profile';
import React from 'react';

export const metadata = {
  title: "My Profile Dashboard | SkillSphere",
  description:
    "Access your personal dashboard on SkillSphere. Manage profile details, view your courses, and track your learning progress.",
};

const page = () => {
  return (
    <div>
      <ProfilePage></ProfilePage>
    </div>
  );
};

export default page;