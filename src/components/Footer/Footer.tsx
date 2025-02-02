import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-auto">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-3 text-white animate-slide-fade-in">
                    Контактная информация
                </h2>
                <div className="mb-6 flex justify-center space-x-12">
                    <div className="text-gray-300 animate-slide-fade-in delay-100">
                        <span className="font-semibold">Телефон:</span> +7 000 000 000
                    </div>
                    <div className="text-gray-300 animate-slide-fade-in delay-200">
                        <span className="font-semibold">Email:</span> info@krschl54.edu
                    </div>
                    <div className="text-gray-300 animate-slide-fade-in delay-300">
                        <span className="font-semibold">Адрес:</span> г. Алматы, ул. Панфилова 68/73
                    </div>
                </div>

                {/* Копирайт */}
                <div className="border-t border-gray-600 pt-4">
                    <p className="text-gray-400">&copy; 2025 КРСШЛ 54. Все права защищены Аманом.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
