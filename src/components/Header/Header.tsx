'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string) =>
        pathname === path
            ? 'text-cyan-300 font-bold border-b-2 border-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-lg transition-all shadow-md'
            : 'hover:text-cyan-200 hover:bg-white/20 px-3 py-1 rounded-lg transition-all';

    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold">КРСШЛ - 54</h1>
                    <p className="ml-4 text-xs font-semibold align-middle">
                        Казахстанско-Российская специализированная школа-лицей им. Панфилова
                    </p>

                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className={isActive('/')}>Главная</Link></li>
                        <li><Link href="/courses" className={isActive('/courses')}>Курсы</Link></li>
                        <li><Link href="/about" className={isActive('/about')}>Наша История</Link></li>
                        <li><Link href="/achievements" className={isActive('/achievements')}>Наши Достижения</Link></li>
                        <li><Link href="/contacts" className={isActive('/contacts')}>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;
