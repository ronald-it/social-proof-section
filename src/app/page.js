import CustomImage from "./components/CustomImage";

export default function Home() {
  return (
    <main>
      <span style={{border: "solid 1px white", backgroundColor: "red"}}>
      <CustomImage src="/next.svg" alt="Next.js logo" width={180} height={37} priority />
      </span>
      <p>Test</p>    </main>
  );
}