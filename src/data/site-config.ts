export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Jessica Wu',
    subtitle: 'words, thoughtful digressions',
    description: 'Jessica Wu',
    image: {
        src: '/logo.png',
        alt: 'Jessica Wu'
    },
    headerNavLinks: [
        {
            text: 'Jessica Wu',
            href: '/'
        },
        {
            text: 'Now',
            href: '/now'
        },
        {
            text: 'Words',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },

    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Connect on LinkedIn',
            href: 'https://linkedin.com/jessicaxywu'
        }
    ],
    hero: {
        title: 'Hello 👋 ',
        text:
            //custom css
            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "I'm <strong>Jessica Wu</strong>. I'm a marketer by trade and a storyteller at heart." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "Naturally, I'm obsessed with the art of writing and the power of words. I believe that a great idea, brilliantly articulated, can be the spark that changes the world." +
            "</div>" +
            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "This is an experimental space where I capture some of those stories, thoughts, and ideas. While I don't promise that they are all life-changing, they are thoughtfully crafted and sincere." +
            "</div>" +

            "<div style='line-height: 1.4; 'margin-bottom: 0.5em;'>" +
            "If you want to get in touch, feel free to email me at jessicaxywu (at) gmail (dot) com, or connect with me on <a href='https://linkedin.com/jessicaxywu' style='text-decoration: underline;'>LinkedIn</a>." +
            "</div>",
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },

        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to my newsletter',
    //     text: 'A post once in a while. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;