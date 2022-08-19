/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface VotingVaultControllerInterface extends utils.Interface {
  functions: {
    "_CappedToken_underlying(address)": FunctionFragment;
    "_underlying_CappedToken(address)": FunctionFragment;
    "_vaultAddress_vaultId(address)": FunctionFragment;
    "_vaultController()": FunctionFragment;
    "_vaultId_votingVaultAddress(uint96)": FunctionFragment;
    "_votingVaultAddress_vaultId(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "mintVault(uint96)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerUnderlying(address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "retrieveUnderlying(uint256,address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vaultId(address)": FunctionFragment;
    "votingVaultAddress(uint96)": FunctionFragment;
    "votingVaultId(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_CappedToken_underlying"
      | "_CappedToken_underlying(address)"
      | "_underlying_CappedToken"
      | "_underlying_CappedToken(address)"
      | "_vaultAddress_vaultId"
      | "_vaultAddress_vaultId(address)"
      | "_vaultController"
      | "_vaultController()"
      | "_vaultId_votingVaultAddress"
      | "_vaultId_votingVaultAddress(uint96)"
      | "_votingVaultAddress_vaultId"
      | "_votingVaultAddress_vaultId(address)"
      | "initialize"
      | "initialize(address)"
      | "mintVault"
      | "mintVault(uint96)"
      | "owner"
      | "owner()"
      | "registerUnderlying"
      | "registerUnderlying(address,address)"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "retrieveUnderlying"
      | "retrieveUnderlying(uint256,address,address)"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "vaultId"
      | "vaultId(address)"
      | "votingVaultAddress"
      | "votingVaultAddress(uint96)"
      | "votingVaultId"
      | "votingVaultId(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_CappedToken_underlying",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_CappedToken_underlying(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_underlying_CappedToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_underlying_CappedToken(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_vaultAddress_vaultId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_vaultAddress_vaultId(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_vaultController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_vaultController()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_vaultId_votingVaultAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_vaultId_votingVaultAddress(uint96)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_votingVaultAddress_vaultId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_votingVaultAddress_vaultId(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintVault",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintVault(uint96)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerUnderlying",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUnderlying(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveUnderlying",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveUnderlying(uint256,address,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultId(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "votingVaultAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "votingVaultAddress(uint96)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "votingVaultId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "votingVaultId(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_CappedToken_underlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_CappedToken_underlying(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_underlying_CappedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_underlying_CappedToken(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_vaultAddress_vaultId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_vaultAddress_vaultId(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_vaultController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_vaultController()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_vaultId_votingVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_vaultId_votingVaultAddress(uint96)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_votingVaultAddress_vaultId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_votingVaultAddress_vaultId(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialize(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintVault(uint96)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUnderlying(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveUnderlying(uint256,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaultId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultId(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingVaultAddress(uint96)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingVaultId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingVaultId(address)",
    data: BytesLike
  ): Result;

  events: {
    "NewVotingVault(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewVotingVault"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewVotingVault(address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface NewVotingVaultEventObject {
  voting_vault_address: string;
  vaultId: BigNumber;
}
export type NewVotingVaultEvent = TypedEvent<
  [string, BigNumber],
  NewVotingVaultEventObject
>;

export type NewVotingVaultEventFilter = TypedEventFilter<NewVotingVaultEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface VotingVaultController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotingVaultControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _CappedToken_underlying(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "_CappedToken_underlying(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _underlying_CappedToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "_underlying_CappedToken(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _vaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "_vaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _vaultController(overrides?: CallOverrides): Promise<[string]>;

    "_vaultController()"(overrides?: CallOverrides): Promise<[string]>;

    _vaultId_votingVaultAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "_vaultId_votingVaultAddress(uint96)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _votingVaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "_votingVaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      vaultController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      vaultController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintVault(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mintVault(uint96)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    registerUnderlying(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "registerUnderlying(address,address)"(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieveUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "retrieveUnderlying(uint256,address,address)"(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vaultId(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "vaultId(address)"(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    votingVaultAddress(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "votingVaultAddress(uint96)"(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    votingVaultId(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "votingVaultId(address)"(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  _CappedToken_underlying(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "_CappedToken_underlying(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  _underlying_CappedToken(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "_underlying_CappedToken(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  _vaultAddress_vaultId(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "_vaultAddress_vaultId(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _vaultController(overrides?: CallOverrides): Promise<string>;

  "_vaultController()"(overrides?: CallOverrides): Promise<string>;

  _vaultId_votingVaultAddress(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "_vaultId_votingVaultAddress(uint96)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  _votingVaultAddress_vaultId(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "_votingVaultAddress_vaultId(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    vaultController_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    vaultController_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintVault(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mintVault(uint96)"(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  registerUnderlying(
    underlying_address: PromiseOrValue<string>,
    capped_token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "registerUnderlying(address,address)"(
    underlying_address: PromiseOrValue<string>,
    capped_token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieveUnderlying(
    amount: PromiseOrValue<BigNumberish>,
    voting_vault: PromiseOrValue<string>,
    target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "retrieveUnderlying(uint256,address,address)"(
    amount: PromiseOrValue<BigNumberish>,
    voting_vault: PromiseOrValue<string>,
    target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vaultId(
    vault_address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "vaultId(address)"(
    vault_address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  votingVaultAddress(
    vault_id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "votingVaultAddress(uint96)"(
    vault_id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  votingVaultId(
    voting_vault_address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "votingVaultId(address)"(
    voting_vault_address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    _CappedToken_underlying(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "_CappedToken_underlying(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    _underlying_CappedToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "_underlying_CappedToken(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    _vaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_vaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _vaultController(overrides?: CallOverrides): Promise<string>;

    "_vaultController()"(overrides?: CallOverrides): Promise<string>;

    _vaultId_votingVaultAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "_vaultId_votingVaultAddress(uint96)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    _votingVaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_votingVaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      vaultController_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      vaultController_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintVault(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "mintVault(uint96)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    registerUnderlying(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerUnderlying(address,address)"(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    retrieveUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "retrieveUnderlying(uint256,address,address)"(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultId(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vaultId(address)"(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingVaultAddress(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "votingVaultAddress(uint96)"(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    votingVaultId(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "votingVaultId(address)"(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "NewVotingVault(address,uint256)"(
      voting_vault_address?: null,
      vaultId?: null
    ): NewVotingVaultEventFilter;
    NewVotingVault(
      voting_vault_address?: null,
      vaultId?: null
    ): NewVotingVaultEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _CappedToken_underlying(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_CappedToken_underlying(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _underlying_CappedToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_underlying_CappedToken(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _vaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_vaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _vaultController(overrides?: CallOverrides): Promise<BigNumber>;

    "_vaultController()"(overrides?: CallOverrides): Promise<BigNumber>;

    _vaultId_votingVaultAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_vaultId_votingVaultAddress(uint96)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _votingVaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_votingVaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      vaultController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "initialize(address)"(
      vaultController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintVault(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mintVault(uint96)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerUnderlying(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "registerUnderlying(address,address)"(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieveUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "retrieveUnderlying(uint256,address,address)"(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vaultId(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vaultId(address)"(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingVaultAddress(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "votingVaultAddress(uint96)"(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingVaultId(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "votingVaultId(address)"(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _CappedToken_underlying(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_CappedToken_underlying(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _underlying_CappedToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_underlying_CappedToken(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _vaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_vaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _vaultController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_vaultController()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _vaultId_votingVaultAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_vaultId_votingVaultAddress(uint96)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _votingVaultAddress_vaultId(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_votingVaultAddress_vaultId(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      vaultController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      vaultController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintVault(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mintVault(uint96)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerUnderlying(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "registerUnderlying(address,address)"(
      underlying_address: PromiseOrValue<string>,
      capped_token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieveUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "retrieveUnderlying(uint256,address,address)"(
      amount: PromiseOrValue<BigNumberish>,
      voting_vault: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vaultId(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vaultId(address)"(
      vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingVaultAddress(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "votingVaultAddress(uint96)"(
      vault_id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingVaultId(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "votingVaultId(address)"(
      voting_vault_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
