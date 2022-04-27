/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
    // But you can create a sidebar manually
    sidebar: [
        {
            type: 'doc',
            label: 'Intro',
            id: 'intro',
        },
        {
            type: 'category',
            collapsed: false,
            label: "Concepts",
            link: { type: 'doc', id: "concepts/index" },
            items: [{
                type: 'autogenerated',
                dirName: 'concepts',
            }],
        },
        {
            type: 'category',
            label: "Guides",
            collapsed: false,
            link: { type: 'generated-index', description: "guides" },
            items: [{
                type: 'autogenerated',
                dirName: 'guides',
            }],
        },
        {
            type: 'category',
            label: "Reference",
            collapsed: false,
            link: { type: 'doc', id: "reference/index" },
            items: [
                {
                    type: 'category',
                    label: "Core",
                    collapsed: true,
                    link: { type: 'generated-index', description: "core contracts" },
                    items: [{
                        type: 'autogenerated',
                        dirName: 'reference/Core',
                    }]
                },
                {
                    type: 'category',
                    label: "Periphery",
                    collapsed: true,
                    link: { type: 'generated-index', description: "periphery contracts" },
                    items: [{
                        type: 'autogenerated',
                        dirName: 'reference/Periphery',
                    }]
                },
            ],
        },
    ],
};

module.exports = sidebars;
