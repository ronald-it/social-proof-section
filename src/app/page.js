import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
  <main>
    <section>
      <Testimonial imageSrc="/images/image-colton.jpg" imageAlt="Picture of Colton" name="Colton Smith" quote="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" />
      <Testimonial imageSrc="/images/image-irene.jpg" imageAlt="Picture of Irene" name="Irene Roberts" quote="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery." />
      <Testimonial imageSrc="/images/image-anne.jpg" imageAlt="Picture of Anne" name="Anne Wallace" quote="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone" />
    </section>
      </main>
  );
}