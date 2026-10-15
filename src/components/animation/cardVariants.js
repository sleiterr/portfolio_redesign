export const containerVariants = {
  hidden: () => ({}),
  show: {
    transition: {
      staggerChildren: 0.15, // затримка між картками
    },
  },
  exit: {},
};

export const cardVariants = {
  hidden: (dir) => ({ opacity: 0, x: 30 * dir }),
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: (dir) => ({ opacity: 0, x: -30 * dir, transition: { duration: 0.25 } }),
};
