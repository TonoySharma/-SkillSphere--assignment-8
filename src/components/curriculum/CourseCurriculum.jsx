import { Accordion } from '@heroui/react';
import React from 'react';

const CourseCurriculum = () => {
    return (
        <div className=' bg-blue-200/15 p-8'>
            
                <div className='my-30 max-w-7xl mx-auto'>
                    <div>
                        <h1 className='text-4xl font-bold mb-10'>Course Curriculum</h1>
                    </div>

                    <Accordion allowsMultipleExpanded className="w-full">

                        {/* Module 1 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                 <p className='font-semibold text-2xl my-5'> HTML Basics</p>
                                    <Accordion.Indicator />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li>Introduction to HTML</li>
                                        <li>HTML Tags & Structure</li>
                                        <li>Forms & Inputs</li>
                                        <li>Semantic Elements</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 2 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                  <p className='font-semibold text-2xl my-5'> CSS Fundamentals</p>
                                    <Accordion.Indicator />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li>CSS Basics</li>
                                        <li>Flexbox & Grid</li>
                                        <li>Responsive Design</li>
                                        <li>Tailwind CSS Intro</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 3 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                   <p className='font-semibold text-2xl my-5'> JavaScript Essentials</p>
                                    <Accordion.Indicator />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li>Variables & Data Types</li>
                                        <li>Functions & Events</li>
                                        <li>DOM Manipulation</li>
                                        <li>ES6 Features</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 4 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                  <p className='font-semibold text-2xl my-5'>React Basics</p>
                                    <Accordion.Indicator />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li>Components & Props</li>
                                        <li>useState & useEffect</li>
                                        <li>Routing</li>
                                        <li>Project Structure</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 5 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                   <p className='font-semibold text-2xl my-5'> Final Project</p>
                                    <Accordion.Indicator />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li>Build a Full Website</li>
                                        <li>Authentication System</li>
                                        <li>Deploy Project</li>
                                        <li>Performance Optimization</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                    </Accordion>
                </div>
          
        </div>
    );
};

export default CourseCurriculum;