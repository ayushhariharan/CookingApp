load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "80a98277ad1311dacd837f9b16db62887702e9f1d1c4c9f796d0121a46c8e184",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.46.0/rules_go-v0.46.0.zip",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.46.0/rules_go-v0.46.0.zip",
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains(version = "1.22.0")

http_archive(
    name = "bazel_gazelle",
    integrity = "sha256-MpOL2hbmcABjA1R5Bj2dJMYO2o15/Uc5Vj9Q0zHLMgk=",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.35.0/bazel-gazelle-v0.35.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.35.0/bazel-gazelle-v0.35.0.tar.gz",
    ],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")
load("//:external_repos.bzl", "go_dependencies")

# gazelle:repository_macro external_repos.bzl%go_dependencies
go_dependencies()

gazelle_dependencies()

http_archive(
    name = "aspect_rules_swc",
    sha256 = "cde09df7dea773adaed896612434559f8955d2dfb2cfd6429ee333f30299ed34",
    strip_prefix = "rules_swc-1.2.2",
    url = "https://github.com/aspect-build/rules_swc/releases/download/v1.2.2/rules_swc-v1.2.2.tar.gz",
)

http_archive(
    name = "aspect_rules_ts",
    sha256 = "c77f0dfa78c407893806491223c1264c289074feefbf706721743a3556fa7cea",
    strip_prefix = "rules_ts-2.2.0",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v2.2.0/rules_ts-v2.2.0.tar.gz",
)

http_archive(
    name = "aspect_rules_js",
    sha256 = "bc9b4a01ef8eb050d8a7a050eedde8ffb1e45a56b0e4094e26f06c17d5fcf1d5",
    strip_prefix = "rules_js-1.41.2",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.41.2/rules_js-v1.41.2.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    ts_version_from = "//frontend:package.json"
)

load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")

rules_swc_dependencies()

load("@aspect_rules_swc//swc:repositories.bzl", "LATEST_SWC_VERSION", "swc_register_toolchains")

swc_register_toolchains(
    name = "swc",
    swc_version = LATEST_SWC_VERSION,
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()