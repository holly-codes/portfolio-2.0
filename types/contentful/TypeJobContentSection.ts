import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeJobContentSection'
 * @name TypeJobContentSectionFields
 * @type {TypeJobContentSectionFields}
 * @memberof TypeJobContentSection
 */
export interface TypeJobContentSectionFields {
    /**
     * Field type definition for field 'sectionName' (Section Name)
     * @name Section Name
     * @localized false
     */
    sectionName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sectionTitle' (Section Title)
     * @name Section Title
     * @localized false
     */
    sectionTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sectionContent' (Section Content)
     * @name Section Content
     * @localized false
     */
    sectionContent?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'jobContentSection' (Job Content Section)
 * @name TypeJobContentSectionSkeleton
 * @type {TypeJobContentSectionSkeleton}
 * @author 5pHxjq4h6yJBPKixJagJPV
 * @since 2021-12-09T01:52:24.353Z
 * @version 3
 */
export type TypeJobContentSectionSkeleton = EntrySkeletonType<TypeJobContentSectionFields, "jobContentSection">;
/**
 * Entry type definition for content type 'jobContentSection' (Job Content Section)
 * @name TypeJobContentSection
 * @type {TypeJobContentSection}
 * @author Holly Burinda<holly.burinda@gmail.com>
 * @since 2021-12-09T01:52:24.353Z
 * @version 3
 * @link https://app.contentful.com/spaces/1x3wwsuowo7z/environments/master/content_types/jobContentSection
 */
export type TypeJobContentSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeJobContentSectionSkeleton, Modifiers, Locales>;
