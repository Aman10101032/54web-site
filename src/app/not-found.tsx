// /pages/404.tsx

import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-semibold text-red-600">404</h1>
                <p className="text-lg text-gray-700 mt-4">К сожалению, я ещё не успел дописать проект :(</p>
                <p className="mt-4 text-gray-500">
                    Вы можете вернуться на{' '}
                    <Link href="/" className="text-blue-500 hover:underline">
                        главную
                    </Link>{' '}
                    страницу.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
