import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

export default function Achievements() {
    const achievements = [
        {
            date: '2020-05-15',
            title: 'Победа в международной олимпиаде по математике',
            description: 'Наша команда заняла 1-е место среди 50 стран, продемонстрировав высокий уровень подготовки и знаний.',
            link: '/achievements/math-olympiad'
        },
        {
            date: '2021-09-10',
            title: 'Открытие нового научного центра',
            description: 'Мы открыли современный научный центр с передовым оборудованием для студентов и исследователей.',
            link: '/achievements/science-center'
        },
        {
            date: '2022-12-20',
            title: 'Успех в национальном конкурсе стартапов',
            description: 'Наши студенты представили инновационный проект и выиграли грант на развитие своей идеи.',
            link: '/achievements/startup-success'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Наши Достижения</h1>

                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <Link key={index} href={achievement.link}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 animate-slide-up cursor-pointer">
                                <p className="text-sm text-gray-500">{achievement.date}</p>
                                <h2 className="text-2xl font-semibold text-gray-900 mt-2 animate-fade-in">
                                    {achievement.title}
                                </h2>
                                <p className="text-gray-800 mt-2 animate-fade-in-delay">{achievement.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
