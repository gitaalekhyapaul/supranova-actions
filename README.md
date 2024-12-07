# Supranova Actions

This package contains Lit Actions for the Supranova protocol. Lit Actions are JavaScript/TypeScript code that runs inside Lit Protocol nodes to perform secure, decentralized computation.

## Actions

### twitter-auth.ts

Handles Twitter OAuth authentication and key claiming for users. This action:

- Verifies Twitter access tokens
- Claims keys for authenticated users
- Supports dev mode with override user IDs

### supra-accounts.ts

Manages encrypted Supra account creation and access. This action:

- Creates new Supra accounts
- Encrypts private keys using Lit Protocol
- Decrypts private keys for authorized access
- Manages account addresses

## Development

### Setup

```bash
# Install dependencies
npm install

# Create .env file with required variables
cp .env.example .env
```

### Build Process

The build process uses esbuild to:

1. Bundle TypeScript actions into JavaScript
2. Inject required dependencies (buffer.shim.js, supra.shim.js)
3. Output bundled actions to /actions directory

### IPFS Deployment

The build process automatically:

1. Bundles and minifies actions
2. Uploads to IPFS via Pinata
3. Saves IPFS CIDs to actions/ipfs.json

## Environment Variables

```
PINATA_JWT=     # Pinata API JWT for IPFS uploads
PINATA_URL=     # Pinata gateway URL
```

## Project Structure

```
actions/
├── src/
│   ├── actions/           # Lit Action source files
│   │   ├── supra-accounts.ts
│   │   └── twitter-auth.ts
│   ├── global.d.ts       # Global type definitions
│   └── index.ts          # Build script
├── esbuild.js            # esbuild configuration
├── buffer.shim.js        # Buffer polyfill for Lit nodes
└── supra.shim.js         # Supra SDK injection
```
