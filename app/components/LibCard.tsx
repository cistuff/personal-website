import { ReactElement } from "react";

interface ProjectCardProps {
    color: string;
    text: string;
}

export default function LibCard({
    color,
    text,
}: ProjectCardProps) {
    return (
        <p className="lib-card" style={{ 'color': color }}>
            {text}
        </p>
    );
}