import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeProjectsSection'
 * @name TypeProjectsSectionFields
 * @type {TypeProjectsSectionFields}
 * @memberof TypeProjectsSection
 */
export interface TypeProjectsSectionFields {
    /**
     * Field type definition for field 'sectionName' (Section Name)
     * @name Section Name
     * @localized false
     */
    sectionName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'projects' (Projects)
     * @name Projects
     * @localized false
     */
    projects?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

/**
 * Entry skeleton type definition for content type 'projectsSection' (Projects Section)
 * @name TypeProjectsSectionSkeleton
 * @type {TypeProjectsSectionSkeleton}
 * @author 5pHxjq4h6yJBPKixJagJPV
 * @since 2021-11-19T01:30:13.135Z
 * @version 1
 */
export type TypeProjectsSectionSkeleton = EntrySkeletonType<TypeProjectsSectionFields, "projectsSection">;
/**
 * Entry type definition for content type 'projectsSection' (Projects Section)
 * @name TypeProjectsSection
 * @type {TypeProjectsSection}
 * @author Holly Burinda<holly.burinda@gmail.com>
 * @since 2021-11-19T01:30:13.135Z
 * @version 1
 * @link https://app.contentful.com/spaces/1x3wwsuowo7z/environments/master/content_types/projectsSection
 */
export type TypeProjectsSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectsSectionSkeleton, Modifiers, Locales>;
