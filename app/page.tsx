import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Helix Charter High School</h1>
      <p>Class of 2004</p>

      <h2>20 Year Reunion</h2>
      <p>Location: TBA</p>
      <p>Date: TBA</p>
      <p>Time: TBA</p>
    </main>
  );
}
