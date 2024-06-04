import CustomImage from "../CustomImage";
import styles from './Testimonial.module.scss';

export default function Testimonial() {
  return <article className={styles.article}>
  <CustomImage src="/next.svg" alt="Next.js logo" width={180} height={37} priority />
  </article>
}