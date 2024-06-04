import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
  <main>
    <section>
      <Testimonial imageSrc="/images/image-colton.jpg" imageAlt="Picture of Colton" />
      <Testimonial imageSrc="/images/image-irene.jpg" imageAlt="Picture of Irene" />
      <Testimonial imageSrc="/images/image-anne.jpg" imageAlt="Picture of Anne" />
    </section>
      </main>
  );
}