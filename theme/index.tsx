import { Layout as BasicLayout } from '@rspress/core/theme-original';

// 以下展示所有的 Props
const Layout = () => (
    <BasicLayout
        afterNavTitle={<div className='flex flex-row justify-center items-center'>
            <div>
                <a href="https://startupfa.me/s/anynote?utm_source=anynote.online" target="_blank"><img src="https://startupfa.me/badges/featured-badge-small.webp" alt="AnyNote - Powerful Note-Taking App | Startup Fame" width="224" height="36" /></a>
            </div>
        </div>}

        bottom={<div>
            <hr className='mb-4'></hr>
            <footer className="w-full py-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                    <a href="/links" className="text-sm text-gray-500 hover:text-gray-900 mb-2">Partner Links</a>
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved</p>
                </div>
            </footer>
        </div>}

    />
);

export { Layout };

export * from '@rspress/core/theme-original';
