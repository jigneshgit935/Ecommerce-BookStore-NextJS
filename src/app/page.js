import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/component/hero/Hero';
import BookCatalog from '@/component/bookCatalog/BookCatalog';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <BookCatalog />
    </main>
  );
}
