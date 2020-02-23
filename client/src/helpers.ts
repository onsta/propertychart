/*
Price is `10000 < P < 10000000`


- 0% - 5% - blue
- 5% - 25% - green
- 25% - 75% - yellow
- 75% - 95% - orange
- 95% - 100% -red

*/

const MIN = 10000;
const MAX = 10000000;

const percent = Math.round((MAX - MIN) / 100);

export const getColor = (price: number): string => {
  const opacity = 1; // Maybe in future... Math.round(price / percent) / 100 / 2 + 0.5;

  if (price <= 5 * percent) {
    return `rgba(51, 51, 255, ${opacity}`;
  } else if (price <= 25 * percent) {
    return `rgba(0, 153, 51, ${opacity}`;
  } else if (price <= 75 * percent) {
    return `rgba(255, 255, 0, ${opacity}`;
  } else if (price <= 95 * percent) {
    return `rgba(255, 153, 0, ${opacity}`;
  } else {
    return `rgba(204, 0, 0, ${opacity}`;
  }
};
