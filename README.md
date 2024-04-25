# Backend Commands

If you update a go dependency, run the following commands : 

1. `go get [dependency]`
2. `bazel run //server:gazelle -- update-repos -from_file=server/go.mod -to_macro=external_repos.bzl%go_dependencies`
3. `bazel run //server:gazelle`
