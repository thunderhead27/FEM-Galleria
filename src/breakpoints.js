const size = {
    xs: `320px`,
    sm: `768px`,
    lg: `1440px`,
};

export const device = {
    mobile: `only screen and (min-width: ${size.xs})`,
    tablet: `only screen and (min-width: ${size.sm})`,
    desktop: `only screen and (min-width: ${size.lg})`,
};
