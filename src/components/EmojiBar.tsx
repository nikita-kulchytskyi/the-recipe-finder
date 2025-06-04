interface Props {
  className?: string;
}

export default function EmojiScroller({ className = "" }: Props) {
  return (
    <div
      className={`overflow-hidden w-full whitespace-nowrap ${className}`}
      style={{ height: 50 }}
    >
      <img
        src="/emojis.png"
        alt="Emoji strip"
        width={2000}
        height={50}
        className="inline-block select-none"
        draggable={false}
        style={{ width: "100%", minWidth: "1024px", maxWidth: "2000px" }}
      />
    </div>
  );
}
