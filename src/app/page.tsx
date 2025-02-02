import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import "../styles/Home.module.scss"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>54КРСШЛ - Образовательный портал</title>
        <meta name="description" content="Платформа для изучения новых тем и прохождения тестов." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="container mx-auto p-6 flex-grow">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 transition-transform transform translate-y-10 opacity-0 animate-slide-in">Добро пожаловать на сайт КРСШЛ 54!</h2>
          <p className="text-gray-800 mb-4 transition-opacity opacity-0 animate-fade-in">Это образовательный портал, где вы сможете изучать новые темы, проходить тесты и постоянно совершенствовать свои знания. Мы предлагаем множество курсов, которые помогут вам лучше понять сложные темы и стать более уверенным учеником.</p>
          <p className="text-gray-800 mb-4 transition-opacity opacity-0 animate-fade-in-delay">Неважно, интересуетесь ли вы точными науками, гуманитарными дисциплинами или хотите освоить новые навыки — на нашем портале найдётся всё, что нужно.</p>
          <p className="text-blue-500 text-lg font-semibold transition-opacity opacity-0 animate-fade-in-delay">Начните своё путешествие в мир знаний уже сегодня!</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}