import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';
import "../about/About.module.scss";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Head>
                <title>54КРСШЛ - Наша История</title>
                <meta name="description" content="Информация о школе: история, цели и достижения." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header />

            <main className="container mx-auto p-6 flex-grow">
                {/* История школы */}
                <section className="bg-white p-6 rounded-lg shadow-md mb-6 animate-slide-in">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">История школы</h2>
                    <p className="text-gray-800">
                        Наша школа была основана в 1938 году в Ленинском районе Алматы под номером 54. В 1941 году на базе учебного заведения был развернут военный госпиталь, а 8 мая 1942 года, по указу Президиума Верховного Совета Казахской ССР, школе было присвоено имя Героя Советского Союза, генерал-майора Ивана Васильевича Панфилова. С тех пор наша школа, начиная с 1941 года, продолжает развиваться и превращаться в один из ведущих образовательных центров города. Мы гордимся своими выпускниками, которые добились значительных успехов в различных областях и продолжают вносить вклад в развитие общества.
                    </p>
                </section>

                {/* Цель школы */}
                <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-6 animate-slide-in">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800">Цель школы</h2>
                    <p className="text-gray-700">
                        Наша цель — создать условия для всестороннего развития учеников и подготовки их к успешному будущему.
                        Мы стремимся воспитать личностей с критическим мышлением и высоким уровнем знаний.
                    </p>
                </section>

                {/* Достижения */}
                <section className="bg-green-50 p-6 rounded-lg shadow-md mb-6 animate-slide-in">
                    <h2 className="text-3xl font-bold mb-4 text-green-800">Наши достижения</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Золотая медаль на региональной олимпиаде по математике.</li>
                        <li>Победы на международных научных конференциях.</li>
                        <li>Высокие результаты на выпускных экзаменах.</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
}
