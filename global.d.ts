// global.d.ts
interface Window {
    Square: {
      payments: (appId: string, locationId: string) => any;
    };
  }