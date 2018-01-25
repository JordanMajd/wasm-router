#!/bin/bash

DIR="$(dirname "$0")"
TARGET="wasm32-unknown-unknown"
RELEASE="release"
ARGS="+nightly build --$RELEASE --target $TARGET --manifest-path=$DIR/lib/rust/Cargo.toml"

if cargo $ARGS; then
  FILE="$DIR/lib/rust/target/$TARGET/$RELEASE/wasm_router.wasm"
  [ -f $FILE ] && cp -r $FILE "$DIR/lib/js/router.wasm"
fi
