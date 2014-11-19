grunt-important-css
===================

A lightweight npm plugin to add !important tags to the end of all rules of a CSS file

Under normal circumstances, it would be horrible practice to add !important to all of your CSS rules, or for that matter, any CSS rules. !important in general is an easy way out for a culprit who is caught writing disorganized styles. Any developer with decent front-end design chops should know that it should GENERALLY be avoided at all costs. However, on occasion, especially if you want your CSS for a given container to be completely independent of the rest of the page, you may find use in the tag.

While I was working for a SaaS start-up with a product that would inject custom-styled HTML into a client's page, I often found it a headache to deal with inherited CSS. We would inherit all the client's styles, and have to manually reset them on a case-by-case basis (more than one client overrode the value of the "strong" tag to have a font-weight of normal).

With important-css, you are making use of the !important tag in the very unique case that it ought to be used. Import your own reset style sheets, and go to town styling your custom-injected HTML from the foundation up, regardless of what else is on the page.
