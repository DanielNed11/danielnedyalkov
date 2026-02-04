const modules = import.meta.glob('../content/blog/*.mdx', { eager: true });

export const blogPosts = Object.entries(modules).map(([path, module]) => {
    const slug = path.replace('../content/blog/', '').replace('.mdx', '');

    const frontmatter = module.frontmatter || {};

    return {
        slug,
        title: frontmatter.title || 'Untitled Post',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        excerpt: frontmatter.excerpt || '',
        tags: frontmatter.tags || [],
        readTime: frontmatter.readTime || '5 min read',
        featured: frontmatter.featured || false
    };
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
