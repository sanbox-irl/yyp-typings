# YYP Typings
### TypeScript type definitions for GMS 2 .yyp and .yy Files.

These typings are for GMS 2 project files (.yyp extension) and resource descriptor files (.yy extension).

These typings are hand-written, not generated.

## Types

`YYP` - This is the type that represents a GMS 2 project file.
`YYPResource` - This type represents a single entry in the `resources` array of YYP files. This is provided as a seperate type for easy access when generated resource entries manually.
`ParentProject` - This represents the `parentProject` field of YYP files. This is more or less a placeholder for now until I learn more about this field.

The `Resource` namespace includes every different resource as it's own type, but currently only Objects have all of their properties filled out. To access an individual resource type, simply declare the type under the Resource namespace (`Resource.Sprite`, `Resource.Object`, etc.)

## Disclaimer

These types are incomplete, and may not even be optimally structured. Many of these fields contains objects with the same properties (such as id and modelName) so everything may extend from some top-level type. Suggestions welcome if you think of a better structure.

## License
MIT
