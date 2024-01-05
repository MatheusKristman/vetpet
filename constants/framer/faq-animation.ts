export const containerAnimation = {
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

export const titleAnimation = {
    initial: {
        x: 50,
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

export const boxAnimation = {
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
