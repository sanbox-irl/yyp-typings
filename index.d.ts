/** Resource file namespace */
declare namespace Resource {
  interface Object {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor (GMObject) */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;

    /** List of object events */
    eventList: Array<{

      /** Event GUID */
      id: string;

      /** Internal resource type descriptor (GMEvent) */
      modelName: string;

      /** Version string, unknown use */
      mvc: string;

      /** Indicates if this event is drag and drop */
      IsDnD: boolean;

      /** Presumably, this holds the GUID of the other object if this were a collision event */
      collisionObjectId: string;

      /** Internal event number */
      enumb: number;

      /** Internal sub-event number */
      eventtype: number;

      /** GUID of the object that owns this event (Can belong to parent object) */
      m_owner: string;
    }>;

    /** GUID of sprite mask */
    maskSpriteId: string;

    /** GUID of parent object */
    parentObjectId: string;

    /** Indicates if this object is persistent */
    persistent: boolean;

    /** Indicates if this object uses physics */
    physicsObject: boolean;

    physicsAngularDamping: number;
    physicsDensity: number;
    physicsFriction: number;
    physicsGroup: number;
    physicsKinematic: boolean;
    physicsLinearDamping: number;
    physicsRestitution: number;
    physicsSensor: boolean;
    physicsShape: number;
    physicsShapePoints: Array<any>|null;
    physicsStartAwake: boolean;

    /** Indicates if this object is solid */
    solid: boolean;

    /** GUID of this object's sprite */
    spriteId: string;

    /** Indicates if this object is visible */
    visible: boolean;
  }

  interface Options {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Room {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Sprite {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface View {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Tileset {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Script {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Font {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Extension {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }

  interface Shader {

    /** Resource GUID */
    id: string;

    /** Internal resource type descriptor */
    modelName: string;

    /** Version string, unknown use */
    mvc: string;

    /** Resource name */
    name: string;
  }
}

/** Parent project entry of a YYP */
interface ParentProject {

  /** GUID of the parent project */
  id: string;

  /** Describes object entry type, which is always "GMProjectParent" for ParentProjects */
  modelName: string;

  /** A version number string, unknown use */
  mvc: string;

  /** Contains parent project resources */
  alteredResources: Array<YYPResource>;

  /** Unkown property, usually an empty array */
  hiddenResources: Array<YYPResource>;

  /** Contains parent project path presumably, always contains the following string: "${base_project}" */
  projectPath: string;
}

/** Represents a resource entry in a YYP */
interface YYPResource {

  /** This resource entry GUID (not the GUID of the resource itself) */
  Key: string;

  /** Contains resource information */
  Value: {

    /** GUID of the resource */
    id: string;

    /** Describes object entry type, which is always "GMResourceInfo" for YYPResources */
    modelName: string;

    /** A version number string, unknown use */
    mvc: string;

    /** Unknown property, seems to always be an empty array */
    configDeltaFiles: Array<any>;

    /** Unknown property, seems to always be an empty array */
    configDeltas: Array<any>;

    /** Unknown property, seems to always have only one entry: "default" */
    resourceCreationConfigs: Array<string>;

    /** Contains the relative backslash-escaped path to the resource's .yy file */
    resourcePath: string;

    /** Describes the resource type */
    resourceType: string;
  }
}

/** GMS 2 project file typings */
interface YYP {

  /** Contains project GUID */
  id: string;

  /** Usually contains resource type, in this case GMProject */
  modelName: string;

  /** A version number string, unknown use */
  mvc: string;

  /** Denotes whether this project uses drag and drop or not */
  IsDnDProject: boolean;

  /** Unknown property, seems to always be an empty array */
  configs: Array<any>;

  /** Unknown property, seems to always be false */
  option_ecma: boolean;

  /** Parent project, apparently non-public feature */
  parentProject: ParentProject;

  /** Contains all project resources (unordered) */
  resources: Array<YYPResource>

  /** An array of script GUID's, seemingly optional */
  script_order?: Array<string>

  /** Unknown property, usually an empty string */
  tutorial?: string;
}
