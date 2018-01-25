# WASM-Router

This is an experimental WASM router that is written in Rust. It is designed to run both in the browser and in node.

## Getting Started

TODO

## Building WASM

Ensure your environment is properly set up for Rust.

You will also need to ensure it is configured to target WASM:

```bash
rustup toolchain install nightly
rustup update
rustup target add wasm32-unknown-unknown --toolchain nightly
```

To build the project to WASM:

```bash
npm run build-wasm
```

## LICENSE

- MIT, see [LICENSE](/LICENSE) for more details.
