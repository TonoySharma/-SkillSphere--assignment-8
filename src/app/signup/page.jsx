import RegisterPage from '@/components/signUp/SignUp';
import React from 'react';

export const metadata = {
  title: "Register | SkillSphere",
  description:
    "Create your SkillSphere account and start learning from top courses. Join now to enhance your skills and grow your career.",
};

const page = () => {
  return (
    <div>
          <RegisterPage></RegisterPage>
    </div>
  );
};

export default page;