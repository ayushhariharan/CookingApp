"Constants for conventions used for React source files"

load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@bazel_skylib//lib:partial.bzl", "partial")

ASSET_PATTERNS = [
    "*.svg",
    "*.css",
]

SRC_PATTERNS = [
    "**/*.ts",
    "**/*.tsx",
]

TEST_PATTERNS = [
    "*.test.tsx",
    "*.test.ts",
    "*.spec.tsx",
    "*.spec.ts",
]

# Partially-apply our (generated) .swcrc config file to the swc starlark function
TRANSPILER = partial.make(
    swc,
    swcrc = "//frontend:.swcrc",
)