import React, { useState } from 'react';
import Modal from './VideoModal';

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
    mediaUrl: string;
};

const posts: Post[] = [
    {
        id: 1,
        title: 'Nember',
        href: '#',
        description:
            'Machine learning application embedded to work in tandem with any NinjaScript strategy. Increasing profit and reducing drawdown by 50% to as much as 300%.',
        category: { title: 'Take me there', href: 'https://nember.catalystanalytics.io' },
        mediaUrl: 'demo.mp4',
    },
    {
        id: 2,
        title: 'ML-Backtest App',
        href: '#',
        description:
            'Simple to use/deploy docker application that offers a no-code solution for the ML-Backtest Python library.',
        category: { title: 'Take me there', href: 'https://github.com/MaxwellMendenhall/backtest-with-machine-learning' },
        mediaUrl: 'ml-backtest-app-demo.mp4',
    },
    {
        id: 3,
        title: 'Tailored Film Studio',
        href: '#',
        description:
            'A website to improve customer reach, attracting an additional 50+ customers per week for a local business.',
        category: { title: 'Take me there', href: 'https://tailoredfilmstudio.com/' },
        mediaUrl: 'tailored-film-studio.mp4',
    },
];

const BlogPosts: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const handleVideoClick = (post: Post) => {
        setSelectedPost(post);
        setModalIsOpen(true);
    };

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Maxwell Mendenhall</h2>
                    <p className="mt-2 text-lg leading-8 text-white">
                        Studying Computer Science, White Collar Crime, and Computer Security.
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
                            <div className="group relative mt-4">
                                <video
                                    src={post.mediaUrl}
                                    title={post.title}
                                    className="w-full max-w-none object-cover aspect-w-16 aspect-h-9 cursor-pointer"
                                    autoPlay
                                    muted
                                    loop
                                    controls={false}
                                    playsInline
                                    onClick={() => handleVideoClick(post)}
                                />
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">

                                    {post.title}
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-white">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {selectedPost && <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} post={selectedPost} />}
        </div>
    );
}

export default BlogPosts;
