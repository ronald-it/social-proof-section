import CustomImage from "../components/CustomImage/CustomImage";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import Testimonial from "../components/Testimonial/Testimonial";
import styles from "./page.module.scss"

export default function Home() {
  return (
  <main className={styles.main}>
    <div className={styles.main__grid}>
      <div className={styles['main__content-wrapper']}>
        <section className={styles.main__header}>
          <h1 className={styles.main__title}>10,000+ of our users love our products.</h1>
          <p className={styles.main__description}>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
          </section>
          <section className={styles['main__review-cards']}>
            <ReviewCard reviewPlatform="Reviews"/>
            <ReviewCard reviewPlatform="Report Guru"/>
            <ReviewCard reviewPlatform="BestTech"/>
          </section>
      </div>
      <section className={styles.main__testimonials}>
        <Testimonial
        imageSrc="/images/image-colton.jpg"
        imageAlt="Picture of Colton"
        name="Colton Smith"
        quote="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" />
        <Testimonial
        imageSrc="/images/image-irene.jpg"
        imageAlt="Picture of Irene"
        name="Irene Roberts"
        quote="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery." />
        <Testimonial
        imageSrc="/images/image-anne.jpg"
        imageAlt="Picture of Anne"
        name="Anne Wallace"
        quote="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone" />
      </section>
    </div>
    <span className={styles['main__pattern-container--top']}>
      <CustomImage className={styles['main__pattern-image--mobile-top']} src="/images/bg-pattern-top-mobile.svg" alt="Top background pattern mobile" width={100} height={100} priority/>
      <CustomImage className={styles['main__pattern-image--desktop-top']} src="/images/bg-pattern-top-desktop.svg" alt="Top background pattern mobile" width={100} height={100} priority/>
    </span>
    <span className={styles['main__pattern-container--bottom']}>
      <CustomImage className={styles['main__pattern-image--mobile-bottom']} src="/images/bg-pattern-bottom-mobile.svg" alt="Top background pattern mobile" width={100} height={100} priority/>
      <CustomImage className={styles['main__pattern-image--desktop-bottom']} src="/images/bg-pattern-bottom-desktop.svg" alt="Top background pattern mobile" width={100} height={100} priority/>
    </span>
  </main>
  );
}