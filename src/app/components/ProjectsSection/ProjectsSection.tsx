import { FunctionComponent } from 'react';
import type { TypeProjectsSectionSkeleton } from '../../../../types/contentful';


interface ProjectsSectionProps {
    projectsSection: TypeProjectsSectionSkeleton;
}
export const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
    projectsSection
}) => {
    return (
        <div></div>
    )
}