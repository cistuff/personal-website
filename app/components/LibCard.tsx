import { ReactElement } from "react";

interface ProjectCardProps {
    color: string;
    children: ReactElement | ReactElement[];
}

export default function LibCard({
    color = '#3b82f6',
    children,
}: ProjectCardProps) {
    return (
        <p className="lib-card" style={{ 'color': color }}>
            {children}
        </p>
    );
}