type paragraphsummaryProps = {
    text: string
    value: number
}

export default function ParagraphSummary({text, value} : paragraphsummaryProps) {
  return (
    <div className="space-y-2 text-center">
    <h2 className="text-4xl font-bold">{value}</h2>
    <p className="font-medium">{text}</p>
</div>
  )
}
