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
            "I'm <strong>Jessica Wu</strong>. I'm a marketer with a love for storytelling. " +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "I believe in the quiet power of a great idea, well expressed. The right words can change everything for someone, somewhere." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "This is a perennial space where I capture some of those stories, thoughts, and moments." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "Sometimes I write about <a href='/work-ethos'>my approach to work</a> and <a href='blog/2024-09-12-ai-will-change-everything'>AI</a>. Or <a href='blog/2020-08-20-yo-la-tengo-painful'>music</a>, <a href='blog/2024-04-30-three-days-in-cannes'>movies</a>, <a href='blog/2020-08-19-bangkok-2017'>travels</a>. Usually, I end up rambling <a href='blog/2020-08-01-pain-and-growing-up'>half-baked thoughts about life</a> - slices of it, really - often scribbled down on evenings and weekends, on airplanes and trains... in what feels like exceedingly rarer moments when I am afforded the luxury to pause and reflect." +
            "</div>" +

            "<div style='line-height: 1.4; margin-bottom: 1.3em;'>" +
            "While I don't promise that they are all profound, they are sincere." +
            "</div>" +

            "<div style='line-height: 1.4; 'margin-bottom: 1.3em;'>" +
            "Here's <a href='/now'>what I'm up to now</a>. If anything resonates, or you'd like to say hi, email me at jessicaxywu [at] gmail dot com." +
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