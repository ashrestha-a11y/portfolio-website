import React from "react";

type Props = {
  name: string;
  small?: boolean;
};

const iconMap: Record<string, string> = {
  "Java": "☕",
  "Spring Boot": "🍃",
  "Spring MVC": "🍃",
  "Hibernate": "🗄️",
  "React": "⚛️",
  "Next.js": "▲",
  "TypeScript": "TS",
  "JavaScript": "JS",
  "SQL": "🧮",
  "AWS": "☁️",
  "AWS Lambda": "λ",
  "API Gateway": "🔌",
  "S3": "🪣",
  "DynamoDB": "🧊",
  "CloudWatch": "📈",
  "AWS CDK": "🏗️",
  "GitHub Actions": "⚙️",
  "PostgreSQL": "🐘",
  "MongoDB": "🍃",
  "Snowflake": "❄️",
  "Node.js": "⬢",
  "Resend": "✉️",
  "Responsive CSS": "🎨",
  "CI/CD": "🚀"
};

export default function TechBadge({ name, small = false }: Props) {
  const icon = iconMap[name] ?? "💻";
  const isTextIcon = ["TS", "JS", "▲", "λ", "⬢"].includes(icon);

  return (
    <span className={`chip ${small ? "small" : ""}`}>
      <span className={`tech-icon ${isTextIcon ? "text-icon" : ""}`} aria-hidden="true">
        {icon}
      </span>
      <span>{name}</span>
    </span>
  );
}
