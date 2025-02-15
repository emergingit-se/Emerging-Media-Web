export default interface MenuItem {
    title: string;
    path?: string;
    badge?: boolean;
    children?: MenuItem[];
}

export default interface VisionItem{
    title: string,
    path?: string
    alt: string,
    description: string;
}