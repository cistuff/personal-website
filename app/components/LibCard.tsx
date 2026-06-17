export default function LibCard({ color = '#3b82f6', children = <></> }) {
    return (
        <p className="lib-card" style={{ '--card-color': color }}>
            {children}
        </p>
    );
}