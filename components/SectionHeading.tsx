import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  counter?: string;
};

export function SectionHeading({ eyebrow, title, description, counter }: Props) {
  return (
    <Reveal>
      <div className="mb-12 sm:mb-16">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="eyebrow">{eyebrow}</p>
          {counter && (
            <span className="font-mono text-xs text-muted">{counter}</span>
          )}
        </div>
        <h2 className="balance max-w-3xl text-h2 font-medium">{title}</h2>
        {description && (
          <p className="pretty mt-5 max-w-2xl text-lead text-muted">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
