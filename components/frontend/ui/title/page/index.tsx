interface PageTitleProps {
    title: string
    breadcrumb?: string
}

export default function PageTitle({ title, breadcrumb }: PageTitleProps) {
    return <div className='mb-[30px] md:-ml-[19px] relative flex'>
        <div className='mr-[9px]'>
            <img src="/images/dots.svg" alt="Dots" className='w-[58px] md:w-[106px]' />
        </div>

        <div className="flex-1">
            <div className='font-bold mb-[1.27px] md:mb-[5px] text-3xl md:text-5xl'>
                {title}
            </div>

            <div className='text-sm md:text-base'>
                <span className='opacity-20'>Home / {breadcrumb}</span> {title}
            </div>
        </div>
    </div>
}