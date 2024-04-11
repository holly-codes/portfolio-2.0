import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeProject'
 * @name TypeProjectFields
 * @type {TypeProjectFields}
 * @memberof TypeProject
 */
export interface TypeProjectFields {
    /**
     * Field type definition for field 'projectName' (Project Name)
     * @name Project Name
     * @localized false
     */
    projectName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'imageUrl' (Image Url)
     * @name Image Url
     * @localized false
     */
    imageUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'imageAltText' (Image Alt Text)
     * @name Image Alt Text
     * @localized false
     */
    imageAltText?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'websiteUrl' (Website Url)
     * @name Website Url
     * @localized false
     */
    websiteUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'gitHubUrl' (GitHub Url)
     * @name GitHub Url
     * @localized false
     */
    gitHubUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'technologiesUsed' (Technologies Used)
     * @name Technologies Used
     * @localized false
     */
    technologiesUsed?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'project' (Project)
 * @name TypeProjectSkeleton
 * @type {TypeProjectSkeleton}
 * @author 5pHxjq4h6yJBPKixJagJPV
 * @since 2021-11-19T01:29:19.123Z
 * @version 17
 */
export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
/**
 * Entry type definition for content type 'project' (Project)
 * @name TypeProject
 * @type {TypeProject}
 * @author Holly Burinda<holly.burinda@gmail.com>
 * @since 2021-11-19T01:29:19.123Z
 * @version 17
 * @link https://app.contentful.com/spaces/1x3wwsuowo7z/environments/master/content_types/project
 */
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
