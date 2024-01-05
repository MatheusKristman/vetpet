export const imageAnimation = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1,
        },
    },
};

export const infoContainerAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const infoAnimation = {
    initial: {
        x: -50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
        },
    },
};
