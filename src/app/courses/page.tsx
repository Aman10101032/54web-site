'use client'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';
import type { Metadata } from 'next'
import { useState } from 'react';
import styles from "../courses/Courses.module.scss";

export default function Courses() {
    const subjects = [
        { name: 'Математика', description: 'Изучайте алгебру, геометрию и другие разделы.' },
        { name: 'Физика', description: 'Углубленные курсы по классической и современной физике.' },
        { name: 'Химия', description: 'Откройте для себя мир химических реакций и соединений.' },
        { name: 'Биология', description: 'Изучите строение живых организмов и процессы в природе.' },
        { name: 'История', description: 'Познакомьтесь с важнейшими событиями мировой истории.' },
        { name: 'География', description: 'Исследуйте планету Земля и её природные особенности.' },
        { name: 'Информатика', description: 'Научитесь программировать и работать с алгоритмами.' },
        { name: 'Литература', description: 'Познакомьтесь с произведениями великих писателей.' },
        { name: 'Английский язык', description: 'Освойте иностранный язык для общения и работы.' },
        { name: 'Русский язык', description: 'Улучшите свои навыки письма и чтения.' },
        { name: 'Обществознание', description: 'Изучите основы права, экономики и социологии.' },
        { name: 'Музыка', description: 'Погрузитесь в мир музыкального искусства.' },
        { name: 'Искусство', description: 'Развивайте свои художественные навыки и креативность.' },
        { name: 'Физическая культура', description: 'Поддерживайте активный и здоровый образ жизни.' }
    ];

    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

    const handleStartClick = (subjectName: string) => {
        setSelectedSubject(subjectName);
    };

    const handleBackClick = () => {
        setSelectedSubject(null);
    };



    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto p-6 flex-grow">
                <section className="bg-white p-6 rounded-lg shadow-md mb-6 fadeIn">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 transition-transform transform translate-y-10 opacity-0 animate-slide-in">
                        Курсы
                    </h2>
                    <p className="text-gray-800 transition-transform transform translate-y-10 opacity-0 animate-slide-in">
                        Выберите интересующий вас предмет и начните обучение прямо сейчас!
                    </p>
                </section>

                {selectedSubject ? (
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Вы выбрали курс: {selectedSubject}
                        </h3>
                        <p className="mt-4 text-gray-700">
                            Здесь будет информация о выбранном курсе и классе.
                        </p>

                        <button
                            onClick={handleBackClick}
                            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Назад
                        </button>
                    </section>
                ) : (
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform transform translate-y-10 opacity-0 animate-slide-in">
                        {subjects.map((subject, index) => (
                            <div key={index} className={styles.card}>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{subject.name}</h3>
                                <p className="text-gray-800">{subject.description}</p>
                                <button
                                    onClick={() => handleStartClick(subject.name)}
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Начать
                                </button>
                            </div>
                        ))}
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
