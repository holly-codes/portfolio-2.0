import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeResumeSection'
 * @name TypeResumeSectionFields
 * @type {TypeResumeSectionFields}
 * @memberof TypeResumeSection
 */
export interface TypeResumeSectionFields {
    /**
     * Field type definition for field 'sectionName' (Section Name)
     * @name Section Name
     * @localized false
     */
    sectionName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sectionContent' (Section Content)
     * @name Section Content
     * @localized false
     */
    sectionContent?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'jobs' (Jobs)
     * @name Jobs
     * @localized false
     */
    jobs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

/**
 * Entry skeleton type definition for content type 'resumeSection' (Resume Section)
 * @name TypeResumeSectionSkeleton
 * @type {TypeResumeSectionSkeleton}
 * @author 5pHxjq4h6yJBPKixJagJPV
 * @since 2021-12-09T01:50:46.015Z
 * @version 1
 */
export type TypeResumeSectionSkeleton = EntrySkeletonType<TypeResumeSectionFields, "resumeSection">;
/**
 * Entry type definition for content type 'resumeSection' (Resume Section)
 * @name TypeResumeSection
 * @type {TypeResumeSection}
 * @author Holly Burinda<holly.burinda@gmail.com>
 * @since 2021-12-09T01:50:46.015Z
 * @version 1
 * @link https://app.contentful.com/spaces/1x3wwsuowo7z/environments/master/content_types/resumeSection
 */
export type TypeResumeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeResumeSectionSkeleton, Modifiers, Locales>;
