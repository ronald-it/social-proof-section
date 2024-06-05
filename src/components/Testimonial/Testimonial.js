import CustomImage from "../CustomImage/CustomImage";
import styles from './Testimonial.module.scss';

export default function Testimonial({imageSrc, imageAlt, name, quote}) {
  return <article className={styles.testimonial}>
    <div className={styles.testimonial__header}>
    <CustomImage className={styles.testimonial__image} src={imageSrc} alt={imageAlt} width={100} height={100} priority />
    <div className={styles.testimonial__info}>
    <span className={styles.testimonial__name}>{name}</span>
    <span className={styles.testimonial__status}>Verified Buyer</span>
    </div>
    </div>
  <p className={styles.testimonial__quote}>&quot;{quote}&quot;</p>
  </article>
}