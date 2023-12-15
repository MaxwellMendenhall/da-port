import React from 'react';

// Define the TypeScript types for the data
type Post = {
    id: number;
    title: string;
    href: string;
    description: string;
    category: {
        title: string;
        href: string;
    };
};

const posts: Post[] = [
    {
        id: 1,
        title: 'Trading Algorithm',
        href: '#',
        description:
            'Developed a trading algorithm in C# and connected it to Ninja Traders API. Displayed the analytics behind it using Flask, MySQL, Authentication, and Chart.js.',
        category: { title: 'Take me there', href: 'https://flask-production-9344.up.railway.app' },
    },
    {
        id: 2,
        title: 'Machine Learning for Trading Algorithm',
        href: '#',
        description:
            'This GitHub project focuses on optimizing an automated trading algorithm using a custom-built logistic regression model, aiming to enhance trading performance through advanced features and machine learning techniques.',
        category: { title: 'Take me there', href: 'https://maxwells-organization-2.gitbook.io/ctf-notes/notes/pen-testing-tools-notes' },
    },
    {
        id: 3,
        title: 'Website to improve customer reach',
        href: '#',
        description:
            'Developed and launched a website, enhancing the business online presence and customer reach. Used HTML, CSS, with embedded JS form.',
        category: { title: 'Take me there', href: 'https://www.thewrapshackwc.com' },
    },
    // More posts...
];

const BlogPosts: React.FC = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Maxwell Mendenhall</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Studying Computer Science, White Collar Crime, and Computer Secrutiy.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post: Post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-white hover:bg-gray-950"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">

                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogPosts;
