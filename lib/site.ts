/**
 * Single source of truth for the site's PRIMARY (canonical) domain.
 *
 * Both nimtechsol.in and nimtechsol.com serve the site, but every page emits a
 * <link rel="canonical"> pointing here, so Google consolidates ranking onto ONE
 * version instead of treating the two domains as duplicate content.
 *
 * To switch the primary domain, change this one line (e.g. to
 * "https://nimtechsol.com") — layout metadata, sitemap, and robots all read it.
 */
export const siteUrl = "https://nimtechsol.in";