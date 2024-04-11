import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeJob'
 * @name TypeJobFields
 * @type {TypeJobFields}
 * @memberof TypeJob
 */
export interface TypeJobFields {
    /**
     * Field type definition for field 'companyName' (Company Name)
     * @name Company Name
     * @localized false
     */
    companyName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'jobTitle' (Job Title)
     * @name Job Title
     * @localized false
     */
    jobTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'timeSpan' (Time Span)
     * @name Time Span
     * @localized false
     */
    timeSpan?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'contentSections' (Content Sections)
     * @name Content Sections
     * @localized false
     */
    contentSections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

/**
 * Entry skeleton type definition for content type 'job' (Job)
 * @name TypeJobSkeleton
 * @type {TypeJobSkeleton}
 * @author 5pHxjq4h6yJBPKixJagJPV
 * @since 2021-12-09T01:52:04.441Z
 * @version 1
 */
export type TypeJobSkeleton = EntrySkeletonType<TypeJobFields, "job">;
/**
 * Entry type definition for content type 'job' (Job)
 * @name TypeJob
 * @type {TypeJob}
 * @author Holly Burinda<holly.burinda@gmail.com>
 * @since 2021-12-09T01:52:04.441Z
 * @version 1
 * @link https://app.contentful.com/spaces/1x3wwsuowo7z/environments/master/content_types/job
 */
export type TypeJob<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeJobSkeleton, Modifiers, Locales>;
