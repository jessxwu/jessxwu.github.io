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
            text: 'Home',
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

        // Hiding projects link
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },

    ],
    //Hiding footer nav bar
    // footerNavLinks: [
    //     {
    //         text: 'Contact',
    //         href: '/contact'
    //     },
    //     {
    //         text: 'Terms',
    //         href: '/terms'
    //     },
    // ],

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
            "I'm <strong>Jessica Wu</strong>. I'm a marketer with a love of words." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "I'm obsessed with the art of storytelling, and believe that a great idea, well expressed, can be the spark that changes the world." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "This is an experimental space where I capture some of those stories, thoughts, and ideas. While I don't promise that they are all life-changing, they are thoughtfully crafted and sincere." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "I am also actively looking for a new full-time opportunity and would appreciate any leads that you think I can be a good fit for." +
            "</div>" +
            // Read my <a href='/work-ethos'>work ethos here</a>.

            "<div style='line-height: 1.4; 'margin-bottom: 1.3em;'>" +
            "If you want to get in touch, email me at jessicaxywu [at] gmail dot com." +
            "</div>",

        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },

        actions: [
            {
                text: 'Connect on LinkedIn',
                href: 'https://www.linkedin.com/in/jessicaxywu/'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to my newsletter',
    //     text: 'A post once in a while. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 15,
    projectsPerPage: 15
};

export default siteConfig;