export const containerAnimation = {
    initial: {
        y: -200,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
        },
    },
    exit: {
        y: -200,
        opacity: 0,
        transition: {
            ease: "easeInOut",
        },
    },
};
