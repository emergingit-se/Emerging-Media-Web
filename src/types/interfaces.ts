export default interface MenuItem {
    title: string;
    path?: string;
    badge?: boolean;
    children?: MenuItem[];
}