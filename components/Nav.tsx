import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <Link href="/">
                <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
            </Link>
            <Link href="/about">
                <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
            </Link>
            <Link href="/blog">
                <a className="text-gray-900 dark:text-white px-6 py-4">Blog</a>
            </Link>
        </nav>
    );
};

export default Nav;
