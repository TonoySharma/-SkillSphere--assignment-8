import AllCoursesPage from '@/components/allcourses/AllCourses';
import React from 'react';

export const metadata = {
  title: "All Courses | SkillSphere",
  description:
    "Explore all courses on SkillSphere. Discover top-rated tutorials, learn new skills, and advance your career with our complete course library.",
};

const page = () => {
    return (
        <div>
            <AllCoursesPage></AllCoursesPage>
        </div>
    );
};

export default page;