export interface State {
    indicator: "offline" | "online";
    available: number;
    last_updated: Date;
}