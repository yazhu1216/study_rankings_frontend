import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
// import { useHistory } from 'react-router'; // 替換為 react-router-dom 的 useHistory

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const history = useHistory(); // React Router 替代方案

    const handleSignOut = async () => {
        try {
            // history.push('/login'); // 使用 React Router 導向登入頁
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };

    return (
        <header className="bg-white shadow-lg">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <div className="text-xl font-black text-blue-900">Study Ranking</div>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="/" className="text-sm/6 font-semibold text-gray-900">
                        首頁
                    </a>
                    <a href="/search" className="text-sm/6 font-semibold text-gray-900">
                        學校查詢
                    </a>
                    <a href="/compare" className="text-sm/6 font-semibold text-gray-900">
                        各校比較
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/login" className="text-sm font-semibold text-gray-900">
                        Sign In <span aria-hidden="true">&rarr;</span>
                    </a>
                    {/* 登入功能可根據需求解開 */}
                    {/* <button className="text-sm font-semibold text-gray-900" onClick={handleSignOut}>
                        Sign Out<span aria-hidden="true">&rarr;</span>
                    </button> */}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <div className="text-xl font-black text-blue-900">Study Ranking</div>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    首頁
                                </a>
                                <a
                                    href="/search"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    學校查詢
                                </a>
                                <a
                                    href="/compare"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    各校比較
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Sign In
                                </a>
                                <button
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
