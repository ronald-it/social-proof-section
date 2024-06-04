import CustomImage from "../CustomImage";
import styles from './Testimonial.module.scss';

export default function Testimonial({imageSrc, imageAlt}) {
  return <article className={styles.article}>
  <CustomImage src={imageSrc} alt={imageAlt} width={100} height={100} priority />
  </article>
}