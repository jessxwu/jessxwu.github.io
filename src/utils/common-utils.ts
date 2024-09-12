export function slugify(input?: string) {
    console.log("Original input:", input);

    if (!input) return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();
    console.log("After lowercase and trim:", slug);

    // remove accents from characters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log("After accent removal:", slug);

    // replace apostrophes and similar quotes
    slug = slug.replace(/['']/g, '');
    console.log("After apostrophe replacement:", slug);

    // replace ampersand with a space
    slug = slug.replace(/&/g, ' ');
    console.log("After ampersand replacement:", slug);

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
    console.log("After invalid char replacement:", slug);

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');
    console.log("Final slug:", slug);

    return slug;
}