import SourceCard from "./SourceCard";

export default function ProjectCard({ title="Title", subtitle="Subtitle", description="Description", sourceUrl="", isOpenSource=true, sourceName="GitHub", children }) {
    return (
        <div className="p-2 outline-1 outline-solid">
            {isOpenSource ? <a href={sourceUrl} target="_blank" className='text-lg underline text-blue-500'>{title}</a> : <p className='text-lg'>{title}</p>}
            <p className='text-xs mb-4 text-gray-700'>{subtitle}</p>
            <p className='text-sm'>{description}</p>
            <div className="flex flex-start gap-1 mt-4 flex-wrap">
                {children}
            </div>
        </div>
    );
}