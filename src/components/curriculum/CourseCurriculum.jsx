import { Accordion } from '@heroui/react';
import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import FadeUp from '../FadeUp';

const CourseCurriculum = () => {
    return (
        <FadeUp>
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
                                    <Accordion.Indicator className="text-black" />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li className='flex items-center gap-2'><FaHandPointRight />Introduction to HTML</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />HTML Tags & Structure</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Forms & Inputs</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Semantic Elements</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 2 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                    <p className='font-semibold text-2xl my-5'> CSS Fundamentals</p>
                                    <Accordion.Indicator className="text-black" />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li className='flex items-center gap-2'><FaHandPointRight />CSS Basics</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Flexbox & Grid</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Responsive Design</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Tailwind CSS Intro</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 3 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                    <p className='font-semibold text-2xl my-5'> JavaScript Essentials</p>
                                    <Accordion.Indicator className="text-black" />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li className='flex items-center gap-2'><FaHandPointRight />Variables & Data Types</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Functions & Events</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />DOM Manipulation</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />ES6 Features</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 4 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                    <p className='font-semibold text-2xl my-5'>React Basics</p>
                                    <Accordion.Indicator className="text-black" />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li className='flex items-center gap-2'><FaHandPointRight />Components & Props</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />useState & useEffect</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Routing</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Project Structure</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                        {/* Module 5 */}
                        <Accordion.Item>
                            <Accordion.Heading>
                                <Accordion.Trigger>
                                    <p className='font-semibold text-2xl my-5'> Final Project</p>
                                    <Accordion.Indicator className="text-black" />
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body>
                                    <ul className="list-disc pl-5 space-y-1 font-semibold text-xl">
                                        <li className='flex items-center gap-2'><FaHandPointRight />Build a Full Website</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Authentication System</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Deploy Project</li>
                                        <li className='flex items-center gap-2'><FaHandPointRight />Performance Optimization</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>

                    </Accordion>
                </div>

            </div>
        </FadeUp>
    );
};

export default CourseCurriculum;