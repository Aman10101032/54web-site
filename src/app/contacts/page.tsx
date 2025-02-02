'use client'


import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/app/globals.css';

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name) {
            newErrors.name = 'Пожалуйста, введите ваше имя.';
            isValid = false;
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Пожалуйста, введите корректный email.';
            isValid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Пожалуйста, введите сообщение.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Данные формы:', formData);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 animate-slide-in">Свяжитесь с нами</h1>
                <p>P.S. Если что данные отправляются в консоль(Пока что. В будущем, можно на сервер)</p>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Имя */}
                        <div className="animate-slide-fade-in delay-100">
                            <label className="block text-gray-700 font-semibold mb-1">Ваше имя</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                                placeholder="Введите ваше имя"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="animate-slide-fade-in delay-200">
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                                placeholder="Введите ваш email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Сообщение */}
                        <div className="animate-slide-fade-in delay-300">
                            <label className="block text-gray-700 font-semibold mb-1">Сообщение</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                                placeholder="Введите ваше сообщение"
                                rows={4}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* Кнопка отправки */}
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 animate-slide-fade-in delay-400"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
