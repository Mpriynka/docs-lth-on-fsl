import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const references = [
  "Frankle & Carbin, 2018 – The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks.",
  "Xie et al., 2023 – Exploring Lottery Ticket Hypothesis in Few-Shot Learning.",
  "Vinyals et al., 2016 – Matching Networks for One Shot Learning."
];

export default function References() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-8">
      <header>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-1">Appendix</p>
        <h1 className="text-3xl font-bold text-foreground">References</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Key papers and resources that informed this project.
        </p>
      </header>

      <ol className="space-y-3">
        {references.map((ref, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="text-muted-foreground font-mono text-xs mt-0.5 shrink-0 w-6 text-right">
              [{i + 1}]
            </span>
            <span className="text-muted-foreground leading-relaxed">{ref}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
