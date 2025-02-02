'use client'

import { useState } from "react";
import Link from "next/link";

const AdminPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Навигация */}
            <nav className="bg-blue-600 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Админ Панель</h1>
                    <div>
                        <Link href="/admin/dashboard">
                            <span className="mr-4 hover:text-gray-200">Dashboard</span>
                        </Link>
                        <Link href="/admin/settings">
                            <span className="hover:text-gray-200">Настройки</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Основная часть контента */}
            <main className="container mx-auto p-6 flex-grow">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    Добро пожаловать в админ панель
                </h2>

                {/* Раздел управления данными */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Управление пользователями</h3>
                        <p className="text-gray-700">Просмотр, редактирование и удаление пользователей.</p>
                        <button
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={toggleModal}
                        >
                            Открыть модальное окно
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Управление контентом</h3>
                        <p className="text-gray-700">Добавление, редактирование и удаление контента.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Настройки сайта</h3>
                        <p className="text-gray-700">Управление настройками сайта и конфигурациями.</p>
                    </div>
                </div>

                {/* Модальное окно (если нужно) */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-md w-96">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Модальное окно</h3>
                            <p className="text-gray-700 mb-4">Здесь может быть форма или другой контент.</p>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={toggleModal}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                )}
            </main>

            {/* Футер */}
            <footer className="bg-gray-800 text-white p-4 mt-auto">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Админ Панель. Все права защищены.</p>
                </div>
            </footer>

        </div>
    );
};

export default AdminPage;
