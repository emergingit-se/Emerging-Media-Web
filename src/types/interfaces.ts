import type { ImageMetadata } from 'astro';

export default interface MenuItem {
    title: string;
    path?: string;
    badge?: boolean;
    children?: MenuItem[];
}

export default interface Item {
    title: string;
    path?: string | ImageMetadata;
    alt?: string;
    description?: string;

}



