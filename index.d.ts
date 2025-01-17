declare module '@bokuhe/react-native-check-app-install' {
  export class AppInstalledChecker {
    static getAppList(): string[];
    static checkPackageName(packagename: string): Promise<boolean>;
    static checkURLScheme(proto: string, query?: string): Promise<boolean>;
    static isAppInstalled(key: string): Promise<boolean>;
    static isAppInstalledAndroid(key: string): Promise<boolean>;
    static isAppInstalledIOS(key: string): Promise<boolean>;
  }

  export const CheckPackageInstallation: {
    isPackageInstalled(
      packagename: string,
      callback: (isInstalled: boolean) => void
    ): void;
  };
}

