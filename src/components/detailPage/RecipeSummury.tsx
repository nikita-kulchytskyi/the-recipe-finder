interface RecipeSummaryProps {
  summary?: string;
}

export default function RecipeSummary({ summary }: RecipeSummaryProps) {
  if (!summary) return null;

  return (
    <div
      className="prose prose-sm sm:prose lg:prose-lg mt-6 text-gray-800"
      dangerouslySetInnerHTML={{ __html: summary }}
    />
  );
}
