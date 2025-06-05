import Image from "next/image";

interface EmptyStateProps {
  title?: string;
  imageType: "oops" | "general";
}

const imageMap = {
  oops: "/oops.png",
  general: "/error.png",
};

export default function ErrorPic({ title, imageType }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center text-gray-600">
      <Image
        src={imageMap[imageType]}
        alt={imageType}
        width={400}
        height={400}
        className="mb-6 object-cover"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}
