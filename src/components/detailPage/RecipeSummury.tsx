interface RecipeSummaryProps {
  summary?: string;
}

export default function RecipeSummary({ summary }: RecipeSummaryProps) {
  if (!summary) return <p>This recipe does not come with instructions.</p>;

  return (
    <div
      className="prose prose-sm sm:prose lg:prose-lg mt-6 text-gray-800"
      dangerouslySetInnerHTML={{ __html: summary }}
    />
  );
}
