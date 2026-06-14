export default function SourceCard({ isOpenSource = true, sourceUrl='' }) {
    return (
        <div className="w-fit mt-4">
            {isOpenSource ? <a href={`${sourceUrl}`} className='github-a'>Source Code</a> : <a className='closed-source-a'>Closed Source</a>}
        </div>
    );
}