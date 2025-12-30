import React from 'react';
import Features from '../../components/Features';
import { Link } from 'react-router';
import { LucideArrowLeft } from 'lucide-react';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen grid grid-cols-2 gap-5">
                <div className="">
            <div className="text-start space-y-1 my-5 mt-5">
                <h1 className='text-4xl font-bold text-white'>Welcome To Cyro</h1>
                <p className='text-white font-bold'>Where teams turn ideas into progress.</p>
                <p className='text-white'>a modern project management and issue-tracking platform designed to help teams plan, track, and deliver work with confidence. Inspired by agile workflows, Cyro provides intuitive boards, real-time collaboration, and role-based dashboards that give every team member clear visibility into progress.</p>
            </div>
            <div className="text-left">
                <Link><button className='btn bg-emerald-600 mb-5'><LucideArrowLeft></LucideArrowLeft>Get Started</button></Link>
            </div>
            <div className="">
                <Features></Features>
            </div>
            </div>
            <div className="grid grid-rows-12 gap-5">
                <div className="row-span-5">
                    <div className="mt-5">
                <img className='rounded-xl h-80' src="https://i.ibb.co.com/N2Zf856M/Screenshot-2025-12-30-214356.png" alt="" />
            </div>
                </div>
                <div className="bg-primary row-span-7"><h1>secondery</h1></div>
            </div>
            </div>
        </div>
    );
};

export default Home;