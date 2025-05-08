import Theme from 'rspress/theme';

// 以下展示所有的 Props
const Layout = () => (
    <Theme.Layout
        afterNavTitle={<div className='flex flex-row justify-center items-center'>
            <div>
                <a href="https://startupfa.me/s/anynote?utm_source=anynote.online" target="_blank"><img src="https://startupfa.me/badges/featured-badge-small.webp" alt="AnyNote - Powerful Note-Taking App | Startup Fame" width="224" height="36" /></a>
            </div>
        </div>}

        bottom={<div>
            <hr className=' mb-4'></hr>
            <footer className="w-full py-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-6 mb-4">

                        <a
                            href="https://bio.site/awesomesite"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 ml-4"
                        >
                            <span className="font-medium">awesomesite</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        <a
                            href="https://linktr.ee/timedot"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 ml-4"
                        >
                            <span className="font-medium">linktree</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        <a
                            href="https://dragonwilds.online"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 ml-4"
                        >
                            <span className="font-medium">dragonwilds</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        <a
                            href="https://cattle.run"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 ml-4"
                        >
                            <span className="font-medium">crazy cattle 3d</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>


                        <a
                            href="https://happyghast.info"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 ml-4"
                        >
                            <span className="font-medium">happy ghast</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        <a
                            href="https://link.zhihu.com/?target=https://cattle.run"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 ml-4"
                        >
                            <span className="font-medium">game of true love</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                    </div>
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved</p>
                </div>
  
            </footer>
        </div >}

    />
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';