<p align="center">
    <img alt="Babylon Logo" src="https://github.com/user-attachments/assets/dc74271e-90f1-44bd-9122-2b7438ab375c" width="100" />
    <h3 align="center">@babylonlabs-io/babylon-proto-ts</h3>
    <p align="center">Babylon Bitcoin Staking Protocol</p>
    <p align="center"><strong>TypeScript</strong> library</p>
    <p align="center">
      <a href="https://www.npmjs.com/package/@babylonlabs-io/babylon-proto-ts"><img src="https://badge.fury.io/js/babylon-proto-ts.svg" alt="npm version" height="18"></a>
    </p>
</p>
<br/>

## 👨🏻‍💻 Installation

```console
npm i @babylonlabs-io/babylon-proto-ts
```

## 🚀 Quick Start

This library provides a high-level `BabylonClient` for interacting with the Babylon Bitcoin Staking Protocol, eliminating the need to work with protobuf files directly.

### Basic Usage

```typescript
import { BabylonClient } from "@babylonlabs-io/babylon-proto-ts";

// Connect to Babylon network
const client = await BabylonClient.connect({
  rpc: "https://babylon-rpc.example.com"
});

// Query rewards for an address
const rewards = await client.getRewards("bbn1...");

// Query balance
const balance = await client.getBalance("bbn1...", "ubbn");

// Get Bitcoin tip
const btcTip = await client.getBTCTip();
```

### Wallet Integration

For applications that need to create and sign transactions, use the provided registry and amino types:

```typescript
import { 
  createRegistry, 
  createAminoTypes, 
  BabylonClient 
} from "@babylonlabs-io/babylon-proto-ts";
import { SigningStargateClient } from "@cosmjs/stargate";

// Create signing client with Babylon support
const client = await SigningStargateClient.connectWithSigner(
  rpc,
  offlineSigner as OfflineSigner,
  {
    registry: createRegistry(),
    aminoTypes: createAminoTypes(),
  },
);

// Create withdraw reward message
const babylonClient = await BabylonClient.connect({ rpc });
const withdrawMsg = babylonClient.createWithdrawRewardMsg("bbn1...");

// Sign and broadcast
const result = await client.signAndBroadcast(
  "bbn1...",
  [withdrawMsg],
  "auto"
);
```

## 📚 API Reference

### BabylonClient

#### `BabylonClient.connect(config: BabylonClientConfig)`

Creates a new BabylonClient instance.

- **Parameters:**
  - `config.rpc`: RPC endpoint URL for the Babylon network

#### `getRewards(address: string): Promise<number>`

Retrieves the total rewards for a given address.

- **Parameters:**
  - `address`: The Babylon address to query
- **Returns:** Total rewards amount (number)

#### `getBalance(address: string, denom?: string): Promise<number>`

Gets the balance of a specific token for an address.

- **Parameters:**
  - `address`: The Babylon address to query
  - `denom`: Token denomination (defaults to "ubbn")
- **Returns:** Balance amount (number)

#### `getBTCTip(): Promise<BTCHeaderInfoResponse>`

Retrieves the current Bitcoin blockchain tip information.

- **Returns:** Bitcoin header information

#### `createWithdrawRewardMsg(address: string)`

Creates a message for withdrawing rewards.

- **Parameters:**
  - `address`: The address to withdraw rewards for
- **Returns:** Message object ready for signing

### Utility Functions

#### `createRegistry(): Registry`

Creates a CosmJS registry with all Babylon message types registered.

#### `createAminoTypes(): AminoTypes`

Creates amino types for Babylon messages, required for wallet compatibility.

## 📝 Commit Format & Automated Releases

This project uses [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/)
and [**semantic-release**](https://semantic-release.gitbook.io/) to automate
versioning, changelog generation, and npm publishing.

### ✅ How It Works

1. All commits must follow the **Conventional Commits** format.
2. When changes are merged into the `main` branch:
   - `semantic-release` analyzes commit messages
   - Determines the appropriate semantic version bump (`major`, `minor`, `patch`)
   - Updates the `CHANGELOG.md`
   - Tags the release in Git
   - Publishes the new version to npm (if configured)

### 🧱 Commit Message Examples

```console
feat: add support for slashing script
fix: handle invalid staking tx gracefully
docs: update README with commit conventions
refactor!: remove deprecated method and cleanup types
```

> **Note:** For breaking changes, add a `!` after the type (
> e.g. `feat!:` or `refactor!:`) and include a description of the breaking
> change in the commit body.

### 🚀 Releasing

Just commit your changes using the proper format and merge to `main`.
The CI pipeline will handle versioning and releasing automatically — no manual
tagging or version bumps needed.
