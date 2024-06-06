import CustomImage from "../CustomImage/CustomImage"
import styles from "./ReviewCard.module.scss"

export default function ReviewCard({reviewPlatform}) {
    const stars = [1, 2, 3, 4, 5]
  return <article className={styles['review-card']}>
    <span className={styles['review-card__rating']}>
    {stars.map((star) => {
        return <CustomImage key={star} className={styles['review-card__image']} src="/images/icon-star.svg" alt='Star Icon' width={100} height={100} priority />
    })}
    </span>
    <span className={styles['review-card__text']}>Rated 5 stars in {reviewPlatform}</span>
  </article>
}