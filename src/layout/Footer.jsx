const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <p className="text-center md:text-left">&copy; {new Date().getFullYear()} South Market. All rights reserved.</p>
                <div className="flex space-x-4 justify-center md:justify-end">
                    {/* Social media links */}
                    <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">Facebook</a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">Twitter</a>
                    <a href="https://instgram.com" target="_blank" className="hover:text-pink-500">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;