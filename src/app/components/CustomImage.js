import Image from "next/image";

export default function CustomImage({ src, alt, ...props }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <Image {...props} src={`${basePath}${src}`} alt={alt} />;
}
