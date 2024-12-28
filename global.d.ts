// global.d.ts
interface Window {
    Square: {
      payments: (appId: string, locationId: string) => any;
    };
    vapiSDK: {
      run: (options: { apiKey: string; assistant: string; config?: any }) => any;
    };
  }