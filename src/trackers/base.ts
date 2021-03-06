import { DeviceType, MainTrackerOptions } from "../index";

export interface PageMeta {
  page: string;
  device: DeviceType;
  query_params: { [key: string]: string | undefined };
  path: string;
  href: string;
  referrer: string;
}

export abstract class BaseTracker {
  public mainOptions: MainTrackerOptions;

  public abstract isInitialized(): boolean;

  public abstract initialize(): void;

  public setMainOptions(newOptions: MainTrackerOptions): void {
    this.mainOptions = newOptions;
  }

  public sendPageView(pageMeta: PageMeta): void {
    // Default behavior
  }

  public sendEvent(name: string, data: object = {}): void {
    // Default behavior
  }
}
