import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTechnology'
 * @name TypeTechnologyFields
 * @type {TypeTechnologyFields}
 * @memberof TypeTechnology
 */
export interface TypeTechnologyFields {
    /**
     * Field type definition for field 'technologyName' (Technology Name)
     * @name Technology Name
     * @localized false
     */
    technologyName?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'technology' (Technology)
 * @name TypeTechnologySkeleton
 * @type {TypeTechnologySkeleton}
 * @author 5pHxjq4h6yJBPKixJagJPV
 * @since 2021-11-19T01:32:11.692Z
 * @version 3
 */
export type TypeTechnologySkeleton = EntrySkeletonType<TypeTechnologyFields, "technology">;
/**
 * Entry type definition for content type 'technology' (Technology)
 * @name TypeTechnology
 * @type {TypeTechnology}
 * @author Holly Burinda<holly.burinda@gmail.com>
 * @since 2021-11-19T01:32:11.692Z
 * @version 3
 * @link https://app.contentful.com/spaces/1x3wwsuowo7z/environments/master/content_types/technology
 */
export type TypeTechnology<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTechnologySkeleton, Modifiers, Locales>;
