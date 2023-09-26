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
