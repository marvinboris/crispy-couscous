export default function Footer({}) {
    return <footer className="bg-primary-600 dark:bg-secondary-900 text-white py-[44px]">
        <div className="container flex items-center">
            <div>© {new Date().getFullYear()} <span className="font-bold">Valyou</span>. All rights reserved</div>
        
            <div className="ml-auto grid gap-10">

            </div>
        </div>
    </footer>
}